"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import type { Category, CategoryId } from "@/lib/types";
import { Badge } from "@/components/ui";

export interface CareerSummary {
  slug: string;
  title: string;
  tagline: string;
  categories: CategoryId[];
  entryRoles: string[];
  coreSkills: string[];
  csFundamentals: string[];
  projects: string[];
  searchText: string;
}

export function CareerExplorer({ careers, categories }: { careers: CareerSummary[]; categories: Category[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const searchId = useId();

  const q = query.trim().toLowerCase();
  const visible = careers.filter(
    (c) => (category === "all" || c.categories.includes(category)) && (!q || c.searchText.includes(q)),
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="relative max-w-xl">
          <label htmlFor={searchId} className="sr-only">
            Search career paths
          </label>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by skill, technology, or job title (e.g. SQL, Kubernetes, React)"
            className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-3 pl-9 text-sm placeholder:text-slate-400 focus:border-indigo-500"
          />
        </div>
        <div role="group" aria-label="Filter by area" className="flex flex-wrap gap-2">
          <FilterChip active={category === "all"} onClick={() => setCategory("all")}>
            All areas
          </FilterChip>
          {categories.map((cat) => (
            <FilterChip key={cat.id} active={category === cat.id} onClick={() => setCategory(cat.id)}>
              {cat.label}
            </FilterChip>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-slate-600" role="status" aria-live="polite">
        Showing {visible.length} of {careers.length} career paths
      </p>

      {visible.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-10 text-center">
          <p className="font-medium text-slate-900">No career paths match your search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
          >
            <X className="size-4" aria-hidden /> Clear search and filters
          </button>
        </div>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {visible.map((c) => (
            <li key={c.slug}>
              <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">{c.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{c.tagline}</p>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-slate-900">Entry-level roles</dt>
                    <dd className="mt-1 text-slate-600">{c.entryRoles.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">CS fundamentals</dt>
                    <dd className="mt-1 text-slate-600">{c.csFundamentals.map((f) => f.split(":")[0]).join(", ")}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-medium text-slate-900">Core technical skills</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {c.coreSkills.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-medium text-slate-900">Example projects</dt>
                    <dd className="mt-1 text-slate-600">{c.projects.join(" · ")}</dd>
                  </div>
                </dl>
                <div className="mt-auto pt-6">
                  <Link
                    href={`/careers/${c.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
                  >
                    Explore the complete roadmap <ArrowRight className="size-4" aria-hidden />
                    <span className="sr-only">for {c.title}</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors ${
        active
          ? "bg-indigo-600 text-white ring-indigo-600"
          : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}
