"use client";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getApiKey } from "@/networking/getApiKey";
import { login } from "@/networking/login";
import { useBoundStore } from "@/store/store";
import { useState } from "react";

import { FiRefreshCcw } from "react-icons/fi";
import { Slide, ToastContainer } from "react-toastify";
import HandleRefreshApiKey from "./HandleRefreshApiKey";

const GenerateApiKeyPopup = () => {
  const isRefreshApiKey = useBoundStore((state) => state.isRefreshApiKey);
  const setIsRefreshApikey = useBoundStore((state) => state.setIsRefreshApikey);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const setUserEmail = useBoundStore((state) => state.setUserEmail);

  const [isRefreshApiKeyInitiated, setIsRefreshApikeyInitiated] =
    useState(false);

  const initiateRefreshToken = async () => {
    if (isRefreshing) return; // Prevent double execution

    setIsRefreshing(true);
    try {
      const result = await getApiKey();
      const email = result.email;
      setUserEmail(email);

      if (email) {
        await login(email, () => setIsRefreshApikey(true));
        setIsRefreshApikeyInitiated(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const closeDialog = () => {
    setIsRefreshApikey(false);
  };

  if (isRefreshApiKeyInitiated) {
    return (
      <HandleRefreshApiKey
        isInitiated={isRefreshApiKeyInitiated}
        setIsInitiated={setIsRefreshApikeyInitiated}
      />
    );
  }

  return (
    <Dialog open={isRefreshApiKey} onOpenChange={setIsRefreshApikey}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      {/* <DialogTrigger className="flex items-center  px-4 py-2 gap-2.5  hover:bg-gray-100 w-full">
        <FaRegEdit />
        <a href="#" className="block text-sm text-gray-700">
          Edit Email
        </a>
      </DialogTrigger> */}
      <DialogContent className="flex 21.4375rem sm:w-[27.5rem]">
        <FiRefreshCcw className="w-[2rem] h-[2rem]" />

        <div>
          <DialogHeader>
            <DialogTitle>Regenerate API Key</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <p className="text-lg text-gray-500">
              Are you sure you want to regenerate your API Key? This will break
              any GPTs using the previous key
            </p>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={closeDialog}
              className=" hover:bg-gray-200 cursor-pointer"
            >
              Cancel
            </Button>

            <Button
              disabled={isRefreshing}
              onClick={initiateRefreshToken}
              className="bg-[#f7f7f7] text-black border  hover:bg-black hover:text-white border-gray-500 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiRefreshCcw className={isRefreshing ? "animate-spin" : ""} />
              Regenerate API Key
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateApiKeyPopup;
