import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/TopHeader/NavBar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplaced Online Store",
  description: "Discover top computing, electronics, and smartphones at Marketplaced Online Store. Your go-to shop for the latest tech and gadgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Header />
        <main>
          
          {children}
        </main>  
      </body>
    </html>
  );
}
