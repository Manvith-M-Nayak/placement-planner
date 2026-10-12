import { test } from "node:test";
import assert from "node:assert/strict";
import { careers } from "../src/data/careers/index.ts";
import {
  addItem, addSection, buildLibrary, createCustomSection, defaultSelection,
  moveSection, removeItem, removeSection, updateSection,
} from "../src/lib/workspace.ts";

const library = buildLibrary({ start: 3, focus: "balanced", primary: "data-engineer", secondary: "data-analyst" }, careers);

test("default selection is the semester sections from the start semester", () => {
  assert.deepEqual(defaultSelection(library).map((s) => s.id), ["sem-3", "sem-4", "sem-5", "sem-6"]);
});

test("library includes career stages, secondary path, and optional Semester 7", () => {
  const ids = library.flatMap((g) => g.sections.map((s) => s.id));
  assert.ok(ids.includes("stage-data-engineer-0"));
  assert.ok(ids.includes("stage-data-analyst-0"));
  assert.ok(ids.includes("sem-7"));
  assert.ok(ids.includes("earlier-sem-1"));
  assert.equal(new Set(ids).size, ids.length, "section ids are unique");
});

test("sections can be added, removed, reordered, and edited", () => {
  let list = defaultSelection(library);
  const stage = library[1].sections[0];
  list = addSection(list, stage);
  assert.equal(list.at(-1)!.id, stage.id);
  assert.equal(addSection(list, stage).length, list.length, "duplicates are ignored");

  list = moveSection(list, stage.id, -1);
  assert.equal(list.at(-2)!.id, stage.id);
  assert.equal(moveSection(list, list[0].id, -1), list, "cannot move first item up");

  list = updateSection(list, "sem-3", { title: "My Semester 3", description: "Edited", notes: "Remember OS labs" });
  const s3 = list.find((s) => s.id === "sem-3")!;
  assert.equal(s3.title, "My Semester 3");
  assert.equal(s3.notes, "Remember OS labs");

  list = addItem(list, "sem-3", "topics", "  Graph practice  ");
  assert.equal(list.find((s) => s.id === "sem-3")!.topics.at(-1), "Graph practice");
  assert.equal(addItem(list, "sem-3", "topics", "   "), list, "blank items are ignored");
  list = addItem(list, "sem-3", "projects", "URL shortener");
  const before = list.find((s) => s.id === "sem-3")!.projects.length;
  list = removeItem(list, "sem-3", "projects", before - 1);
  assert.equal(list.find((s) => s.id === "sem-3")!.projects.length, before - 1);

  assert.ok(!removeSection(list, stage.id).some((s) => s.id === stage.id));
});

test("editing a selected section does not mutate the library", () => {
  const original = library[0].sections[0].topics.length;
  const list = defaultSelection(library);
  const edited = addItem(list, list[0].id, "topics", "Extra");
  assert.equal(edited[0].topics.length, original + 1);
  assert.equal(library[0].sections[0].topics.length, original);
});

test("custom sections get a title fallback", () => {
  assert.equal(createCustomSection("custom-1", "  ", "").title, "Untitled section");
  assert.equal(createCustomSection("custom-2", "Open source", "x").source, "Custom");
});
