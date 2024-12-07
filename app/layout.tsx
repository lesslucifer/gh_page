import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Navbar from "@/components/layouts/Navbar";
import { monaSans } from "./fonts";

export const metadata: Metadata = {
  title: "Gao Hat - Vietnamese Rice Products",
  description: "Premium quality Vietnamese rice products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monaSans.variable}`}>
      <body className="font-mona-sans">
        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
