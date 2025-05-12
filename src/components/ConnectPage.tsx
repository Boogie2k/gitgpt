"use client";
import { useBoundStore } from "@/store/store";
import React from "react";
import Login from "@/components/Login";
import VerifyEmail from "@/components/VerifyEmail";
import Connect from "@/components/Connect";

const ConnectPage = () => {
  const isPage = useBoundStore((state) => state.isPage);
  if (isPage == "login") return <Login />;
  else if (isPage == "verifyEmail") return <VerifyEmail />;
  else if (isPage == "connect") return <Connect />;
};

export default ConnectPage;
