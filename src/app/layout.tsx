import localFont from "next/font/local";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const helvetica = localFont({
  src: [
    {
      path: './fonts/helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/helveticaNeueBold.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  display: 'swap',
  variable: '--font-sans'
});

const atomic = localFont({
  src: './fonts/atomic.otf',
  display: 'swap',
  variable: '--font-alt'
});

export const metadata: Metadata = {
  title: "Connect Conference 2024",
  description: "Juventude da ADVEC Malvinas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${helvetica.variable} ${atomic.variable} font-sans text-sm`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
