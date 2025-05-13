import React, { Suspense } from "react";
import GitHubSuccessPage from "@/components/GitHubCallback";

const page = () => {
  return (
    <Suspense>
      <GitHubSuccessPage />;
    </Suspense>
  );
};

export default page;
