import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayoola Michael | Frontend Web Developer",
  icons: "favicon.ico",
  description: "Ayoola Michael | Frontend Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="home">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
