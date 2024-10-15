import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use the Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"], // You can customize the subset if needed
  variable: "--font-inter", // Variable font declaration
  weight: ["200","700", "900"], // Defining the range of font weights
});

export const metadata: Metadata = {
  title: "Samarth Agrawal",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-custom-bg bg-cover bg-center min-h-screen relative`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        {children}
      </body>
    </html>
  );
}
