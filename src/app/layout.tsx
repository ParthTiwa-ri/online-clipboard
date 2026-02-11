import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Online Clipboard",
  description: "Share text instantly between devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
