import type { Metadata } from "next";
import { Suspense } from "react";
import { careers } from "@/data/careers";
import { Container, PageHeader } from "@/components/ui";
import { RoadmapWorkspace } from "./roadmap-workspace";

export const metadata: Metadata = {
  title: "My Custom Roadmap",
  description:
    "A temporary workspace to select, reorder, and edit roadmap sections, add your own topics, projects, and notes, then print or export.",
};

export default function CustomRoadmapPage() {
  return (
    <>
      <div className="print:hidden">
        <PageHeader
          eyebrow="My Custom Roadmap"
          title="Customize your roadmap"
          description="Choose sections, reorder and edit them, add your own topics, projects, and notes — then print or export a copy."
        />
      </div>
      <Container className="py-10 print:py-0">
        <Suspense fallback={<p className="text-sm text-slate-500">Loading workspace…</p>}>
          <RoadmapWorkspace careers={careers} />
        </Suspense>
      </Container>
    </>
  );
}
