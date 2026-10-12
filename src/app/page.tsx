import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  Download,
  FileText,
  Flag,
  GraduationCap,
  Layers,
  ListChecks,
  MessagesSquare,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { careers } from "@/data/careers";
import { semesters } from "@/data/degree";
import { Badge, ButtonLink, Card, Container, SectionHeading } from "@/components/ui";

const featuredSlugs = [
  "software-engineer",
  "full-stack-developer",
  "ai-ml-engineer",
  "data-engineer",
  "devops-engineer",
  "cybersecurity",
];

const steps = [
  { icon: GraduationCap, title: "Pick your semester", text: "Choose your current year and semester. The roadmap starts there and ends at the beginning of Semester 7." },
  { icon: Compass, title: "Choose a career path", text: "Select a primary path and, optionally, a secondary path you want to explore." },
  { icon: SlidersHorizontal, title: "Choose a focus", text: "Fundamentals-focused, balanced, or specialization-focused — each is a curated variant." },
  { icon: Download, title: "Customize and export", text: "Add, remove, reorder, and edit sections, then print or export. Nothing is saved automatically." },
];

const journey = [
  { icon: Code2, label: "Semesters 1–2", title: "Fundamentals", text: "Programming, problem solving, Git, OOP, and SQL basics." },
  { icon: Layers, label: "Semesters 3–4", title: "Core CS", text: "Data structures, DBMS, operating systems, networks, and APIs." },
  { icon: FileText, label: "Semester 5", title: "Projects", text: "One substantial, documented, role-specific project." },
  { icon: MessagesSquare, label: "Semester 6", title: "Interview preparation", text: "Revision, timed practice, resume, and mock interviews." },
];

export default function Home() {
  const featured = featuredSlugs.map((slug) => careers.find((c) => c.slug === slug)!);
  const preview = careers.find((c) => c.slug === "backend-developer")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_80%_-10%,var(--color-indigo-50),transparent)]"
        />
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge tone="indigo">For B.Tech Computer Science students</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Your CSE Degree. Your Career Roadmap.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Explore career paths, discover the skills employers expect, and build a learning roadmap from your
              current semester to your next career milestone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/careers">
                Explore Career Paths <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/degree-roadmap" variant="secondary">
                Build My Roadmap
              </ButtonLink>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
              <ShieldCheck className="size-4 text-slate-400" aria-hidden />
              No sign-up. No tracking. Your choices stay in this browser tab.
            </p>
          </div>

          {/* Semester roadmap preview */}
          <Card className="min-w-0 p-6">
            <p className="text-sm font-semibold text-slate-900">Semester-wise roadmap preview</p>
            <p className="mt-1 text-sm text-slate-500">From your current semester to the start of Semester 7</p>
            <ol className="mt-5 space-y-3">
              {semesters.map((s) => (
                <li key={s.number} className="flex items-start gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
                    {s.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900">{s.title}</p>
                    <p className="truncate text-xs text-slate-500">{s.theme}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3 border-t border-dashed border-slate-300 pt-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500">
                  <Flag className="size-3.5" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-700">Semester 7: Placement execution</p>
                  <p className="text-xs text-slate-500">Optional guide — outside the main roadmap</p>
                </div>
              </li>
            </ol>
          </Card>
        </Container>
      </section>

      {/* Featured careers */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Featured career paths"
              description="Each path has its own detailed roadmap: skills, learning order, projects, interview topics, and common mistakes."
            />
            <Link href="/careers" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-indigo-800">
              All 14 career paths <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/careers/${c.slug}`}
                  className="group block h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-indigo-300"
                >
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700">{c.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.coreSkills.slice(0, 4).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="How the roadmap builder works"
            description="Placement Preparation Planner shows curated, predefined content based on the choices you make. It does not score you, predict outcomes, or decide what you have already mastered — you choose what is relevant."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700">
                      <step.icon className="size-4.5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Step {i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Role-specific preview */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <SectionHeading
              title="Role-specific roadmaps, not one template"
              description={`Every path has its own learning order. Here is the recommended sequence for ${preview.title}.`}
            />
            <ButtonLink href={`/careers/${preview.slug}`} variant="secondary">
              <BookOpen className="size-4" aria-hidden /> View the full {preview.shortTitle} roadmap
            </ButtonLink>
          </div>
          <ol className="relative space-y-4 border-l border-slate-200 pl-6">
            {preview.learningOrder.map((stage, i) => (
              <li key={stage.title} className="relative">
                <span className="absolute top-0.5 -left-[34px] flex size-5 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-indigo-700 ring-2 ring-indigo-200">
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-medium text-slate-900">{stage.title}</h3>
                  <span className="text-xs text-slate-500">{stage.duration}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{stage.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Journey */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="From fundamentals to interview preparation"
            description="The degree roadmap follows a deliberate progression across six semesters, preparing you for recruitment that typically begins in Semester 7."
          />
          <ol className="grid gap-4 md:grid-cols-4">
            {journey.map((j) => (
              <li key={j.title}>
                <Card className="h-full">
                  <j.icon className="size-5 text-indigo-600" aria-hidden />
                  <p className="mt-4 text-xs font-semibold tracking-wide text-slate-500 uppercase">{j.label}</p>
                  <h3 className="mt-1 font-semibold text-slate-900">{j.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{j.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-slate-900 px-6 py-12 text-center sm:px-12">
            <ListChecks className="mx-auto size-8 text-indigo-300" aria-hidden />
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Build a roadmap you understand and control
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Start from your current semester, pick a path, and shape the plan yourself. Export it as Markdown or JSON,
              or print it.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/degree-roadmap" variant="light">
                Build My Roadmap
              </ButtonLink>
              <ButtonLink href="/compare" variant="outlineDark">
                Compare career paths
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
