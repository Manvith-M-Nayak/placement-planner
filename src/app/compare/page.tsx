import type { Metadata } from "next";
import { Suspense } from "react";
import { careers } from "@/data/careers";
import { Container, PageHeader } from "@/components/ui";
import { CareerComparison, type CompareCareer } from "./career-comparison";

export const metadata: Metadata = {
  title: "Compare Career Paths",
  description:
    "Compare up to three career paths side by side: responsibilities, skills, technologies, CS fundamentals, projects, and interview topics.",
};

export default function ComparePage() {
  const data: CompareCareer[] = careers.map((c) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.tagline,
    responsibilities: c.responsibilities,
    foundationalSkills: c.foundationalSkills,
    technologies: c.technologies.flatMap((t) => t.items),
    csFundamentals: c.csFundamentals,
    projects: c.projects.map((p) => `${p.title} (${p.level})`),
    interviewTopics: c.interviewTopics,
    entryRoles: c.entryRoles,
  }));

  return (
    <>
      <PageHeader
        eyebrow="Compare"
        title="Compare career paths"
        description="Select up to three paths to see them side by side. There are no scores or rankings — the differences are laid out for you to interpret."
      />
      <Container className="py-10">
        <Suspense fallback={<p className="text-sm text-slate-500">Loading comparison…</p>}>
          <CareerComparison careers={data} />
        </Suspense>
      </Container>
    </>
  );
}
