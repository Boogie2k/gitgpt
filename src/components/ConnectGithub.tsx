"use client";
import { base_url } from "@/networking/baseUrl";
//import { githubCallback } from "@/networking/githubCallback";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ConnectGithub = () => {
  const redirect = () => {
    window.location.href = `${base_url}/auth/github/oauth/start`;
  };
  return (
    <div className="gap-10 ">
      <div className="bg-[#f7f7f7] flex flex-col gap-6 px-6 py-8 rounded-3xl  justify-center max-w-[23.125rem]">
        <div className="flex flex-col ">
          <h4 className="text-black font-roboto font-bold text-[1.375rem] text-left">
            Connect GitHub to Get Started
          </h4>

          <p className="w-[20rem] text-sm">
            Your Custom GPT needs access to GitHub to understand your code and
            answer live queries.
          </p>
        </div>
        <div
          onClick={redirect}
          className="bg-black rounded-md text-white flex items-center gap-2.5 px-6 hover:cursor-pointer w-[20rem]"
        >
          <FaGithub size={24} />

          <div className="gap-6 py-2.5">
            <p>Connect with Github</p>

            {/*       <p>(Recommended)</p> */}
          </div>
        </div>

        <ul className="text-sm opacity-70">
          <li>Secure OAuth login via GitHub</li>
          <li>No token copy/paste needed</li>
        </ul>
      </div>
    </div>
  );
};

export default ConnectGithub;
