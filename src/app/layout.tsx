import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equentium",
  description: "Equentium Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased bg-black text-white")}>{children}</body>
    </html>
  );
}
