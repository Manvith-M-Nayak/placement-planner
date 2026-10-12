import type { Career } from "../../lib/types.ts";

export const devopsEngineer: Career = {
  slug: "devops-engineer",
  title: "DevOps / Platform Engineer / SRE",
  shortTitle: "DevOps / SRE",
  categories: ["cloud"],
  tagline:
    "Automate delivery, run reliable platforms, and keep production systems healthy.",
  overview: [
    "DevOps, platform, and site reliability engineers build the paths that take code from a commit to production — and keep it running once there. They automate builds and deployments, manage containers and orchestration, and design monitoring that catches problems before users do.",
    "This path rewards people who enjoy systems, automation, and troubleshooting. Interviews probe Linux, networking, scripting, CI/CD design, containers, and how you would investigate an incident step by step.",
  ],
  responsibilities: [
    "Build and maintain CI/CD pipelines",
    "Containerise applications and manage orchestration",
    "Define infrastructure as code",
    "Implement monitoring, logging, and alerting",
    "Respond to incidents and write post-incident reviews",
    "Improve developer tooling and platform reliability",
  ],
  entryRoles: [
    "DevOps Engineer (entry level)",
    "Site Reliability Engineer (associate)",
    "Platform Engineer (junior)",
    "Build & Release Engineer",
    "Infrastructure Engineer",
  ],
  coreSkills: ["Linux", "Bash", "CI/CD", "Docker", "Kubernetes", "Monitoring"],
  foundationalSkills: [
    "Linux administration",
    "Networking fundamentals",
    "Shell scripting and Python",
    "Git branching strategies",
    "Operating-system internals",
    "DSA basics for coding rounds",
  ],
  roleSkills: [
    "CI/CD design (build, test, release, rollback)",
    "Docker images and container best practices",
    "Kubernetes workloads, services, and configuration",
    "Infrastructure as code (Terraform, Ansible)",
    "Observability: metrics, logs, traces, alerting",
    "Reliability: SLIs, SLOs, error budgets, incident response",
  ],
  learningOrder: [
    {
      title: "Linux, shell, and Git",
      duration: "4–5 weeks",
      description:
        "Become fast and confident on the command line — the everyday environment of the role.",
      topics: [
        "Processes, signals, systemd, journald",
        "File permissions, disk usage, networking commands",
        "Bash scripting with error handling (set -euo pipefail)",
        "Text processing: grep, sed, awk, jq",
        "Git branching, rebasing, tagging releases",
      ],
      outcome: "You can write robust shell scripts and troubleshoot a Linux host.",
    },
    {
      title: "Networking for operations",
      duration: "3 weeks",
      description:
        "Diagnose connectivity issues and understand service communication.",
      topics: [
        "TCP/IP, ports, DNS resolution",
        "HTTP, reverse proxies, load balancers",
        "TLS certificates",
        "Troubleshooting tools: curl, dig, ss, traceroute, tcpdump",
        "Firewalls and network policies",
      ],
      outcome: "You can trace why a service is unreachable using standard tools.",
    },
    {
      title: "Containers and CI/CD",
      duration: "4–5 weeks",
      description:
        "Package applications consistently and automate their delivery.",
      topics: [
        "Dockerfiles, layers, multi-stage builds, image size",
        "docker-compose for local environments",
        "CI pipelines with GitHub Actions or GitLab CI",
        "Automated tests, linting, and image scanning in CI",
        "Release strategies: rolling, blue-green, canary",
      ],
      outcome: "A containerised application with a CI pipeline that builds, tests, and publishes images.",
    },
    {
      title: "Infrastructure as code and cloud fundamentals",
      duration: "4 weeks",
      description:
        "Create reproducible infrastructure on a cloud provider.",
      topics: [
        "Terraform: providers, resources, state, modules",
        "Configuration management with Ansible (introduction)",
        "Cloud compute, networking, and IAM basics",
        "Secrets management",
        "Environment promotion (dev → staging → prod)",
      ],
      outcome: "Infrastructure for your application created and destroyed from code.",
    },
    {
      title: "Kubernetes",
      duration: "5–6 weeks",
      description:
        "Run containerised workloads on an orchestrator.",
      topics: [
        "Pods, Deployments, Services, Ingress",
        "ConfigMaps, Secrets, resource requests and limits",
        "Liveness and readiness probes",
        "Helm charts",
        "Local clusters with kind or minikube",
      ],
      outcome: "Your application runs on a local Kubernetes cluster via Helm with health probes.",
    },
    {
      title: "Observability and reliability engineering",
      duration: "4 weeks",
      description:
        "Know when things break and respond systematically.",
      topics: [
        "Prometheus metrics and Grafana dashboards",
        "Centralised logging (Loki or ELK)",
        "SLIs, SLOs, and error budgets",
        "Alert design: actionable alerts, avoiding noise",
        "Incident response and blameless post-incident reviews",
      ],
      outcome: "Dashboards, alerts, and a written runbook for your deployed application.",
    },
  ],
  technologies: [
    { group: "Systems", items: ["Linux", "Bash", "Python", "Git"] },
    { group: "Containers", items: ["Docker", "Kubernetes", "Helm", "kind / minikube"] },
    { group: "Delivery", items: ["GitHub Actions", "GitLab CI", "Argo CD (awareness)", "Jenkins (awareness)"] },
    { group: "Infrastructure", items: ["Terraform", "Ansible", "AWS / Azure / GCP"] },
    { group: "Observability", items: ["Prometheus", "Grafana", "Loki / ELK stack", "OpenTelemetry (awareness)"] },
  ],
  projects: [
    {
      title: "Containerised application with CI/CD",
      level: "Intermediate",
      description:
        "Containerise a small multi-service application and build a pipeline from commit to deployment.",
      features: [
        "Multi-stage Dockerfile with small final image",
        "Pipeline stages: lint, test, build, scan, publish",
        "Automatic deployment to a staging environment",
        "Rollback procedure documented",
      ],
    },
    {
      title: "Application with health checks, monitoring, and deployment docs",
      level: "Advanced",
      description:
        "Run the application on Kubernetes with probes, metrics, dashboards, and alerting.",
      features: [
        "Liveness and readiness probes",
        "Prometheus metrics and a Grafana dashboard",
        "Defined SLO with an alert on error-budget burn",
        "Runbook and deployment guide",
      ],
    },
    {
      title: "Infrastructure as code module",
      level: "Intermediate",
      description:
        "A reusable Terraform module that provisions a network and compute environment.",
      features: [
        "Variables and outputs documented",
        "Remote state configuration explained",
      ],
    },
  ],
  testingAndDocs: [
    "Pipeline runs tests and fails on errors before deploying",
    "Linting for Dockerfiles, shell scripts, and Terraform",
    "Runbooks for common failures",
    "Architecture and deployment diagrams",
    "Post-incident review template with one worked example",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "Stacks and queues",
    "Graphs: BFS/DFS and topological sort (dependency ordering)",
    "Heaps (scheduling)",
    "Sorting and binary search",
    "String parsing (log processing)",
  ],
  csFundamentals: [
    "Operating systems: processes, scheduling, memory, file systems, cgroups/namespaces",
    "Computer networks: TCP, DNS, HTTP, load balancing",
    "Distributed systems basics: replication, consensus concepts",
    "Security basics: least privilege, secrets",
  ],
  interviewTopics: [
    "Linux troubleshooting: high CPU, full disk, process not starting",
    "Networking: DNS, TCP handshake, debugging connectivity",
    "Designing a CI/CD pipeline",
    "Docker and Kubernetes concepts",
    "Monitoring and incident response scenarios",
    "Scripting exercise",
    "DSA basics",
  ],
  portfolio: [
    "A repository showing the full path from commit to running service",
    "Dashboards and alert screenshots",
    "Runbooks and post-incident review examples",
    "Clean, documented Terraform or Helm code",
  ],
  mistakes: [
    "Learning Kubernetes before Linux and networking",
    "Copying YAML without understanding each field",
    "Alerting on everything, producing noise",
    "Storing secrets in plain text in repositories",
    "No documentation of how to recover from failure",
  ],
  nextSteps: [
    "Practise Linux administration daily",
    "Write a CI pipeline for an existing project",
    "Containerise one of your applications",
    "Compare with Cloud Engineer and Backend Developer paths",
  ],
  starterActions: [
    "Write a Bash script that checks disk usage and logs warnings",
    "Containerise a small application with a multi-stage Dockerfile",
    "Add a GitHub Actions workflow that runs tests on push",
    "Practise troubleshooting with curl, dig, and ss",
  ],
};
