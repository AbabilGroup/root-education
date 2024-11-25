import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Root Education",
  description: "Start Your Global Learning Experience",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex min-h-screen flex-col text-secondary`}
      >
        <Toaster position="top-right" richColors />

        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
