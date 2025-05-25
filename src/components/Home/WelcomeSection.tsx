import { useBoundStore } from "@/store/store";
import React from "react";

const WelcomeSection = () => {
  const email = useBoundStore((state) => state.userEmail);
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#7C3AED"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="text-xl font-medium mb-1">Welcome, {email}</h1>
      <p className="text-sm text-gray-500">
        Copy your API Key and schema below, then paste them into your Custom GPT
        setup in ChatGPT.
      </p>
    </div>
  );
};

export default WelcomeSection;
