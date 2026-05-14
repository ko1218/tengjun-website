import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "騰駿水電工程行｜雙北水電維修・抓漏・衛浴施工",
  description:
    "提供雙北地區專業水電維修、抓漏、照明設備、衛浴換裝與商業空間工程。",
  verification: {
    google: "4f4L5fEDxw5ocITyPPwikmHLICcrcs635vcTUs5adKU" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
