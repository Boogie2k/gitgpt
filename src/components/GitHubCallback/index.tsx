"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { saveToken } from "@/networking/saveToken";
import { useSearchParams } from "next/navigation";

// This would be your actual API call to finalize the GitHub connection
async function finalizeGitHubConnection(code: string) {
  try {
    // Simulate API call with a delay
    // Replace this with your actual API call
    if (!code) {
      return {
        succes: false,
        error: "bad request",
      };
    }
    const result = await saveToken(code);

    if (result.error) {
      return {
        succes: false,
        error: result.error,
      };
    }

    // Return success
    return { success: true };
  } catch (error) {
    console.error("Error finalizing GitHub connection:", error);
    return { success: false, error };
  }
}

export default function GitHubSuccessPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();
  const code = useSearchParams().get("code");

  useEffect(() => {
    const completeConnection = async () => {
      try {
        if (!code) {
          return;
        }
        const result = await finalizeGitHubConnection(code);

        if (result.success) {
          setStatus("success");
          // Short delay before redirect to show success state
          setTimeout(() => {
            router.push("/");
          }, 1500);
        } else {
          setStatus("error");
          setErrorMessage("Failed to complete GitHub connection");
        }
      } catch (error) {
        setStatus("error");
        setErrorMessage("An unexpected error occurred");
        console.log(error);
      }
    };

    completeConnection();
  }, [router, code]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center text-center space-y-4">
          {status === "loading" && (
            <>
              <Loader2 className="h-16 w-16 text-blue-500 animate-spin" />
              <h1 className="text-2xl font-bold text-gray-900">
                Finalizing GitHub Connection
              </h1>
              <p className="text-gray-600">
                Please wait while we complete your GitHub account connection...
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h1 className="text-2xl font-bold text-gray-900">
                GitHub Connection Successful
              </h1>
              <p className="text-gray-600">
                Your GitHub account has been successfully connected. Redirecting
                to Homepage...
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-2xl">!</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Connection Error
              </h1>
              <p className="text-gray-600">{errorMessage}</p>
            </>
          )}

          {status === "error" && (
            <button
              onClick={() => setStatus("loading")}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Try Again
            </button>
          )}

          <button
            onClick={() => router.push("/")}
            className={`mt-4 px-4 py-2 ${
              status === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-500 hover:bg-gray-600"
            } text-white rounded-md transition-colors`}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
