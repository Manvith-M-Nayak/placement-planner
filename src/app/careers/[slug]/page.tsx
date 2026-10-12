import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, ChevronDown, Columns3, Map as MapIcon, PencilRuler } from "lucide-react";
import { careers, getCareer, getCategoryLabel } from "@/data/careers";
import { Badge, BulletList, ButtonLink, Card, Container, SectionHeading } from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return careers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) return {};
  return {
    title: `${career.title} Roadmap`,
    description: `${career.tagline} Learning order, projects, DSA topics, CS fundamentals, and interview preparation for B.Tech CSE students.`,
  };
}

const sections = [
  { id: "role", label: "What the role involves" },
  { id: "titles", label: "Entry-level job titles" },
  { id: "foundational", label: "Foundational skills" },
  { id: "role-skills", label: "Role-specific skills" },
  { id: "learning-order", label: "Recommended learning order" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects to build" },
  { id: "testing", label: "Testing and documentation" },
  { id: "dsa", label: "DSA topics" },
  { id: "fundamentals", label: "CS fundamentals" },
  { id: "interview", label: "Interview preparation" },
  { id: "portfolio", label: "Portfolio expectations" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "next-steps", label: "Suggested next steps" },
];

export default async function CareerPage({ params }: PageProps<"/careers/[slug]">) {
  const { slug } = await params;
  const career = getCareer(slug);
  if (!career) notFound();

  return (
    <>
      <header className="border-b border-slate-200 bg-slate-50/70">
        <Container className="py-10 sm:py-12">
          <Link href="/careers" className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 print:hidden">
            <ArrowLeft className="size-4" aria-hidden /> All career paths
          </Link>
          <div className="mt-4 flex flex-wrap gap-2">
            {career.categories.map((c) => (
              <Badge key={c} tone="indigo">{getCategoryLabel(c)}</Badge>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{career.title} Roadmap</h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">{career.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <ButtonLink href={`/degree-roadmap?primary=${career.slug}`}>
              <MapIcon className="size-4" aria-hidden /> Build a semester roadmap
            </ButtonLink>
            <ButtonLink href={`/custom-roadmap?primary=${career.slug}`} variant="secondary">
              <PencilRuler className="size-4" aria-hidden /> Customize in workspace
            </ButtonLink>
            <ButtonLink href={`/compare?careers=${career.slug}`} variant="secondary">
              <Columns3 className="size-4" aria-hidden /> Compare
            </ButtonLink>
          </div>
        </Container>
      </header>

      <Container className="grid gap-10 py-10 lg:grid-cols-[220px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block print:hidden">
          <div className="sticky top-24">
            <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">On this page</p>
            <ol className="mt-3 space-y-1 border-l border-slate-200 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1 pl-3 text-slate-600 hover:border-indigo-500 hover:text-slate-900">
                    {i + 1}. {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="min-w-0 space-y-14">
          <section>
            <SectionHeading id="role" title="1. What the role involves" />
            <div className="space-y-3 text-slate-700">
              {career.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Typical responsibilities</h3>
            <BulletList items={career.responsibilities} className="mt-3 sm:columns-2 sm:gap-8 [&>li]:break-inside-avoid" />
          </section>

          <section>
            <SectionHeading id="titles" title="2. Common entry-level job titles" />
            <ul className="flex flex-wrap gap-2">
              {career.entryRoles.map((r) => (
                <li key={r} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">{r}</li>
              ))}
            </ul>
          </section>

          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <SectionHeading id="foundational" title="3. Foundational skills" />
              <BulletList items={career.foundationalSkills} />
            </section>
            <section>
              <SectionHeading id="role-skills" title="4. Role-specific skills" />
              <BulletList items={career.roleSkills} />
            </section>
          </div>

          <section>
            <SectionHeading
              id="learning-order"
              title="5. Recommended learning order"
              description="Six stages in sequence. Durations are typical ranges for each module, not personal estimates — go at the pace that works for you."
            />
            <ol className="space-y-3">
              {career.learningOrder.map((stage, i) => (
                <li key={stage.title}>
                  <details className="group rounded-xl border border-slate-200 bg-white shadow-sm print-avoid-break" open={i === 0}>
                    <summary className="flex items-start gap-4 p-5">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-slate-900">{stage.title}</span>
                        <span className="mt-0.5 block text-sm text-slate-600">{stage.description}</span>
                      </span>
                      <span className="hidden text-xs whitespace-nowrap text-slate-500 sm:block">{stage.duration}</span>
                      <ChevronDown className="disclosure-icon mt-1 size-4 shrink-0 text-slate-400 transition-transform" aria-hidden />
                    </summary>
                    <div className="border-t border-slate-100 px-5 pt-4 pb-5 sm:pl-17">
                      <p className="text-xs text-slate-500 sm:hidden">Typical duration: {stage.duration}</p>
                      <h4 className="text-sm font-semibold text-slate-900">Topics</h4>
                      <BulletList items={stage.topics} className="mt-2 text-sm" />
                      <p className="mt-4 rounded-lg bg-indigo-50 px-3 py-2 text-sm text-indigo-900">
                        <span className="font-semibold">Stage outcome:</span> {stage.outcome}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <SectionHeading id="technologies" title="6. Relevant technologies" />
            <div className="grid gap-4 sm:grid-cols-2">
              {career.technologies.map((t) => (
                <Card key={t.group}>
                  <h3 className="text-sm font-semibold text-slate-900">{t.group}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {t.items.map((item) => (
                      <li key={item}><Badge>{item}</Badge></li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading id="projects" title="7. Projects to build" />
            <div className="grid gap-4 lg:grid-cols-2">
              {career.projects.map((p) => (
                <Card key={p.title} className="print-avoid-break">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-slate-900">{p.title}</h3>
                    <Badge tone="indigo">{p.level}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                  <h4 className="mt-4 text-sm font-semibold text-slate-900">What to include</h4>
                  <BulletList items={p.features} className="mt-2 text-sm" />
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading id="testing" title="8. Testing and documentation expectations" />
            <BulletList items={career.testingAndDocs} />
          </section>

          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <SectionHeading id="dsa" title="9. DSA topics to practise" />
              <BulletList items={career.dsaTopics} />
            </section>
            <section>
              <SectionHeading id="fundamentals" title="10. Relevant CS fundamentals" />
              <BulletList items={career.csFundamentals} />
            </section>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <section>
              <SectionHeading id="interview" title="11. Interview preparation topics" />
              <BulletList items={career.interviewTopics} />
            </section>
            <section>
              <SectionHeading id="portfolio" title="12. Portfolio expectations" />
              <BulletList items={career.portfolio} />
            </section>
          </div>

          <section>
            <SectionHeading id="mistakes" title="13. Common mistakes" />
            <ul className="grid gap-3 sm:grid-cols-2">
              {career.mistakes.map((m) => (
                <li key={m} className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeading id="next-steps" title="14. Suggested next steps" />
            <ol className="space-y-2">
              {career.nextSteps.map((s, i) => (
                <li key={s} className="flex gap-3 text-slate-700">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3 print:hidden">
              <ButtonLink href={`/degree-roadmap?primary=${career.slug}`}>Build a semester roadmap for this path</ButtonLink>
              <ButtonLink href="/resources" variant="secondary">Browse resources</ButtonLink>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
