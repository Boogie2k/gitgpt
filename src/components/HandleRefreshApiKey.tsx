"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useBoundStore } from "@/store/store";

import { refresh_api_key } from "@/networking/refresh_api_key";
import { FiRefreshCcw } from "react-icons/fi";
import { Slide, toast, ToastContainer } from "react-toastify";
import { maskInfo } from "@/functions/maskInfo";

const HandleRefreshApiKey = () => {
  const [code, setCode] = useState("");
  const isRefreshApiKey = useBoundStore((state) => state.isRefreshApiKey);
  const setIsRefreshApikey = useBoundStore((state) => state.setIsRefreshApikey);
  const userEmail = useBoundStore((state) => state.userEmail);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const setApiKey = useBoundStore((state) => state.setApiKey);

  const closeDialog = () => {
    setIsRefreshApikey(false);
    setCode("");
  };

  const handleRefreshApiKey = async () => {
    if (isRefreshing) return;
    try {
      setIsRefreshing(true);
      const result = await refresh_api_key(code);
      if (result.error) {
        toast.error(result.error);
        setIsRefreshing(false);
        return;
      }
      setApiKey(result.api_key);
      closeDialog();
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };
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
      <DialogContent className="flex">
        <FiRefreshCcw className={isRefreshing ? "animate-spin" : ""} />

        <div>
          <DialogHeader>
            <DialogTitle>Refresh your Api Key</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <p className="text-sm text-gray-500">
              Enter the code sent to {maskInfo(userEmail)}
            </p>

            <div className="mt-4">
              <label htmlFor="new-email" className="text-sm font-medium">
                code
              </label>
              <Input
                id="new-email"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="pied@piper.com"
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={closeDialog}
              className="bg-gray-100 hover:bg-gray-200 border-gray-200"
            >
              Cancel
            </Button>
            <Button
              disabled={isRefreshing}
              onClick={handleRefreshApiKey}
              className="bg-black hover:bg-gray-500 border-gray-200"
            >
              Verify code
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HandleRefreshApiKey;
