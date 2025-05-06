import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Plus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConnectedSources = () => {
  return (
    <div className="mb-6 bg-[#F7F7F7]  p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h2 className="font-medium">Connected sources</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="ml-1">
                  <Info className="w-4 h-4 text-gray-400" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64 text-xs">
                  Sources connected to your account
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button variant="ghost" size="sm" className="text-xs h-7 px-3">
          Edit connection
        </Button>
      </div>
      <div className="border rounded-md p-4 bg-white">
        <div className="flex items-center mb-2">
          <div className="w-5 h-5 mr-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-sm font-medium">GitHub</span>
          <span className="ml-2 text-xs text-gray-500">• Connected</span>
        </div>
        <p className="text-sm">Schema</p>
        <div className="pl-7 text-xs text-gray-600 space-y-1  bg-[#f7f7f7] rounded-md">
          <p>owner: 1.1.0</p>
          <p>repo: </p>
          <p>TRM-GitOpt-Demo Test</p>
          <p>version: 1.0.0</p>
          <p>branch: main</p>
          <p>url: https://github.sample.com</p>
          <p>paths: ...</p>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          Copy and paste this into the &quot;Schema&quot; section of your Custom
          GPT.
        </p>
        <div className="flex justify-end mt-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-7 px-3 flex items-center gap-1"
          >
            Copy schema <CheckCircle2 className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>

      {/* Connect New Source */}
      <div className="flex items-center justify-between mt-6 px-4 border-t border-b py-3 bg-white rounded-md">
        <div className="flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          <span className="text-sm">Connect more sources</span>
        </div>
        <span className="text-xs text-gray-500">• Coming soon</span>
      </div>
    </div>
  );
};

export default ConnectedSources;
