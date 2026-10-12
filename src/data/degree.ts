import type { Focus, SemesterNumber, SemesterPlan, ThirtyDayWeek } from "../lib/types.ts";

export const focusOptions: { id: Focus; label: string; description: string }[] = [
  {
    id: "fundamentals",
    label: "Fundamentals-focused",
    description: "More time on DSA and core CS; career-specific modules start later.",
  },
  {
    id: "balanced",
    label: "Balanced",
    description: "Core CS and career modules progress side by side.",
  },
  {
    id: "specialization",
    label: "Specialization-focused",
    description: "Career-specific modules start earlier, alongside the core curriculum.",
  },
];

export const yearOptions = [
  { year: 1, label: "Year 1", semesters: [1, 2] as SemesterNumber[] },
  { year: 2, label: "Year 2", semesters: [3, 4] as SemesterNumber[] },
  { year: 3, label: "Year 3", semesters: [5, 6] as SemesterNumber[] },
];

export const semesters: SemesterPlan[] = [
  {
    number: 1,
    title: "Programming Foundations",
    theme: "Learn to program and use a developer's basic tools.",
    summary:
      "Pick one primary language and build the habit of writing, running, and debugging small programs every week. Git and the command line start now so they feel natural later.",
    topics: [
      "One primary programming language (C, C++, Java, or Python)",
      "Variables and data types",
      "Conditions and loops",
      "Functions",
      "Arrays and strings",
      "Basic debugging",
      "Introductory problem solving",
      "Git and GitHub fundamentals",
      "Basic command-line usage",
    ],
    projects: [
      "Command-line utility (e.g. unit converter or text statistics tool)",
      "Student grade management program",
      "Simple expense tracker",
    ],
    outcomes: [
      "Comfortable writing programs of 100–200 lines",
      "First repositories on GitHub with READMEs",
      "Able to read an error message and locate the problem",
    ],
    variants: {
      fundamentals: {
        headline: "Depth in one language",
        emphasis: [
          "Solve beginner problems weekly on a single practice platform",
          "Trace programs by hand to understand control flow",
          "Revisit arrays and strings until they feel easy",
        ],
      },
      balanced: {
        headline: "Programming plus tooling",
        emphasis: [
          "Pair each new language concept with a small program",
          "Commit every exercise to Git to build the habit",
          "Try one short exercise from a career area that interests you",
        ],
      },
      specialization: {
        headline: "Early exposure",
        emphasis: [
          "Keep language fundamentals as the priority",
          "Read the overview of two career paths on CareerPath",
          "Build one small program related to an area you are curious about",
        ],
      },
    },
  },
  {
    number: 2,
    title: "Problem Solving and Core Foundations",
    theme: "Move from writing programs to structuring them well.",
    summary:
      "Learn to break problems into functions and modules, meet your first data structures, and reason about efficiency. OOP and SQL introduce the two ideas behind most real software: objects and data.",
    topics: [
      "Functions and modular programming",
      "Basic data structures (arrays, lists, stacks, queues)",
      "Recursion fundamentals",
      "Time and space complexity",
      "OOP introduction",
      "SQL basics",
      "Relational databases",
      "Basic software testing",
    ],
    projects: [
      "Library management application",
      "Database-backed student application",
      "Simple inventory management system",
    ],
    outcomes: [
      "Able to estimate the complexity of simple algorithms",
      "First program that stores data in a relational database",
      "First automated tests for your own code",
    ],
    variants: {
      fundamentals: {
        headline: "Strong problem-solving base",
        emphasis: [
          "Practise recursion with small exercises until it feels natural",
          "Analyse complexity for every problem you solve",
          "Implement stacks and queues from scratch",
        ],
      },
      balanced: {
        headline: "Foundations with a project",
        emphasis: [
          "Build one database-backed project using OOP",
          "Keep a weekly problem-solving routine",
          "Write tests for the core functions of your project",
        ],
      },
      specialization: {
        headline: "Foundations plus a first career module",
        emphasis: [
          "Finish core topics first; career modules are additions",
          "Start the first module of your chosen career path",
          "Choose a project idea related to that career",
        ],
      },
    },
  },
  {
    number: 3,
    title: "Core Computer Science",
    theme: "Build the core CS knowledge that interviews and later courses depend on.",
    summary:
      "This is the most important semester for interview foundations. Data structures, DBMS, and operating systems are introduced together; collaborating with Git turns you from a solo programmer into a team member.",
    topics: [
      "Linked lists",
      "Stacks and queues",
      "Trees and graphs",
      "Searching and sorting",
      "Recursion and backtracking",
      "OOP (in depth)",
      "DBMS",
      "SQL joins and aggregation",
      "Operating-system fundamentals",
      "Git branching and collaboration",
    ],
    projects: [
      "Database-backed application",
      "A collaborative software project with a classmate (shared repository, pull requests)",
      "An application with basic tests and documentation",
    ],
    outcomes: [
      "Comfortable with linear and non-linear data structures",
      "Able to write SQL with joins and aggregation",
      "Experience reviewing and merging others' code",
    ],
    variants: {
      fundamentals: {
        headline: "Data structures first",
        emphasis: [
          "Implement each data structure yourself before using libraries",
          "Solve problems topic by topic: lists, stacks, trees, graphs",
          "Write short notes on OS concepts as you study them",
        ],
      },
      balanced: {
        headline: "Core CS with a first career module",
        emphasis: [
          "Keep a steady DSA routine alongside coursework",
          "Begin the first module of your career path",
          "Use your collaborative project to practise Git workflows",
        ],
      },
      specialization: {
        headline: "Core CS with two career modules",
        emphasis: [
          "Do not skip DSA — it remains essential for placements",
          "Work through the first two modules of your career path",
          "Make your collaborative project relevant to that career",
        ],
      },
    },
  },
  {
    number: 4,
    title: "Software Development and Exploration",
    theme: "Build real applications and choose a primary specialization.",
    summary:
      "Networks and operating systems complete the core CS picture, while APIs, testing, and frontend/backend development give you the confidence to build complete applications. Use this semester to try more than one career area before choosing a primary one.",
    topics: [
      "Computer networks",
      "Operating systems",
      "Advanced DSA fundamentals (heaps, hashing, graph algorithms, intro DP)",
      "REST APIs",
      "Software testing",
      "Debugging",
      "Frontend and backend development",
      "Development workflows (code review, CI basics)",
      "Career-track exploration",
    ],
    projects: [
      "A web application",
      "A project involving an external or local API",
      "A small project exploring an alternative career path",
    ],
    outcomes: [
      "A working application that uses an API",
      "Clarity on a primary (and optionally secondary) career path",
      "Comfort with debugging across layers",
    ],
    variants: {
      fundamentals: {
        headline: "Complete the core, then explore",
        emphasis: [
          "Prioritise networks, OS, and advanced DSA",
          "Start the first module of your career path late in the semester",
          "Keep the exploration project small",
        ],
      },
      balanced: {
        headline: "Build and decide",
        emphasis: [
          "Build one web or API project end to end",
          "Continue your career path's next module",
          "Use the exploration project to test a second career area",
        ],
      },
      specialization: {
        headline: "Commit to a direction",
        emphasis: [
          "Keep advanced DSA practice going every week",
          "Progress quickly through your career path's modules",
          "Start planning a substantial Semester 5 project",
        ],
      },
    },
  },
  {
    number: 5,
    title: "Specialization and Portfolio Development",
    theme: "Go deep on your chosen path and build one substantial project.",
    summary:
      "Semester 5 is where your roadmap becomes clearly role-specific. Aim for one substantial, well-documented project that demonstrates the skills your target role expects, while keeping DSA practice steady.",
    topics: [
      "Role-specific modules from your primary career path (shown below)",
      "Continued DSA practice with medium-level problems",
      "Reading documentation and source code in your stack",
    ],
    projects: [
      "One substantial role-specific project",
    ],
    outcomes: [
      "One substantial role-specific project",
      "Documented source code",
      "A clear project README",
      "A demonstration of working functionality (live link or video)",
    ],
    variants: {
      fundamentals: {
        headline: "Specialise without losing the core",
        emphasis: [
          "Revise one core subject (OS, DBMS, or networks) each month",
          "Work through the earlier modules of your career path carefully",
          "Keep the main project focused rather than broad",
        ],
      },
      balanced: {
        headline: "Depth plus portfolio",
        emphasis: [
          "Complete the middle modules of your career path",
          "Build and document your main project",
          "Maintain a weekly DSA routine",
        ],
      },
      specialization: {
        headline: "Advanced specialization",
        emphasis: [
          "Move through your career path's modules at a faster pace",
          "Aim for production-quality: tests, CI, documentation, deployment",
          "Consider contributing to an open-source project in your area",
        ],
      },
    },
  },
  {
    number: 6,
    title: "Pre-Placement Preparation",
    theme: "Consolidate, revise, and prepare to present yourself clearly.",
    summary:
      "Semester 6 is about readiness for recruitment that typically begins in Semester 7: revising fundamentals, practising under time pressure, refining your resume and GitHub, and being able to explain your projects in depth.",
    topics: [
      "DSA revision",
      "Timed coding practice",
      "OOP revision",
      "DBMS and SQL revision",
      "OS revision",
      "Computer networks revision",
      "Role-specific technical preparation",
      "Project deep-dives",
      "Resume preparation",
      "GitHub portfolio refinement",
      "Mock interview practice",
      "Aptitude preparation where relevant",
      "Employer research",
      "Recruitment-process familiarity",
    ],
    projects: [
      "Polish your strongest project: tests, README, and a demo",
    ],
    outcomes: [
      "A role-aligned resume",
      "One or more demonstrable projects",
      "Organised GitHub repositories",
      "Clear explanations of project design decisions",
      "Familiarity with common interview topics",
      "A structured set of resources for further preparation",
    ],
    variants: {
      fundamentals: {
        headline: "Revision-heavy",
        emphasis: [
          "Revise DSA topic by topic, then switch to mixed timed sets",
          "Make one-page revision notes for OOP, DBMS, OS, and networks",
          "Prepare to explain one project deeply",
        ],
      },
      balanced: {
        headline: "Revision plus role preparation",
        emphasis: [
          "Alternate DSA revision with role-specific preparation",
          "Practise mock interviews with peers",
          "Refine resume and GitHub for your target role",
        ],
      },
      specialization: {
        headline: "Role-specific readiness",
        emphasis: [
          "Finish the final modules of your career path",
          "Prepare role-specific interview topics in depth",
          "Keep timed DSA practice going — most assessments still include it",
        ],
      },
    },
  },
];

/**
 * Curated mapping from (focus, starting semester) to which of the six career
 * learning-stage indexes appear in each semester. This is a hand-authored
 * lookup table — not an algorithm. Stages not listed appear as optional
 * "after Semester 6" material.
 */
export const stagePlacement: Record<
  Focus,
  Record<SemesterNumber, Partial<Record<SemesterNumber, number[]>>>
> = {
  specialization: {
    1: { 2: [0], 3: [1], 4: [2], 5: [3, 4], 6: [5] },
    2: { 2: [0], 3: [1], 4: [2], 5: [3, 4], 6: [5] },
    3: { 3: [0, 1], 4: [2], 5: [3, 4], 6: [5] },
    4: { 4: [0, 1, 2], 5: [3, 4], 6: [5] },
    5: { 5: [0, 1, 2, 3], 6: [4, 5] },
    6: { 6: [0, 1, 2, 3] },
  },
  balanced: {
    1: { 3: [0], 4: [1], 5: [2, 3], 6: [4, 5] },
    2: { 3: [0], 4: [1], 5: [2, 3], 6: [4, 5] },
    3: { 3: [0], 4: [1], 5: [2, 3], 6: [4, 5] },
    4: { 4: [0, 1], 5: [2, 3], 6: [4, 5] },
    5: { 5: [0, 1, 2], 6: [3, 4] },
    6: { 6: [0, 1, 2] },
  },
  fundamentals: {
    1: { 4: [0], 5: [1, 2], 6: [3, 4] },
    2: { 4: [0], 5: [1, 2], 6: [3, 4] },
    3: { 4: [0], 5: [1, 2], 6: [3, 4] },
    4: { 4: [0], 5: [1, 2], 6: [3, 4] },
    5: { 5: [0, 1], 6: [2, 3] },
    6: { 6: [0, 1] },
  },
};

/** Curated semester in which a secondary career path's exploration module is shown. */
export const secondaryExplorationSemester: Record<SemesterNumber, SemesterNumber> = {
  1: 4,
  2: 4,
  3: 4,
  4: 4,
  5: 5,
  6: 6,
};

export const semesterSeven = {
  title: "Semester 7: Placement Execution",
  summary:
    "Semester 7 is outside the main roadmap. This optional guide describes the next phase so you know what to expect. Completing any roadmap does not guarantee a placement; recruitment outcomes depend on many factors, including company requirements and hiring cycles.",
  topics: [
    { title: "Company-specific preparation", detail: "Read each company's role description, past interview experiences shared by seniors, and the technologies it uses." },
    { title: "Recruitment assessments", detail: "Online assessments often combine aptitude, MCQs on core CS, and coding problems under time limits." },
    { title: "Coding rounds", detail: "Practise explaining your approach aloud, handling edge cases, and testing your code before submitting." },
    { title: "Technical interviews", detail: "Expect DSA, core CS subjects, and role-specific questions. Clarify the problem before coding." },
    { title: "Project discussions", detail: "Be ready to explain architecture, trade-offs, what you would change, and your individual contribution." },
    { title: "HR and behavioural interviews", detail: "Prepare concise stories about teamwork, setbacks, and learning, using a structure like situation–action–result." },
    { title: "Application management", detail: "Keep your own simple list of applications, deadlines, and requirements in a notebook or spreadsheet." },
    { title: "Offer evaluation", detail: "Compare role content, learning opportunities, location, compensation structure, and bond or service terms carefully." },
    { title: "Alternative off-campus opportunities", detail: "Consider off-campus applications, referrals, internships with conversion, open-source programmes, and higher studies." },
  ],
};

const genericWeeks: Record<SemesterNumber, ThirtyDayWeek[]> = {
  1: [
    { title: "Week 1 — Set up and start", items: ["Install your language toolchain and an editor", "Write 5 small programs using variables, conditions, and loops", "Create a GitHub account and push your first repository"] },
    { title: "Week 2 — Functions and arrays", items: ["Write functions for 5 everyday calculations", "Solve 5 array or string problems", "Learn 10 basic terminal commands (cd, ls, mkdir, cp, mv, cat, grep…)"] },
    { title: "Week 3 — Mini project", items: ["Start the command-line utility or grade manager project", "Commit after each working feature", "Write a README describing how to run it"] },
  ],
  2: [
    { title: "Week 1 — Modular code and recursion", items: ["Refactor an old program into functions/modules", "Solve 5 recursion exercises (factorial, power, palindrome…)", "Read about Big-O and analyse your solutions"] },
    { title: "Week 2 — OOP and data structures", items: ["Model a library or inventory using classes", "Implement a stack and a queue", "Write 3 tests for your classes"] },
    { title: "Week 3 — SQL basics", items: ["Install PostgreSQL or SQLite", "Design 3 related tables for your project", "Write 10 queries including filters and ordering"] },
  ],
  3: [
    { title: "Week 1 — Linked lists and stacks", items: ["Implement a linked list with insert/delete/reverse", "Solve 6 problems on lists and stacks", "Review OOP principles with your own examples"] },
    { title: "Week 2 — Trees and SQL joins", items: ["Implement BST insert, search, and traversals", "Write SQL queries with joins and GROUP BY", "Read the OS chapter on processes"] },
    { title: "Week 3 — Collaboration", items: ["Start a shared repository with a classmate", "Practise branching, pull requests, and resolving a merge conflict", "Agree on a README and folder structure"] },
  ],
  4: [
    { title: "Week 1 — Networks and APIs", items: ["Trace an HTTP request with browser devtools", "Build a tiny REST endpoint that returns JSON", "Revise TCP vs UDP and DNS"] },
    { title: "Week 2 — Advanced DSA", items: ["Solve 6 problems on heaps and hashing", "Learn BFS/DFS and solve 3 graph problems", "Attempt 2 introductory DP problems"] },
    { title: "Week 3 — Build and test", items: ["Connect a frontend or CLI to your API", "Add tests for two endpoints", "Use a debugger to step through one bug"] },
  ],
  5: [
    { title: "Week 1 — Project scoping", items: ["Write a one-page project plan: problem, features, stack", "Set up the repository with CI running a placeholder test", "Solve 4 medium DSA problems"] },
    { title: "Week 2 — Core implementation", items: ["Implement the most important feature end to end", "Document setup steps as you go", "Revise one core CS subject for an hour"] },
    { title: "Week 3 — Quality", items: ["Add tests for core logic", "Handle errors and edge cases", "Solve 4 medium DSA problems"] },
  ],
  6: [
    { title: "Week 1 — Assess and organise", items: ["List DSA topics and mark which ones you want to revise", "Draft a one-page resume", "Pin your best repositories on GitHub"] },
    { title: "Week 2 — Timed practice", items: ["Do 2 timed problem sets of 90 minutes", "Revise DBMS and SQL with 10 queries", "Write a 2-minute explanation of your main project"] },
    { title: "Week 3 — Core CS revision", items: ["Revise OS: processes, threads, scheduling, deadlocks, memory", "Revise networks: TCP/IP, HTTP, DNS", "Do one peer mock interview"] },
  ],
};

/** Curated 30-day plan: three generic weeks for the semester plus one career week. */
export function getThirtyDayPlan(
  semester: SemesterNumber,
  careerTitle: string,
  starterActions: string[],
): ThirtyDayWeek[] {
  return [
    ...genericWeeks[semester],
    { title: `Week 4 — ${careerTitle} starter week`, items: starterActions },
  ];
}
