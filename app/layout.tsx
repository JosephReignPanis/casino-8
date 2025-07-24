import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import "@/app/styles/root.css";

import MobileNav from "@/components/bank1/mobilenav";

import Navbar from "@/components/bank1/navbar";
import Footer from "@/components/bank1/footer";

import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "../components/bank1/rightcontent";
import { Do_Hyeon } from "next/font/google";
const doHyeon = Do_Hyeon({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPOBET",
  description: "SPOBET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doHyeon.className} antialiased`}>
        <MobileNav />
        <Navbar />
        <div className="min-h-screen max-w-[1440px] mx-auto">
          {/* <MobileNav />
                <Navbar />{" "} */}

          <main className="grid grid-cols-5 gap-2 p-2 mx-auto">
            <div className="hidden lg:block">
              <div className="col-span-1">
                <LeftContent />{" "}
              </div>
            </div>
            <div className="col-span-5 lg:col-span-3">{children}</div>
            <div className="hidden lg:block">
              <div className="col-span-1">
                <RightContent />{" "}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
