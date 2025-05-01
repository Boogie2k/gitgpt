"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

import { Button } from "./Button";
import { verifyCode } from "@/networking/verifyCode";
import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";

const VerifyEmail = () => {
  const email = useBoundStore((state) => state.email);
  const code = useBoundStore((state) => state.code);
  const setCode = useBoundStore((state) => state.setCode);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const goToConnect = () => {
    router.push("/connect");
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
          disabled={isLoading && !code}
          isLoading={isLoading}
          onClick={handleVerifyEmail}
        >
          VERIFY AND CONTINUE
        </Button>
      </div>
      <div className="flex flex-row justify-center  mt-10 font-bold">
        <p className="border-b-2 border-black">Change email</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
