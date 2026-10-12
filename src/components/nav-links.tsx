"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { href: "/careers", label: "Careers" },
  { href: "/degree-roadmap", label: "Degree Roadmap" },
  { href: "/custom-roadmap", label: "My Roadmap" },
  { href: "/compare", label: "Compare" },
  { href: "/resources", label: "Resources" },
];

export function NavLinks({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <ul className={className}>
      {navItems.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={(e) => e.currentTarget.closest("details")?.removeAttribute("open")}
              className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
