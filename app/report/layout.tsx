import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://malta.report.fsummit.net"),
  title: "Malta Event Report 2026 | Audience & Demand Analysis",
  description:
    "Audience and demand report for Freedom Business Summit 2026: Malta Event Edition — demographics, income, geography and Malta programme interest across 78 qualified applicants.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Malta Event Report 2026 — Audience & Demand Analysis",
    description:
      "Who applied, what they earn, where they come from and which Malta programmes they want. 78 qualified applicants, 20 countries.",
    url: "https://malta.report.fsummit.net",
    siteName: "Freedom Business Summit",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malta Event Report 2026 — Audience & Demand Analysis",
    description:
      "Demographics, income, geography and Malta programme demand across 78 qualified applicants.",
  },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
