import React from "react";

import { RiCloseFill } from "react-icons/ri";
import UpgradeModal from "./UpgradeModal";

const Header = ({
  openMenu,
  menuOpen,
}: {
  openMenu: () => void;
  menuOpen: boolean;
}) => {
  return (
    <header className="flex items-center justify-between p-3 px-10 sm:px-[7.5rem] ">
      <div className="font-bold">Weyoto GitOPT</div>

      <div className=" flex gap-6">
        <div className="hidden sm:flex flex items-center gap-2 text-xs text-black ">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Usage 17 / 38 queries today
          </span>
          <span className="mx-2">•</span>
          <span>Plan: free</span>
        </div>

        <div className="flex items-center gap-2">
          <UpgradeModal />
          <button onClick={openMenu} className="p-1 bg-[#f7f7f7] rounded-full">
            {!menuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <RiCloseFill />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
