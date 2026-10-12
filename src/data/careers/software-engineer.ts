import type { Career } from "../../lib/types.ts";

export const softwareEngineer: Career = {
  slug: "software-engineer",
  title: "Software Engineer",
  shortTitle: "Software Engineer",
  categories: ["software"],
  tagline:
    "Design, build, test, and maintain software systems with strong problem-solving and engineering fundamentals.",
  overview: [
    "A software engineer turns requirements into working, maintainable software. The work spans reading existing code, designing small components, writing and reviewing code, fixing bugs, and making sure changes are tested and safe to ship.",
    "Generalist software engineering roles are the most common campus recruitment target. Interviews lean heavily on data structures and algorithms, object-oriented design, and core CS subjects, so the roadmap balances fundamentals with one or two well-engineered projects.",
  ],
  responsibilities: [
    "Implement features from specifications or tickets",
    "Read, debug, and improve existing codebases",
    "Write unit and integration tests for new code",
    "Participate in code reviews and design discussions",
    "Document behaviour, decisions, and setup steps",
    "Investigate and fix production defects with teammates",
  ],
  entryRoles: [
    "Software Engineer I / SDE-1",
    "Associate Software Engineer",
    "Graduate Engineer Trainee (Software)",
    "Software Developer",
    "Member of Technical Staff (entry level)",
  ],
  coreSkills: ["DSA", "OOP", "SQL", "Git", "Testing", "APIs"],
  foundationalSkills: [
    "Fluency in one language (Java, C++, or Python)",
    "Data structures and algorithmic problem solving",
    "Object-oriented programming and design principles",
    "SQL and relational database basics",
    "Git workflows: branching, pull requests, resolving conflicts",
    "Reading stack traces and using a debugger",
  ],
  roleSkills: [
    "Decomposing a problem into modules with clear interfaces",
    "Writing testable code and meaningful tests",
    "Designing and consuming REST APIs",
    "Basic low-level design (class diagrams, design patterns)",
    "Introductory system design: caching, load balancing, databases",
    "Code review etiquette and writing clear commit messages",
  ],
  learningOrder: [
    {
      title: "Language mastery and problem-solving habits",
      duration: "4–6 weeks",
      description:
        "Get comfortable enough in one language that syntax stops being the bottleneck while solving problems.",
      topics: [
        "Standard library collections (lists, maps, sets, heaps)",
        "String manipulation and input parsing",
        "Writing small functions with clear inputs and outputs",
        "Using a debugger and reading stack traces",
        "Big-O reasoning for loops and nested loops",
      ],
      outcome: "You can implement a medium-sized program without looking up basic syntax.",
    },
    {
      title: "Core data structures and algorithms",
      duration: "8–10 weeks",
      description:
        "Build the pattern library interviewers expect: arrays, hashing, two pointers, recursion, trees, and graphs.",
      topics: [
        "Arrays, hashing, prefix sums, two pointers, sliding window",
        "Stacks, queues, linked lists",
        "Recursion, backtracking, binary search on answers",
        "Trees, BSTs, heaps, tries",
        "Graph traversal (BFS/DFS), topological sort, shortest paths",
        "Introductory dynamic programming",
      ],
      outcome: "You can identify a likely pattern for a new problem and explain its complexity.",
    },
    {
      title: "Object-oriented design and clean code",
      duration: "3–4 weeks",
      description:
        "Learn to structure code so it is easy to change: encapsulation, interfaces, and common design patterns.",
      topics: [
        "Encapsulation, inheritance vs composition, polymorphism",
        "SOLID principles with concrete examples",
        "Strategy, Factory, Observer, and Singleton patterns",
        "Low-level design exercises (parking lot, library system)",
        "Refactoring and naming",
      ],
      outcome: "You can sketch classes for a small system and justify the responsibilities of each.",
    },
    {
      title: "Databases, APIs, and a real application",
      duration: "5–6 weeks",
      description:
        "Connect code to persistent data and expose it through an API — the shape of most production software.",
      topics: [
        "Schema design, normalisation, indexes",
        "SQL joins, aggregation, transactions",
        "HTTP methods, status codes, REST conventions",
        "Building an API with a framework (Spring Boot, Express, or FastAPI)",
        "Configuration, environment separation, and error handling",
      ],
      outcome: "A database-backed application with a documented API.",
    },
    {
      title: "Testing, debugging, and engineering workflow",
      duration: "3–4 weeks",
      description:
        "Make your project trustworthy: automated tests, CI, and disciplined debugging.",
      topics: [
        "Unit vs integration tests, test doubles",
        "Test-driven bug fixing (reproduce, then fix)",
        "Continuous integration with GitHub Actions",
        "Logging and structured error messages",
        "Code review and pull-request hygiene",
      ],
      outcome: "Your main project has automated tests that run on every push.",
    },
    {
      title: "System design basics and interview readiness",
      duration: "4–6 weeks",
      description:
        "Consolidate CS fundamentals and learn to talk about trade-offs in your own projects and simple designs.",
      topics: [
        "Client–server architecture, caching, load balancing",
        "SQL vs NoSQL trade-offs, replication basics",
        "Designing a URL shortener or rate limiter at a high level",
        "Explaining your project architecture end to end",
        "Timed problem solving and mock interviews",
      ],
      outcome: "You can walk an interviewer through your project and a simple design with clear trade-offs.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["Java", "C++", "Python", "SQL"] },
    { group: "Frameworks", items: ["Spring Boot", "Express.js", "FastAPI"] },
    { group: "Data", items: ["PostgreSQL", "MySQL", "Redis (introductory)"] },
    { group: "Tooling", items: ["Git & GitHub", "IntelliJ IDEA / VS Code", "JUnit / pytest", "GitHub Actions", "Docker (basics)"] },
  ],
  projects: [
    {
      title: "Database-backed task or booking application",
      level: "Foundation",
      description:
        "A CRUD application backed by a relational database with a clean layered structure.",
      features: [
        "Normalised schema with at least three related tables",
        "Service and repository layers separated from controllers",
        "Input validation with helpful error messages",
        "README with setup steps and an ER diagram",
      ],
    },
    {
      title: "Authenticated application with APIs, tests, and docs",
      level: "Intermediate",
      description:
        "Extend the application into a multi-user service with authentication and a documented REST API.",
      features: [
        "Sign-up / login with hashed passwords and session or token auth",
        "Role-based access to some endpoints",
        "Unit and integration tests running in CI",
        "OpenAPI/Swagger documentation for every endpoint",
      ],
    },
    {
      title: "Low-level design implementation",
      level: "Intermediate",
      description:
        "Implement a classic LLD problem (e.g. elevator system, splitwise-style expense sharing) with tests.",
      features: [
        "Class diagram committed to the repository",
        "Use of at least two design patterns with justification",
        "Tests covering edge cases",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for business logic; integration tests for database and API layers",
    "Tests run automatically in CI on every push",
    "README covering purpose, architecture, setup, and known limitations",
    "API documented with OpenAPI or a clear endpoint table",
    "Meaningful commit history rather than one large upload",
  ],
  dsaTopics: [
    "Arrays, strings, hashing",
    "Two pointers and sliding window",
    "Binary search (including on answer space)",
    "Stacks, queues, monotonic stack",
    "Linked lists",
    "Trees, BST, heaps",
    "Graphs: BFS, DFS, topological sort, Dijkstra",
    "Recursion and backtracking",
    "Dynamic programming (1D, 2D, knapsack, LIS)",
    "Greedy algorithms",
  ],
  csFundamentals: [
    "OOP and design principles",
    "DBMS: normalisation, indexing, transactions, ACID",
    "Operating systems: processes, threads, scheduling, deadlocks, memory",
    "Computer networks: TCP/IP, HTTP, DNS",
    "Time and space complexity analysis",
  ],
  interviewTopics: [
    "Timed DSA problems (online assessment format)",
    "OOP concepts and low-level design",
    "DBMS and SQL queries",
    "OS and networks conceptual questions",
    "Project deep-dive: design choices and trade-offs",
    "Introductory system design",
    "Behavioural questions about teamwork and debugging",
  ],
  portfolio: [
    "Two well-documented projects rather than many unfinished ones",
    "Pinned repositories with READMEs, screenshots, and setup steps",
    "Visible tests and CI badges",
    "A consistent coding-practice record on one platform",
    "A one-page resume highlighting impact and technologies",
  ],
  mistakes: [
    "Solving hundreds of easy problems without learning patterns",
    "Copying tutorial projects without adding original features",
    "Neglecting OS, DBMS, and networks until the final weeks",
    "Being unable to explain code in your own projects",
    "Skipping tests and documentation entirely",
  ],
  nextSteps: [
    "Pick one language and stay with it for DSA",
    "Start a database-backed project this semester",
    "Schedule weekly mixed-topic problem practice",
    "Read one open-source codebase in your chosen language",
    "Compare this path with Backend Developer to decide on a focus",
  ],
  starterActions: [
    "Choose your primary language and set up a DSA practice repository",
    "Solve 3–4 array and hashing problems, writing complexity notes for each",
    "Draft the schema for a small database-backed project",
    "Review OOP pillars with one code example each",
  ],
};
