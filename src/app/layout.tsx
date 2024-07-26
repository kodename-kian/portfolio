import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";

const font95 = localFont({
  src: '../fonts/w95fa.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Kian Chua",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font95.className}>
        <main className="flex min-h-screen flex-col items-center bg-window">
          <div className="w-full h-full md:pl-24 md:pr-24 p-12">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
