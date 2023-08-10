import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BitPlays",
  description: "Mini Games for fun and decision making",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-slate-300 text-slate-900 m-4`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
