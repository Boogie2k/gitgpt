import { CircularProgress } from "@mui/material";
import React from "react";

export const Button = ({
  children,
  disabled,
  onClick,
  isLoading,
}: {
  children: string;
  disabled: boolean;
  onClick: () => void;
  isLoading: boolean;
}) => {
  return (
    <button
      // style={{ height: "40px" }}
      className={`bg-[#1D1B20] text-white rounded-3xl py-2.5 self-center px-6 min-w-[7rem]   ${
        disabled ? "opacity-20" : "opacity-100 hover:cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <CircularProgress size={"20px"} /> : children}
    </button>
  );
};
