
import {  Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Transaction Dashboard",
  description: "A modern transaction history dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-gray-900 text-white`}>{children}</body>
      </html>
    </html>
  );
}
