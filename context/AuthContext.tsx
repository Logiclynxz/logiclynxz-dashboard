"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import Api from "@/common/api"; // Adjust the path to your Api class
import { AuthContextType } from "@/types/AuthTypes";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authStatus, setAuthStatus] = useState<string | null>(null);
  const [user, setUser] = useState("micky");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const checkAuth = async () => {
    try {
      setLoading(true);
      const response = await Api.getAuth();
      if (response && response.status === 200) {
        setAuthStatus("Authenticated");
        setLoading(false);
      } else {
        setAuthStatus("Not Authenticated");
        // router.push("/login");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      console.error("Error checking authentication:", errorMessage);
      setAuthStatus("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, authStatus, loading, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
