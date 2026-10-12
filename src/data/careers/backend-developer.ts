import type { Career } from "../../lib/types.ts";

export const backendDeveloper: Career = {
  slug: "backend-developer",
  title: "Backend Developer",
  shortTitle: "Backend",
  categories: ["software"],
  tagline:
    "Build the services, APIs, and data layers that power applications — reliably, securely, and at scale.",
  overview: [
    "Backend developers build the server-side logic that applications depend on: APIs, business rules, data storage, authentication, background jobs, and integrations with other services.",
    "The role rewards careful thinking about correctness and failure: what happens when input is invalid, when two requests race, when a database is slow, or when a dependency is down. Strong SQL and HTTP knowledge matter as much as language skill.",
  ],
  responsibilities: [
    "Design and implement REST (or RPC) endpoints",
    "Model data and write efficient database queries",
    "Implement authentication, authorisation, and input validation",
    "Handle errors, retries, and logging consistently",
    "Write automated tests for services and data access",
    "Package and deploy services with containers",
  ],
  entryRoles: [
    "Backend Developer / Backend Engineer",
    "Java Developer (Spring Boot)",
    "Python Developer (Django / FastAPI)",
    "Node.js Developer",
    "API Developer",
  ],
  coreSkills: ["HTTP & REST", "SQL", "Auth", "Java/Python", "Docker", "Testing"],
  foundationalSkills: [
    "One backend language in depth (Java, Python, Go, or JavaScript/TypeScript)",
    "DSA for interviews and efficient code",
    "OOP and modular design",
    "Relational databases and SQL",
    "HTTP protocol fundamentals",
    "Git and command-line comfort",
  ],
  roleSkills: [
    "REST API design: resources, status codes, versioning, pagination",
    "Database design, indexing, and transactions",
    "Authentication (sessions, JWT) and authorisation (roles, ownership checks)",
    "Error handling, structured logging, and observability basics",
    "Caching strategies and their pitfalls",
    "Containerisation and deployment fundamentals",
  ],
  learningOrder: [
    {
      title: "Backend language and HTTP fundamentals",
      duration: "4–5 weeks",
      description:
        "Learn one backend language well and understand exactly what happens during an HTTP request.",
      topics: [
        "Language idioms, packages/modules, dependency management",
        "HTTP request/response anatomy, headers, methods, status codes",
        "JSON serialisation and validation",
        "Building a minimal server without a framework",
        "Using curl or an API client to inspect requests",
      ],
      outcome: "You can explain an HTTP round-trip and build a tiny server from scratch.",
    },
    {
      title: "SQL and database design",
      duration: "4–5 weeks",
      description:
        "Model data correctly and query it efficiently — the core of most backend work.",
      topics: [
        "ER modelling and normalisation (1NF–3NF)",
        "Joins, GROUP BY, subqueries, window functions",
        "Indexes and reading query plans (EXPLAIN)",
        "Transactions, isolation levels, and locking basics",
        "Migrations with a migration tool",
      ],
      outcome: "You can design a schema for a feature and justify its indexes.",
    },
    {
      title: "Framework-based REST API",
      duration: "5–6 weeks",
      description:
        "Use a production framework to build a structured API with clean layering.",
      topics: [
        "Spring Boot, Django REST Framework, FastAPI, or Express",
        "Controller / service / repository layering",
        "Request validation and consistent error responses",
        "Pagination, filtering, and sorting",
        "ORM usage and avoiding N+1 queries",
      ],
      outcome: "A CRUD API with pagination, filtering, and consistent error handling.",
    },
    {
      title: "Authentication, authorisation, and security",
      duration: "3–4 weeks",
      description:
        "Protect your API: identity, permissions, and common web vulnerabilities.",
      topics: [
        "Password hashing (bcrypt/argon2)",
        "Session cookies vs JWTs, token expiry and refresh",
        "Role-based and ownership-based authorisation",
        "OWASP Top 10 for APIs: injection, broken access control",
        "Rate limiting and CORS",
      ],
      outcome: "Your API enforces who can do what, with tests proving it.",
    },
    {
      title: "Testing, logging, and reliability",
      duration: "3–4 weeks",
      description:
        "Make the service observable and verifiably correct.",
      topics: [
        "Unit tests with mocks; integration tests against a real test database",
        "Structured logging and correlation IDs",
        "Health checks and graceful error handling",
        "Background jobs and retry strategies",
        "Introductory caching with Redis",
      ],
      outcome: "Your service has meaningful tests, logs, and a health endpoint.",
    },
    {
      title: "Containers, deployment, and system design basics",
      duration: "4–5 weeks",
      description:
        "Ship the service and learn to reason about scaling it.",
      topics: [
        "Dockerfiles and docker-compose for app + database",
        "Environment configuration and secrets handling",
        "CI pipeline: build, test, and image creation",
        "Load balancing, horizontal scaling, and stateless services",
        "Message queues and asynchronous processing (concepts)",
      ],
      outcome: "A containerised, deployed service with a short design document.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["Java", "Python", "Go", "TypeScript (Node.js)", "SQL"] },
    { group: "Frameworks", items: ["Spring Boot", "FastAPI", "Django REST Framework", "Express / NestJS"] },
    { group: "Data", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB (awareness)"] },
    { group: "Tooling", items: ["Docker", "Postman / curl", "GitHub Actions", "OpenAPI / Swagger", "Flyway / Alembic"] },
  ],
  projects: [
    {
      title: "REST API with authentication",
      level: "Foundation",
      description:
        "A multi-user API (e.g. notes, event registration, or issue tracker) with secure login and per-user data.",
      features: [
        "Registration and login with hashed passwords",
        "Users can only access their own resources",
        "Validation errors returned in a consistent JSON format",
        "Postman collection or OpenAPI spec committed",
      ],
    },
    {
      title: "Production-style backend service",
      level: "Intermediate",
      description:
        "A service with pagination, filtering, tests, and documented endpoints, runnable with one command.",
      features: [
        "Cursor or offset pagination with filtering and sorting",
        "Integration tests against a containerised database",
        "Structured logs and a health-check endpoint",
        "docker-compose setup and CI pipeline",
      ],
    },
    {
      title: "Asynchronous job processor",
      level: "Advanced",
      description:
        "Add background processing (e.g. email or report generation) using a queue, with retries and idempotency.",
      features: [
        "Queue-backed workers with retry and dead-letter handling",
        "Idempotent job handling",
        "Short write-up of failure scenarios",
      ],
    },
  ],
  testingAndDocs: [
    "Integration tests that hit the real database schema",
    "Tests for authorisation rules (user A cannot read user B's data)",
    "OpenAPI documentation generated or hand-written",
    "README with architecture diagram, environment variables, and run commands",
    "Documented error format and status code conventions",
  ],
  dsaTopics: [
    "Hashing and hash maps",
    "Sorting and binary search",
    "Two pointers and sliding window",
    "Trees and heaps (priority queues)",
    "Graphs: BFS/DFS",
    "LRU cache design",
    "Intervals and greedy scheduling",
    "Introductory dynamic programming",
  ],
  csFundamentals: [
    "DBMS: indexing (B-trees), transactions, isolation levels",
    "Computer networks: TCP, HTTP/1.1 vs HTTP/2, TLS, DNS",
    "Operating systems: processes vs threads, concurrency, synchronisation",
    "OOP and design patterns",
  ],
  interviewTopics: [
    "DSA online assessment",
    "SQL queries: joins, aggregation, window functions",
    "REST design: idempotency, status codes, pagination",
    "Authentication flows and JWT trade-offs",
    "Concurrency and race conditions",
    "Caching and database scaling basics",
    "Project deep-dive: schema and API decisions",
  ],
  portfolio: [
    "One well-engineered API repository with tests, CI, and Docker setup",
    "Clear API documentation and example requests",
    "Architecture diagram in the README",
    "Evidence of handling edge cases (validation, auth failures)",
  ],
  mistakes: [
    "Storing plain-text passwords or secrets in the repository",
    "Building only CRUD without auth, validation, or tests",
    "Ignoring SQL and relying entirely on an ORM",
    "Returning 200 OK for every response including errors",
    "Not being able to explain what happens on a request end to end",
  ],
  nextSteps: [
    "Pick one backend framework and build a small API this week",
    "Practise 10 SQL problems involving joins and aggregation",
    "Read the OWASP API Security Top 10",
    "Containerise an existing project with docker-compose",
    "Explore Cloud Engineer or DevOps as complementary paths",
  ],
  starterActions: [
    "Build a minimal HTTP server and inspect requests with curl",
    "Design a schema for a multi-user app and write 10 queries against it",
    "Scaffold an API project with your chosen framework",
    "Add input validation and a consistent error format to one endpoint",
  ],
};
