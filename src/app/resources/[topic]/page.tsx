import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { careers } from "@/data/careers";
import { resources, resourceTopics } from "@/data/resources";
import { Container, PageHeader } from "@/components/ui";
import { ResourceCard } from "@/components/resource-card";

export const dynamicParams = false;

export function generateStaticParams() {
  return resourceTopics.map((t) => ({ topic: t.id }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const t = resourceTopics.find((x) => x.id === topic);
  if (!t) return {};
  return { title: `${t.label} Resources`, description: `${t.description} Curated for B.Tech CSE students.` };
}

export default async function ResourceTopicPage({ params }: PageProps<"/resources/[topic]">) {
  const { topic } = await params;
  const t = resourceTopics.find((x) => x.id === topic);
  if (!t) notFound();
  const items = resources.filter((r) => r.topic === t.id);
  const careerTitle = (slug: string) => careers.find((c) => c.slug === slug)?.title ?? slug;

  return (
    <>
      <PageHeader eyebrow="Resource Library" title={`${t.label} resources`} description={t.description}>
        <Link href="/resources" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-indigo-700 hover:text-indigo-800">
          <ArrowLeft className="size-4" aria-hidden /> Search all resources
        </Link>
      </PageHeader>
      <Container className="py-10">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((r) => (
            <li key={r.name}>
              <ResourceCard resource={r} topicLabel={t.label} careerTitles={r.careers.map(careerTitle)} />
            </li>
          ))}
        </ul>
        <nav aria-label="Other topics" className="mt-12">
          <h2 className="text-sm font-semibold text-slate-900">Other topics</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {resourceTopics
              .filter((x) => x.id !== t.id)
              .map((x) => (
                <li key={x.id}>
                  <Link href={`/resources/${x.id}`} className="inline-block rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50">
                    {x.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </>
  );
}
