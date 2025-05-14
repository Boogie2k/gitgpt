"use client";
import { useEffect, useState } from "react";
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

import { useBoundStore } from "@/store/store";
import { getApiKey } from "@/networking/getApiKey";
import { login } from "@/networking/login";
import { toast } from "react-toastify";
import { maskInfo } from "@/functions/maskInfo";

const ApiKeySection = () => {
  const setIsRefreshApikey = useBoundStore((state) => state.setIsRefreshApikey);
  const setUserEmail = useBoundStore((state) => state.setUserEmail);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const apiKey = useBoundStore((state) => state.apiKey);
  const setApiKey = useBoundStore((state) => state.setApiKey);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(apiKey);
    toast.success("Api key copied to clipboard");
  };

  const initiateRefreshToken = async () => {
    if (isRefreshing) return; // Prevent double execution

    setIsRefreshing(true);
    try {
      const result = await getApiKey();
      const email = result.email;
      setUserEmail(email);

      if (email) {
        await login(email, () => setIsRefreshApikey(true));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    const cookies = new Cookies();

    const x_api_key: string = cookies.get("api-key");
    setApiKey(x_api_key);
  }, [setApiKey]);

  return (
    <div className="mb-6 bg-[#F7F7F7] p-4">
      <div className="flex items-center justify-between mb-2">
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
        <button
          className={`hover:cursor-pointer ${
            isRefreshing ? "opacity-70 cursor-not-allowed" : ""
          }`}
          onClick={initiateRefreshToken}
          disabled={isRefreshing}
          aria-label="Refresh API key"
        >
          <FiRefreshCcw className={isRefreshing ? "animate-spin" : ""} />
        </button>
      </div>
      <div className="rounded-md">
        <div className="flex items-center mb-4 bg-white px-2.5">
          <div className="flex-1 flex items-center text-gray-400">
            {maskInfo(apiKey)}
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
