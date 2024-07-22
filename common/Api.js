// lib/Api.js
import axios from 'axios';
// import { cookies } from 'next/headers';

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
  }

  setAuthToken(token) {
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async getAuth() {

    try {
      const token = cookies().get('accessToken');
      if (token) {
        this.setAuthToken(token);
      }

      const response = await this.axios.get('/api/login/checkAuth', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        return response;
      } else {
        throw new Error('Could not connect to the authentication service');
      }
    } catch (e) {
      return e?.response || e.message;
    }
  }
}

export default new Api;
