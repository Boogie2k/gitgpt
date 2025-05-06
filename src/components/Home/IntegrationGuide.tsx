import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const IntegrationGuide = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (imageSrc: string) => {
    setFullScreenImage(imageSrc);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };
  return (
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
              <div
                onClick={() =>
                  openFullScreen("/assets/integrations/integration1.webp")
                }
                className="bg-black rounded-md overflow-hidden mb-2"
              >
                <Image
                  src="/assets/integrations/integration1.webp"
                  alt="Step 1 screenshot"
                  width={440}
                  height={600}
                  className="w-full"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">
                Create Your Custom GPT on ChatGPT
              </h3>
              <ol className="text-xs space-y-1 list-decimal pl-4">
                <li>Go to: https://chatgpt.com/gpts/mine</li>
                <li>Click “Create a GPT”</li>
                <li>Give it a name like Coding Assistant</li>
                <li>
                  Give it an optional description like “Builds, writes, and
                  grows products for my startup — from code to UX to content to
                  go-to-market.”
                </li>
              </ol>
            </div>

            <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
              <div className="text-sm font-medium mb-2">Step 2</div>
              <div
                onClick={() =>
                  openFullScreen("/assets/integrations/integrations2.webp")
                }
                className="bg-black rounded-md overflow-hidden mb-2"
              >
                <Image
                  src="/assets/integrations/integrations2.webp"
                  alt="Step 2 screenshot"
                  width={440}
                  height={600}
                  className="w-full"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Add GPT Actions</h3>
              <ol className="text-xs space-y-1 list-decimal pl-4">
                <li>Scroll to the “Actions” section in the GPT editor</li>
                <li>Click “Create new action”</li>
              </ol>
            </div>

            <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
              <div className="text-sm font-medium mb-2">Step 3</div>
              <div
                onClick={() =>
                  openFullScreen("/assets/integrations/integrations3.webp")
                }
                className="bg-black rounded-md overflow-hidden mb-2"
              >
                <Image
                  src="/assets/integrations/integrations3.webp"
                  alt="Step 3 screenshot"
                  width={440}
                  height={600}
                  className="w-full"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Fill in the Actions</h3>
              <ol className="text-xs space-y-1 list-decimal pl-4">
                <li>
                  Copy and paste the Schema above into the “Schema” section
                  (specific to the GitHub data source)
                </li>
              </ol>
            </div>

            <div className="flex flex-col w-64 border border-blue-200 p-6 bg-white rounded-md">
              <div className="text-sm font-medium mb-2">Step 4</div>
              <div
                onClick={() =>
                  openFullScreen("/assets/integrations/integrations4.webp")
                }
                className="bg-black rounded-md overflow-hidden mb-2"
              >
                <Image
                  src="/assets/integrations/integrations4.webp"
                  alt="Step 4 screenshot"
                  width={440}
                  height={600}
                  className="w-full"
                />
              </div>
              <h3 className="text-sm font-medium mb-1">Fill in the Actions</h3>
              <ol className="text-xs space-y-1 list-decimal pl-4">
                <li>Click on the “Authentication” section</li>
                <li>Set the following values:</li>
                <ul>
                  <li>Authentication Type: API Key</li>
                  <li>API Key: Copy and paste your API Key above here</li>
                  <li>Custom Header Name: X-Api-Key</li>
                </ul>
                <li>Click “Save”</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <p>Need help setting up your Custom GPT? Book a 30 mins call with us</p>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeFullScreen}
            >
              <X size={24} />
            </button>
            <Image
              src={fullScreenImage || "/placeholder.svg"}
              alt="Full screen image"
              width={1200}
              height={1200}
              className="max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationGuide;
