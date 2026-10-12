// In-memory roadmap workspace model. Pure functions only; the React component
// holds the state, which is discarded on refresh. Nothing here persists data.

import type { Career, Focus, SemesterNumber } from "./types.ts";
import { buildDegreeRoadmap } from "./roadmap.ts";
import { semesterSeven } from "../data/degree.ts";

export interface WorkspaceSection {
  id: string;
  source: string;
  title: string;
  description: string;
  topics: string[];
  projects: string[];
  notes: string;
}

export interface WorkspaceSetup {
  start: SemesterNumber;
  focus: Focus;
  primary: string;
  secondary: string;
}

export interface LibraryGroup {
  label: string;
  sections: WorkspaceSection[];
}

function section(
  id: string,
  source: string,
  title: string,
  description: string,
  topics: string[],
  projects: string[] = [],
): WorkspaceSection {
  return { id, source, title, description, topics: [...topics], projects: [...projects], notes: "" };
}

/** Lists every predefined section available for the current setup. */
export function buildLibrary(setup: WorkspaceSetup, careers: Career[]): LibraryGroup[] {
  const primary = careers.find((c) => c.slug === setup.primary) ?? careers[0];
  const secondary = careers.find((c) => c.slug === setup.secondary);
  const roadmap = buildDegreeRoadmap({ start: setup.start, focus: setup.focus, primary, secondary });

  const semesterSections = roadmap.blocks.map((block) => {
    const topics = [
      ...block.plan.topics,
      ...block.careerStages.map(({ stage }) => `${primary.shortTitle} module: ${stage.title} (${stage.duration})`),
      ...(block.secondary ? [`Explore ${block.secondary.title}: ${block.secondary.stage.title}`] : []),
      ...(block.rolePrep ? block.rolePrep.map((t) => `Role preparation: ${t}`) : []),
    ];
    const projects = [...block.plan.projects];
    if (block.roleProject) projects.push(`${block.roleProject.title} — ${block.roleProject.description}`);
    return section(
      `sem-${block.plan.number}`,
      "Degree roadmap",
      `Semester ${block.plan.number}: ${block.plan.title}`,
      `${block.plan.summary} Focus: ${block.variant.headline}.`,
      topics,
      projects,
    );
  });

  const stageSections = primary.learningOrder.map((stage, i) =>
    section(
      `stage-${primary.slug}-${i}`,
      `${primary.title} roadmap`,
      `Stage ${i + 1}: ${stage.title}`,
      `${stage.description} Typical duration: ${stage.duration}. Outcome: ${stage.outcome}`,
      stage.topics,
    ),
  );

  const extras = [
    section(
      `projects-${primary.slug}`,
      `${primary.title} roadmap`,
      `${primary.shortTitle} project ideas`,
      "Curated project ideas for this career path.",
      [],
      primary.projects.map((p) => `${p.title} (${p.level}) — ${p.description}`),
    ),
    section(`dsa-${primary.slug}`, `${primary.title} roadmap`, "DSA topics to practise", "Data structures and algorithms topics relevant to this path.", primary.dsaTopics),
    section(`fundamentals-${primary.slug}`, `${primary.title} roadmap`, "CS fundamentals to revise", "Core computer-science subjects relevant to this path.", primary.csFundamentals),
    section(`interview-${primary.slug}`, `${primary.title} roadmap`, "Interview preparation topics", "Topics commonly covered in interviews for this path.", primary.interviewTopics),
    section(`portfolio-${primary.slug}`, `${primary.title} roadmap`, "Portfolio expectations", "What a strong portfolio for this path typically includes.", primary.portfolio),
  ];

  const thirtyDay = section(
    "thirty-day",
    "Next 30 days",
    "My next 30 days",
    `A curated four-week starting plan for Semester ${setup.start}.`,
    roadmap.thirtyDay.flatMap((week) => week.items.map((item) => `${week.title}: ${item}`)),
  );

  const groups: LibraryGroup[] = [
    { label: "Semester roadmap", sections: semesterSections },
    { label: `${primary.title} stages`, sections: stageSections },
    { label: `${primary.title} essentials`, sections: [...extras, thirtyDay] },
  ];

  if (secondary && secondary.slug !== primary.slug) {
    groups.push({
      label: `${secondary.title} (secondary)`,
      sections: secondary.learningOrder.slice(0, 3).map((stage, i) =>
        section(
          `stage-${secondary.slug}-${i}`,
          `${secondary.title} roadmap`,
          `${secondary.shortTitle} stage ${i + 1}: ${stage.title}`,
          `${stage.description} Typical duration: ${stage.duration}.`,
          stage.topics,
        ),
      ),
    });
  }

  const optional: WorkspaceSection[] = roadmap.earlier.map((plan) =>
    section(
      `earlier-sem-${plan.number}`,
      "Optional reference",
      `Reference: Semester ${plan.number} — ${plan.title}`,
      "Earlier-semester material for revision, if you find it useful.",
      plan.topics,
      plan.projects,
    ),
  );
  optional.push(
    section(
      "sem-7",
      "Optional reference",
      semesterSeven.title,
      semesterSeven.summary,
      semesterSeven.topics.map((t) => `${t.title}: ${t.detail}`),
    ),
  );
  groups.push({ label: "Optional reference", sections: optional });

  return groups;
}

/** Initial selection: the semester sections from the start semester onwards. */
export function defaultSelection(groups: LibraryGroup[]): WorkspaceSection[] {
  return groups[0].sections.map((s) => ({ ...s, topics: [...s.topics], projects: [...s.projects] }));
}

export function addSection(list: WorkspaceSection[], s: WorkspaceSection): WorkspaceSection[] {
  if (list.some((x) => x.id === s.id)) return list;
  return [...list, { ...s, topics: [...s.topics], projects: [...s.projects] }];
}

export function removeSection(list: WorkspaceSection[], id: string): WorkspaceSection[] {
  return list.filter((s) => s.id !== id);
}

export function moveSection(list: WorkspaceSection[], id: string, direction: -1 | 1): WorkspaceSection[] {
  const from = list.findIndex((s) => s.id === id);
  const to = from + direction;
  if (from < 0 || to < 0 || to >= list.length) return list;
  const next = [...list];
  [next[from], next[to]] = [next[to], next[from]];
  return next;
}

export function updateSection(
  list: WorkspaceSection[],
  id: string,
  patch: Partial<Omit<WorkspaceSection, "id">>,
): WorkspaceSection[] {
  return list.map((s) => (s.id === id ? { ...s, ...patch } : s));
}

export function addItem(
  list: WorkspaceSection[],
  id: string,
  field: "topics" | "projects",
  text: string,
): WorkspaceSection[] {
  const value = text.trim();
  if (!value) return list;
  return list.map((s) => (s.id === id ? { ...s, [field]: [...s[field], value] } : s));
}

export function removeItem(
  list: WorkspaceSection[],
  id: string,
  field: "topics" | "projects",
  index: number,
): WorkspaceSection[] {
  return list.map((s) => (s.id === id ? { ...s, [field]: s[field].filter((_, i) => i !== index) } : s));
}

export function createCustomSection(id: string, title: string, description: string): WorkspaceSection {
  return section(id, "Custom", title.trim() || "Untitled section", description.trim(), []);
}
