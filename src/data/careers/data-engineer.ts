import type { Career } from "../../lib/types.ts";

export const dataEngineer: Career = {
  slug: "data-engineer",
  title: "Data Engineer",
  shortTitle: "Data Engineering",
  categories: ["data"],
  tagline:
    "Design pipelines that move, validate, and model data so analysts and ML teams can trust it.",
  overview: [
    "Data engineers build the systems that collect raw data from applications and external sources, clean and transform it, and load it into warehouses or lakes where it can be analysed. They care about correctness, freshness, and cost.",
    "The role is SQL-heavy and engineering-heavy. Good candidates write solid Python, think in terms of reproducible, idempotent jobs, and can explain how they would detect and recover from bad or late data.",
  ],
  responsibilities: [
    "Build batch (and sometimes streaming) data pipelines",
    "Model data for analytics in a warehouse",
    "Validate data quality and handle schema changes",
    "Schedule and monitor pipeline runs",
    "Optimise query and storage cost",
    "Collaborate with analysts and data scientists on requirements",
  ],
  entryRoles: [
    "Data Engineer (entry level)",
    "Associate Data Engineer",
    "ETL Developer",
    "Big Data Engineer (trainee)",
    "Analytics Engineer",
  ],
  coreSkills: ["SQL", "Python", "ETL/ELT", "Data modelling", "Airflow", "Spark"],
  foundationalSkills: [
    "Advanced SQL",
    "Python for data processing",
    "Relational modelling and normalisation",
    "Linux command line and shell scripting",
    "DSA for interviews",
    "Git",
  ],
  roleSkills: [
    "ETL vs ELT patterns and idempotent loads",
    "Dimensional modelling (star schema, facts, dimensions)",
    "Data validation and quality testing",
    "Workflow orchestration (Airflow, Dagster, or Prefect)",
    "Distributed processing with Spark",
    "Cloud storage and warehouses (BigQuery, Snowflake, Redshift)",
  ],
  learningOrder: [
    {
      title: "Advanced SQL and relational modelling",
      duration: "5–6 weeks",
      description:
        "SQL is the primary language of data engineering — learn it beyond basics.",
      topics: [
        "Joins, subqueries, CTEs",
        "Window functions (ROW_NUMBER, LAG, running totals)",
        "Normalisation vs denormalisation",
        "Indexes and query plans",
        "Handling NULLs, duplicates, and slowly changing data",
      ],
      outcome: "You can write and explain complex analytical queries confidently.",
    },
    {
      title: "Python for data processing",
      duration: "3–4 weeks",
      description:
        "Write maintainable scripts to extract and transform data.",
      topics: [
        "pandas for transformation; when not to use it",
        "Reading CSV, JSON, Parquet; calling REST APIs",
        "Writing modular, testable transformation functions",
        "Logging and error handling in scripts",
        "Virtual environments and dependency pinning",
      ],
      outcome: "A tested Python ingestion script that loads API data into a database.",
    },
    {
      title: "ETL/ELT pipelines and data validation",
      duration: "4–5 weeks",
      description:
        "Design pipelines that can be re-run safely and that catch bad data early.",
      topics: [
        "Extract, load, transform stages and staging tables",
        "Idempotency, incremental loads, backfills",
        "Data validation (Great Expectations, dbt tests, or custom checks)",
        "Schema evolution",
        "dbt for SQL-based transformations",
      ],
      outcome: "A pipeline with validation checks that fail loudly on bad data.",
    },
    {
      title: "Orchestration and scheduling",
      duration: "3–4 weeks",
      description:
        "Run pipelines reliably on a schedule with dependencies and retries.",
      topics: [
        "DAGs, tasks, dependencies",
        "Apache Airflow (or Dagster/Prefect)",
        "Retries, alerting, and SLAs",
        "Parameterised runs and backfills",
        "Running orchestrators locally with Docker",
      ],
      outcome: "Your pipeline runs daily under an orchestrator with retries and alerts.",
    },
    {
      title: "Warehousing and distributed processing",
      duration: "5–6 weeks",
      description:
        "Model data for analytics and process larger datasets.",
      topics: [
        "Star schema, fact and dimension tables",
        "Columnar storage and partitioning",
        "Apache Spark DataFrames and lazy evaluation",
        "Data lakes and file formats (Parquet)",
        "Batch vs streaming (Kafka concepts)",
      ],
      outcome: "A warehouse model with partitioned fact tables and a Spark transformation job.",
    },
    {
      title: "Cloud data platforms and monitoring",
      duration: "3–4 weeks",
      description:
        "Run pipelines on cloud infrastructure and keep them healthy.",
      topics: [
        "Object storage (S3/GCS) and IAM basics",
        "Managed warehouses (BigQuery, Snowflake, Redshift)",
        "Pipeline monitoring: freshness, volume, and failure alerts",
        "Cost awareness: scanning less data, partition pruning",
        "Documentation and data lineage",
      ],
      outcome: "An end-to-end cloud pipeline with monitoring and a cost note.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["SQL", "Python", "Bash"] },
    { group: "Processing", items: ["pandas", "Apache Spark (PySpark)", "dbt", "DuckDB"] },
    { group: "Orchestration", items: ["Apache Airflow", "Dagster", "Prefect"] },
    { group: "Storage", items: ["PostgreSQL", "BigQuery", "Snowflake", "Amazon S3 / GCS", "Parquet"] },
    { group: "Streaming (awareness)", items: ["Apache Kafka"] },
  ],
  projects: [
    {
      title: "Data ingestion pipeline",
      level: "Foundation",
      description:
        "Ingest data from a public API or open dataset into a relational database on a schedule.",
      features: [
        "Incremental loading with no duplicate rows on re-run",
        "Raw and cleaned staging tables",
        "Logging of rows processed and errors",
        "README with data-flow diagram",
      ],
    },
    {
      title: "Validated, reproducible pipeline",
      level: "Intermediate",
      description:
        "A full pipeline with validation, transformations, warehouse storage, and one-command execution.",
      features: [
        "Orchestrated with Airflow or Dagster in Docker",
        "Data-quality tests (nulls, uniqueness, ranges, referential integrity)",
        "dbt models producing a star schema",
        "Documented backfill procedure",
      ],
    },
    {
      title: "Spark batch-processing job",
      level: "Advanced",
      description:
        "Process a multi-gigabyte public dataset with Spark and write partitioned Parquet output.",
      features: [
        "Partitioning strategy explained",
        "Comparison of run time before and after an optimisation",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for transformation functions",
    "Data-quality checks run as part of the pipeline",
    "Data dictionary describing each table and column",
    "Lineage diagram from source to final tables",
    "Runbook: how to re-run, backfill, and debug failures",
  ],
  dsaTopics: [
    "Arrays, hashing, and sets (deduplication)",
    "Sorting and merging (merge intervals, k-way merge)",
    "Heaps (top-k)",
    "Two pointers and sliding window",
    "Graphs: topological sort (DAG dependencies)",
    "Binary search",
  ],
  csFundamentals: [
    "DBMS: indexing, transactions, query optimisation",
    "Distributed systems basics: partitioning, replication",
    "Operating systems: memory, disk I/O, processes",
    "Computer networks basics for data transfer",
  ],
  interviewTopics: [
    "Advanced SQL with window functions",
    "Data modelling for a given business scenario",
    "Designing an idempotent, incremental pipeline",
    "Handling late-arriving or bad data",
    "Spark concepts: transformations, actions, shuffles",
    "Python coding and DSA round",
    "Project deep-dive: data flow and failure handling",
  ],
  portfolio: [
    "One pipeline repository runnable end to end with Docker",
    "Clear data-flow diagram and data dictionary",
    "Visible data-quality tests and their results",
    "SQL practice record on one platform",
  ],
  mistakes: [
    "Treating SQL as secondary to tools",
    "Pipelines that create duplicates when re-run",
    "No validation — silently loading bad data",
    "Learning many tools superficially instead of one stack well",
    "No documentation of tables and columns",
  ],
  nextSteps: [
    "Practise window-function SQL problems weekly",
    "Build a small ingestion script for a public API",
    "Run Airflow locally with Docker and schedule one task",
    "Compare with Data Analyst and Cloud Engineer paths",
  ],
  starterActions: [
    "Solve SQL problems on joins and window functions",
    "Pick a public dataset or API and sketch its data flow",
    "Write a Python script that loads it into PostgreSQL",
    "Add a re-run test that confirms no duplicate rows",
  ],
};
