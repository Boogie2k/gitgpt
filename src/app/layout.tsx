import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Weyoto gitGpt",
  description: "Connect your github to your Gpt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-weyotoLight antialiased`}>
        {children}
      </body>
    </html>
  );
}
