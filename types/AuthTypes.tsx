export interface AuthContextType {
  user: string;
  authStatus: string | null;
  loading: boolean;
  checkAuth: () => void;
}
