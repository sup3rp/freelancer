import type { Metadata } from "next";
import { Play } from "next/font/google";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import "./globals.css";

const font = Play({
  weight: "400",
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Miranda",
  description: "Página oficial curriculum Pedro Miranda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        /*className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/
        className={`${font.className} antialiased`}
      >
        <Header />
        <main className="text-pretty min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
