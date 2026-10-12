// Builds export documents from the in-memory workspace. Exports are created
// only when the user explicitly clicks an export button.

import type { WorkspaceSection } from "./workspace.ts";

export interface RoadmapExport {
  title: string;
  careerPath: string;
  secondaryCareerPath: string | null;
  semesterRange: string;
  focus: string;
  sections: {
    title: string;
    source: string;
    description: string;
    topics: string[];
    projects: string[];
    notes: string;
  }[];
}

export function toExport(
  title: string,
  careerPath: string,
  secondaryCareerPath: string | null,
  semesterRange: string,
  focus: string,
  sections: WorkspaceSection[],
): RoadmapExport {
  return {
    title: title.trim() || "My placement roadmap",
    careerPath,
    secondaryCareerPath,
    semesterRange,
    focus,
    sections: sections.map(({ title, source, description, topics, projects, notes }) => ({
      title,
      source,
      description,
      topics,
      projects,
      notes,
    })),
  };
}

export function toJSON(doc: RoadmapExport): string {
  return JSON.stringify(doc, null, 2);
}

export function toMarkdown(doc: RoadmapExport): string {
  const lines: string[] = [
    `# ${doc.title}`,
    "",
    `- **Career path:** ${doc.careerPath}`,
    ...(doc.secondaryCareerPath ? [`- **Secondary career path:** ${doc.secondaryCareerPath}`] : []),
    `- **Semester range:** ${doc.semesterRange}`,
    `- **Roadmap focus:** ${doc.focus}`,
    "",
  ];
  doc.sections.forEach((s, i) => {
    lines.push(`## ${i + 1}. ${s.title}`, "", `_Source: ${s.source}_`, "");
    if (s.description) lines.push(s.description, "");
    if (s.topics.length) {
      lines.push("### Learning topics", "", ...s.topics.map((t) => `- ${t}`), "");
    }
    if (s.projects.length) {
      lines.push("### Projects", "", ...s.projects.map((p) => `- ${p}`), "");
    }
    if (s.notes.trim()) {
      lines.push("### Notes", "", s.notes.trim(), "");
    }
  });
  lines.push("---", "", "Created with Placement Preparation Planner — a customizable career roadmap builder. Completing a roadmap does not guarantee a placement.");
  return lines.join("\n");
}

export function slugifyFilename(title: string): string {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "placement-preparation-planner-roadmap"
  );
}
