import type { Metadata } from "next";
import { Suspense } from "react";
import { careers } from "@/data/careers";
import { Container, PageHeader } from "@/components/ui";
import { DegreeRoadmapBuilder } from "./degree-roadmap-builder";

export const metadata: Metadata = {
  title: "Degree Roadmap Builder",
  description:
    "Choose your semester, career path, and focus to see a curated semester-wise roadmap up to the beginning of Semester 7.",
};

export default function DegreeRoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Degree Roadmap"
        title="Build your semester-wise roadmap"
        description="Choose where you are and where you want to go. Placement Preparation Planner shows the matching predefined roadmap from your current semester to the beginning of Semester 7. You decide what is relevant to you."
      />
      <Container className="py-10">
        <Suspense fallback={<p className="text-sm text-slate-500">Loading roadmap builder…</p>}>
          <DegreeRoadmapBuilder careers={careers} />
        </Suspense>
      </Container>
    </>
  );
}
