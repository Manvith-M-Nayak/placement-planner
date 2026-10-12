"use client";

import { useId } from "react";
import type { Focus, SemesterNumber } from "@/lib/types";
import { focusOptions, yearOptions } from "@/data/degree";

export interface SetupValue {
  /** 4 means the student is in Semester 7 or later (outside the main roadmap). */
  year: 1 | 2 | 3 | 4;
  start: SemesterNumber;
  focus: Focus;
  primary: string;
  secondary: string;
}

interface CareerOption {
  slug: string;
  title: string;
}

const selectClass =
  "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-indigo-500 disabled:bg-slate-50 disabled:text-slate-500";
const labelClass = "block text-sm font-medium text-slate-800";

export function RoadmapSetupForm({
  value,
  onChange,
  careers,
  allowYearFour = false,
}: {
  value: SetupValue;
  onChange: (next: SetupValue) => void;
  careers: CareerOption[];
  allowYearFour?: boolean;
}) {
  const id = useId();
  const year = yearOptions.find((y) => y.year === value.year);

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <label htmlFor={`${id}-year`} className={labelClass}>Current year</label>
        <select
          id={`${id}-year`}
          className={selectClass}
          value={value.year}
          onChange={(e) => {
            const nextYear = Number(e.target.value) as SetupValue["year"];
            const opt = yearOptions.find((y) => y.year === nextYear);
            onChange({ ...value, year: nextYear, start: opt ? opt.semesters[0] : value.start });
          }}
        >
          {yearOptions.map((y) => (
            <option key={y.year} value={y.year}>{y.label}</option>
          ))}
          {allowYearFour && <option value={4}>Year 4</option>}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-sem`} className={labelClass}>Current semester</label>
        <select
          id={`${id}-sem`}
          className={selectClass}
          value={value.year === 4 ? "7" : value.start}
          disabled={value.year === 4}
          onChange={(e) => onChange({ ...value, start: Number(e.target.value) as SemesterNumber })}
        >
          {value.year === 4 ? (
            <option value="7">Semester 7 or later</option>
          ) : (
            year?.semesters.map((s) => (
              <option key={s} value={s}>Semester {s}</option>
            ))
          )}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-primary`} className={labelClass}>Primary career path</label>
        <select
          id={`${id}-primary`}
          className={selectClass}
          value={value.primary}
          onChange={(e) =>
            onChange({
              ...value,
              primary: e.target.value,
              secondary: value.secondary === e.target.value ? "" : value.secondary,
            })
          }
        >
          {careers.map((c) => (
            <option key={c.slug} value={c.slug}>{c.title}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-secondary`} className={labelClass}>
          Secondary path <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <select
          id={`${id}-secondary`}
          className={selectClass}
          value={value.secondary}
          onChange={(e) => onChange({ ...value, secondary: e.target.value })}
        >
          <option value="">None</option>
          {careers
            .filter((c) => c.slug !== value.primary)
            .map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
        </select>
      </div>

      <fieldset className="sm:col-span-2 lg:col-span-4">
        <legend className={labelClass}>Roadmap focus</legend>
        <div className="mt-1.5 grid gap-3 md:grid-cols-3">
          {focusOptions.map((f) => {
            const checked = value.focus === f.id;
            return (
              <label
                key={f.id}
                className={`flex cursor-pointer gap-3 rounded-lg border p-3.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-indigo-600 ${
                  checked ? "border-indigo-500 bg-indigo-50/60" : "border-slate-300 bg-white hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name={`${id}-focus`}
                  value={f.id}
                  checked={checked}
                  onChange={() => onChange({ ...value, focus: f.id })}
                  className="mt-0.5 size-4 accent-indigo-600"
                />
                <span>
                  <span className="block font-medium text-slate-900">{f.label}</span>
                  <span className="mt-0.5 block text-slate-600">{f.description}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
