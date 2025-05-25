"use client";
import React, { useEffect, useState } from "react";
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
import { formatTime } from "@/functions/formatTime";
import { login } from "@/networking/login";

const HandleRefreshApiKey = ({
  isInitiated,
  setIsInitiated,
}: {
  isInitiated: boolean;
  setIsInitiated: (value: boolean) => void;
}) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const setIsRefreshApikey = useBoundStore((state) => state.setIsRefreshApikey);
  const userEmail = useBoundStore((state) => state.userEmail);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const setApiKey = useBoundStore((state) => state.setApiKey);

  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const closeDialog = () => {
    setIsRefreshApikey(false);
    setIsInitiated(false);
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
      toast.success("Your Api Key has been regenerated");
      closeDialog();
    } catch (error) {
      console.log(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // Assuming resendCode function exists and takes email as parameter
      await login(userEmail, () => console.log(""));
      // Reset timer and disable resend button
      setTimer(60);
      setCanResend(false);
      setCode(""); // Clear the current code
    } catch (error) {
      console.error("Failed to resend code:", error);
    } finally {
      setIsResending(false);
    }
  };
  return (
    <Dialog open={isInitiated} onOpenChange={setIsRefreshApikey}>
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
      <DialogContent className="flex ">
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
              <label htmlFor="code" className="text-sm font-medium">
                code
              </label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter className="flex justify-end gap-2 mt-4">
            {/* Timer and Resend Section */}
            <div className="text-center">
              {!canResend ? (
                <p className="text-sm text-gray-600">
                  Resend code in {formatTime(timer)}
                </p>
              ) : (
                <div className="gap-2.5">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={isResending}
                    className="text-sm font-bold hover:cursor-pointer hover:text-blue-800  disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isResending ? "Sending..." : "Resend code"}
                  </button>{" "}
                </div>
              )}
            </div>
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
