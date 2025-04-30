"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
//import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Button } from "./Button";
import { login } from "@/networking/login";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const goToVerifyEmail = () => {
    router.push("/verify_email");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await login(email, goToVerifyEmail);
    setIsLoading(false);
  };

  return (
    <div className="gap-10">
      <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  ">
        <div className="flex items-center gap-2.5">
          <p className="text-black font-roboto font-bold text-2xl capitalize">
            🔐 Get Started with your email
          </p>
        </div>

        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Email"
          variant="filled"
        />

        <Button
          isLoading={isLoading}
          disabled={email && !isLoading ? false : true}
          onClick={handleLogin}
        >
          Send verification code
        </Button>
      </div>
      <div className="flex flex-row justify-center  mt-10 font-bold">
        <p className="text-black pr-2.5">Privacy Policy</p>
        <p className="border-s-2 border-black pl-2.5">Terms of Use</p>
      </div>
    </div>
  );
};

export default Login;
