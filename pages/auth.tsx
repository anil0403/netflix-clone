import React, { useCallback } from "react";
import Input from "@/components/input";
import { useState } from "react";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //login, register togggle
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center items-center">
          <div className="bg-black bg-opacity-80 px-16 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              )}

              <Input
                label="Email"
                type="email"
                id="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-2 text-white font-semibold rounded-md w-full mt-10 hover:bg-red-700 transition-all">
              {variant === "login" ? "Login" : "Register"}
            </button>
            <p className="text-neutral-500 mt-8 text-center">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-2 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
