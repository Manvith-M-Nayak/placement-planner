import type { Career } from "../../lib/types.ts";

export const fullStackDeveloper: Career = {
  slug: "full-stack-developer",
  title: "Full-Stack Developer",
  shortTitle: "Full-Stack",
  categories: ["software"],
  tagline:
    "Build complete web applications — from the interface users touch to the APIs and databases behind it.",
  overview: [
    "Full-stack developers work across the browser and the server. A typical task might involve adding a form to the UI, an endpoint to accept its data, a database migration to store it, and tests for each layer.",
    "The breadth is the challenge: it is easy to know a little of everything and nothing deeply. A strong full-stack candidate shows one complete, deployed application with authentication, a real database, tests, and clear documentation.",
  ],
  responsibilities: [
    "Build user interfaces and connect them to backend APIs",
    "Design database schemas and server-side logic",
    "Implement authentication and session handling",
    "Deploy and monitor web applications",
    "Write tests across frontend and backend",
    "Debug issues that cross the client–server boundary",
  ],
  entryRoles: [
    "Full-Stack Developer",
    "Software Engineer (Web)",
    "MERN / MEAN Stack Developer",
    "Web Application Developer",
    "Associate Product Engineer",
  ],
  coreSkills: ["HTML/CSS/JS", "React", "Node.js", "SQL", "Auth", "Deployment"],
  foundationalSkills: [
    "HTML semantics, CSS layout (flexbox, grid), responsive design",
    "JavaScript fundamentals including async/await",
    "DSA and problem solving for interviews",
    "SQL and relational modelling",
    "HTTP and browser fundamentals",
    "Git collaboration workflows",
  ],
  roleSkills: [
    "React components, state, and data fetching",
    "Backend API development (Node.js/Express or a similar framework)",
    "Authentication across client and server (cookies, CSRF, CORS)",
    "Form handling and validation on both sides",
    "Deployment of frontend and backend with environment configuration",
    "End-to-end debugging with browser devtools and server logs",
  ],
  learningOrder: [
    {
      title: "Web foundations: HTML, CSS, and JavaScript",
      duration: "5–6 weeks",
      description:
        "Build static, responsive pages and learn the JavaScript language properly before frameworks.",
      topics: [
        "Semantic HTML and accessible forms",
        "CSS box model, flexbox, grid, media queries",
        "JavaScript: scope, closures, arrays/objects, modules",
        "DOM manipulation and events",
        "Promises, async/await, fetch",
      ],
      outcome: "A responsive multi-page site with interactive JavaScript, no framework.",
    },
    {
      title: "React and component-based UI",
      duration: "4–5 weeks",
      description:
        "Learn to compose interfaces from components and manage state predictably.",
      topics: [
        "Components, props, state, and effects",
        "Lists, keys, and controlled forms",
        "Routing and layouts",
        "Fetching data and handling loading/error states",
        "TypeScript basics for React",
      ],
      outcome: "A React app that consumes a public API with good loading and error handling.",
    },
    {
      title: "Backend APIs and databases",
      duration: "5–6 weeks",
      description:
        "Build the server side: an API with a relational database behind it.",
      topics: [
        "Node.js with Express (or Next.js route handlers / NestJS)",
        "REST design, validation, error handling",
        "PostgreSQL schema design and SQL",
        "An ORM or query builder (Prisma, Drizzle, Sequelize)",
        "Migrations and seed data",
      ],
      outcome: "A REST API backed by PostgreSQL that your React app consumes.",
    },
    {
      title: "Authentication and security across the stack",
      duration: "3–4 weeks",
      description:
        "Implement login securely and understand browser security boundaries.",
      topics: [
        "Password hashing and session cookies (HttpOnly, Secure, SameSite)",
        "Token-based auth and its trade-offs",
        "CORS and CSRF",
        "XSS prevention and output encoding",
        "Authorisation checks on the server",
      ],
      outcome: "Users can sign up and log in, and data access is enforced server-side.",
    },
    {
      title: "Testing across the stack",
      duration: "3–4 weeks",
      description:
        "Add confidence with tests at the right layers.",
      topics: [
        "Unit tests for utilities and server logic (Jest/Vitest)",
        "API integration tests (Supertest or similar)",
        "Component tests with React Testing Library",
        "One or two end-to-end flows with Playwright",
        "Running tests in CI",
      ],
      outcome: "Key user flows are covered by automated tests running in CI.",
    },
    {
      title: "Deployment, performance, and polish",
      duration: "3–4 weeks",
      description:
        "Ship the application publicly and make it fast and reliable.",
      topics: [
        "Deploying frontend (Vercel/Netlify) and backend (Render/Railway/cloud VM)",
        "Managed databases and environment variables",
        "Core Web Vitals, bundle size, and image optimisation",
        "Basic monitoring and error logging",
        "Writing a strong README and demo walkthrough",
      ],
      outcome: "A live, documented application you can demo in an interview.",
    },
  ],
  technologies: [
    { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { group: "Backend", items: ["Node.js", "Express", "NestJS", "Next.js route handlers"] },
    { group: "Data", items: ["PostgreSQL", "Prisma / Drizzle", "MongoDB (awareness)"] },
    { group: "Tooling", items: ["Git & GitHub", "Jest / Vitest", "Playwright", "Docker", "Vercel / Render"] },
  ],
  projects: [
    {
      title: "Full-stack web application",
      level: "Intermediate",
      description:
        "A complete app (e.g. event booking, study-group finder, or job board) with a React frontend and a database-backed API.",
      features: [
        "Authentication with secure session handling",
        "At least one many-to-many relationship in the schema",
        "Search, filtering, and pagination",
        "Responsive, accessible UI",
      ],
    },
    {
      title: "Deployed application with tests and documentation",
      level: "Advanced",
      description:
        "Take the application to production quality: deployed, tested, and documented.",
      features: [
        "Live URL with seeded demo data",
        "Unit, integration, and at least one end-to-end test",
        "CI pipeline that blocks merges on failing tests",
        "README with architecture diagram and deployment steps",
      ],
    },
    {
      title: "Real-time feature",
      level: "Advanced",
      description:
        "Add a real-time capability (notifications or collaborative editing) using WebSockets or server-sent events.",
      features: [
        "Reconnection handling",
        "Authorisation on real-time channels",
        "Notes on scaling limitations",
      ],
    },
  ],
  testingAndDocs: [
    "API integration tests and component tests for key UI",
    "At least one end-to-end test of the main user journey",
    "README with live link, screenshots, tech stack, and local setup",
    "Documented environment variables (with an .env.example file)",
    "Architecture diagram showing client, server, and database",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "Two pointers and sliding window",
    "Stacks and queues",
    "Trees and recursion",
    "Graphs: BFS/DFS",
    "Binary search",
    "Introductory dynamic programming",
  ],
  csFundamentals: [
    "Computer networks: HTTP, DNS, TCP, TLS, how browsers load pages",
    "DBMS: schema design, indexing, transactions",
    "OOP and modular design",
    "Operating systems: processes, threads, event loop concepts",
  ],
  interviewTopics: [
    "DSA online assessment",
    "JavaScript: closures, event loop, promises, this",
    "React: rendering, state, effects, keys",
    "REST APIs and authentication flows",
    "SQL queries and schema design",
    "What happens when you type a URL into a browser",
    "Project walkthrough and deployment decisions",
  ],
  portfolio: [
    "One deployed full-stack application with a working demo",
    "Clean repository structure separating client and server",
    "Screenshots or a short demo video linked in the README",
    "Tests visible in the repository and CI status",
  ],
  mistakes: [
    "Jumping into frameworks without understanding JavaScript",
    "Building only clones from tutorials",
    "Committing API keys or .env files",
    "Doing authorisation only on the frontend",
    "Having a live link that is broken during interviews",
  ],
  nextSteps: [
    "Build a responsive static page without a framework",
    "Pick a single stack (e.g. React + Node + PostgreSQL) and commit to it",
    "Plan a full-stack project with a feature list and schema",
    "Compare with Frontend and Backend paths to choose your emphasis",
  ],
  starterActions: [
    "Rebuild one page layout using only HTML and CSS grid/flexbox",
    "Practise async/await by fetching and rendering data from a public API",
    "Write a feature list and database schema for your main project",
    "Set up the project repository with a client and server folder",
  ],
};
