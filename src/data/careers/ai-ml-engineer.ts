import type { Career } from "../../lib/types.ts";

export const aiMlEngineer: Career = {
  slug: "ai-ml-engineer",
  title: "AI / ML Engineer",
  shortTitle: "AI / ML",
  categories: ["ai-ml"],
  tagline:
    "Build, evaluate, and deploy machine-learning models that solve real problems with data.",
  overview: [
    "AI/ML engineers frame problems as learning tasks, prepare data, train and evaluate models, and integrate them into software. Much of the work is careful data handling and honest evaluation rather than inventing new algorithms.",
    "Entry-level hiring values solid mathematics, clean Python, and evidence that you can run a disciplined experiment: a sensible baseline, a fair evaluation, and an analysis of where the model fails. Software engineering skills are equally important, because models must be served and maintained.",
  ],
  responsibilities: [
    "Collect, clean, and analyse datasets",
    "Build baselines and train machine-learning models",
    "Design evaluation metrics and validation strategies",
    "Analyse errors and iterate on features or models",
    "Package models behind APIs or batch jobs",
    "Track experiments and keep results reproducible",
  ],
  entryRoles: [
    "Machine Learning Engineer (entry level)",
    "AI Engineer",
    "Associate Data Scientist",
    "Applied Scientist Intern / Associate",
    "ML Software Engineer",
  ],
  coreSkills: ["Python", "Linear algebra", "Statistics", "scikit-learn", "PyTorch", "Evaluation"],
  foundationalSkills: [
    "Python and its scientific stack (NumPy, pandas)",
    "Linear algebra: vectors, matrices, eigenvalues",
    "Probability and statistics",
    "Calculus for optimisation (gradients, chain rule)",
    "DSA for software interviews",
    "SQL for data access",
  ],
  roleSkills: [
    "Supervised and unsupervised learning algorithms",
    "Feature engineering and data leakage prevention",
    "Model evaluation: metrics, cross-validation, calibration",
    "Deep learning with PyTorch",
    "Experiment tracking and reproducibility",
    "Model serving and monitoring basics",
  ],
  learningOrder: [
    {
      title: "Python and mathematics foundations",
      duration: "6–8 weeks",
      description:
        "Build the mathematical intuition and numerical Python skills every later stage depends on.",
      topics: [
        "NumPy arrays, broadcasting, vectorisation",
        "Linear algebra: dot products, matrix multiplication, projections",
        "Probability: distributions, conditional probability, Bayes' rule",
        "Statistics: mean/variance, hypothesis tests, confidence intervals",
        "Derivatives, gradients, and gradient descent",
      ],
      outcome: "You can implement linear regression with gradient descent in NumPy.",
    },
    {
      title: "Data processing and exploratory analysis",
      duration: "3–4 weeks",
      description:
        "Learn to understand a dataset before modelling it.",
      topics: [
        "pandas: filtering, grouping, joins, reshaping",
        "Handling missing values and outliers",
        "Visualising distributions and relationships",
        "Train/validation/test splits and leakage",
        "SQL for extracting data",
      ],
      outcome: "A documented EDA notebook that motivates modelling choices.",
    },
    {
      title: "Classical machine learning",
      duration: "6–8 weeks",
      description:
        "Learn core algorithms and when each is appropriate.",
      topics: [
        "Linear and logistic regression, regularisation",
        "Decision trees, random forests, gradient boosting",
        "k-NN, SVMs, clustering (k-means), PCA",
        "Bias–variance trade-off",
        "scikit-learn pipelines",
      ],
      outcome: "You can choose and justify a model family for a tabular problem.",
    },
    {
      title: "Evaluation, feature engineering, and experimentation",
      duration: "3–4 weeks",
      description:
        "Measure honestly and improve systematically.",
      topics: [
        "Metrics: accuracy, precision/recall, F1, ROC-AUC, RMSE",
        "Cross-validation and stratification",
        "Class imbalance handling",
        "Feature engineering and selection",
        "Error analysis and slicing results by subgroup",
      ],
      outcome: "A project that compares models against a baseline with a written error analysis.",
    },
    {
      title: "Deep learning",
      duration: "6–8 weeks",
      description:
        "Understand neural networks and train them with PyTorch.",
      topics: [
        "Neural networks, backpropagation, activation functions",
        "Optimisers, learning rates, regularisation (dropout, weight decay)",
        "CNNs for images; sequence models and transformers (concepts)",
        "Transfer learning and fine-tuning pretrained models",
        "GPU basics and training loops in PyTorch",
      ],
      outcome: "A fine-tuned model with training curves and a clear evaluation.",
    },
    {
      title: "Model serving, reproducibility, and MLOps basics",
      duration: "3–4 weeks",
      description:
        "Turn a model into a dependable service.",
      topics: [
        "Serving a model with FastAPI",
        "Experiment tracking (MLflow or Weights & Biases)",
        "Pinning environments and random seeds",
        "Containerising inference",
        "Monitoring for data drift (concepts)",
      ],
      outcome: "A containerised inference API with documented evaluation and failure cases.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["Python", "SQL"] },
    { group: "Libraries", items: ["NumPy", "pandas", "scikit-learn", "PyTorch", "Matplotlib / Seaborn", "XGBoost / LightGBM"] },
    { group: "Tooling", items: ["Jupyter", "MLflow / Weights & Biases", "FastAPI", "Docker", "Git"] },
    { group: "Platforms", items: ["Kaggle", "Hugging Face Hub", "Google Colab"] },
  ],
  projects: [
    {
      title: "ML project with a baseline",
      level: "Intermediate",
      description:
        "Solve a tabular or text classification problem end to end, beginning with a simple baseline.",
      features: [
        "Simple baseline (e.g. majority class or linear model) reported first",
        "At least two stronger models compared fairly",
        "Cross-validated metrics with variance reported",
        "Error analysis of misclassified examples",
      ],
    },
    {
      title: "Model-serving application with evaluation and failure analysis",
      level: "Advanced",
      description:
        "Serve a trained model through an API with a simple UI and document its limitations.",
      features: [
        "FastAPI inference endpoint with input validation",
        "Model card describing data, metrics, and known failure modes",
        "Reproducible training script with pinned dependencies",
        "Docker image for inference",
      ],
    },
    {
      title: "Paper or technique reimplementation",
      level: "Advanced",
      description:
        "Reproduce a key result from a well-known paper or tutorial at small scale and compare results.",
      features: [
        "Clear statement of what was reproduced and what differed",
        "Ablation of one design choice",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for data-processing and feature functions",
    "Fixed random seeds and pinned dependency versions",
    "Model card: intended use, data, metrics, limitations",
    "README describing the problem, baseline, results table, and how to reproduce",
    "Notebooks cleaned up or converted into scripts for the final pipeline",
  ],
  dsaTopics: [
    "Arrays and hashing",
    "Sorting and binary search",
    "Heaps (top-k problems)",
    "Two pointers and sliding window",
    "Trees and graphs (BFS/DFS)",
    "Introductory dynamic programming",
    "Matrix traversal problems",
  ],
  csFundamentals: [
    "Linear algebra, probability, and statistics",
    "DBMS and SQL",
    "Operating systems: processes, memory, GPU/CPU basics",
    "OOP for structuring ML code",
  ],
  interviewTopics: [
    "Bias–variance trade-off and regularisation",
    "Metric choice for imbalanced problems",
    "How specific algorithms work (trees, logistic regression, gradient descent)",
    "Overfitting detection and data leakage",
    "Neural network basics and backpropagation",
    "Project deep-dive: baseline, evaluation, failure cases",
    "DSA and Python coding round",
  ],
  portfolio: [
    "One or two projects with honest baselines and error analysis",
    "Clean, reproducible repositories rather than only notebooks",
    "A deployed demo or documented inference API",
    "Short write-ups explaining what did not work and why",
  ],
  mistakes: [
    "Skipping mathematics and treating models as black boxes",
    "Reporting test accuracy after tuning on the test set",
    "No baseline, so improvements are meaningless",
    "Only training on toy datasets like Iris or Titanic",
    "Ignoring software engineering and DSA preparation",
  ],
  nextSteps: [
    "Refresh linear algebra and probability alongside Python",
    "Complete one structured ML course end to end",
    "Pick a dataset you care about and write a baseline this month",
    "Compare with Generative AI Engineer and Data Analyst paths",
  ],
  starterActions: [
    "Implement linear regression with gradient descent in NumPy",
    "Revise vectors, matrices, and probability basics with short exercises",
    "Choose a dataset and write an exploratory analysis notebook",
    "Train a scikit-learn baseline and record its metric",
  ],
};
