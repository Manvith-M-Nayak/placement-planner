import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CareerPath — B.Tech CSE Career Roadmap Builder",
    template: "%s · CareerPath",
  },
  description:
    "Explore career paths, discover the skills employers expect, and build a customizable learning roadmap from your current semester to Semester 7.",
  openGraph: {
    title: "CareerPath — B.Tech CSE Career Roadmap Builder",
    description:
      "Detailed, role-specific roadmaps and a semester-wise roadmap builder for B.Tech Computer Science students.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-indigo-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <footer className="mt-16 border-t border-slate-200 bg-slate-50 print:hidden">
          <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-semibold text-slate-800">CareerPath</span> — curated roadmaps for B.Tech CSE
              students. No accounts, no tracking, nothing saved.
            </p>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                <li><Link href="/careers" className="hover:text-slate-900">Careers</Link></li>
                <li><Link href="/degree-roadmap" className="hover:text-slate-900">Degree roadmap</Link></li>
                <li><Link href="/compare" className="hover:text-slate-900">Compare</Link></li>
                <li><Link href="/resources" className="hover:text-slate-900">Resources</Link></li>
              </ul>
            </nav>
          </Container>
        </footer>
      </body>
    </html>
  );
}
