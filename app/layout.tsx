import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Freedom Business Summit — Malta Edition 2026",
  description: "The Premier Summit for EU Investment, Residency & Corporate Structuring. 23–24 June 2026 · Valletta, Malta · In official partnership with Residency Malta Agency.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
