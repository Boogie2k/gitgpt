"use client";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const notify = () => toast("✔️ We’ve sent a 6-digit code to your email");

  return (
    <div className="gap-10">
      <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  ">
        <div className="flex items-center gap-2.5">
          <p className="text-black font-roboto font-bold text-2xl">
            ✉️ Enter Verification Code
          </p>
        </div>

        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Code"
          variant="filled"
        />

        <Button
          onClick={notify}
          disabled={email ? false : true}
          style={{
            //  background: email ? "#1D1B20" : "auto",
            borderRadius: 32,
            width: "75%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          className="rounded-full bg-white mx-auto "
          variant="contained"
          href="#contained-buttons"
        >
          Verify and Continue
        </Button>
      </div>
      <div className="flex flex-row justify-center  mt-10 font-bold">
        <p className="border-b-2 border-black">Change email</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
