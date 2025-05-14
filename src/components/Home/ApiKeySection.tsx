"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Cookies from "universal-cookie";
import { FiRefreshCcw } from "react-icons/fi";
import { refresh_api_key } from "@/networking/refresh_api_key";

const ApiKeySection = () => {
  const cookies = new Cookies();
  const x_api_key: string = cookies.get("api-key");

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(x_api_key);
  };
  return (
    <div className="mb-6  bg-[#F7F7F7] p-4">
      <div className="flex items-center flex-between mb-2">
        <div className="flex items-center">
          <h2 className="font-medium">Your API Key</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-1">
                  <Info className="w-4 h-4 text-gray-400" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64 text-xs">
                  Your API key is used to authenticate your requests
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <FiRefreshCcw onClick={refresh_api_key} />
      </div>
      <div className=" rounded-md">
        <div className="flex items-center mb-4  bg-white px-2.5">
          <div className="flex-1 flex items-center text-gray-400">
            {/*   <span className="text-gray-500 mr-2">sk-***</span> */}
            {x_api_key}
          </div>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500">
          Never share this with anyone. Only copy and paste it into the
          &quot;Authentication&quot; section of your Custom GPT&apos;s
          configuration!
        </p>
      </div>
    </div>
  );
};

export default ApiKeySection;
