import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import TopBar from "@/components/common/TopBar";

export const metadata: Metadata = {
  title: "Root Education",
  description: "Start Your Global Learning Experience",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex min-h-screen flex-col">
        <TopBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
