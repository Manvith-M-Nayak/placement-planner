import { test } from "node:test";
import assert from "node:assert/strict";
import { careers } from "../src/data/careers/index.ts";
import { buildDegreeRoadmap } from "../src/lib/roadmap.ts";
import type { Focus, SemesterNumber } from "../src/lib/types.ts";

const focuses: Focus[] = ["fundamentals", "balanced", "specialization"];
const starts: SemesterNumber[] = [1, 2, 3, 4, 5, 6];
const primary = careers.find((c) => c.slug === "backend-developer")!;
const secondary = careers.find((c) => c.slug === "cloud-engineer")!;

test("roadmap covers the start semester through Semester 6 and never includes Semester 7", () => {
  for (const focus of focuses) {
    for (const start of starts) {
      const r = buildDegreeRoadmap({ start, focus, primary });
      const nums = r.blocks.map((b) => b.plan.number);
      assert.deepEqual(nums, starts.filter((s) => s >= start));
      assert.deepEqual(r.earlier.map((p) => p.number), starts.filter((s) => s < start));
    }
  }
});

test("Semester 1 starts with programming fundamentals; Semester 5 is specialization", () => {
  const s1 = buildDegreeRoadmap({ start: 1, focus: "balanced", primary });
  assert.equal(s1.blocks[0].plan.title, "Programming Foundations");
  const s5 = buildDegreeRoadmap({ start: 5, focus: "balanced", primary });
  assert.deepEqual(s5.blocks.map((b) => b.plan.number), [5, 6]);
  assert.ok(s5.blocks[0].roleProject, "Semester 5 includes a role project");
  assert.deepEqual(s5.blocks[1].rolePrep, primary.interviewTopics);
});

test("each career stage is placed at most once and the rest are optional", () => {
  for (const focus of focuses) {
    for (const start of starts) {
      const r = buildDegreeRoadmap({ start, focus, primary });
      const placed = r.blocks.flatMap((b) => b.careerStages.map((s) => s.index));
      assert.equal(new Set(placed).size, placed.length);
      assert.equal(placed.length + r.laterStages.length, 6);
    }
  }
});

test("focus variants select different predefined content", () => {
  const f = buildDegreeRoadmap({ start: 3, focus: "fundamentals", primary });
  const s = buildDegreeRoadmap({ start: 3, focus: "specialization", primary });
  assert.notDeepEqual(f.blocks[0].variant, s.blocks[0].variant);
  assert.notDeepEqual(
    f.blocks.map((b) => b.careerStages.map((x) => x.index)),
    s.blocks.map((b) => b.careerStages.map((x) => x.index)),
  );
});

test("secondary path appears once, and is ignored when it equals the primary", () => {
  const r = buildDegreeRoadmap({ start: 2, focus: "balanced", primary, secondary });
  assert.equal(r.blocks.filter((b) => b.secondary).length, 1);
  const same = buildDegreeRoadmap({ start: 2, focus: "balanced", primary, secondary: primary });
  assert.equal(same.blocks.filter((b) => b.secondary).length, 0);
});

test("30-day plan has four weeks ending with a career week", () => {
  const r = buildDegreeRoadmap({ start: 4, focus: "balanced", primary });
  assert.equal(r.thirtyDay.length, 4);
  assert.deepEqual(r.thirtyDay[3].items, primary.starterActions);
});
