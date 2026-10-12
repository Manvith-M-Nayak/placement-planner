import type { Career } from "../../lib/types.ts";

export const dataAnalyst: Career = {
  slug: "data-analyst",
  title: "Data Analyst / BI Developer",
  shortTitle: "Data Analytics",
  categories: ["data"],
  tagline:
    "Turn data into clear answers, dashboards, and recommendations that drive decisions.",
  overview: [
    "Data analysts and BI developers answer business questions with data. They write SQL to pull and shape data, analyse trends, build dashboards, and — most importantly — communicate findings in a way that leads to decisions.",
    "Technical skill matters, but so does judgement: choosing the right metric, spotting misleading comparisons, and explaining uncertainty to non-technical stakeholders. Strong SQL and a well-presented case study are the core of a good application.",
  ],
  responsibilities: [
    "Translate business questions into analysis plans",
    "Write SQL to extract and aggregate data",
    "Clean data and investigate anomalies",
    "Build and maintain dashboards and reports",
    "Define and track business metrics",
    "Present findings and recommendations to stakeholders",
  ],
  entryRoles: [
    "Data Analyst",
    "Business Analyst",
    "BI Developer / Analyst",
    "Product Analyst (entry level)",
    "MIS / Reporting Analyst",
  ],
  coreSkills: ["SQL", "Excel", "Python", "Statistics", "Power BI/Tableau", "Storytelling"],
  foundationalSkills: [
    "SQL for querying and aggregation",
    "Spreadsheet analysis (formulas, pivots, lookups)",
    "Descriptive statistics",
    "Python basics (pandas)",
    "Clear written and verbal communication",
  ],
  roleSkills: [
    "Data cleaning and validation",
    "Exploratory data analysis",
    "Visualisation principles and chart selection",
    "Dashboard design for a specific audience",
    "Business metrics: funnels, retention, cohorts, unit economics",
    "A/B testing and statistical significance basics",
  ],
  learningOrder: [
    {
      title: "Spreadsheets and descriptive statistics",
      duration: "3–4 weeks",
      description:
        "Start with tools every business uses and the statistics behind summaries.",
      topics: [
        "Formulas, XLOOKUP/VLOOKUP, conditional logic",
        "Pivot tables and pivot charts",
        "Mean, median, variance, percentiles",
        "Distributions and outliers",
        "Data validation and cleaning in spreadsheets",
      ],
      outcome: "A spreadsheet analysis with pivots and a short written summary.",
    },
    {
      title: "SQL for analysis",
      duration: "5–6 weeks",
      description:
        "Become fluent at asking questions of a database.",
      topics: [
        "SELECT, WHERE, GROUP BY, HAVING",
        "Joins across multiple tables",
        "CTEs and subqueries",
        "Window functions for rankings and running totals",
        "Date handling and cohort queries",
      ],
      outcome: "You can answer multi-step business questions with a single readable query.",
    },
    {
      title: "Python for cleaning and exploratory analysis",
      duration: "4–5 weeks",
      description:
        "Handle messier data and repeatable analysis with Python.",
      topics: [
        "pandas: cleaning, reshaping, merging",
        "Exploratory analysis workflow",
        "Matplotlib/Seaborn visualisation",
        "Jupyter notebooks that read like reports",
        "Handling missing and inconsistent data",
      ],
      outcome: "A reproducible EDA notebook with clear charts and conclusions.",
    },
    {
      title: "Statistics for decisions",
      duration: "3–4 weeks",
      description:
        "Know when a difference is real and how to communicate uncertainty.",
      topics: [
        "Sampling and confidence intervals",
        "Hypothesis tests and p-values (and their misuse)",
        "A/B test design and interpretation",
        "Correlation vs causation",
        "Simple regression for trend analysis",
      ],
      outcome: "You can evaluate an A/B test result and explain it plainly.",
    },
    {
      title: "Visualisation and dashboard design",
      duration: "3–4 weeks",
      description:
        "Build dashboards people actually use.",
      topics: [
        "Choosing the right chart for the question",
        "Power BI or Tableau: data models, measures, filters",
        "Dashboard layout: KPIs first, details on demand",
        "Accessibility: colour choices and labelling",
        "Avoiding misleading visuals",
      ],
      outcome: "An interactive dashboard designed for a specific stakeholder.",
    },
    {
      title: "Business metrics and communicating insights",
      duration: "3 weeks",
      description:
        "Connect analysis to decisions with a clear narrative.",
      topics: [
        "Funnels, retention, churn, cohorts, LTV concepts",
        "Defining metrics precisely",
        "Structuring an insight: context, finding, implication, recommendation",
        "Writing executive summaries",
        "Presenting with confidence and handling questions",
      ],
      outcome: "A case study with documented findings and recommendations.",
    },
  ],
  technologies: [
    { group: "Query & analysis", items: ["SQL (PostgreSQL / MySQL)", "Python", "pandas", "Jupyter"] },
    { group: "Spreadsheets", items: ["Microsoft Excel", "Google Sheets"] },
    { group: "BI tools", items: ["Power BI", "Tableau", "Looker Studio"] },
    { group: "Visualisation", items: ["Matplotlib", "Seaborn", "Plotly"] },
  ],
  projects: [
    {
      title: "Analytics dashboard",
      level: "Foundation",
      description:
        "A Power BI or Tableau dashboard built on a public business dataset (e.g. retail sales or e-commerce orders).",
      features: [
        "Clearly defined KPIs with formulas documented",
        "Filters for time, region, and category",
        "Accessible colour palette and labelled axes",
        "Short guide explaining how to read the dashboard",
      ],
    },
    {
      title: "Business analysis case study",
      level: "Intermediate",
      description:
        "An end-to-end analysis answering a specific question with documented findings and recommendations.",
      features: [
        "Problem statement and hypotheses",
        "SQL and Python analysis in the repository",
        "Executive summary with three to five recommendations",
        "Limitations and next questions",
      ],
    },
    {
      title: "A/B test analysis",
      level: "Intermediate",
      description:
        "Analyse a public experiment dataset and decide whether to ship the variant.",
      features: [
        "Sample-size and significance reasoning",
        "Guardrail metrics considered",
      ],
    },
  ],
  testingAndDocs: [
    "Metric definitions written down and consistent across reports",
    "Sanity checks: row counts, totals reconciled with source",
    "Queries stored in the repository, not only inside the BI tool",
    "README summarising question, method, findings, and limitations",
    "Screenshots of dashboards with explanations",
  ],
  dsaTopics: [
    "Arrays and strings",
    "Hashing and counting",
    "Sorting",
    "Basic two pointers",
    "SQL puzzle-style problems (often replace DSA rounds for analyst roles)",
  ],
  csFundamentals: [
    "DBMS: relational model, joins, indexing basics",
    "Probability and statistics",
    "Basic computer networks and data formats (CSV, JSON)",
  ],
  interviewTopics: [
    "SQL live-coding with joins and window functions",
    "Excel tasks: pivots and lookups",
    "Statistics: distributions, hypothesis testing, A/B tests",
    "Case questions: why did a metric drop?",
    "Dashboard walkthrough and design choices",
    "Aptitude and logical reasoning rounds",
    "Communication and stakeholder scenarios",
  ],
  portfolio: [
    "Two case studies with clear recommendations",
    "Published dashboards (Tableau Public or screenshots)",
    "Repository with SQL and notebooks",
    "A short written blog-style summary of one analysis",
  ],
  mistakes: [
    "Making charts without a question to answer",
    "Reporting averages that hide important distributions",
    "Confusing correlation with causation in recommendations",
    "Dashboards cluttered with every possible chart",
    "Neglecting SQL in favour of drag-and-drop tools",
  ],
  nextSteps: [
    "Practise SQL problems daily for two weeks",
    "Pick one BI tool and build a single-page dashboard",
    "Write a one-page analysis of a public dataset",
    "Compare with Data Engineer if you enjoy building pipelines",
  ],
  starterActions: [
    "Complete a set of SQL aggregation and join exercises",
    "Build a pivot-table summary of a public dataset",
    "Choose a business question and list the metrics needed",
    "Sketch a dashboard layout on paper before building",
  ],
};
