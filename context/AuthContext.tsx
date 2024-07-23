"use client";
import { createContext, useState, ReactNode, useEffect } from "react";
import Api from "@/common/api";
import { AuthContextType, User } from "@/types/AuthTypes";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [authStatus, setAuthStatus] =
    useState<AuthContextType["authStatus"]>(null);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Run this effect only on the client side
    if (typeof window !== "undefined") {
      const storedAuthStatus = localStorage.getItem("authStatus");
      const storedUser = localStorage.getItem("user");

      if (storedAuthStatus) {
        setAuthStatus(storedAuthStatus as AuthContextType["authStatus"]);
      }
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await Api.login(username, password);
      if (response && response.userWithUpdatedToken) {
        const user = response.userWithUpdatedToken;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("authStatus", "Authenticated");
        setUser(user);
        setAuthStatus("Authenticated");
        return { success: true, user };
      } else {
        localStorage.setItem("authStatus", "Not Authenticated");
        setUser(null);
        setAuthStatus("Not Authenticated");
        return { success: false, message: "Login failed" };
      }
    } catch (error) {
      console.error("Login error:", error);
      localStorage.setItem("authStatus", "Not Authenticated");
      setUser(null);
      setAuthStatus("Not Authenticated");
      return { success: false, message: "Login error" };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await Api.logout();
      localStorage.removeItem("user");
      localStorage.setItem("authStatus", "Not Authenticated");
      setUser(null);
      setAuthStatus("Not Authenticated");
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, authStatus, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
