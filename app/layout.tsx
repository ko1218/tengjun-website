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
    "提供雙北地區專業水電維修、抓漏、衛浴設備安裝、照明施工、商業空間工程及電力申請，35年以上施工經驗，免費到府估價。",

  keywords: [
    "騰駿水電工程行",
    "雙北水電",
    "水電維修",
    "抓漏",
    "衛浴安裝",
    "照明施工",
    "商業空間工程",
    "電力申請",
  ],

  verification: {
    google: "4f4L5fEDxw5ocITyPPwikmHLICcrcs635vcTUs5adKU",
  },

  openGraph: {
    title: "騰駿水電工程行",
    description:
      "雙北專業水電維修、抓漏、衛浴施工、照明工程，35年以上施工經驗。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}