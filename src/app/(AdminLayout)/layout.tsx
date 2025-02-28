import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Root Education | Admin",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} text-secondary`}>
        <TanstackQueryProvider>
          <NextTopLoader color="#F37329" />

          <SidebarProvider>
            <AppSidebar />
            <main className="basis-full">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
