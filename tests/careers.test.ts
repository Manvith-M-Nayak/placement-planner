import { test } from "node:test";
import assert from "node:assert/strict";
import { careers } from "../src/data/careers/index.ts";

const expectedSlugs = [
  "software-engineer", "backend-developer", "full-stack-developer", "frontend-developer",
  "ai-ml-engineer", "generative-ai-engineer", "data-engineer", "data-analyst",
  "cloud-engineer", "devops-engineer", "cybersecurity", "mobile-developer",
  "systems-programmer", "research",
];

test("all 14 required career paths exist with unique slugs", () => {
  assert.deepEqual(careers.map((c) => c.slug).sort(), [...expectedSlugs].sort());
});

test("every career has complete roadmap content", () => {
  for (const c of careers) {
    assert.equal(c.learningOrder.length, 6, `${c.slug} needs 6 stages`);
    for (const key of [
      "overview", "responsibilities", "entryRoles", "coreSkills", "foundationalSkills", "roleSkills",
      "technologies", "projects", "testingAndDocs", "dsaTopics", "csFundamentals", "interviewTopics",
      "portfolio", "mistakes", "nextSteps", "starterActions",
    ] as const) {
      assert.ok(c[key].length > 0, `${c.slug}.${key} is empty`);
    }
    assert.ok(c.projects.length >= 2, `${c.slug} needs at least 2 projects`);
    for (const s of c.learningOrder) {
      assert.ok(s.topics.length >= 3 && s.duration && s.outcome, `${c.slug} stage "${s.title}" incomplete`);
    }
  }
});

test("career roadmaps are genuinely different from each other", () => {
  for (let i = 0; i < careers.length; i++) {
    for (let j = i + 1; j < careers.length; j++) {
      const a = careers[i], b = careers[j];
      const aTitles = new Set(a.learningOrder.map((s) => s.title));
      const sharedStages = b.learningOrder.filter((s) => aTitles.has(s.title)).length;
      assert.ok(sharedStages <= 1, `${a.slug} and ${b.slug} share ${sharedStages} stage titles`);
      const aProjects = new Set(a.projects.map((p) => p.title));
      assert.ok(!b.projects.some((p) => aProjects.has(p.title)), `${a.slug} and ${b.slug} share a project`);
      assert.notDeepEqual(a.interviewTopics, b.interviewTopics);
    }
  }
});
