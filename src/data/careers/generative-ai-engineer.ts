import type { Career } from "../../lib/types.ts";

export const generativeAiEngineer: Career = {
  slug: "generative-ai-engineer",
  title: "Generative AI Application Engineer",
  shortTitle: "Generative AI",
  categories: ["ai-ml", "software"],
  tagline:
    "Build reliable applications on top of large language models — with retrieval, evaluation, and guardrails.",
  overview: [
    "Generative AI application engineers build products that use large language models (LLMs): assistants, retrieval-augmented search, document processing, and automation. The role is mostly software engineering, with added skills for working with probabilistic model outputs.",
    "What separates strong candidates is rigour. Anyone can call an API; employers look for people who can ground answers in sources, measure quality with an evaluation set, handle failure cases, and reason about latency, cost, and security risks such as prompt injection.",
  ],
  responsibilities: [
    "Integrate LLM APIs or open models into applications",
    "Design prompts and structured outputs",
    "Build retrieval pipelines with embeddings and vector search",
    "Create evaluation datasets and measure answer quality",
    "Implement guardrails, input validation, and safe tool use",
    "Monitor latency, cost, and failure modes",
  ],
  entryRoles: [
    "AI Engineer / GenAI Engineer",
    "LLM Application Developer",
    "Software Engineer (AI Platform)",
    "Applied AI Engineer",
    "Associate ML Engineer (LLM)",
  ],
  coreSkills: ["Python", "LLM APIs", "Embeddings", "RAG", "Evaluation", "Guardrails"],
  foundationalSkills: [
    "Python and API development",
    "DSA and general software engineering",
    "HTTP, JSON, and asynchronous programming",
    "Basic machine-learning concepts (training vs inference, overfitting)",
    "SQL and data handling",
  ],
  roleSkills: [
    "How LLMs work: tokens, context windows, sampling, temperature",
    "Prompt design and structured output (JSON schemas, tool calling)",
    "Embeddings, chunking strategies, and vector search",
    "Retrieval-augmented generation (RAG) with citations",
    "Evaluation: test sets, rubric grading, regression testing",
    "Guardrails and security (prompt injection, data leakage)",
  ],
  learningOrder: [
    {
      title: "Python services and API fundamentals",
      duration: "3–4 weeks",
      description:
        "LLM applications are web services first — build that foundation solidly.",
      topics: [
        "Python packaging, virtual environments, type hints",
        "FastAPI: routes, validation with Pydantic",
        "Async I/O and streaming responses",
        "Calling external APIs with retries and timeouts",
        "Managing secrets with environment variables",
      ],
      outcome: "A small FastAPI service with validated input and robust external calls.",
    },
    {
      title: "LLM fundamentals and prompt design",
      duration: "3–4 weeks",
      description:
        "Understand how language models behave and how to instruct them reliably.",
      topics: [
        "Tokens, context windows, and pricing by token",
        "Transformer architecture at a conceptual level",
        "Sampling parameters and determinism",
        "System prompts, few-shot examples, and instruction clarity",
        "Structured outputs and tool/function calling",
      ],
      outcome: "A tool that extracts structured JSON from unstructured text reliably.",
    },
    {
      title: "Embeddings and vector search",
      duration: "3 weeks",
      description:
        "Represent text numerically and retrieve relevant information efficiently.",
      topics: [
        "What embeddings capture; cosine similarity",
        "Chunking strategies and metadata",
        "Vector stores (pgvector, FAISS, or a managed store)",
        "Hybrid search combining keyword and vector retrieval",
        "Reranking (concepts)",
      ],
      outcome: "A semantic search over a document collection with inspectable results.",
    },
    {
      title: "Retrieval-augmented generation (RAG)",
      duration: "4–5 weeks",
      description:
        "Ground model answers in source documents and cite them.",
      topics: [
        "RAG pipeline: ingest, chunk, embed, retrieve, generate",
        "Citations and answer attribution",
        "Handling 'not found' and refusing to guess",
        "Conversation memory and context management",
        "Document parsing (PDF, HTML) pitfalls",
      ],
      outcome: "A domain-specific assistant that answers with citations to source passages.",
    },
    {
      title: "Evaluation and guardrails",
      duration: "3–4 weeks",
      description:
        "Measure quality and make the system safe to use.",
      topics: [
        "Building an evaluation dataset with expected answers",
        "Retrieval metrics (recall@k) and answer grading rubrics",
        "LLM-as-judge and its limitations",
        "Prompt injection, data exfiltration, and output validation",
        "OWASP Top 10 for LLM applications",
      ],
      outcome: "An evaluation script that reports quality and catches regressions.",
    },
    {
      title: "Deployment, latency, and cost",
      duration: "2–3 weeks",
      description:
        "Ship the application and make deliberate trade-offs.",
      topics: [
        "Streaming responses and perceived latency",
        "Caching and choosing smaller models where appropriate",
        "Logging prompts and outputs responsibly",
        "Rate limits and fallbacks",
        "Containerised deployment",
      ],
      outcome: "A deployed RAG application with documented latency and cost considerations.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["Python", "TypeScript (optional)", "SQL"] },
    { group: "LLM tooling", items: ["Provider SDKs (Anthropic, OpenAI, Google)", "Hugging Face Transformers", "LangChain / LlamaIndex (optional)"] },
    { group: "Retrieval", items: ["pgvector", "FAISS", "Sentence-Transformers", "Elasticsearch / OpenSearch (awareness)"] },
    { group: "Tooling", items: ["FastAPI", "Pydantic", "Docker", "pytest", "Streamlit / Gradio for demos"] },
  ],
  projects: [
    {
      title: "Domain-specific RAG application",
      level: "Intermediate",
      description:
        "An assistant over a focused corpus (e.g. your university regulations or a framework's documentation).",
      features: [
        "Ingestion pipeline with documented chunking choices",
        "Answers include citations to source passages",
        "Explicit 'I could not find this' behaviour",
        "Simple web UI with streaming responses",
      ],
    },
    {
      title: "RAG system with an evaluation dataset and failure cases",
      level: "Advanced",
      description:
        "Add rigorous measurement: a labelled question set, retrieval and answer metrics, and documented failures.",
      features: [
        "50+ evaluation questions with expected sources",
        "Retrieval recall and answer-quality scores reported per change",
        "Documented failure categories with examples",
        "Prompt-injection test cases and mitigations",
      ],
    },
    {
      title: "Structured extraction tool",
      level: "Foundation",
      description:
        "Extract fields from messy documents (e.g. receipts or job descriptions) into validated JSON.",
      features: [
        "Schema validation with Pydantic",
        "Retry on invalid output",
        "Accuracy measured on a hand-labelled sample",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for parsing, chunking, and prompt construction",
    "An evaluation dataset committed alongside the code",
    "Results table comparing configurations (chunk size, model, retrieval k)",
    "README documenting architecture, limitations, and safety measures",
    "No API keys committed; .env.example provided",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "Heaps and top-k selection",
    "Sorting and binary search",
    "Two pointers and sliding window",
    "Trees and graphs (BFS/DFS)",
    "Introductory dynamic programming (edit distance)",
  ],
  csFundamentals: [
    "Computer networks: HTTP, streaming, rate limiting",
    "DBMS: indexing and search",
    "Operating systems: concurrency and async I/O",
    "Linear algebra basics: vectors and similarity",
  ],
  interviewTopics: [
    "How transformers and attention work at a high level",
    "Designing a RAG system and its failure modes",
    "Evaluating LLM output quality",
    "Prompt injection and mitigation strategies",
    "Latency and cost trade-offs",
    "Python and API coding round",
    "DSA online assessment",
  ],
  portfolio: [
    "One RAG project with an evaluation set and documented results",
    "Clear architecture diagram of the pipeline",
    "A short demo video or deployed demo",
    "Write-up of failure cases and what you changed",
  ],
  mistakes: [
    "Building chat wrappers with no evaluation",
    "Committing API keys to public repositories",
    "Ignoring retrieval quality and blaming the model",
    "Trusting model output without validation",
    "Neglecting core DSA and software engineering preparation",
  ],
  nextSteps: [
    "Build a FastAPI service that calls an LLM API with structured output",
    "Write 20 evaluation questions for a corpus you know well",
    "Read the OWASP Top 10 for LLM applications",
    "Compare with AI/ML Engineer and Backend Developer paths",
  ],
  starterActions: [
    "Set up a FastAPI project with environment-based secret handling",
    "Make a structured-output call and validate it with Pydantic",
    "Embed a small document set and run similarity queries",
    "Write 10 evaluation questions with expected answers",
  ],
};
