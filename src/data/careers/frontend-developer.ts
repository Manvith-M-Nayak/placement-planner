import type { Career } from "../../lib/types.ts";

export const frontendDeveloper: Career = {
  slug: "frontend-developer",
  title: "Frontend Developer",
  shortTitle: "Frontend",
  categories: ["software"],
  tagline:
    "Craft fast, accessible, and maintainable user interfaces for the web.",
  overview: [
    "Frontend developers build what users see and interact with. The job is part engineering and part product care: turning designs into components, managing application state, integrating APIs, and making sure the result works on every screen size and for every user.",
    "Strong frontend engineers go beyond frameworks. They understand how browsers render pages, how to keep interfaces accessible to keyboard and screen-reader users, and how to measure and improve performance.",
  ],
  responsibilities: [
    "Translate designs into reusable components",
    "Manage client-side state and data fetching",
    "Integrate with backend APIs and handle loading/error states",
    "Ensure accessibility and responsive behaviour",
    "Write component and end-to-end tests",
    "Measure and improve page performance",
  ],
  entryRoles: [
    "Frontend Developer / Engineer",
    "UI Engineer",
    "React Developer",
    "Web Developer",
    "Associate Software Engineer (Frontend)",
  ],
  coreSkills: ["HTML/CSS", "JavaScript", "React", "Accessibility", "Testing", "Performance"],
  foundationalSkills: [
    "Semantic HTML and modern CSS",
    "JavaScript language fundamentals",
    "DSA for interview rounds",
    "HTTP and how browsers load resources",
    "Git and code review workflows",
  ],
  roleSkills: [
    "Responsive layout and design systems",
    "React component architecture and composition",
    "State management (local, lifted, context, external stores)",
    "API integration and caching of server state",
    "Accessibility (WCAG, ARIA, keyboard navigation)",
    "Frontend testing and performance optimisation",
  ],
  learningOrder: [
    {
      title: "HTML, CSS, and responsive design",
      duration: "4–5 weeks",
      description:
        "Master layout and semantics — the foundation every framework sits on.",
      topics: [
        "Semantic elements, landmarks, and forms",
        "Box model, flexbox, grid, positioning",
        "Responsive design with media and container queries",
        "CSS custom properties and theming",
        "Building from a design mock-up accurately",
      ],
      outcome: "Pixel-accurate, responsive pages built from a design without a framework.",
    },
    {
      title: "JavaScript in depth",
      duration: "4–6 weeks",
      description:
        "Understand the language interviewers probe: scope, closures, async, and the event loop.",
      topics: [
        "Scope, hoisting, closures, this",
        "Prototypes and classes",
        "Event loop, promises, async/await",
        "DOM APIs and event delegation",
        "ES modules and tooling basics",
      ],
      outcome: "You can explain and implement debounce, throttle, and a promise-based fetch wrapper.",
    },
    {
      title: "React and component architecture",
      duration: "5–6 weeks",
      description:
        "Build applications from small, composable components with predictable state.",
      topics: [
        "Components, props, state, effects, refs",
        "Composition, custom hooks, and lifting state",
        "Routing and code splitting",
        "TypeScript with React",
        "Styling approaches: CSS modules, Tailwind CSS",
      ],
      outcome: "A multi-page React app with reusable components and typed props.",
    },
    {
      title: "State management and API integration",
      duration: "3–4 weeks",
      description:
        "Handle server data and complex client state cleanly.",
      topics: [
        "Server state vs client state",
        "Data fetching libraries (TanStack Query / SWR)",
        "Context and lightweight stores (Zustand / Redux Toolkit)",
        "Forms and validation (React Hook Form, schema validation)",
        "Optimistic updates and error recovery",
      ],
      outcome: "An app with forms, validation, and well-handled loading, empty, and error states.",
    },
    {
      title: "Accessibility and frontend testing",
      duration: "3–4 weeks",
      description:
        "Make interfaces usable by everyone and verify behaviour automatically.",
      topics: [
        "WCAG principles, colour contrast, focus management",
        "Accessible dialogs, menus, and tabs",
        "Testing Library: test behaviour, not implementation",
        "End-to-end tests with Playwright",
        "Automated accessibility checks (axe)",
      ],
      outcome: "Your components are keyboard-accessible and covered by behaviour-driven tests.",
    },
    {
      title: "Performance and production delivery",
      duration: "3–4 weeks",
      description:
        "Make the application fast and ship it.",
      topics: [
        "Core Web Vitals: LCP, INP, CLS",
        "Bundle analysis, lazy loading, image optimisation",
        "Rendering strategies: CSR, SSR, static generation",
        "Next.js App Router fundamentals",
        "Lighthouse and the browser performance panel",
      ],
      outcome: "A deployed application with measured, documented performance improvements.",
    },
  ],
  technologies: [
    { group: "Core", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
    { group: "Frameworks", items: ["React", "Next.js", "Tailwind CSS"] },
    { group: "State & data", items: ["TanStack Query", "Zustand", "Redux Toolkit", "React Hook Form"] },
    { group: "Testing & tooling", items: ["Vitest / Jest", "React Testing Library", "Playwright", "Lighthouse", "Chrome DevTools"] },
  ],
  projects: [
    {
      title: "Responsive dashboard",
      level: "Foundation",
      description:
        "A responsive dashboard UI (e.g. for a public dataset) with tables, filters, and accessible navigation.",
      features: [
        "Layouts that work from 360px to wide desktop",
        "Sortable, filterable table with keyboard support",
        "Light and dark themes using CSS variables",
        "Lighthouse accessibility score documented",
      ],
    },
    {
      title: "Interactive app with forms, API integration, and tests",
      level: "Intermediate",
      description:
        "An application (e.g. recipe planner or job-application organiser) that integrates with an API and validates input.",
      features: [
        "Multi-step form with client-side validation",
        "API integration with loading, empty, and error states",
        "Component tests and one end-to-end test",
        "Accessible modal dialog and focus management",
      ],
    },
    {
      title: "Reusable component library",
      level: "Advanced",
      description:
        "A small documented component library (button, dialog, tabs, combobox) following WAI-ARIA patterns.",
      features: [
        "Documented props and usage examples",
        "Keyboard interaction matching ARIA authoring practices",
        "Tests for each component",
      ],
    },
  ],
  testingAndDocs: [
    "Component tests that query by role and label",
    "End-to-end test of the main user flow",
    "Accessibility checks (axe or Lighthouse) noted in the README",
    "Performance measurements before and after optimisation",
    "README with screenshots, live link, and component overview",
  ],
  dsaTopics: [
    "Arrays and strings",
    "Hashing",
    "Stacks and queues",
    "Trees (DOM is a tree) and recursion",
    "Two pointers and sliding window",
    "Binary search",
    "Graphs: BFS/DFS",
  ],
  csFundamentals: [
    "Computer networks: HTTP caching, CDN, DNS, TLS",
    "Browser rendering pipeline (parse, style, layout, paint, composite)",
    "OOP and functional programming concepts",
    "Operating-system basics: threads and the main thread",
  ],
  interviewTopics: [
    "JavaScript fundamentals and output-prediction questions",
    "Implementing debounce, throttle, Promise.all, deep clone",
    "React rendering and hooks behaviour",
    "CSS layout problems and specificity",
    "Accessibility basics",
    "Frontend system design (e.g. autocomplete, infinite feed)",
    "DSA online assessment",
  ],
  portfolio: [
    "Two or three polished, deployed UIs",
    "A personal site that is itself fast and accessible",
    "Code that shows component structure and tests",
    "Before/after performance or accessibility improvements documented",
  ],
  mistakes: [
    "Using divs for everything and ignoring keyboard users",
    "Learning a framework before understanding JavaScript",
    "Putting all state in a global store by default",
    "Shipping large bundles and unoptimised images",
    "Portfolio sites that are slow or broken on mobile",
  ],
  nextSteps: [
    "Build a layout from a real design mock-up",
    "Practise JavaScript implementation questions weekly",
    "Audit one of your projects with Lighthouse and fix the top issues",
    "Compare with Full-Stack Developer if you also enjoy backend work",
  ],
  starterActions: [
    "Recreate a landing-page layout with semantic HTML and CSS grid",
    "Implement debounce and throttle from scratch with tests",
    "Build a small React component with keyboard support",
    "Run Lighthouse on one of your pages and note three fixes",
  ],
};
