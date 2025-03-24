import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavBar from "@/components/NavBar";

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
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <body className={font95.className}>
        <main className="flex items-center justify-center bg-window">
          <div className="flex flex-col w-full max-w-6xl min-h-screen md:pl-24 md:pr-24 p-12">
            <NavBar />
            <div className="flex-grow min-h-0">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
