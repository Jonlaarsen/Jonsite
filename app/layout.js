import { Geist, Geist_Mono, Noto_Sans, PT_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const PTSans = PT_Sans({
  variable: "--font-PT-sans",
  subsets: ["latin"],
  weight: "700",
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Jon Larsen Portfolio Website",
  description: "Portfolio website made by jon larsen",
  icons: {
    icon: "/logo.png", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PTSans.variable} ${notoSans.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
