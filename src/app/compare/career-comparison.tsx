"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Check, Plus } from "lucide-react";

export interface CompareCareer {
  slug: string;
  title: string;
  tagline: string;
  responsibilities: string[];
  foundationalSkills: string[];
  technologies: string[];
  csFundamentals: string[];
  projects: string[];
  interviewTopics: string[];
  entryRoles: string[];
}

const MAX = 3;

const rows: { key: keyof CompareCareer; label: string }[] = [
  { key: "tagline", label: "Role description" },
  { key: "responsibilities", label: "Common responsibilities" },
  { key: "foundationalSkills", label: "Foundational skills" },
  { key: "technologies", label: "Role-specific technologies" },
  { key: "csFundamentals", label: "Relevant CS fundamentals" },
  { key: "projects", label: "Project expectations" },
  { key: "interviewTopics", label: "Interview topics" },
  { key: "entryRoles", label: "Example job titles" },
];

export function CareerComparison({ careers }: { careers: CompareCareer[] }) {
  const params = useSearchParams();
  const [selected, setSelected] = useState<string[]>(() => {
    const fromUrl = (params.get("careers") ?? "")
      .split(",")
      .filter((s) => careers.some((c) => c.slug === s));
    const initial = fromUrl.length ? fromUrl : ["software-engineer", "data-engineer"];
    return [...new Set(initial)].slice(0, MAX);
  });

  const chosen = selected.map((s) => careers.find((c) => c.slug === s)!).filter(Boolean);
  const full = selected.length >= MAX;

  function toggle(slug: string) {
    setSelected((list) => (list.includes(slug) ? list.filter((s) => s !== slug) : list.length < MAX ? [...list, slug] : list));
  }

  return (
    <div>
      <fieldset>
        <legend className="text-sm font-medium text-slate-800">
          Choose up to {MAX} career paths <span className="font-normal text-slate-500">({selected.length} of {MAX} selected)</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {careers.map((c) => {
            const active = selected.includes(c.slug);
            const disabled = !active && full;
            return (
              <button
                key={c.slug}
                type="button"
                aria-pressed={active}
                disabled={disabled}
                onClick={() => toggle(c.slug)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ring-inset transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                  active ? "bg-indigo-600 text-white ring-indigo-600" : "bg-white text-slate-700 ring-slate-300 hover:bg-slate-50"
                }`}
              >
                {active ? <Check className="size-3.5" aria-hidden /> : <Plus className="size-3.5" aria-hidden />}
                {c.title}
              </button>
            );
          })}
        </div>
        {full && <p className="mt-2 text-sm text-slate-500">Maximum reached. Deselect a path to choose another.</p>}
      </fieldset>

      {chosen.length === 0 ? (
        <p className="mt-10 rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-600">
          Select at least one career path to compare.
        </p>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] table-fixed border-collapse text-left text-sm">
            <caption className="sr-only">Comparison of selected career paths</caption>
            <colgroup>
              <col className="w-40" />
              {chosen.map((c) => (
                <col key={c.slug} />
              ))}
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th scope="col" className="p-4 font-semibold text-slate-500">Aspect</th>
                {chosen.map((c) => (
                  <th key={c.slug} scope="col" className="p-4 align-top">
                    <Link href={`/careers/${c.slug}`} className="font-semibold text-slate-900 hover:text-indigo-700">
                      {c.title}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="p-4 align-top font-medium text-slate-900">{row.label}</th>
                  {chosen.map((c) => {
                    const value = c[row.key];
                    return (
                      <td key={c.slug} className="p-4 align-top text-slate-700">
                        {Array.isArray(value) ? (
                          <ul className="list-disc space-y-1 pl-4 marker:text-slate-400">
                            {value.map((v) => <li key={v}>{v}</li>)}
                          </ul>
                        ) : (
                          value
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
