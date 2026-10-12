import { ChevronDown, Flag } from "lucide-react";
import { semesterSeven } from "@/data/degree";

export function SemesterSevenGuide({ open = false }: { open?: boolean }) {
  return (
    <details open={open} className="rounded-xl border border-dashed border-slate-300 bg-white print-avoid-break">
      <summary className="flex items-start gap-3 p-5">
        <Flag className="mt-0.5 size-5 shrink-0 text-slate-500" aria-hidden />
        <span className="flex-1">
          <span className="block font-semibold text-slate-900">{semesterSeven.title}</span>
          <span className="mt-0.5 block text-sm text-slate-600">
            Optional guide to the next phase — not part of the main pre-placement roadmap.
          </span>
        </span>
        <ChevronDown className="disclosure-icon mt-1 size-4 shrink-0 text-slate-400 transition-transform" aria-hidden />
      </summary>
      <div className="border-t border-slate-100 px-5 pt-4 pb-5">
        <p className="text-sm text-slate-600">{semesterSeven.summary}</p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          {semesterSeven.topics.map((t) => (
            <div key={t.title}>
              <dt className="text-sm font-semibold text-slate-900">{t.title}</dt>
              <dd className="mt-1 text-sm text-slate-600">{t.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </details>
  );
}
