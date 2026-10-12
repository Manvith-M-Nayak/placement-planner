import type { Career } from "../../lib/types.ts";

export const research: Career = {
  slug: "research",
  title: "Research / Higher Studies",
  shortTitle: "Research",
  categories: ["research"],
  tagline:
    "Prepare for MS, PhD, or research roles by learning to ask questions, run rigorous experiments, and communicate results.",
  overview: [
    "This path is for students considering postgraduate study (M.Tech, MS, PhD) or research-engineer roles in industry labs. Research means identifying an open question, studying prior work, designing experiments that can actually answer it, and communicating results honestly — including limitations.",
    "Admissions committees and research labs look for evidence of research potential: strong fundamentals and mathematics, a research project with a faculty mentor, a well-written report or paper, and strong recommendation letters. Exam preparation (e.g. GATE in India, or GRE/TOEFL for programmes abroad where required) runs in parallel.",
  ],
  responsibilities: [
    "Read and critically analyse academic papers",
    "Formulate precise research questions",
    "Design and run reproducible experiments",
    "Compare against strong baselines",
    "Write technical reports and papers",
    "Present work to peers and reviewers",
  ],
  entryRoles: [
    "Research Assistant / Project Associate",
    "Research Engineer (industry lab)",
    "Research Intern",
    "M.Tech / MS / PhD student",
    "Junior Research Fellow",
  ],
  coreSkills: ["Mathematics", "Paper reading", "Experiment design", "Python", "LaTeX", "Writing"],
  foundationalSkills: [
    "Discrete mathematics, linear algebra, probability, and statistics",
    "Strong core CS: algorithms, OS, computer architecture, theory of computation",
    "Programming in Python (and C/C++ where relevant)",
    "Scientific computing and plotting",
    "Clear academic writing in English",
  ],
  roleSkills: [
    "Reading papers efficiently (three-pass method)",
    "Literature review and identifying gaps",
    "Formulating testable research questions",
    "Experimental design: baselines, ablations, statistical rigour",
    "Reproducibility: code, data, seeds, and environments",
    "Technical writing (LaTeX) and research presentations",
  ],
  learningOrder: [
    {
      title: "Mathematical and CS foundations",
      duration: "8–10 weeks",
      description:
        "Strengthen the fundamentals that every research area and entrance exam relies on.",
      topics: [
        "Discrete mathematics and proof techniques",
        "Linear algebra and probability",
        "Algorithms and complexity analysis",
        "Theory of computation basics",
        "Revisiting core courses with problem sets",
      ],
      outcome: "Confident problem solving across core theory and mathematics.",
    },
    {
      title: "Reading papers and literature review",
      duration: "4 weeks",
      description:
        "Learn how to read research efficiently and map a field.",
      topics: [
        "The three-pass approach to reading papers",
        "Finding papers: arXiv, Google Scholar, Semantic Scholar, ACL Anthology, DBLP",
        "Summarising contributions, methods, and limitations",
        "Building an annotated bibliography",
        "Tracking citation trails forwards and backwards",
      ],
      outcome: "An annotated bibliography of 10–15 papers in an area of interest.",
    },
    {
      title: "Research questions and faculty mentorship",
      duration: "3–4 weeks",
      description:
        "Find a mentor and turn a broad interest into a focused question.",
      topics: [
        "Approaching faculty with a short, specific email and reading list",
        "Identifying gaps and open problems",
        "Scoping a question to fit a semester",
        "Writing a one-page research proposal",
        "Research ethics and academic integrity",
      ],
      outcome: "A one-page proposal agreed with a faculty mentor.",
    },
    {
      title: "Experimental design and reproducibility",
      duration: "5–6 weeks",
      description:
        "Run experiments whose results others can trust and reproduce.",
      topics: [
        "Choosing and re-implementing baselines",
        "Ablation studies and controlled comparisons",
        "Statistical significance, multiple runs, error bars",
        "Experiment tracking and versioning code and data",
        "Documenting environments and random seeds",
      ],
      outcome: "A reproducible experiment comparing your approach with a baseline.",
    },
    {
      title: "Technical writing",
      duration: "4 weeks",
      description:
        "Communicate methodology, results, and limitations clearly.",
      topics: [
        "Structure of a paper: abstract, introduction, related work, method, results, limitations",
        "Writing in LaTeX (Overleaf), figures, and tables",
        "Citing correctly and avoiding plagiarism",
        "Writing honestly about negative results",
        "Revising based on feedback",
      ],
      outcome: "A technical report suitable for a workshop or student research venue.",
    },
    {
      title: "Presentation and applications",
      duration: "4–6 weeks",
      description:
        "Present your work and prepare applications for further study or research roles.",
      topics: [
        "Research talks and posters",
        "Statement of purpose: connecting experience to goals",
        "Requesting recommendation letters early",
        "Entrance exams (e.g. GATE) and programme requirements",
        "Researching labs and advisers",
      ],
      outcome: "A presented project and a drafted statement of purpose.",
    },
  ],
  technologies: [
    { group: "Programming", items: ["Python", "NumPy / SciPy", "PyTorch (for ML research)", "C/C++ (systems research)"] },
    { group: "Writing", items: ["LaTeX", "Overleaf", "Zotero (reference management)"] },
    { group: "Reproducibility", items: ["Git", "Conda / venv", "Docker", "MLflow or Weights & Biases"] },
    { group: "Paper discovery", items: ["arXiv", "Google Scholar", "Semantic Scholar", "DBLP", "ACL Anthology"] },
  ],
  projects: [
    {
      title: "Reproducible experimental study",
      level: "Advanced",
      description:
        "Reproduce a published result and extend it with one well-motivated experiment.",
      features: [
        "Baseline reproduced with documented differences from the paper",
        "Ablation or extension with multiple random seeds",
        "Code, configuration, and instructions to regenerate every figure",
        "Discussion of threats to validity",
      ],
    },
    {
      title: "Technical report with methodology, results, and limitations",
      level: "Intermediate",
      description:
        "A paper-style report on your project, written in LaTeX, reviewed by a mentor.",
      features: [
        "Clear research question and contributions",
        "Related-work section with accurate citations",
        "Results with error bars or confidence intervals",
        "Honest limitations and future work",
      ],
    },
    {
      title: "Survey or annotated bibliography",
      level: "Foundation",
      description:
        "A structured survey of a narrow topic summarising and comparing key papers.",
      features: [
        "Taxonomy table comparing approaches",
        "Open problems identified",
      ],
    },
  ],
  testingAndDocs: [
    "Every figure and table regenerable from committed scripts",
    "Environment specification (requirements file or container)",
    "Seeds and hardware documented",
    "Data sources and licences cited",
    "Clear README linking code to sections of the report",
  ],
  dsaTopics: [
    "Algorithm design paradigms: divide and conquer, greedy, DP",
    "Graph algorithms",
    "Complexity analysis and proofs of correctness",
    "Probabilistic algorithms (awareness)",
    "Standard interview DSA if also applying to industry roles",
  ],
  csFundamentals: [
    "Discrete mathematics and theory of computation",
    "Algorithms and complexity",
    "Operating systems and computer architecture",
    "Linear algebra, probability, and statistics",
    "Area-specific fundamentals (ML, systems, networks, theory)",
  ],
  interviewTopics: [
    "Explaining your research project in depth",
    "Questions on papers you list in your statement",
    "Core CS and mathematics fundamentals",
    "Designing an experiment for a given hypothesis",
    "Discussing limitations and alternatives honestly",
    "Entrance exam topics (e.g. GATE syllabus)",
  ],
  portfolio: [
    "Research report or paper (published or as a preprint where appropriate)",
    "Public, reproducible code repository",
    "Talk slides or poster",
    "Strong relationships with faculty for recommendation letters",
  ],
  mistakes: [
    "Starting research without reading related work",
    "Comparing against weak or unfair baselines",
    "Reporting a single lucky run",
    "Approaching faculty with generic mass emails",
    "Leaving statement of purpose and letters until the last month",
  ],
  nextSteps: [
    "Identify two research areas and read three papers in each",
    "Talk to faculty about undergraduate research opportunities",
    "Strengthen mathematics with a structured course",
    "Check the specific requirements of programmes you are interested in",
  ],
  starterActions: [
    "Pick a topic and read one paper using the three-pass method",
    "Write a one-paragraph summary of its contribution and limitations",
    "List three faculty members whose work interests you",
    "Revise one mathematics topic with a problem set",
  ],
};
