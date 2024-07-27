import { Dispatch, SetStateAction } from "react";
export type User = {
  _id: string;
  firstName: string;
  middleName?: string; // Optional if it might not be present
  lastName: string;
  username: string;
  password: string;
  role: string;
  email: string;
  address: string;
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type AuthStatus = "Authenticated" | "Not Authenticated" | "Error" | null;

export type AuthContextType = {
  user: User | null;
  authStatus: AuthStatus;
  loading: boolean;
  login: (username: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
};
