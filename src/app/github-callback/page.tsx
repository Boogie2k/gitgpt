"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GitHubSuccessPage() {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 5000);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-green-500" />

          <h1 className="text-2xl font-bold text-gray-900">
            GitHub Connection Successful
          </h1>

          <p className="text-gray-600">
            Your GitHub account has been successfully connected. You will be
            redirected to the dashboard in {countdown} seconds.
          </p>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div
              className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: `${(5 - countdown) * 20}%` }}
            ></div>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Go to Dashboard Now
          </button>
        </div>
      </div>
    </div>
  );
}
