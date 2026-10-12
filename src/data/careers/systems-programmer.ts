import type { Career } from "../../lib/types.ts";

export const systemsProgrammer: Career = {
  slug: "systems-programmer",
  title: "Systems Programmer",
  shortTitle: "Systems",
  categories: ["systems"],
  tagline:
    "Write fast, low-level software close to the hardware: operating systems, runtimes, networking, and infrastructure.",
  overview: [
    "Systems programmers build the software other software depends on: operating-system components, databases, compilers, networking stacks, embedded firmware, and performance-critical services. They work close to memory, threads, and system calls.",
    "This path demands deep understanding of how computers actually execute code. Employers look for strong C or C++, comfort with debugging tools, and projects that demonstrate concurrency, memory management, and performance analysis.",
  ],
  responsibilities: [
    "Write and optimise performance-critical code in C, C++, or Rust",
    "Manage memory and resources safely",
    "Implement concurrent and networked components",
    "Debug crashes, leaks, and race conditions",
    "Profile and benchmark code",
    "Read and contribute to large low-level codebases",
  ],
  entryRoles: [
    "Systems Software Engineer",
    "C/C++ Developer",
    "Embedded Software Engineer",
    "Firmware Engineer (graduate)",
    "Kernel / Driver Developer (entry level)",
  ],
  coreSkills: ["C/C++", "Memory", "OS internals", "Concurrency", "Debugging", "Performance"],
  foundationalSkills: [
    "C programming with pointers and manual memory management",
    "Data structures implemented from scratch",
    "Computer organisation and architecture",
    "Operating-system concepts",
    "Linux command line and build tools",
  ],
  roleSkills: [
    "Memory layout: stack, heap, alignment, caches",
    "Processes, threads, and system calls",
    "Concurrency primitives: mutexes, condition variables, atomics",
    "Socket programming",
    "Debugging with gdb, valgrind, and sanitizers",
    "Profiling with perf and benchmarking methodology",
  ],
  learningOrder: [
    {
      title: "C and memory fundamentals",
      duration: "5–6 weeks",
      description:
        "Learn C thoroughly — pointers and memory are the foundation of everything else.",
      topics: [
        "Pointers, pointer arithmetic, arrays, and strings",
        "Stack vs heap; malloc/free",
        "Structs, unions, and memory layout",
        "Undefined behaviour and how to avoid it",
        "Makefiles and compiling with warnings enabled",
      ],
      outcome: "You can implement a dynamic array and linked list in C without leaks.",
    },
    {
      title: "Data structures and debugging tools",
      duration: "4 weeks",
      description:
        "Implement core data structures and learn to find bugs systematically.",
      topics: [
        "Hash tables, binary trees, heaps implemented in C",
        "gdb: breakpoints, backtraces, watchpoints",
        "Valgrind and AddressSanitizer for memory errors",
        "Unit testing C code",
        "Reading assembly output at a basic level",
      ],
      outcome: "A tested C data-structure library that is clean under sanitizers.",
    },
    {
      title: "Computer architecture and OS internals",
      duration: "5–6 weeks",
      description:
        "Understand what the hardware and OS do on your program's behalf.",
      topics: [
        "CPU caches, locality, and memory hierarchy",
        "Virtual memory and paging",
        "Processes, fork/exec, signals",
        "File I/O and system calls",
        "Scheduling and context switches",
      ],
      outcome: "A Unix shell with pipes and redirection written in C.",
    },
    {
      title: "Concurrency",
      duration: "4 weeks",
      description:
        "Write correct multithreaded code and reason about races.",
      topics: [
        "POSIX threads",
        "Mutexes, condition variables, semaphores",
        "Deadlocks and how to avoid them",
        "Atomics and memory ordering (introduction)",
        "Thread pools and producer–consumer queues",
      ],
      outcome: "A thread pool with a bounded work queue and tests under ThreadSanitizer.",
    },
    {
      title: "Networking and modern C++ / Rust",
      duration: "5 weeks",
      description:
        "Build networked programs and adopt safer modern languages.",
      topics: [
        "Socket API: TCP and UDP",
        "Non-blocking I/O, select/poll/epoll",
        "Modern C++: RAII, smart pointers, move semantics, STL",
        "Rust ownership and borrowing (optional alternative)",
        "Simple protocol design and parsing",
      ],
      outcome: "A concurrent TCP server (e.g. key–value store or chat server).",
    },
    {
      title: "Performance analysis",
      duration: "3 weeks",
      description:
        "Measure before optimising, then optimise what matters.",
      topics: [
        "Benchmarking methodology and variance",
        "perf, flame graphs, and cache-miss analysis",
        "Algorithmic vs constant-factor improvements",
        "Data-oriented design",
        "Documenting performance results honestly",
      ],
      outcome: "A benchmark report showing a measured, explained optimisation.",
    },
  ],
  technologies: [
    { group: "Languages", items: ["C", "C++ (C++17/20)", "Rust (optional)", "Assembly (reading level)"] },
    { group: "Build & debug", items: ["GCC / Clang", "Make / CMake", "gdb / lldb", "Valgrind", "AddressSanitizer / ThreadSanitizer"] },
    { group: "Performance", items: ["perf", "Flame graphs", "Google Benchmark"] },
    { group: "Platforms", items: ["Linux", "POSIX APIs", "xv6 (teaching OS)"] },
  ],
  projects: [
    {
      title: "Systems utility",
      level: "Foundation",
      description:
        "Re-implement a Unix utility (e.g. a subset of ls, grep, or a shell) in C.",
      features: [
        "Correct handling of errors from system calls",
        "Clean under Valgrind and sanitizers",
        "Man-page-style usage documentation",
        "Tests comparing output with the standard tool",
      ],
    },
    {
      title: "Multithreaded or network-oriented application",
      level: "Advanced",
      description:
        "A concurrent server (key–value store, HTTP server, or chat server) with documentation.",
      features: [
        "Thread pool or event loop design, explained in the README",
        "Graceful handling of client disconnects",
        "Load test results with throughput and latency",
        "ThreadSanitizer-clean concurrency",
      ],
    },
    {
      title: "Memory allocator",
      level: "Advanced",
      description:
        "Implement a simple malloc/free with a free list and compare it with the system allocator.",
      features: [
        "Fragmentation discussion",
        "Benchmark comparison",
      ],
    },
  ],
  testingAndDocs: [
    "Unit tests for all data structures and modules",
    "CI runs builds with -Wall -Wextra and sanitizers",
    "Design document describing threading or memory model",
    "Benchmarks with methodology, hardware details, and variance",
    "README with build instructions for Linux",
  ],
  dsaTopics: [
    "Arrays, linked lists, and pointer manipulation",
    "Hash tables (including collision strategies)",
    "Trees, heaps, and tries",
    "Bit manipulation",
    "Graphs: BFS/DFS",
    "Sorting algorithms and their memory behaviour",
    "Dynamic programming",
  ],
  csFundamentals: [
    "Operating systems in depth",
    "Computer organisation and architecture",
    "Computer networks: TCP/IP stack",
    "Compilers: compilation pipeline, linking",
    "Concurrency theory",
  ],
  interviewTopics: [
    "C/C++ language details: pointers, memory, undefined behaviour, virtual functions",
    "OS: virtual memory, scheduling, synchronisation",
    "Implement a data structure or concurrency primitive",
    "Debugging a crash or race condition scenario",
    "Networking: sockets and TCP behaviour",
    "Bit manipulation problems",
    "Project deep-dive on design and performance",
  ],
  portfolio: [
    "Low-level projects with clean, tested C/C++ code",
    "Benchmarks and design documents",
    "Contributions to open-source systems projects (even small fixes)",
    "Coursework from an OS course (e.g. xv6 labs) published with permission",
  ],
  mistakes: [
    "Ignoring compiler warnings",
    "Optimising without measuring",
    "Skipping sanitizers and leaving memory bugs",
    "Treating C++ as 'C with classes' without RAII",
    "Avoiding reading existing low-level codebases",
  ],
  nextSteps: [
    "Work through a C programming book with all exercises",
    "Write a small shell in C",
    "Study an OS course with labs (e.g. OSTEP + xv6)",
    "Compare with DevOps and Software Engineer paths",
  ],
  starterActions: [
    "Implement a dynamic array in C and check it with Valgrind",
    "Practise ten pointer and memory exercises",
    "Read the first chapters of OSTEP on processes",
    "Set up gdb and debug a deliberately broken program",
  ],
};
