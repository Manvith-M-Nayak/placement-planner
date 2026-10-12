import Link from "next/link";
import { Menu, Route } from "lucide-react";
import { Container } from "./ui";
import { NavLinks } from "./nav-links";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur print:hidden">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Route className="size-4.5" aria-hidden />
          </span>
          CareerPath
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <NavLinks className="flex items-center gap-1" />
        </nav>
        {/* Mobile menu uses a native disclosure element: no JavaScript required. */}
        <details className="relative lg:hidden">
          <summary className="flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100">
            <Menu className="size-5" aria-hidden />
            <span className="sr-only">Open navigation menu</span>
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
          >
            <NavLinks className="flex flex-col" />
          </nav>
        </details>
      </Container>
    </header>
  );
}
