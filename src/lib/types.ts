// Shared content types. All roadmap content is static, curated data.

export type CategoryId =
  | "software"
  | "ai-ml"
  | "data"
  | "cloud"
  | "security"
  | "mobile"
  | "systems"
  | "research";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export interface LearningStage {
  title: string;
  /** Curated, typical duration for this module. Never summed or personalised. */
  duration: string;
  description: string;
  topics: string[];
  outcome: string;
}

export interface TechGroup {
  group: string;
  items: string[];
}

export type ProjectLevel = "Foundation" | "Intermediate" | "Advanced";

export interface ProjectIdea {
  title: string;
  level: ProjectLevel;
  description: string;
  features: string[];
}

export interface Career {
  slug: string;
  title: string;
  shortTitle: string;
  categories: CategoryId[];
  tagline: string;
  /** What the role involves, as short paragraphs. */
  overview: string[];
  responsibilities: string[];
  entryRoles: string[];
  /** Short list used on cards. */
  coreSkills: string[];
  foundationalSkills: string[];
  roleSkills: string[];
  /** Exactly six stages, in recommended order. */
  learningOrder: LearningStage[];
  technologies: TechGroup[];
  projects: ProjectIdea[];
  testingAndDocs: string[];
  dsaTopics: string[];
  csFundamentals: string[];
  interviewTopics: string[];
  portfolio: string[];
  mistakes: string[];
  nextSteps: string[];
  /** Curated actions used in the "next 30 days" career week. */
  starterActions: string[];
}

export type SemesterNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type Focus = "fundamentals" | "balanced" | "specialization";

export interface FocusVariant {
  headline: string;
  emphasis: string[];
}

export interface SemesterPlan {
  number: SemesterNumber;
  title: string;
  theme: string;
  summary: string;
  topics: string[];
  projects: string[];
  outcomes: string[];
  variants: Record<Focus, FocusVariant>;
}

export interface ThirtyDayWeek {
  title: string;
  items: string[];
}

export type ResourceType =
  | "Documentation"
  | "Course"
  | "Book"
  | "Tutorial"
  | "Practice"
  | "Reference"
  | "Guide"
  | "Paper repository";

export type ResourceTopicId =
  | "programming"
  | "dsa"
  | "oop"
  | "dbms-sql"
  | "operating-systems"
  | "computer-networks"
  | "software-engineering"
  | "web-development"
  | "ai-ml"
  | "generative-ai"
  | "data-engineering"
  | "cloud-devops"
  | "cybersecurity"
  | "mobile-development"
  | "systems-programming"
  | "research"
  | "interview-preparation"
  | "resume-portfolio";

export interface ResourceTopic {
  id: ResourceTopicId;
  label: string;
  description: string;
}

export interface Resource {
  name: string;
  topic: ResourceTopicId;
  description: string;
  type: ResourceType;
  careers: string[];
  /** Only present when the URL is a known, official or well-established address. */
  url?: string;
}
