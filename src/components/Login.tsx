"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";
//import LockOpenIcon from "@mui/icons-material/LockOpen";

import { Button } from "./Button";
import { login } from "@/networking/login";
//import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";
import Link from "next/link";

const Login = () => {
  // const [email, setEmail] = useState("");
  const email = useBoundStore((state) => state.email);
  const setEmail = useBoundStore((state) => state.setEmail);
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  const setIsPage = useBoundStore((state) => state.setIsPage);

  const goToVerifyEmail = () => {
    //  router.push("/verify_email");
    setIsPage("verifyEmail");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await login(email, goToVerifyEmail);
    setIsLoading(false);
  };

  return (
    <div className="gap-10 font-roboto">
      <form className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  max-w-[23.125rem]">
        <div className="flex items-center gap-2.5">
          <p className="text-black font-roboto font-bold text-xl capitalize">
            🔐 Get Started with your email
          </p>
        </div>

        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Email"
          variant="filled"
          placeholder="pied@piper.com"
        />

        <Button
          isLoading={isLoading}
          disabled={email && !isLoading ? false : true}
          onClick={handleLogin}
        >
          Send verification code
        </Button>
      </form>
      <div className="flex flex-row justify-center  mt-10 font-bold ">
        <Link
          target="_blank"
          href={"https://weyoto.com/privacy/"}
          className="text-black pr-6 underline"
        >
          Privacy Policy
        </Link>
        <div className="border-1 border-black h-3 self-center mx-3" />
        <Link
          target="_blank"
          href={"https://weyoto.com/terms-conditions/"}
          className=" pl-6 underline"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
};

export default Login;
