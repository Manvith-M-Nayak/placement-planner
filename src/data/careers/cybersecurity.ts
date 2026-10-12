import type { Career } from "../../lib/types.ts";

export const cybersecurity: Career = {
  slug: "cybersecurity",
  title: "Cybersecurity / Application Security",
  shortTitle: "Cybersecurity",
  categories: ["security"],
  tagline:
    "Protect systems and applications by understanding how they fail — and building defences that work.",
  overview: [
    "Cybersecurity professionals protect organisations from attacks. Entry-level paths include security operations (monitoring and investigating alerts), application security (finding and fixing vulnerabilities in software), and vulnerability management.",
    "Security builds on deep fundamentals: networking, operating systems, and how web applications work. All practical learning must happen in environments you own or are explicitly authorised to test — intentionally vulnerable labs, capture-the-flag platforms, and your own projects.",
  ],
  responsibilities: [
    "Monitor security events and investigate alerts",
    "Review code and applications for vulnerabilities",
    "Perform authorised security testing",
    "Recommend and verify fixes with development teams",
    "Harden systems and manage access controls",
    "Document incidents and contribute to response processes",
  ],
  entryRoles: [
    "Security Analyst / SOC Analyst (L1)",
    "Application Security Engineer (associate)",
    "Vulnerability Assessment Analyst",
    "Security Engineer (graduate)",
    "Information Security Analyst",
  ],
  coreSkills: ["Networking", "Linux", "Web security", "HTTP/TLS", "Python", "Log analysis"],
  foundationalSkills: [
    "Computer networking (TCP/IP, DNS, HTTP)",
    "Linux and Windows operating-system fundamentals",
    "Python or Bash scripting",
    "How web applications are built (frontend, backend, database)",
    "DSA basics for software-focused interviews",
  ],
  roleSkills: [
    "HTTP, TLS, cookies, and session security",
    "Authentication and authorisation flaws",
    "OWASP Top 10 web vulnerabilities and their fixes",
    "Secure coding practices",
    "Security testing with tools in authorised labs",
    "Log analysis, detection, and incident investigation",
  ],
  learningOrder: [
    {
      title: "Networking and operating systems for security",
      duration: "5–6 weeks",
      description:
        "Security is built on understanding exactly how systems communicate and run.",
      topics: [
        "TCP/IP, ports, common protocols, DNS",
        "Packet analysis with Wireshark",
        "Linux permissions, processes, services, logs",
        "Windows fundamentals: users, services, event logs",
        "Virtual machines for an isolated home lab",
      ],
      outcome: "A working home lab with isolated VMs and captured traffic you can explain.",
    },
    {
      title: "Scripting and web application fundamentals",
      duration: "4 weeks",
      description:
        "Automate tasks and understand the applications you will defend.",
      topics: [
        "Python scripting: files, regex, HTTP requests",
        "How web apps work: requests, sessions, databases",
        "Building a small web application yourself",
        "HTTP headers, cookies, and same-origin policy",
        "TLS and certificates",
      ],
      outcome: "You built a small web app and can explain how its sessions work.",
    },
    {
      title: "Authentication, authorisation, and cryptography basics",
      duration: "3–4 weeks",
      description:
        "Understand identity and the cryptographic primitives that protect data.",
      topics: [
        "Password storage: hashing and salting",
        "Sessions, tokens, OAuth 2.0 and OpenID Connect concepts",
        "Access-control models and common flaws (IDOR)",
        "Symmetric vs asymmetric encryption, hashing, signatures",
        "Multi-factor authentication",
      ],
      outcome: "You can identify and fix broken access control in your own application.",
    },
    {
      title: "Web vulnerabilities and secure coding",
      duration: "5–6 weeks",
      description:
        "Learn the most common vulnerabilities and how to prevent them in code.",
      topics: [
        "OWASP Top 10: injection, XSS, broken access control, SSRF",
        "Hands-on practice in authorised labs (PortSwigger Web Security Academy, OWASP Juice Shop)",
        "Secure coding: parameterised queries, output encoding, validation",
        "Security headers and CSP",
        "Dependency vulnerabilities and supply-chain basics",
      ],
      outcome: "Documented lab solutions explaining each vulnerability and its fix.",
    },
    {
      title: "Security testing in controlled environments",
      duration: "4 weeks",
      description:
        "Use professional tools responsibly, only against systems you are authorised to test.",
      topics: [
        "Burp Suite for intercepting and analysing requests",
        "Nmap for network discovery in your own lab",
        "Static analysis (Semgrep) and dependency scanning",
        "Writing clear vulnerability reports with remediation",
        "Rules of engagement and legal/ethical boundaries",
      ],
      outcome: "A lab report with findings, severity, evidence, and remediation steps.",
    },
    {
      title: "Defensive monitoring and incident investigation",
      duration: "4–5 weeks",
      description:
        "Detect and investigate suspicious activity using logs.",
      topics: [
        "Log sources: web server, authentication, system logs",
        "SIEM concepts (Splunk, Elastic, or Wazuh)",
        "Writing detection rules",
        "Incident response lifecycle (NIST)",
        "MITRE ATT&CK framework for mapping behaviour",
      ],
      outcome: "A log-analysis project that detects and explains suspicious activity.",
    },
  ],
  technologies: [
    { group: "Systems", items: ["Linux", "Windows", "VirtualBox / VMware", "Bash", "Python"] },
    { group: "Testing tools (authorised use)", items: ["Burp Suite Community", "Nmap", "Wireshark", "OWASP ZAP", "Semgrep"] },
    { group: "Defensive", items: ["Wazuh", "Elastic Stack", "Splunk (free training)", "Sysmon"] },
    { group: "Practice platforms", items: ["PortSwigger Web Security Academy", "OWASP Juice Shop", "OverTheWire", "TryHackMe"] },
  ],
  projects: [
    {
      title: "Controlled security-testing lab",
      level: "Intermediate",
      description:
        "Build an isolated lab with intentionally vulnerable applications, then test and document findings.",
      features: [
        "Isolated virtual network with no exposure to the internet",
        "Only intentionally vulnerable, self-hosted targets (e.g. OWASP Juice Shop, DVWA)",
        "Professional report: findings, evidence, severity, remediation",
        "Each fix verified by re-testing",
      ],
    },
    {
      title: "Defensive log-analysis project",
      level: "Intermediate",
      description:
        "Collect logs from your own lab machines and build detections for suspicious behaviour.",
      features: [
        "Centralised logging with Wazuh or Elastic",
        "Detection rules mapped to MITRE ATT&CK techniques",
        "Simulated benign and suspicious activity in your own lab",
        "Investigation write-up with timeline",
      ],
    },
    {
      title: "Secure code review of your own project",
      level: "Foundation",
      description:
        "Review one of your earlier applications, fix vulnerabilities, and document the changes.",
      features: [
        "Static analysis with Semgrep",
        "Before/after code for each fix",
      ],
    },
  ],
  testingAndDocs: [
    "Every test performed against systems you own or are authorised to test",
    "Reports include scope, method, findings, severity, and remediation",
    "Regression tests added for each fixed vulnerability",
    "Lab setup documented so others can reproduce it safely",
    "Detection rules documented with expected true and false positives",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "String parsing and pattern matching",
    "Stacks and queues",
    "Graphs: BFS/DFS (attack paths, network maps)",
    "Sorting and binary search",
    "Bit manipulation",
  ],
  csFundamentals: [
    "Computer networks in depth",
    "Operating systems: processes, memory, privileges",
    "Cryptography fundamentals",
    "DBMS: SQL and how injection occurs",
    "Compilers/interpreters basics for understanding code execution",
  ],
  interviewTopics: [
    "Networking: TCP handshake, DNS, common ports",
    "OWASP Top 10 explanations with fixes",
    "Authentication, sessions, and token security",
    "Incident response scenarios",
    "Encryption vs hashing vs encoding",
    "Walking through a lab report or CTF write-up",
    "Scripting exercise",
  ],
  portfolio: [
    "Lab reports and write-ups from authorised platforms",
    "Detection-engineering project repository",
    "Secure-coding fixes in your own projects",
    "Optional entry-level certification (e.g. CompTIA Security+)",
  ],
  mistakes: [
    "Testing systems without explicit authorisation — this can be illegal",
    "Running tools without understanding what they do",
    "Skipping networking and OS fundamentals",
    "Ignoring the defensive side and remediation",
    "Publishing write-ups that reveal live, unpatched issues",
  ],
  nextSteps: [
    "Build an isolated virtual lab on your own machine",
    "Complete the networking and Linux fundamentals first",
    "Start the PortSwigger Web Security Academy learning path",
    "Compare with Cloud Engineer and DevOps paths",
  ],
  starterActions: [
    "Set up an isolated VM lab with a Linux machine",
    "Capture and explain your own HTTP traffic with Wireshark",
    "Complete the first OverTheWire Bandit levels",
    "Read the OWASP Top 10 overview and summarise three categories",
  ],
};
