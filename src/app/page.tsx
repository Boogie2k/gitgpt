"use client";
import ApiKeySection from "@/components/Home/ApiKeySection";
import ConnectedSources from "@/components/Home/ConnectedSources";
import IntegrationGuide from "@/components/Home/IntegrationGuide";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WelcomeSection from "@/components/Home/WelcomeSection";
import { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import Dialog from "@/components/Dialog";

import { getApiKey } from "@/networking/getApiKey";
import { useBoundStore } from "@/store/store";
import Cookies from "universal-cookie";

export default function WeyotoGitOPT() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setApiKey = useBoundStore((state) => state.setApiKey);
  const cookies = new Cookies();
  const apiKey = useBoundStore((state) => state.apiKey);

  const x_api_key: string = cookies.get("api-key");

  useEffect(() => {
    if (!x_api_key) return;

    const handleGetApiKey = async () => {
      const result = await getApiKey();

      setApiKey(result.api_key);
    };
    handleGetApiKey();
  }, [x_api_key, setApiKey]);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log({ x_api_key, apiKey });

  return (
    <div className="min-h-screen bg-white">
      <Dialog />

      {/* Header */}
      {menuOpen && <Menu />}
      <Header menuOpen={menuOpen} openMenu={openMenu} />

      {/* Main Content */}
      <main className=" mx-auto p-4 px-10 sm:px-[7.5rem]">
        {/* Welcome Section */}
        <WelcomeSection />

        {/* API Key Section */}
        <ApiKeySection />

        {/* Connected Sources */}

        <ConnectedSources />

        {/* Integration Guide */}
        <IntegrationGuide />
      </main>

      <Footer />
    </div>
  );
}
