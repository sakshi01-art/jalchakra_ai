import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JALCHAKRA AI – Spring-to-Farm Water Intelligence",
  description: "AI-Based Spring Revival and Recharge Planning for Tribal Areas | Ministry of Tribal Affairs",
  keywords: "spring revival, tribal water, AI hydrology, recharge planning",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
