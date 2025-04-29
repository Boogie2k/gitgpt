"use client";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="gap-10">
      <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  ">
        <div className="flex items-center gap-2.5">
          <LockOpenIcon />
          <p className="text-black font-roboto font-bold text-2xl">
            Get Started with your email
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
          disabled={email ? false : true}
          style={{
            // background: "#1D1B20",
            borderRadius: 32,
            width: "75%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          className="rounded-full bg-white mx-auto "
          variant="contained"
          href="#contained-buttons"
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
