"use client";
import { TextField } from "@mui/material";
import React, { useState } from "react";

import { Button } from "./Button";
import AccordionUsage from "./Accordion";

const Connect = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="gap-10 w-[23rem]">
      <div className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl  justify-center   ">
        <div className="items-center flex flex-col">
          <h4 className="text-black font-roboto font-bold text-2xl text-center">
            🔐 GitHub Access Needed
          </h4>

          <p className="w-[20rem] mx-auto">
            To access your API Key and GPT schema, please connect your GitHub
            account.
          </p>
        </div>

        <TextField
          type="password"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="filled-basic"
          label="Paste your GitHub Token (PAT)"
          variant="filled"
        />
        <p className="px-6">
          Never shared. Only used for real-time data Save Token
        </p>

        <Button
          disabled={email ? false : true}
          onClick={() => console.log("hello")}
        >
          Save Token
        </Button>
      </div>

      <AccordionUsage />
    </div>
  );
};

export default Connect;
