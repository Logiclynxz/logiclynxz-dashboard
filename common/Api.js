// lib/Api.js
import axios from 'axios';
// import { cookies } from 'next/headers';

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
      withCredentials: true,
    });
  }

  setAuthToken(token) {
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async getAuth() {
    try {
      const response = await this.axios.get('/api/login/checkAuths');

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Could not connect to the authentication service');
      }
    } catch (e) {
      return e?.response || e.message;
    }
  }

  async login(usernameEmail, password) {
    try {
      const response = await this.axios.post('/api/auth/login/', { usernameEmail, password });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Login failed');
      }
    } catch (e) {
      return e?.response || e.message;
    }
  }

  async logout() {
    try {
      const response = await this.axios.get('/api/auth/logout/');
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Logout failed');
      }
    } catch (e) {
      return e?.response || e.message;
    }
  }

}

export default new Api;
