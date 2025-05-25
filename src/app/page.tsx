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

export default function WeyotoGitOPT() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setUserEmail = useBoundStore((state) => state.setUserEmail);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const getUserEmail = async () => {
      try {
        const result = await getApiKey();
        const email = result.email;
        setUserEmail(email);
      } catch (error) {
        console.log(error);
      }
    };
    getUserEmail();
  }, [setUserEmail]);
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
