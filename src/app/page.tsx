import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info, Copy, Plus, CheckCircle2 } from "lucide-react";

const footer = [
  "About us",
  "Pricing",
  "Blog",
  "Terms of service",
  "Privacy policy",
];

export default function WeyotoGitOPT() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-3 border-b">
        <div className="font-semibold">Weyoto GitOPT</div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Image 17 / 38 queries today
          </span>
          <span className="mx-2">•</span>
          <span>Dev Firsts</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="text-xs h-7 px-3">
            Explore
          </Button>
          <Button variant="outline" size="sm" className="text-xs h-7 px-3">
            Store
          </Button>
          <button className="p-1">
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
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className=" mx-auto p-4 px-[7.5rem]">
        {/* Welcome Section */}
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
          <h1 className="text-xl font-medium mb-1">Welcome, test@weyoto.com</h1>
          <p className="text-sm text-gray-500">
            Copy your API key and connect below, then you&apos;ll learn how you
            connect with GitOpt in ChatGPT.
          </p>
        </div>

        {/* API Key Section */}
        <div className="mb-6  bg-[#F7F7F7] p-4">
          <div className="flex items-center mb-2">
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
          <div className=" rounded-md">
            <div className="flex items-center mb-4  bg-white">
              <div className="flex-1 flex items-center">
                <span className="text-gray-500 mr-2">sk-***</span>
                <span className="text-gray-400">••••••</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
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

        {/* Connected Sources */}
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
              Copy and paste this into the &quot;Schema&quot; section of your
              Custom GPT.
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

        {/* Integration Guide */}
        <div className="mb-6 bg-[#f7f7f7] p-4 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">
              How to connect your Custom GPT in ChatGPT
            </h2>
          </div>
          <div className=" rounded-md ">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max p-4">
                <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
                  <div className="text-sm font-medium mb-2">Step 1</div>
                  <div className="bg-black rounded-md overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Step 1 screenshot"
                      width={150}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">
                    Create Your Custom GPT on ChatGPT
                  </h3>
                  <ol className="text-xs space-y-1 list-decimal pl-4">
                    <li>Click &quot;Create a GPT&quot; in ChatGPT</li>
                    <li>Give it a name for finding purposes</li>
                    <li>
                      Give it a purpose description, fields, avatar, and
                      conversation starters to help users
                    </li>
                  </ol>
                </div>

                <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
                  <div className="text-sm font-medium mb-2">Step 2</div>
                  <div className="bg-black rounded-md overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Step 2 screenshot"
                      width={150}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">Add GPT Actions</h3>
                  <ol className="text-xs space-y-1 list-decimal pl-4">
                    <li>
                      Click the &quot;Actions&quot; section in the GPT editor
                    </li>
                    <li>Enable web access</li>
                  </ol>
                </div>

                <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
                  <div className="text-sm font-medium mb-2">Step 3</div>
                  <div className="bg-black rounded-md overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Step 3 screenshot"
                      width={150}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">
                    Fill in the Actions
                  </h3>
                  <ol className="text-xs space-y-1 list-decimal pl-4">
                    <li>Copy and paste...</li>
                  </ol>
                </div>

                <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
                  <div className="text-sm font-medium mb-2">Step 4</div>
                  <div className="bg-black rounded-md overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=200&width=150"
                      alt="Step 4 screenshot"
                      width={150}
                      height={200}
                      className="w-full"
                    />
                  </div>
                  <h3 className="text-sm font-medium mb-1">
                    Fill in the Actions
                  </h3>
                  <ol className="text-xs space-y-1 list-decimal pl-4">
                    <li>Copy and paste...</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <p>
            Need help setting up your Custom GPT? Book a 30 mins call with us
          </p>
        </div>
      </main>

      <div className="flex flex-row justify-between px-[7.5rem] pb-6">
        <p>Built with love from Lagos 💚 🇳🇬</p>

        <ul className="flex flex-row gap-6">
          {footer.map((item, index: number) => {
            return (
              <li className="underline" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
