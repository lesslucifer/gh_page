import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Navbar from "@/components/layouts/Navbar";
import { monaSans } from "./fonts";
import { Toaster } from "react-hot-toast";
import { Providers } from './providers';
import { GoogleMapsProvider } from '@/components/providers/GoogleMapsProvider';

export const metadata: Metadata = {
  title: "Gạo Hạt",
  description: "Cơm ngon từ hạt gạo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monaSans.variable}`}>
      <body className="font-mona-sans">
        <GoogleMapsProvider>
          <Providers>
            <Navbar />
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                className: '',
                style: {
                  border: '1px solid #22c55e',
                  padding: '16px',
                  color: '#22c55e',
                },
                duration: 2000,
              }}
            />
          </Providers>
        </GoogleMapsProvider>
      </body>
    </html>
  );
}
