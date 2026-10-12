// Selects predefined roadmap content for a student's choices.
// Every branch below is a lookup into curated static data; nothing is scored,
// weighted, estimated, or scheduled.

import type {
  Career,
  Focus,
  FocusVariant,
  LearningStage,
  ProjectIdea,
  SemesterNumber,
  SemesterPlan,
  ThirtyDayWeek,
} from "./types.ts";
import {
  getThirtyDayPlan,
  secondaryExplorationSemester,
  semesters,
  stagePlacement,
} from "../data/degree.ts";

export interface PlacedStage {
  index: number;
  stage: LearningStage;
}

export interface SemesterBlock {
  plan: SemesterPlan;
  variant: FocusVariant;
  careerStages: PlacedStage[];
  /** Semester 5: the primary path's featured portfolio project. */
  roleProject?: ProjectIdea;
  /** Semester 6: the primary path's interview topics. */
  rolePrep?: string[];
  secondary?: { title: string; slug: string; stage: LearningStage };
}

export interface DegreeRoadmap {
  start: SemesterNumber;
  focus: Focus;
  primary: Career;
  secondary?: Career;
  blocks: SemesterBlock[];
  earlier: SemesterPlan[];
  laterStages: PlacedStage[];
  thirtyDay: ThirtyDayWeek[];
}

export interface RoadmapChoices {
  start: SemesterNumber;
  focus: Focus;
  primary: Career;
  secondary?: Career;
}

export function featuredProject(career: Career): ProjectIdea {
  return career.projects.find((p) => p.level !== "Foundation") ?? career.projects[0];
}

export function buildDegreeRoadmap({ start, focus, primary, secondary }: RoadmapChoices): DegreeRoadmap {
  const placement = stagePlacement[focus][start];
  const placed = new Set<number>();
  const secondarySem = secondaryExplorationSemester[start];
  const useSecondary = secondary && secondary.slug !== primary.slug ? secondary : undefined;

  const blocks: SemesterBlock[] = semesters
    .filter((plan) => plan.number >= start)
    .map((plan) => {
      const indexes = placement[plan.number] ?? [];
      indexes.forEach((i) => placed.add(i));
      const block: SemesterBlock = {
        plan,
        variant: plan.variants[focus],
        careerStages: indexes.map((index) => ({ index, stage: primary.learningOrder[index] })),
      };
      if (plan.number === 5) block.roleProject = featuredProject(primary);
      if (plan.number === 6) block.rolePrep = primary.interviewTopics;
      if (useSecondary && plan.number === secondarySem) {
        block.secondary = {
          title: useSecondary.title,
          slug: useSecondary.slug,
          stage: useSecondary.learningOrder[0],
        };
      }
      return block;
    });

  const laterStages = primary.learningOrder
    .map((stage, index) => ({ index, stage }))
    .filter(({ index }) => !placed.has(index));

  return {
    start,
    focus,
    primary,
    secondary: useSecondary,
    blocks,
    earlier: semesters.filter((plan) => plan.number < start),
    laterStages,
    thirtyDay: getThirtyDayPlan(start, primary.shortTitle, primary.starterActions),
  };
}

export function isSemesterNumber(value: unknown): value is SemesterNumber {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 6;
}

export function isFocus(value: unknown): value is Focus {
  return value === "fundamentals" || value === "balanced" || value === "specialization";
}
