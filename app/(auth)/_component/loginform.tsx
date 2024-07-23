"use client";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { login, loading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorLogin(null);

    try {
      const response = await login(username, password);
      if (response.success) {
        console.log("Login successful");
        router.push("/");
      } else {
        // Handle login failure
        setErrorLogin(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorLogin("An error occurred during login");
    }
  };

  return (
    <div className="w-[500px]">
      <Card className=" border-b-4 border-b-blue-400  p-4 py-[50px] lg:p-[50px] md:p-[50px] bg-transparent backdrop-blur-[10px] backdrop-brightness-[98%]">
        <h1 className="text-[25px] font-bold text-center my-4 logo-font">
          LOGICLYNXZ
        </h1>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="my-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="my-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center space-x-2 my-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              Remember Me
            </label>
          </div>

          <Button
            className="w-full bg-blue-400"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading ..." : "Login"}
          </Button>
          <p>{errorLogin}</p>
        </form>

        <hr className="border-b border-black my-4 dark:border-white" />
        <div className="text-center mb-2">
          <span className="text-[12px] ">For Registered Users only</span>
        </div>
      </Card>
    </div>
  );
}
