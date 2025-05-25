"use client";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { PiSmileyThin } from "react-icons/pi";
import { useBoundStore } from "@/store/store";

const Menu = () => {
  const setIsEditEmail = useBoundStore((state) => state.setIsEditEmail);
  const setIsLogout = useBoundStore((state) => state.setIsLogout);

  const menu = [
    {
      icon: <FaRegEdit />,
      name: "Edit email",
      onclick: () => setIsEditEmail(true),
    },
    {
      icon: <FiLogOut />,
      name: "Logout",
      onclick: () => setIsLogout(true),
    },
    {
      icon: <FaRegStar />,
      name: "Read the feature list",
    },
    {
      icon: <MdOutlineShield />,
      name: "View our privacy policy",
    },
    {
      icon: <IoMailOutline />,
      name: "Reach out to support",
    },
    {
      icon: <RiGroupLine />,
      name: "How to use for teams",
    },
    {
      icon: <PiSmileyThin />,
      name: "Provide feedback",
    },
  ];
  return (
    <div className="absolute right-10 sm:right-[7.5rem] top-20 mt-2 w-[19rem] bg-white rounded-md shadow-lg py-1 z-10 border transition duration-150 ease-in-out">
      <div className="px-4 py-2.5 w-full font-bold border-b border-gray-500">
        Menu
      </div>
      <div>
        {menu.map((item, index) => {
          return (
            <li
              onClick={item.onclick}
              key={index}
              className="flex items-center  px-4 py-2 gap-2.5  hover:bg-gray-100"
            >
              {item.icon}
              <p className="block text-sm text-gray-700">{item.name}</p>
            </li>
          );
        })}
      </div>

      <div className="px-4 text-gray-400 text-xs gap-2.5 border-t py-2.5 border-gray-500">
        <p>Signed in as pied@piper.com</p>
        <p>Plan: Free (30 queries/day to your GitHub repo)</p>
      </div>
    </div>
  );
};

export default Menu;
