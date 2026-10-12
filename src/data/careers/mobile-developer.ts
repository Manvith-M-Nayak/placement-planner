import type { Career } from "../../lib/types.ts";

export const mobileDeveloper: Career = {
  slug: "mobile-developer",
  title: "Mobile Application Developer",
  shortTitle: "Mobile",
  categories: ["mobile", "software"],
  tagline:
    "Build responsive, reliable apps for Android and iOS that people use every day.",
  overview: [
    "Mobile developers build applications for phones and tablets. The work includes designing screens that follow platform conventions, managing app state and lifecycle, storing data offline, integrating APIs, and publishing to app stores.",
    "Mobile constraints shape every decision: limited battery and memory, unreliable networks, many screen sizes, and app-store review processes. You can specialise natively (Kotlin for Android, Swift for iOS) or cross-platform (Flutter, React Native); fundamentals transfer between them.",
  ],
  responsibilities: [
    "Build screens and navigation following platform guidelines",
    "Manage state, lifecycle, and background work",
    "Persist data locally and sync with servers",
    "Integrate REST APIs and handle offline scenarios",
    "Write unit and UI tests",
    "Profile performance and publish releases",
  ],
  entryRoles: [
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "React Native Developer",
    "Mobile Software Engineer",
  ],
  coreSkills: ["Kotlin/Swift/Dart", "Mobile UI", "Architecture", "APIs", "Persistence", "Testing"],
  foundationalSkills: [
    "Programming in Kotlin, Swift, Dart, or JavaScript/TypeScript",
    "DSA for interview rounds",
    "OOP and design patterns",
    "HTTP, JSON, and REST APIs",
    "Git",
  ],
  roleSkills: [
    "Declarative UI (Jetpack Compose, SwiftUI, Flutter, React Native)",
    "App architecture (MVVM, unidirectional data flow)",
    "Local persistence (Room, Core Data/SwiftData, SQLite)",
    "Networking, caching, and offline support",
    "Authentication and secure storage of tokens",
    "Testing, profiling, and app-store deployment",
  ],
  learningOrder: [
    {
      title: "Language and platform fundamentals",
      duration: "4–5 weeks",
      description:
        "Choose a platform and learn its language and tooling properly.",
      topics: [
        "Kotlin (Android), Swift (iOS), or Dart (Flutter)",
        "Null safety, collections, and closures/lambdas",
        "IDE setup: Android Studio or Xcode",
        "App lifecycle and project structure",
        "Running on emulators and real devices",
      ],
      outcome: "A simple multi-screen app running on a device.",
    },
    {
      title: "UI design and navigation",
      duration: "4 weeks",
      description:
        "Build screens that follow platform conventions and adapt to devices.",
      topics: [
        "Declarative UI: Jetpack Compose, SwiftUI, or Flutter widgets",
        "Layouts for different screen sizes and orientations",
        "Navigation patterns and passing data between screens",
        "Material Design and Human Interface Guidelines",
        "Accessibility: content descriptions, dynamic type, touch targets",
      ],
      outcome: "A polished UI with navigation that adapts to screen sizes.",
    },
    {
      title: "Architecture and state management",
      duration: "3–4 weeks",
      description:
        "Structure apps so they are testable and survive lifecycle changes.",
      topics: [
        "MVVM and unidirectional data flow",
        "ViewModels and state holders",
        "Dependency injection basics",
        "Coroutines/Flow, Swift concurrency, or Dart async",
        "Handling configuration changes",
      ],
      outcome: "An app whose business logic is separated from UI and testable.",
    },
    {
      title: "Persistence, networking, and offline support",
      duration: "4–5 weeks",
      description:
        "Store data locally and sync it reliably with a backend.",
      topics: [
        "Local databases: Room, SwiftData/Core Data, sqflite",
        "REST APIs with Retrofit, URLSession, or Dio",
        "Repository pattern and caching",
        "Offline-first behaviour and sync conflicts",
        "Authentication and secure token storage",
      ],
      outcome: "An app that works offline and syncs with an API when connected.",
    },
    {
      title: "Testing and performance",
      duration: "3 weeks",
      description:
        "Verify behaviour and keep the app smooth.",
      topics: [
        "Unit tests for ViewModels and repositories",
        "UI tests (Espresso/Compose testing, XCTest, Flutter widget tests)",
        "Profiling CPU, memory, and rendering",
        "Image loading and list performance",
        "Battery and background-work constraints",
      ],
      outcome: "Tests for core logic and a documented performance improvement.",
    },
    {
      title: "Release and distribution",
      duration: "2–3 weeks",
      description:
        "Prepare an app for real users.",
      topics: [
        "App signing and build variants",
        "Play Console / App Store Connect basics",
        "Crash reporting and analytics considerations (privacy-respecting)",
        "Versioning and release notes",
        "Store listing, screenshots, and privacy policy",
      ],
      outcome: "A release build distributed through internal testing or a store listing.",
    },
  ],
  technologies: [
    { group: "Android", items: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Coroutines / Flow"] },
    { group: "iOS", items: ["Swift", "SwiftUI", "SwiftData / Core Data", "URLSession"] },
    { group: "Cross-platform", items: ["Flutter (Dart)", "React Native (TypeScript)"] },
    { group: "Tooling", items: ["Android Studio", "Xcode", "Git", "Firebase (optional backend services)"] },
  ],
  projects: [
    {
      title: "Mobile application with data persistence",
      level: "Foundation",
      description:
        "An app (e.g. study planner, expense notebook, or recipe box) that stores data locally.",
      features: [
        "Create, edit, and delete items stored in a local database",
        "Data survives app restarts",
        "MVVM architecture",
        "Accessible UI with sensible touch targets",
      ],
    },
    {
      title: "App with API integration, tests, and documentation",
      level: "Intermediate",
      description:
        "An app that consumes a public or self-built API with offline caching.",
      features: [
        "Repository layer combining network and local cache",
        "Loading, error, and empty states",
        "Unit and UI tests",
        "README with screenshots, architecture diagram, and build steps",
      ],
    },
    {
      title: "Published or internally distributed app",
      level: "Advanced",
      description:
        "Take one app through release signing and distribution.",
      features: [
        "Release build with signing configuration",
        "Store-ready screenshots and privacy policy",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for ViewModels and repositories",
    "UI tests for the main user flow",
    "README with screenshots, demo video, and architecture diagram",
    "Documented minimum OS version and build instructions",
    "Release notes for each version",
  ],
  dsaTopics: [
    "Arrays, strings, and hashing",
    "Stacks and queues",
    "Linked lists",
    "Trees and recursion",
    "Graphs: BFS/DFS",
    "Binary search",
    "Introductory dynamic programming",
  ],
  csFundamentals: [
    "OOP and design patterns (observer, repository, dependency injection)",
    "Operating systems: threads, main thread, memory management",
    "Computer networks: HTTP, caching, unreliable connectivity",
    "DBMS: SQLite and local data modelling",
  ],
  interviewTopics: [
    "Platform lifecycle (Activity/Fragment, SwiftUI view lifecycle)",
    "Concurrency on mobile (coroutines, async/await)",
    "Architecture patterns and why they matter",
    "Memory leaks and performance issues",
    "Offline handling and caching strategies",
    "DSA online assessment",
    "App walkthrough and design decisions",
  ],
  portfolio: [
    "Two apps with clean architecture and tests",
    "Demo videos or store links",
    "Well-organised repositories with screenshots",
    "A short write-up of a performance or UX improvement",
  ],
  mistakes: [
    "Putting all logic inside UI code",
    "Ignoring lifecycle, leading to crashes on rotation",
    "No offline or error handling",
    "Splitting effort across too many frameworks",
    "Hard-coding API keys in the app",
  ],
  nextSteps: [
    "Choose native (Kotlin/Swift) or cross-platform (Flutter/React Native)",
    "Build a two-screen app with navigation this week",
    "Add a local database to an existing app",
    "Compare with Frontend Developer and Full-Stack paths",
  ],
  starterActions: [
    "Install Android Studio, Xcode, or Flutter and run a starter app",
    "Build a two-screen app with navigation",
    "Store a list of items in a local database",
    "Write one unit test for a ViewModel",
  ],
};
