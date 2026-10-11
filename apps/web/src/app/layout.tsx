import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bet & Basleal — Wedding Invitation",
  description: "Join Bet and Basleal as they celebrate their wedding day.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
