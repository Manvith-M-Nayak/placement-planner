import type { Resource, ResourceTopic } from "../lib/types.ts";

export const resourceTopics: ResourceTopic[] = [
  { id: "programming", label: "Programming", description: "Language documentation and introductory programming courses." },
  { id: "dsa", label: "DSA", description: "Data structures, algorithms, and problem-solving practice." },
  { id: "oop", label: "OOP", description: "Object-oriented programming and design patterns." },
  { id: "dbms-sql", label: "DBMS and SQL", description: "Relational databases, SQL, and database internals." },
  { id: "operating-systems", label: "Operating systems", description: "Processes, memory, concurrency, and file systems." },
  { id: "computer-networks", label: "Computer networks", description: "Protocols, the web, and network programming." },
  { id: "software-engineering", label: "Software engineering", description: "Version control, testing, code quality, and architecture." },
  { id: "web-development", label: "Web development", description: "HTML, CSS, JavaScript, and web frameworks." },
  { id: "ai-ml", label: "AI and ML", description: "Mathematics, machine learning, and deep learning." },
  { id: "generative-ai", label: "Generative AI", description: "LLMs, retrieval, evaluation, and LLM security." },
  { id: "data-engineering", label: "Data engineering and analytics", description: "Pipelines, data processing, analysis, and BI tools." },
  { id: "cloud-devops", label: "Cloud and DevOps", description: "Cloud platforms, containers, CI/CD, and reliability." },
  { id: "cybersecurity", label: "Cybersecurity", description: "Web security, defensive practice, and frameworks." },
  { id: "mobile-development", label: "Mobile development", description: "Android, iOS, and cross-platform frameworks." },
  { id: "systems-programming", label: "Systems programming", description: "C, C++, Rust, and low-level tooling." },
  { id: "research", label: "Research", description: "Finding papers, mathematics, and research communication." },
  { id: "interview-preparation", label: "Interview preparation", description: "Coding practice, system design, and aptitude." },
  { id: "resume-portfolio", label: "Resume and portfolio", description: "Resumes, READMEs, and GitHub profiles." },
];

const ALL_SOFTWARE = ["software-engineer", "backend-developer", "full-stack-developer", "frontend-developer"];

export const resources: Resource[] = [
  // Programming
  { name: "CS50x: Introduction to Computer Science", topic: "programming", type: "Course", description: "Harvard's introductory course covering C, Python, SQL, and web basics with problem sets.", careers: ["software-engineer", "systems-programmer", "research"], url: "https://cs50.harvard.edu/x/" },
  { name: "The Python Tutorial", topic: "programming", type: "Documentation", description: "Official tutorial from the Python documentation covering the language from basics to classes and modules.", careers: ["ai-ml-engineer", "generative-ai-engineer", "data-engineer", "data-analyst"], url: "https://docs.python.org/3/tutorial/" },
  { name: "Learn Java (dev.java)", topic: "programming", type: "Documentation", description: "Oracle's official learning hub for modern Java, from basics to the standard library.", careers: ["software-engineer", "backend-developer"], url: "https://dev.java/learn/" },
  { name: "cppreference.com", topic: "programming", type: "Reference", description: "Community-maintained reference for the C and C++ languages and standard libraries.", careers: ["systems-programmer", "software-engineer"], url: "https://en.cppreference.com/" },
  { name: "TypeScript Handbook", topic: "programming", type: "Documentation", description: "Official guide to TypeScript's type system and everyday usage.", careers: ["frontend-developer", "full-stack-developer"], url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
  { name: "Kotlin documentation", topic: "programming", type: "Documentation", description: "Official Kotlin language documentation and guides.", careers: ["mobile-developer", "backend-developer"], url: "https://kotlinlang.org/docs/home.html" },
  { name: "The Missing Semester of Your CS Education", topic: "programming", type: "Course", description: "MIT course on the shell, editors, Git, debugging, and other practical developer tools.", careers: [...ALL_SOFTWARE, "devops-engineer", "systems-programmer"], url: "https://missing.csail.mit.edu/" },

  // DSA
  { name: "MIT 6.006 Introduction to Algorithms", topic: "dsa", type: "Course", description: "Lecture videos, notes, and problem sets from MIT OpenCourseWare.", careers: ["software-engineer", "research", "systems-programmer"], url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/" },
  { name: "Algorithms, 4th Edition (Sedgewick & Wayne)", topic: "dsa", type: "Book", description: "Book website with Java implementations of fundamental algorithms and data structures.", careers: ["software-engineer", "backend-developer"], url: "https://algs4.cs.princeton.edu/" },
  { name: "VisuAlgo", topic: "dsa", type: "Tutorial", description: "Animated visualisations of data structures and algorithms.", careers: ["software-engineer"], url: "https://visualgo.net/" },
  { name: "CP-Algorithms", topic: "dsa", type: "Reference", description: "Detailed articles on algorithms frequently used in competitive programming.", careers: ["software-engineer", "systems-programmer"], url: "https://cp-algorithms.com/" },
  { name: "Introduction to Algorithms (CLRS)", topic: "dsa", type: "Book", description: "Comprehensive algorithms textbook by Cormen, Leiserson, Rivest, and Stein. Usually available in university libraries.", careers: ["software-engineer", "research"] },

  // OOP
  { name: "Java Tutorials: Object-Oriented Programming Concepts", topic: "oop", type: "Tutorial", description: "Official Oracle lesson on objects, classes, inheritance, interfaces, and packages.", careers: ["software-engineer", "backend-developer", "mobile-developer"], url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
  { name: "Python Tutorial: Classes", topic: "oop", type: "Documentation", description: "Official explanation of classes, inheritance, and iterators in Python.", careers: ["ai-ml-engineer", "backend-developer"], url: "https://docs.python.org/3/tutorial/classes.html" },
  { name: "Refactoring.Guru: Design Patterns", topic: "oop", type: "Guide", description: "Illustrated explanations of classic design patterns with code examples.", careers: ALL_SOFTWARE, url: "https://refactoring.guru/design-patterns" },

  // DBMS & SQL
  { name: "PostgreSQL Documentation", topic: "dbms-sql", type: "Documentation", description: "Official PostgreSQL manual including an SQL tutorial and detailed reference.", careers: ["backend-developer", "full-stack-developer", "data-engineer"], url: "https://www.postgresql.org/docs/" },
  { name: "SQLBolt", topic: "dbms-sql", type: "Tutorial", description: "Interactive lessons for learning SQL in the browser.", careers: ["data-analyst", "data-engineer", "software-engineer"], url: "https://sqlbolt.com/" },
  { name: "CMU 15-445/645 Database Systems", topic: "dbms-sql", type: "Course", description: "Carnegie Mellon course on database internals: storage, indexing, query processing, transactions.", careers: ["backend-developer", "data-engineer", "systems-programmer"], url: "https://15445.courses.cs.cmu.edu/" },
  { name: "SQLite Documentation", topic: "dbms-sql", type: "Documentation", description: "Official documentation for SQLite, widely used in mobile and embedded applications.", careers: ["mobile-developer", "software-engineer"], url: "https://www.sqlite.org/docs.html" },

  // OS
  { name: "Operating Systems: Three Easy Pieces (OSTEP)", topic: "operating-systems", type: "Book", description: "Free online textbook on virtualisation, concurrency, and persistence.", careers: ["software-engineer", "systems-programmer", "devops-engineer"], url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
  { name: "MIT 6.1810 Operating System Engineering", topic: "operating-systems", type: "Course", description: "MIT course using the xv6 teaching operating system with hands-on labs.", careers: ["systems-programmer", "research"], url: "https://pdos.csail.mit.edu/6.1810/" },
  { name: "The Linux Command Line (William Shotts)", topic: "operating-systems", type: "Book", description: "Free book introducing the Linux shell and scripting.", careers: ["devops-engineer", "cloud-engineer", "cybersecurity"], url: "https://linuxcommand.org/tlcl.php" },

  // Networks
  { name: "Beej's Guide to Network Programming", topic: "computer-networks", type: "Guide", description: "Practical guide to socket programming in C.", careers: ["systems-programmer", "backend-developer"], url: "https://beej.us/guide/bgnet/" },
  { name: "MDN: An overview of HTTP", topic: "computer-networks", type: "Documentation", description: "Mozilla's documentation on HTTP messages, methods, caching, and cookies.", careers: [...ALL_SOFTWARE, "cybersecurity"], url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
  { name: "Cloudflare Learning Center", topic: "computer-networks", type: "Guide", description: "Plain-language explanations of DNS, CDNs, TLS, DDoS, and other networking topics.", careers: ["cloud-engineer", "devops-engineer", "cybersecurity"], url: "https://www.cloudflare.com/learning/" },
  { name: "Computer Networking: A Top-Down Approach (Kurose & Ross)", topic: "computer-networks", type: "Book", description: "Widely used networking textbook covering the application layer down to the link layer.", careers: ["software-engineer", "cloud-engineer", "cybersecurity"] },

  // Software engineering
  { name: "Pro Git", topic: "software-engineering", type: "Book", description: "The official free book on Git, from basics to internals.", careers: [...ALL_SOFTWARE, "devops-engineer"], url: "https://git-scm.com/book/en/v2" },
  { name: "GitHub Docs", topic: "software-engineering", type: "Documentation", description: "Official documentation for repositories, pull requests, and GitHub Actions.", careers: [...ALL_SOFTWARE, "devops-engineer"], url: "https://docs.github.com/" },
  { name: "Google Engineering Practices", topic: "software-engineering", type: "Guide", description: "Google's published guidelines for code review from both author and reviewer perspectives.", careers: ALL_SOFTWARE, url: "https://google.github.io/eng-practices/" },
  { name: "The Twelve-Factor App", topic: "software-engineering", type: "Guide", description: "Methodology for building deployable, maintainable web services.", careers: ["backend-developer", "devops-engineer", "cloud-engineer"], url: "https://12factor.net/" },
  { name: "Martin Fowler's articles", topic: "software-engineering", type: "Guide", description: "Articles on refactoring, testing, architecture, and software design.", careers: ALL_SOFTWARE, url: "https://martinfowler.com/" },

  // Web development
  { name: "MDN Web Docs", topic: "web-development", type: "Documentation", description: "Mozilla's reference and learning material for HTML, CSS, and JavaScript.", careers: ["frontend-developer", "full-stack-developer"], url: "https://developer.mozilla.org/" },
  { name: "React documentation", topic: "web-development", type: "Documentation", description: "Official React docs with interactive tutorials on components, state, and effects.", careers: ["frontend-developer", "full-stack-developer"], url: "https://react.dev/learn" },
  { name: "Next.js documentation", topic: "web-development", type: "Documentation", description: "Official documentation for the Next.js React framework.", careers: ["frontend-developer", "full-stack-developer"], url: "https://nextjs.org/docs" },
  { name: "web.dev Learn", topic: "web-development", type: "Course", description: "Google's courses on CSS, accessibility, performance, and modern web platform features.", careers: ["frontend-developer", "full-stack-developer"], url: "https://web.dev/learn" },
  { name: "Node.js Learn", topic: "web-development", type: "Documentation", description: "Official learning material for Node.js, including asynchronous programming.", careers: ["full-stack-developer", "backend-developer"], url: "https://nodejs.org/en/learn" },
  { name: "WAI-ARIA Authoring Practices Guide", topic: "web-development", type: "Guide", description: "W3C guidance on building accessible widgets such as dialogs, tabs, and menus.", careers: ["frontend-developer", "full-stack-developer"], url: "https://www.w3.org/WAI/ARIA/apg/" },
  { name: "FastAPI documentation", topic: "web-development", type: "Documentation", description: "Official tutorial for building Python APIs with validation and automatic OpenAPI docs.", careers: ["backend-developer", "generative-ai-engineer", "ai-ml-engineer"], url: "https://fastapi.tiangolo.com/" },
  { name: "Spring guides", topic: "web-development", type: "Tutorial", description: "Official getting-started guides for Spring Boot and related projects.", careers: ["backend-developer", "software-engineer"], url: "https://spring.io/guides" },

  // AI & ML
  { name: "Mathematics for Machine Learning", topic: "ai-ml", type: "Book", description: "Free book covering linear algebra, calculus, probability, and optimisation for ML.", careers: ["ai-ml-engineer", "research"], url: "https://mml-book.github.io/" },
  { name: "MIT 18.06 Linear Algebra", topic: "ai-ml", type: "Course", description: "Gilbert Strang's linear algebra course on MIT OpenCourseWare.", careers: ["ai-ml-engineer", "research"], url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/" },
  { name: "Machine Learning Crash Course", topic: "ai-ml", type: "Course", description: "Google's introductory machine-learning course with exercises.", careers: ["ai-ml-engineer", "data-analyst"], url: "https://developers.google.com/machine-learning/crash-course" },
  { name: "scikit-learn User Guide", topic: "ai-ml", type: "Documentation", description: "Official guide to classical ML algorithms, model selection, and evaluation.", careers: ["ai-ml-engineer", "data-analyst"], url: "https://scikit-learn.org/stable/user_guide.html" },
  { name: "PyTorch Tutorials", topic: "ai-ml", type: "Tutorial", description: "Official tutorials for tensors, autograd, and training neural networks.", careers: ["ai-ml-engineer", "research"], url: "https://pytorch.org/tutorials/" },
  { name: "Practical Deep Learning for Coders (fast.ai)", topic: "ai-ml", type: "Course", description: "Free, code-first deep-learning course.", careers: ["ai-ml-engineer"], url: "https://course.fast.ai/" },
  { name: "Stanford CS231n", topic: "ai-ml", type: "Course", description: "Stanford course on deep learning for computer vision with detailed notes.", careers: ["ai-ml-engineer", "research"], url: "https://cs231n.stanford.edu/" },
  { name: "Kaggle Learn", topic: "ai-ml", type: "Course", description: "Short, hands-on courses on Python, pandas, ML, and SQL.", careers: ["ai-ml-engineer", "data-analyst", "data-engineer"], url: "https://www.kaggle.com/learn" },

  // Generative AI
  { name: "Hugging Face Learn", topic: "generative-ai", type: "Course", description: "Free courses on transformers, LLMs, and related tooling from Hugging Face.", careers: ["generative-ai-engineer", "ai-ml-engineer"], url: "https://huggingface.co/learn" },
  { name: "OWASP GenAI Security Project (Top 10 for LLM Applications)", topic: "generative-ai", type: "Guide", description: "OWASP guidance on risks such as prompt injection and insecure output handling.", careers: ["generative-ai-engineer", "cybersecurity"], url: "https://genai.owasp.org/" },
  { name: "Sentence Transformers documentation", topic: "generative-ai", type: "Documentation", description: "Library documentation for computing text embeddings and semantic search.", careers: ["generative-ai-engineer"], url: "https://www.sbert.net/" },
  { name: "pgvector", topic: "generative-ai", type: "Documentation", description: "Open-source vector similarity search extension for PostgreSQL.", careers: ["generative-ai-engineer", "backend-developer"], url: "https://github.com/pgvector/pgvector" },
  { name: "FAISS", topic: "generative-ai", type: "Documentation", description: "Library for efficient similarity search over dense vectors, from Meta AI Research.", careers: ["generative-ai-engineer", "ai-ml-engineer"], url: "https://github.com/facebookresearch/faiss" },
  { name: "Attention Is All You Need (Vaswani et al., 2017)", topic: "generative-ai", type: "Paper repository", description: "The paper introducing the transformer architecture, available on arXiv.", careers: ["generative-ai-engineer", "ai-ml-engineer", "research"], url: "https://arxiv.org/abs/1706.03762" },

  // Data engineering
  { name: "Data Engineering Zoomcamp (DataTalksClub)", topic: "data-engineering", type: "Course", description: "Free course covering ingestion, orchestration, warehousing, Spark, and streaming.", careers: ["data-engineer"], url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
  { name: "Apache Airflow documentation", topic: "data-engineering", type: "Documentation", description: "Official documentation for authoring and scheduling workflows as DAGs.", careers: ["data-engineer"], url: "https://airflow.apache.org/docs/" },
  { name: "dbt documentation", topic: "data-engineering", type: "Documentation", description: "Official docs for SQL-based transformations, testing, and documentation.", careers: ["data-engineer", "data-analyst"], url: "https://docs.getdbt.com/" },
  { name: "Apache Spark documentation", topic: "data-engineering", type: "Documentation", description: "Official guides for Spark SQL, DataFrames, and structured streaming.", careers: ["data-engineer"], url: "https://spark.apache.org/docs/latest/" },
  { name: "pandas documentation", topic: "data-engineering", type: "Documentation", description: "User guide and API reference for data manipulation in Python.", careers: ["data-engineer", "data-analyst", "ai-ml-engineer"], url: "https://pandas.pydata.org/docs/" },
  { name: "Microsoft Power BI documentation", topic: "data-engineering", type: "Documentation", description: "Official documentation and learning paths for building Power BI reports.", careers: ["data-analyst"], url: "https://learn.microsoft.com/en-us/power-bi/" },
  { name: "Khan Academy: Statistics and probability", topic: "ai-ml", type: "Course", description: "Free statistics course covering distributions, inference, and hypothesis testing.", careers: ["data-analyst", "ai-ml-engineer", "research"], url: "https://www.khanacademy.org/math/statistics-probability" },

  // Cloud & DevOps
  { name: "Docker: Get started", topic: "cloud-devops", type: "Documentation", description: "Official introduction to containers, images, and Docker Compose.", careers: ["devops-engineer", "cloud-engineer", "backend-developer"], url: "https://docs.docker.com/get-started/" },
  { name: "Kubernetes tutorials", topic: "cloud-devops", type: "Tutorial", description: "Official interactive tutorials covering Kubernetes basics.", careers: ["devops-engineer", "cloud-engineer"], url: "https://kubernetes.io/docs/tutorials/" },
  { name: "Terraform tutorials", topic: "cloud-devops", type: "Tutorial", description: "HashiCorp's official tutorials for infrastructure as code.", careers: ["devops-engineer", "cloud-engineer"], url: "https://developer.hashicorp.com/terraform/tutorials" },
  { name: "AWS Documentation", topic: "cloud-devops", type: "Documentation", description: "Official documentation for Amazon Web Services.", careers: ["cloud-engineer", "devops-engineer"], url: "https://docs.aws.amazon.com/" },
  { name: "Microsoft Azure documentation", topic: "cloud-devops", type: "Documentation", description: "Official documentation and learning paths for Azure.", careers: ["cloud-engineer", "devops-engineer"], url: "https://learn.microsoft.com/en-us/azure/" },
  { name: "Google Cloud documentation", topic: "cloud-devops", type: "Documentation", description: "Official documentation for Google Cloud services.", careers: ["cloud-engineer", "devops-engineer", "data-engineer"], url: "https://cloud.google.com/docs" },
  { name: "Site Reliability Engineering (Google)", topic: "cloud-devops", type: "Book", description: "Free online book on SLOs, monitoring, incident response, and reliability practices.", careers: ["devops-engineer", "cloud-engineer"], url: "https://sre.google/sre-book/table-of-contents/" },
  { name: "GitHub Actions documentation", topic: "cloud-devops", type: "Documentation", description: "Official guide to building CI/CD workflows on GitHub.", careers: ["devops-engineer", ...ALL_SOFTWARE], url: "https://docs.github.com/en/actions" },
  { name: "Prometheus documentation", topic: "cloud-devops", type: "Documentation", description: "Official docs for metrics collection, querying, and alerting.", careers: ["devops-engineer", "cloud-engineer"], url: "https://prometheus.io/docs/introduction/overview/" },

  // Cybersecurity
  { name: "OWASP Top 10", topic: "cybersecurity", type: "Guide", description: "The standard awareness document for the most critical web application security risks.", careers: ["cybersecurity", ...ALL_SOFTWARE], url: "https://owasp.org/www-project-top-ten/" },
  { name: "OWASP Cheat Sheet Series", topic: "cybersecurity", type: "Reference", description: "Concise, practical guidance on secure implementation of common features.", careers: ["cybersecurity", "backend-developer", "full-stack-developer"], url: "https://cheatsheetseries.owasp.org/" },
  { name: "PortSwigger Web Security Academy", topic: "cybersecurity", type: "Practice", description: "Free, legal, interactive labs covering web vulnerabilities.", careers: ["cybersecurity"], url: "https://portswigger.net/web-security" },
  { name: "OWASP Juice Shop", topic: "cybersecurity", type: "Practice", description: "Intentionally insecure web application to run locally for authorised security training.", careers: ["cybersecurity"], url: "https://owasp.org/www-project-juice-shop/" },
  { name: "OverTheWire Wargames", topic: "cybersecurity", type: "Practice", description: "Beginner-friendly wargames (start with Bandit) for learning Linux and security concepts legally.", careers: ["cybersecurity", "devops-engineer"], url: "https://overthewire.org/wargames/" },
  { name: "MITRE ATT&CK", topic: "cybersecurity", type: "Reference", description: "Knowledge base of adversary tactics and techniques used for detection engineering.", careers: ["cybersecurity"], url: "https://attack.mitre.org/" },
  { name: "NIST Cybersecurity Framework", topic: "cybersecurity", type: "Guide", description: "Framework for managing cybersecurity risk, widely referenced in industry.", careers: ["cybersecurity"], url: "https://www.nist.gov/cyberframework" },

  // Mobile
  { name: "Android Developers: Courses", topic: "mobile-development", type: "Course", description: "Official Android courses including Jetpack Compose fundamentals.", careers: ["mobile-developer"], url: "https://developer.android.com/courses" },
  { name: "The Swift Programming Language", topic: "mobile-development", type: "Book", description: "Official book on the Swift language from swift.org.", careers: ["mobile-developer"], url: "https://docs.swift.org/swift-book/" },
  { name: "Flutter documentation", topic: "mobile-development", type: "Documentation", description: "Official documentation and codelabs for building cross-platform apps with Flutter.", careers: ["mobile-developer"], url: "https://docs.flutter.dev/" },
  { name: "React Native documentation", topic: "mobile-development", type: "Documentation", description: "Official guide to building native apps with React.", careers: ["mobile-developer", "frontend-developer"], url: "https://reactnative.dev/docs/getting-started" },

  // Systems
  { name: "Beej's Guide to C Programming", topic: "systems-programming", type: "Guide", description: "Free, approachable guide to the C language.", careers: ["systems-programmer"], url: "https://beej.us/guide/bgc/" },
  { name: "The Rust Programming Language", topic: "systems-programming", type: "Book", description: "The official free book for learning Rust, including ownership and concurrency.", careers: ["systems-programmer"], url: "https://doc.rust-lang.org/book/" },
  { name: "Computer Systems: A Programmer's Perspective (CS:APP)", topic: "systems-programming", type: "Book", description: "Textbook on how programs execute: data representation, memory, linking, and concurrency.", careers: ["systems-programmer", "software-engineer"], url: "https://csapp.cs.cmu.edu/" },
  { name: "Valgrind Quick Start", topic: "systems-programming", type: "Documentation", description: "Official guide to detecting memory errors and leaks with Valgrind.", careers: ["systems-programmer"], url: "https://valgrind.org/docs/manual/quick-start.html" },
  { name: "GDB documentation", topic: "systems-programming", type: "Documentation", description: "Official documentation for the GNU debugger.", careers: ["systems-programmer"], url: "https://sourceware.org/gdb/documentation/" },

  // Research
  { name: "arXiv", topic: "research", type: "Paper repository", description: "Open-access repository of preprints in computer science, mathematics, and more.", careers: ["research", "ai-ml-engineer", "generative-ai-engineer"], url: "https://arxiv.org/" },
  { name: "Google Scholar", topic: "research", type: "Paper repository", description: "Search engine for scholarly literature with citation tracking.", careers: ["research"], url: "https://scholar.google.com/" },
  { name: "Semantic Scholar", topic: "research", type: "Paper repository", description: "AI-assisted academic search with citation graphs and paper summaries.", careers: ["research"], url: "https://www.semanticscholar.org/" },
  { name: "DBLP Computer Science Bibliography", topic: "research", type: "Paper repository", description: "Bibliographic database of computer-science publications and authors.", careers: ["research"], url: "https://dblp.org/" },
  { name: "ACL Anthology", topic: "research", type: "Paper repository", description: "Open archive of papers in computational linguistics and NLP.", careers: ["research", "generative-ai-engineer"], url: "https://aclanthology.org/" },
  { name: "Overleaf Learn LaTeX", topic: "research", type: "Documentation", description: "Documentation and tutorials for writing documents in LaTeX.", careers: ["research"], url: "https://www.overleaf.com/learn" },
  { name: "Distill", topic: "research", type: "Paper repository", description: "Archive of clear, interactive articles explaining machine-learning research.", careers: ["research", "ai-ml-engineer"], url: "https://distill.pub/" },
  { name: "How to Read a Paper (S. Keshav)", topic: "research", type: "Guide", description: "Short, widely cited article describing the three-pass approach to reading research papers. Search for it by title.", careers: ["research"] },

  // Interview prep
  { name: "Tech Interview Handbook", topic: "interview-preparation", type: "Guide", description: "Free guide to coding interviews, behavioural rounds, and resumes.", careers: [...ALL_SOFTWARE, "mobile-developer"], url: "https://www.techinterviewhandbook.org/" },
  { name: "LeetCode", topic: "interview-preparation", type: "Practice", description: "Large collection of coding problems commonly used for interview practice.", careers: [...ALL_SOFTWARE, "ai-ml-engineer", "mobile-developer"], url: "https://leetcode.com/" },
  { name: "NeetCode", topic: "interview-preparation", type: "Practice", description: "Curated problem lists organised by pattern, with video explanations.", careers: ALL_SOFTWARE, url: "https://neetcode.io/" },
  { name: "Codeforces", topic: "interview-preparation", type: "Practice", description: "Competitive-programming platform with regular contests and a large problem archive.", careers: ["software-engineer", "systems-programmer"], url: "https://codeforces.com/" },
  { name: "System Design Primer", topic: "interview-preparation", type: "Guide", description: "Open-source collection on designing large-scale systems.", careers: ["software-engineer", "backend-developer", "devops-engineer"], url: "https://github.com/donnemartin/system-design-primer" },
  { name: "GeeksforGeeks", topic: "interview-preparation", type: "Reference", description: "Articles on DSA, core CS subjects, and interview experiences shared by candidates.", careers: [...ALL_SOFTWARE, "data-analyst"], url: "https://www.geeksforgeeks.org/" },
  { name: "IndiaBIX", topic: "interview-preparation", type: "Practice", description: "Aptitude, logical reasoning, and verbal ability practice questions.", careers: ["data-analyst", "software-engineer", "cloud-engineer"], url: "https://www.indiabix.com/" },

  // Resume & portfolio
  { name: "Tech Interview Handbook: Resume", topic: "resume-portfolio", type: "Guide", description: "Practical guidance on writing a software-engineering resume.", careers: [...ALL_SOFTWARE, "data-analyst"], url: "https://www.techinterviewhandbook.org/resume/" },
  { name: "Make a README", topic: "resume-portfolio", type: "Guide", description: "Guidance and a template for writing clear project READMEs.", careers: ALL_SOFTWARE, url: "https://www.makeareadme.com/" },
  { name: "GitHub Docs: Setting up your profile", topic: "resume-portfolio", type: "Documentation", description: "Official guidance on profile READMEs and pinning repositories.", careers: ALL_SOFTWARE, url: "https://docs.github.com/en/account-and-profile" },
  { name: "Choose a License", topic: "resume-portfolio", type: "Guide", description: "GitHub's guide to choosing an open-source licence for your projects.", careers: ALL_SOFTWARE, url: "https://choosealicense.com/" },
];
