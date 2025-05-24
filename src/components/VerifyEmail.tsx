"use client";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

import { Button } from "./Button";
import { verifyCode } from "@/networking/verifyCode";
//import { resendCode } from "@/networking/resendCode"; // Assuming this function exists
import { useRouter } from "next/navigation";
import { useBoundStore } from "@/store/store";
import { login } from "@/networking/login";

const VerifyEmail = () => {
  const email = useBoundStore((state) => state.email);
  const code = useBoundStore((state) => state.code);
  const setCode = useBoundStore((state) => state.setCode);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();
  const setIsPage = useBoundStore((state) => state.setIsPage);

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

  const goToConnect = () => {
    router.push("/connect-github");
    // setIsPage("connect");
    setCode("");
    //reset();
  };

  const goToHome = () => {
    router.replace("/");
    setCode("");
  };

  const handleVerifyEmail = async () => {
    setIsLoading(true);
    await verifyCode(email, code, goToConnect, goToHome);
    setIsLoading(false);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // Assuming resendCode function exists and takes email as parameter
      await login(email, () => console.log(""));
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="gap-10">
      <form className="bg-white flex flex-col gap-6 px-6 py-8 rounded-3xl">
        <div className="text-center gap-6">
          <p className="text-black font-roboto font-bold text-xl">
            ✉️ Enter Verification Code
          </p>
          <p className="font-md text-sm">
            Enter the 6-digit code sent to <br />
            {email}
          </p>
        </div>

        <TextField
          style={{ color: "black" }}
          className="w-[20.125rem]"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          id="filled-basic"
          label="Code"
          variant="filled"
          sx={{
            "& .MuiFilledInput-root": {
              color: "black", // Input text color
            },
            "& .MuiInputLabel-root": {
              color: "black !important", // Label color - always black
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black !important", // Label color when focused - always black
            },
            "& .MuiFilledInput-underline:before": {
              borderBottomColor: "black", // Default underline
            },
            "& .MuiFilledInput-underline:hover:before": {
              borderBottomColor: "black", // Hover underline
            },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "black", // Focused underline
            },
          }}
          slotProps={{
            input: {
              style: { color: "black" },
            },
          }}
        />

        <Button
          disabled={isLoading || !code}
          isLoading={isLoading}
          onClick={handleVerifyEmail}
        >
          Verify and continue
        </Button>
      </form>

      <p
        onClick={() => {
          setIsPage("login");
          setCode("");
        }}
        className="underline text-center mt-10 font-bold hover:cursor-pointer"
      >
        Change email
      </p>
      {/* Timer and Resend Section */}
      <div className="text-center">
        {!canResend ? (
          <p className="text-sm text-gray-600">
            Resend code in {formatTime(timer)}
          </p>
        ) : (
          <div className="gap-2.5">
            <span>Did not receive code? </span>{" "}
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending}
              className="text-sm text-blue-600 hover:cursor-pointer hover:text-blue-800 underline  disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResending ? "Sending..." : "Resend code"}
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
