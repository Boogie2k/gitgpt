import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",

  weight: ["400", "700"],
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
    <html className={`${roboto.className}`} lang="en">
      <body className={` antialiased bg-weyotoLight `}>
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
        {children}
      </body>
    </html>
  );
}
