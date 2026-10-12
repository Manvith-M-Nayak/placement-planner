import { test } from "node:test";
import assert from "node:assert/strict";
import { slugifyFilename, toExport, toJSON, toMarkdown } from "../src/lib/export.ts";
import type { WorkspaceSection } from "../src/lib/workspace.ts";

const sections: WorkspaceSection[] = [
  { id: "a", source: "Degree roadmap", title: "Semester 5", description: "Desc", topics: ["APIs"], projects: ["REST API"], notes: "My note" },
  { id: "b", source: "Custom", title: "Extra", description: "", topics: [], projects: [], notes: "" },
];
const doc = toExport("My plan", "Backend Developer", null, "Semester 5 to the beginning of Semester 7", "Balanced", sections);

test("JSON export contains the roadmap and nothing else", () => {
  const parsed = JSON.parse(toJSON(doc));
  assert.deepEqual(Object.keys(parsed).sort(), ["careerPath", "focus", "secondaryCareerPath", "sections", "semesterRange", "title"]);
  assert.equal(parsed.sections[0].notes, "My note");
  assert.ok(!("id" in parsed.sections[0]));
});

test("Markdown export includes title, path, range, sections, projects, and notes", () => {
  const md = toMarkdown(doc);
  for (const s of ["# My plan", "Backend Developer", "Semester 5 to the beginning of Semester 7", "## 1. Semester 5", "- REST API", "My note", "## 2. Extra"]) {
    assert.ok(md.includes(s), `missing: ${s}`);
  }
});

test("filenames are safe", () => {
  assert.equal(slugifyFilename("My Backend Roadmap!"), "my-backend-roadmap");
  assert.equal(slugifyFilename("!!!"), "placement-preparation-planner-roadmap");
});
