import type { Metadata } from "next";
import { careers, categories } from "@/data/careers";
import { Container, PageHeader } from "@/components/ui";
import { CareerExplorer, type CareerSummary } from "./career-explorer";

export const metadata: Metadata = {
  title: "Career Explorer",
  description:
    "Explore 14 career paths for B.Tech CSE students — software, AI/ML, data, cloud, security, mobile, systems, and research.",
};

export default function CareersPage() {
  // Pass only what the cards need to the client component.
  const summaries: CareerSummary[] = careers.map((c) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.tagline,
    categories: c.categories,
    entryRoles: c.entryRoles.slice(0, 3),
    coreSkills: c.coreSkills,
    csFundamentals: c.csFundamentals.slice(0, 3),
    projects: c.projects.slice(0, 2).map((p) => p.title),
    searchText: [
      c.title,
      c.tagline,
      ...c.coreSkills,
      ...c.entryRoles,
      ...c.roleSkills,
      ...c.technologies.flatMap((t) => t.items),
    ]
      .join(" ")
      .toLowerCase(),
  }));

  return (
    <>
      <PageHeader
        eyebrow="Career Explorer"
        title="Explore career paths"
        description="Browse 14 career paths. Filter by area or search by skill, technology, or job title, then open the complete roadmap for any path."
      />
      <Container className="py-10">
        <CareerExplorer careers={summaries} categories={categories} />
      </Container>
    </>
  );
}
