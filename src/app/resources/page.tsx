import type { Metadata } from "next";
import Link from "next/link";
import { careers } from "@/data/careers";
import { resources, resourceTopics } from "@/data/resources";
import { Container, PageHeader } from "@/components/ui";
import { ResourceLibrary } from "./resource-library";

export const metadata: Metadata = {
  title: "Resource Library",
  description:
    "A searchable directory of official documentation, university courses, and established learning resources for B.Tech CSE students.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resource Library"
        title="Learning resources"
        description="Official documentation, university courses, and established resources, organised by topic. External links open in a new tab."
      >
        <nav aria-label="Resource topics" className="mt-6">
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
            {resourceTopics.map((t) => (
              <li key={t.id}>
                <Link href={`/resources/${t.id}`} className="text-indigo-700 underline-offset-2 hover:underline">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>
      <Container className="py-10">
        <ResourceLibrary
          resources={resources}
          topics={resourceTopics}
          careers={careers.map((c) => ({ slug: c.slug, title: c.title }))}
        />
      </Container>
    </>
  );
}
