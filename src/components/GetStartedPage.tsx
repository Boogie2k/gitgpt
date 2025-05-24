"use client";
import { useBoundStore } from "@/store/store";
import React from "react";
import Login from "@/components/Login";
import VerifyEmail from "@/components/VerifyEmail";

const GetStartedPage = () => {
  const isPage = useBoundStore((state) => state.isPage);
  if (isPage == "login") return <Login />;
  else if (isPage == "verifyEmail") return <VerifyEmail />;
};

export default GetStartedPage;
