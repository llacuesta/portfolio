import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/toaster";


const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono" 
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Updated personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={jetbrains.className + " flex min-h-screen flex-col md:pt-24 h-auto"}> 
        
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
