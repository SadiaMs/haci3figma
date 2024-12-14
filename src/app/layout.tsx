import type { Metadata } from "next";
import localFont from "next/font/local";
import TopHeader from "@/components/TopHeader";
import "./globals.css";
import Footer from "@/components/Footer";


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
  title: "figma00",
  description: "Sir Ameen assaignment figma templete 0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >  <TopHeader /> 
      
      
        {children}
        <Footer/>
      </body>
    </html>
  );
}
