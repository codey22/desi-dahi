import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google"; // Import font
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import SmoothScrollWrapper from "@/components/layout/SmoothScrollWrapper";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-poppins" });
const dancingScript = Dancing_Script({ weight: "700", subsets: ["latin"], variable: "--font-script" });

export const metadata: Metadata = {
  title: "Desi Dahi - Pure Traditional Curd | A2 Cow Milk Products",
  description: "Experience authentic desi dahi made from pure A2 cow milk using traditional methods. Handcrafted with love, delivered fresh. Order premium quality curd, mishti doi, and lassi online.",
  keywords: ["desi dahi", "a2 cow milk", "traditional curd", "mishti doi", "pure curd", "organic dairy"],
  authors: [{ name: "Desi Dahi" }],
  openGraph: {
    title: "Desi Dahi - Pure Traditional Curd",
    description: "Authentic desi dahi made from pure A2 cow milk using traditional methods",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dancingScript.variable} antialiased`} suppressHydrationWarning>
        <Header />
        <SmoothScrollWrapper>
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </SmoothScrollWrapper>
        <Toaster />
      </body>
    </html>
  );
}
