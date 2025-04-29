import React from "react";

export const Button = ({
  children,
  disabled,
  onClick,
}: {
  children: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`bg-[#1D1B20] text-white rounded-3xl py-2.5 self-center px-6  ${
        disabled ? "opacity-20" : "opacity-100 hover:cursor-pointer"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
