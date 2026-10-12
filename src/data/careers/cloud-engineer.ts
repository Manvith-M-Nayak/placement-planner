import type { Career } from "../../lib/types.ts";

export const cloudEngineer: Career = {
  slug: "cloud-engineer",
  title: "Cloud Engineer",
  shortTitle: "Cloud",
  categories: ["cloud"],
  tagline:
    "Design, deploy, and secure applications on cloud infrastructure with an eye on reliability and cost.",
  overview: [
    "Cloud engineers provision and manage the compute, storage, networking, and identity resources that applications run on. They translate application needs into well-structured cloud architectures and keep them secure and cost-effective.",
    "Employers look for strong Linux and networking fundamentals more than memorised service names. Being able to explain why a resource is in a private subnet, who can access a storage bucket, and what a deployment costs per month is the core of the job.",
  ],
  responsibilities: [
    "Provision and configure cloud resources",
    "Design virtual networks, subnets, and security groups",
    "Manage identity and access policies (IAM)",
    "Deploy and scale applications",
    "Set up monitoring, logging, and alerts",
    "Track and optimise cloud costs",
  ],
  entryRoles: [
    "Cloud Engineer / Associate Cloud Engineer",
    "Cloud Support Engineer",
    "Cloud Operations Engineer",
    "Systems Engineer (Cloud)",
    "Junior Solutions Architect",
  ],
  coreSkills: ["Linux", "Networking", "IAM", "AWS/Azure/GCP", "Scripting", "Monitoring"],
  foundationalSkills: [
    "Linux administration and the command line",
    "Computer networking: IP addressing, subnets, DNS, routing",
    "Scripting in Bash and Python",
    "Operating-system concepts",
    "DSA basics for interview rounds",
  ],
  roleSkills: [
    "Cloud compute (VMs, containers, serverless)",
    "Cloud storage (object, block, managed databases)",
    "IAM: least privilege, roles, policies",
    "Virtual networking: VPCs, subnets, gateways, load balancers",
    "Monitoring, logging, and alerting",
    "Cost estimation and optimisation",
  ],
  learningOrder: [
    {
      title: "Linux and scripting",
      duration: "4–5 weeks",
      description:
        "Most cloud workloads run on Linux — be comfortable administering it.",
      topics: [
        "Filesystem, permissions, users, and groups",
        "Processes, services (systemd), and logs",
        "Package management and SSH",
        "Bash scripting: variables, loops, conditionals",
        "Python scripting for automation",
      ],
      outcome: "You can set up and secure a Linux server over SSH and automate tasks.",
    },
    {
      title: "Networking fundamentals",
      duration: "3–4 weeks",
      description:
        "Understand how traffic flows — essential for every cloud design decision.",
      topics: [
        "OSI and TCP/IP models",
        "IP addressing, CIDR, and subnetting",
        "DNS, DHCP, NAT, routing",
        "HTTP/HTTPS and TLS certificates",
        "Firewalls and ports",
      ],
      outcome: "You can design a subnet plan and explain how a request reaches a server.",
    },
    {
      title: "Core cloud services",
      duration: "5–6 weeks",
      description:
        "Learn one major provider's core services well (AWS, Azure, or GCP).",
      topics: [
        "Compute: VMs, autoscaling groups",
        "Storage: object storage, block volumes, managed SQL",
        "Virtual networks: VPC, public/private subnets, gateways",
        "Load balancers and DNS services",
        "Serverless functions (concepts and one example)",
      ],
      outcome: "A web application deployed on cloud VMs behind a load balancer.",
    },
    {
      title: "Identity, security, and access control",
      duration: "3–4 weeks",
      description:
        "Secure the account and the workloads in it.",
      topics: [
        "IAM users, roles, policies, and least privilege",
        "Security groups and network ACLs",
        "Secrets management and encryption at rest/in transit",
        "Shared responsibility model",
        "Audit logging",
      ],
      outcome: "A documented access-control design for your deployed application.",
    },
    {
      title: "Monitoring, logging, and automation",
      duration: "3–4 weeks",
      description:
        "See what your systems are doing and automate their creation.",
      topics: [
        "Metrics, logs, dashboards, and alarms",
        "Health checks and uptime monitoring",
        "Infrastructure as code with Terraform (introduction)",
        "Containers on the cloud (managed container services)",
        "Basic CI/CD for deployments",
      ],
      outcome: "Your infrastructure is defined in code with alarms on key metrics.",
    },
    {
      title: "Architecture, reliability, and cost",
      duration: "3–4 weeks",
      description:
        "Make balanced design trade-offs and prepare for certification-style reasoning.",
      topics: [
        "High availability across zones",
        "Backups and disaster-recovery basics",
        "Well-Architected Framework pillars",
        "Pricing models and cost estimation tools",
        "Associate-level certification preparation (optional)",
      ],
      outcome: "An architecture diagram with availability, security, and cost notes.",
    },
  ],
  technologies: [
    { group: "Cloud providers", items: ["AWS", "Microsoft Azure", "Google Cloud"] },
    { group: "Systems", items: ["Linux (Ubuntu)", "Bash", "Python", "SSH"] },
    { group: "Automation", items: ["Terraform", "AWS CLI / Azure CLI / gcloud", "GitHub Actions"] },
    { group: "Operations", items: ["CloudWatch / Azure Monitor / Cloud Monitoring", "Docker", "Nginx"] },
  ],
  projects: [
    {
      title: "Cloud-hosted application",
      level: "Foundation",
      description:
        "Deploy a simple web application with a managed database on a cloud provider's free tier.",
      features: [
        "Application in a public subnet behind a load balancer; database in a private subnet",
        "HTTPS with a valid certificate",
        "Architecture diagram",
        "Teardown instructions to avoid ongoing cost",
      ],
    },
    {
      title: "Monitored application with access controls",
      level: "Intermediate",
      description:
        "Add monitoring, least-privilege IAM, and infrastructure as code to the deployment.",
      features: [
        "Terraform definitions for all resources",
        "Dashboards and alarms for CPU, errors, and latency",
        "IAM roles scoped to minimum permissions, documented",
        "Monthly cost estimate in the README",
      ],
    },
    {
      title: "Static site with CDN and automated deploys",
      level: "Foundation",
      description:
        "Host a static site on object storage with a CDN and automated deployment from Git.",
      features: [
        "Cache headers configured",
        "CI pipeline deploys on push",
      ],
    },
  ],
  testingAndDocs: [
    "Infrastructure defined in code and reviewed via pull requests",
    "terraform plan output reviewed before apply",
    "Architecture diagram and network design documented",
    "Runbook for common incidents (instance down, disk full)",
    "Cost estimate and teardown steps",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "Stacks and queues",
    "Sorting and binary search",
    "Graphs: BFS/DFS (network reachability)",
    "Basic recursion",
  ],
  csFundamentals: [
    "Computer networks in depth: subnetting, routing, DNS, TLS",
    "Operating systems: processes, memory, file systems",
    "Virtualisation and containers",
    "Basic security principles",
  ],
  interviewTopics: [
    "Linux commands and troubleshooting scenarios",
    "Networking: subnetting, DNS resolution, load balancing",
    "Designing a highly available web application",
    "IAM and least privilege",
    "Explaining your deployed architecture",
    "Scripting exercise in Bash or Python",
    "DSA basics",
  ],
  portfolio: [
    "Infrastructure-as-code repository with diagrams",
    "Documented deployment with screenshots of monitoring",
    "Optional associate-level cloud certification",
    "Blog-style write-up of one troubleshooting experience",
  ],
  mistakes: [
    "Memorising service names without networking fundamentals",
    "Leaving resources running and incurring unexpected bills",
    "Using root/admin credentials for everything",
    "Committing access keys to repositories",
    "Clicking through consoles without codifying infrastructure",
  ],
  nextSteps: [
    "Set up a Linux VM and practise administration daily",
    "Learn subnetting with practice problems",
    "Create a free-tier account and set a billing alert first",
    "Compare with DevOps / SRE and Backend paths",
  ],
  starterActions: [
    "Install Linux (VM or WSL) and complete basic administration tasks",
    "Practise ten subnetting problems",
    "Create a cloud account and configure a billing alert",
    "Deploy a static page to object storage",
  ],
};
