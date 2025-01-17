import React from "react";
import type { Metadata } from "next";
import "./style/barebone.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
