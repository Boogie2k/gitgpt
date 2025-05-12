"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

import { Button } from "./Button";
import { verifyCode } from "@/networking/verifyCode";
//import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";

const VerifyEmail = () => {
  const email = useBoundStore((state) => state.email);
  const code = useBoundStore((state) => state.code);
  const setCode = useBoundStore((state) => state.setCode);
  const [isLoading, setIsLoading] = useState(false);
  // const router = useRouter();
  const setIsPage = useBoundStore((state) => state.setIsPage);

  const goToConnect = () => {
    // router.push("/connect");
    setIsPage("connect");
    setCode("");
  };

  const handleVerifyEmail = async () => {
    setIsLoading(true);
    await verifyCode(email, code, goToConnect);
    setIsLoading(false);
  };

  return (
    <div className="gap-10">
      <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  ">
        <div className="flex items-center gap-2.5">
          <p className="text-black font-roboto font-bold text-2xl">
            ✉️ Enter Verification Code
          </p>
        </div>

        <TextField
          value={code}
          onChange={(e) => setCode(e.target.value)}
          id="filled-basic"
          label="Code"
          variant="filled"
        />

        <Button
          disabled={isLoading || !code}
          isLoading={isLoading}
          onClick={handleVerifyEmail}
        >
          VERIFY AND CONTINUE
        </Button>
      </div>

      <p
        onClick={() => {
          setIsPage("login");
          setCode("");
        }}
        className="underline text-center  mt-10 font-bold hover:cursor-pointer"
      >
        Change email
      </p>
    </div>
  );
};

export default VerifyEmail;
