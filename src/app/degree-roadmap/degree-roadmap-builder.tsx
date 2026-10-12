"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { BookMarked, CalendarDays, ChevronDown, Compass, FolderGit2, PencilRuler, Printer, Target } from "lucide-react";
import type { Career } from "@/lib/types";
import { buildDegreeRoadmap, type SemesterBlock } from "@/lib/roadmap";
import { printPage } from "@/lib/print";
import { choicesToQuery, readInitialChoices } from "@/lib/params";
import { focusOptions } from "@/data/degree";
import { RoadmapSetupForm, type SetupValue } from "@/components/roadmap-setup-form";
import { SemesterSevenGuide } from "@/components/semester-seven-guide";
import { Badge, BulletList, buttonStyles } from "@/components/ui";

export function DegreeRoadmapBuilder({ careers }: { careers: Career[] }) {
  const params = useSearchParams();
  const [setup, setSetup] = useState<SetupValue>(() => {
    const initial = readInitialChoices(params, careers.map((c) => c.slug));
    return { ...initial, year: Math.ceil(initial.start / 2) as SetupValue["year"] };
  });

  const primary = careers.find((c) => c.slug === setup.primary) ?? careers[0];
  const secondary = careers.find((c) => c.slug === setup.secondary);
  const focusLabel = focusOptions.find((f) => f.id === setup.focus)?.label;

  return (
    <div>
      <section aria-labelledby="setup-heading" className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 print:hidden">
        <h2 id="setup-heading" className="text-lg font-semibold text-slate-900">Your choices</h2>
        <p className="mt-1 mb-5 text-sm text-slate-600">The roadmap below updates as you change these. Nothing is saved.</p>
        <RoadmapSetupForm value={setup} onChange={setSetup} careers={careers} allowYearFour />
      </section>

      {setup.year === 4 ? (
        <section className="mt-10" aria-label="Semester 7 guide">
          <p className="mb-4 max-w-3xl text-slate-700">
            The main roadmap covers Semesters 1–6 and ends at the beginning of Semester 7. For Semester 7 and later,
            use the guide below and the{" "}
            <Link href={`/careers/${primary.slug}#interview`} className="font-medium text-indigo-700 underline underline-offset-2">
              interview preparation topics for {primary.title}
            </Link>
            .
          </p>
          <SemesterSevenGuide open />
        </section>
      ) : (
        <RoadmapResult
          setup={setup}
          primary={primary}
          secondary={secondary}
          focusLabel={focusLabel ?? ""}
        />
      )}
    </div>
  );
}

function RoadmapResult({
  setup,
  primary,
  secondary,
  focusLabel,
}: {
  setup: SetupValue;
  primary: Career;
  secondary?: Career;
  focusLabel: string;
}) {
  const roadmap = buildDegreeRoadmap({ start: setup.start, focus: setup.focus, primary, secondary });
  const query = choicesToQuery(setup);

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Semester {setup.start} to the beginning of Semester 7
          </h2>
          <p className="mt-2 flex flex-wrap gap-2">
            <Badge tone="indigo">{primary.title}</Badge>
            {roadmap.secondary && <Badge>Secondary: {roadmap.secondary.title}</Badge>}
            <Badge>{focusLabel}</Badge>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 print:hidden">
          <Link href={`/custom-roadmap?${query}`} className={buttonStyles.primary}>
            <PencilRuler className="size-4" aria-hidden /> Customize this roadmap
          </Link>
          <button type="button" onClick={printPage} className={buttonStyles.secondary}>
            <Printer className="size-4" aria-hidden /> Print
          </button>
        </div>
      </div>

      <ol className="mt-8 space-y-6">
        {roadmap.blocks.map((block, i) => (
          <li key={block.plan.number}>
            <SemesterCard block={block} primary={primary} defaultOpen={i < 2} />
          </li>
        ))}
      </ol>

      {roadmap.laterStages.length > 0 && (
        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 print-avoid-break">
          <h3 className="font-semibold text-slate-900">Optional: later {primary.shortTitle} modules</h3>
          <p className="mt-1 text-sm text-slate-600">
            With this focus, these modules sit outside Semesters {setup.start}–6. Pick them up whenever they become
            useful to you.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            {roadmap.laterStages.map(({ index, stage }) => (
              <li key={stage.title}>
                Stage {index + 1}: {stage.title} <span className="text-slate-500">({stage.duration})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="thirty-day" className="mt-12 print-avoid-break">
        <h3 id="thirty-day" className="flex items-center gap-2 text-xl font-semibold text-slate-900">
          <CalendarDays className="size-5 text-indigo-600" aria-hidden /> Your next 30 days
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          A curated starting plan for Semester {setup.start} with a {primary.shortTitle} week. Adjust it to your own schedule.
        </p>
        <ol className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.thirtyDay.map((week) => (
            <li key={week.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">{week.title}</h4>
              <BulletList items={week.items} className="mt-3 text-sm" />
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">Optional reference</h3>
        {roadmap.earlier.length > 0 && (
          <details className="rounded-xl border border-slate-200 bg-white">
            <summary className="flex items-start gap-3 p-5">
              <BookMarked className="mt-0.5 size-5 shrink-0 text-slate-500" aria-hidden />
              <span className="flex-1">
                <span className="block font-semibold text-slate-900">Earlier semesters (Semesters 1–{setup.start - 1})</span>
                <span className="mt-0.5 block text-sm text-slate-600">
                  For revision only — these are not future tasks. Use what is useful to you.
                </span>
              </span>
              <ChevronDown className="disclosure-icon mt-1 size-4 shrink-0 text-slate-400 transition-transform" aria-hidden />
            </summary>
            <div className="grid gap-5 border-t border-slate-100 px-5 pt-4 pb-5 md:grid-cols-2">
              {roadmap.earlier.map((plan) => (
                <div key={plan.number}>
                  <h4 className="text-sm font-semibold text-slate-900">Semester {plan.number}: {plan.title}</h4>
                  <p className="mt-1 text-sm text-slate-600">{plan.topics.join(" · ")}</p>
                </div>
              ))}
            </div>
          </details>
        )}
        <SemesterSevenGuide />
      </section>

      <p className="mt-10 text-sm text-slate-500">
        This roadmap is predefined educational content selected from your choices. It does not assess your skills,
        estimate your readiness, or guarantee a placement.
      </p>
    </div>
  );
}

function SemesterCard({ block, primary, defaultOpen }: { block: SemesterBlock; primary: Career; defaultOpen: boolean }) {
  const { plan, variant } = block;
  return (
    <details open={defaultOpen} className="group rounded-xl border border-slate-200 bg-white shadow-sm">
      <summary className="flex items-start gap-4 p-5 sm:p-6">
        <span className="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-indigo-600 text-white">
          <span className="text-[10px] leading-none font-medium uppercase opacity-80">Sem</span>
          <span className="text-base leading-tight font-semibold">{plan.number}</span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold text-slate-900">{plan.title}</span>
          <span className="mt-0.5 block text-sm text-slate-600">{plan.theme}</span>
        </span>
        <ChevronDown className="disclosure-icon mt-2 size-4 shrink-0 text-slate-400 transition-transform" aria-hidden />
      </summary>

      <div className="space-y-6 border-t border-slate-100 px-5 pt-5 pb-6 sm:px-6">
        <p className="text-slate-700">{plan.summary}</p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Core topics</h4>
            <BulletList items={plan.topics} className="mt-2 text-sm" />
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Target className="size-4 text-indigo-600" aria-hidden /> Focus: {variant.headline}
            </h4>
            <BulletList items={variant.emphasis} className="mt-2 text-sm" />
          </div>
        </div>

        {block.careerStages.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-900">{primary.title} modules this semester</h4>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {block.careerStages.map(({ index, stage }) => (
                <li key={stage.title} className="rounded-lg border border-indigo-100 bg-indigo-50/50 p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">Stage {index + 1}: {stage.title}</p>
                    <span className="text-xs text-slate-500">{stage.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{stage.topics.slice(0, 4).join(" · ")}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {block.secondary && (
          <div className="rounded-lg border border-slate-200 p-4">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Compass className="size-4 text-slate-500" aria-hidden /> Explore your secondary path: {block.secondary.title}
            </h4>
            <p className="mt-1 text-sm text-slate-600">
              Optional exploration module — {block.secondary.stage.title} ({block.secondary.stage.duration}).
            </p>
            <p className="mt-1 text-sm text-slate-600">{block.secondary.stage.topics.slice(0, 3).join(" · ")}</p>
          </div>
        )}

        {block.rolePrep && (
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Role-specific preparation for {primary.title}</h4>
            <BulletList items={block.rolePrep} className="mt-2 text-sm md:columns-2 md:gap-8 [&>li]:break-inside-avoid" />
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FolderGit2 className="size-4 text-slate-500" aria-hidden /> Suggested projects
            </h4>
            <BulletList items={plan.projects} className="mt-2 text-sm" />
            {block.roleProject && (
              <div className="mt-3 rounded-lg border border-slate-200 p-3 text-sm">
                <p className="font-semibold text-slate-900">
                  {primary.shortTitle} project: {block.roleProject.title}
                </p>
                <p className="mt-1 text-slate-600">{block.roleProject.description}</p>
              </div>
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Suggested outcomes</h4>
            <BulletList items={plan.outcomes} className="mt-2 text-sm" />
          </div>
        </div>
      </div>
    </details>
  );
}
