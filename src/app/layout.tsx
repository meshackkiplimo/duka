import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { AppProvider } from '../context/AppContext';
import Navbar from "./components/navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Duka",
  description: "Gener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased px-4 py-2 m-0 min-h-screen flex flex-col`}
        >
          {/* Fixed Navbars */}
          <Navbar/>

          {/* Main Content */}
          <div className="flex-1 pt-16 pb-20">{children}</div>
        </body>
      </html>
    </AppProvider>
  );
}
