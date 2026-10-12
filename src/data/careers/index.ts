import type { Career, Category, CategoryId } from "../../lib/types.ts";
import { softwareEngineer } from "./software-engineer.ts";
import { backendDeveloper } from "./backend-developer.ts";
import { fullStackDeveloper } from "./full-stack-developer.ts";
import { frontendDeveloper } from "./frontend-developer.ts";
import { aiMlEngineer } from "./ai-ml-engineer.ts";
import { generativeAiEngineer } from "./generative-ai-engineer.ts";
import { dataEngineer } from "./data-engineer.ts";
import { dataAnalyst } from "./data-analyst.ts";
import { cloudEngineer } from "./cloud-engineer.ts";
import { devopsEngineer } from "./devops-engineer.ts";
import { cybersecurity } from "./cybersecurity.ts";
import { mobileDeveloper } from "./mobile-developer.ts";
import { systemsProgrammer } from "./systems-programmer.ts";
import { research } from "./research.ts";

export const careers: Career[] = [
  softwareEngineer,
  backendDeveloper,
  fullStackDeveloper,
  frontendDeveloper,
  aiMlEngineer,
  generativeAiEngineer,
  dataEngineer,
  dataAnalyst,
  cloudEngineer,
  devopsEngineer,
  cybersecurity,
  mobileDeveloper,
  systemsProgrammer,
  research,
];

export const categories: Category[] = [
  { id: "software", label: "Software development", description: "Build applications, services, and user interfaces." },
  { id: "ai-ml", label: "AI and machine learning", description: "Train models and build AI-powered applications." },
  { id: "data", label: "Data and analytics", description: "Move, model, and analyse data." },
  { id: "cloud", label: "Cloud and infrastructure", description: "Run, automate, and scale systems." },
  { id: "security", label: "Security", description: "Defend systems and applications." },
  { id: "mobile", label: "Mobile development", description: "Build apps for Android and iOS." },
  { id: "systems", label: "Systems programming", description: "Work close to the hardware and OS." },
  { id: "research", label: "Research", description: "Prepare for higher studies and research roles." },
];

export function getCareer(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}

export function getCategoryLabel(id: CategoryId): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}
