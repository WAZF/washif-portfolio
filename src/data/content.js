export const profile = {
  name: "Mohamed Washif",
  role: "Team Lead / Full-Stack Engineer",
  focus: "CBDC & FinTech · Backend + Mobile",
  status: "Leading CBDC engineering at Digiledge",
  location: "Bangalore, India",
  email: "mohamedwashif325@gmail.com",
  phone: "+91 78260 67257",
  github: "https://github.com/WAZF",
  linkedin: "https://www.linkedin.com/in/mohamed-washif/",
  resumeFile: "/resume/Mohamed_Washif_Resume.pdf",
  summary:
    "Team Lead and Full-Stack Engineer with 2+ years building and leading development of high-throughput FinTech and payment systems at Digiledge — including an RBI-compliant Central Bank Digital Currency (CBDC) platform, SoftPOS payment infrastructure, and B2B marketplace solutions. Experienced across backend architecture, distributed systems, and cross-platform mobile development, with hands-on expertise in Go, Java, Apache Kafka, Redis, Kubernetes, Swift, and Kotlin. Currently leading development on the CBDC platform — owning backend services, transaction flows, technical decisions, and mobile integration.",
  highlights: [
    { value: "2+", label: "Years leading FinTech systems" },
    { value: "40%", label: "Throughput gain from Kafka redesign" },
    { value: "30%", label: "DB latency cut via Redis caching" },
    { value: "3", label: "Live platforms shipped at Digiledge" },
  ],
  currentFocus: {
    label: "Currently Leading",
    title: "CBDC — RBI Digital Rupee Platform",
    description:
      "Owning backend architecture, transaction workflows, and mobile integration for a live national digital-currency platform.",
    tags: ["Team Lead", "Backend + Mobile", "In production"],
    initiatives: [
      { name: "CBDC", note: "RBI Digital Rupee Platform", status: "leading" },
      { name: "Marketplace", note: "B2B Partner Integration", status: "shipped" },
      { name: "SoftPOS", note: "PCI-Compliant Payments", status: "shipped" },
    ],
  },
};

export const experience = {
  company: "Digiledge",
  role: "Team Lead / Software Engineer",
  period: "Jan 2024 — Present",
  location: "Bangalore, India",
  projects: [
    {
      id: "cbdc",
      tag: "01",
      name: "CBDC",
      title: "RBI Digital Rupee Platform",
      description:
        "Real-time digital currency transaction processing aligned with RBI CBDC architecture guidelines — leading backend architecture, transaction workflows, and mobile integration at scale.",
      stack: ["Go", "Apache Kafka", "Redis", "REST APIs", "iOS", "Android"],
      bullets: [
        "Serving as Team Lead for CBDC development, driving technical implementation, backend architecture, integration, and delivery of critical digital currency capabilities.",
        "Lead development of backend services in Go for real-time digital currency transaction processing, covering token issuance, transfer, validation, and redemption flows.",
        "Own technical design and implementation of critical CBDC transaction workflows, ensuring scalability, reliability, and alignment with RBI CBDC architecture requirements.",
        "Architected Apache Kafka event-driven pipelines that decoupled transaction ingestion from validation, improving throughput by 40% and enabling horizontal scaling under peak load.",
        "Designed RESTful APIs for token lifecycle management, transaction validation, and secure digital payment processing, consumed by mobile applications and banking partner systems.",
        "Improved database performance by ~30% by introducing Redis caching for frequently accessed token states and session data.",
        "Collaborate with banking partners and cross-functional engineering teams to integrate encrypted end-to-end transaction flows across native iOS and Android applications.",
        "Provide technical guidance to team members, participate in design and code reviews, troubleshoot production issues, and drive engineering decisions for CBDC-related features.",
      ],
    },
    {
      id: "marketplace",
      tag: "02",
      name: "Marketplace",
      title: "B2B Partner Integration Platform",
      description:
        "Scalable microservices powering a B2B marketplace ecosystem — partner onboarding, catalog management, and order processing, containerized and auto-scaled on Kubernetes.",
      stack: ["Java", "Spring Boot", "Docker", "Kubernetes", "CI/CD"],
      bullets: [
        "Engineered scalable microservices in Java (Spring Boot) handling partner onboarding, catalog management, and order processing.",
        "Containerized all services with Docker and deployed via Kubernetes, enabling zero-downtime rolling updates and auto-scaling for variable partner traffic.",
        "Built cross-platform SDKs (Swift for iOS, Java for Android) to streamline third-party partner integrations, reducing onboarding time and support overhead.",
        "Set up CI/CD pipelines using GitHub Actions and Bitbucket Pipelines, cutting manual deployment steps and standardizing release across the team.",
      ],
    },
    {
      id: "softpos",
      tag: "03",
      name: "SoftPOS",
      title: "PCI-Compliant Mobile Payment System",
      description:
        "PCI-DSS-compliant payment backend covering authorization, reconciliation, settlement, and NFC Tap & Pay on Android for live RuPay card-present transactions.",
      stack: ["Go", "Kotlin", "Java", "NFC/HCE", "PCI-DSS"],
      bullets: [
        "Designed a PCI-DSS-compliant payment backend in Go covering authorization, reconciliation, settlement, and device provisioning for mobile SoftPOS terminals.",
        "Implemented NFC Tap & Pay on Android using Kotlin/Java with Host Card Emulation (HCE), supporting live RuPay card-present transactions on certified devices.",
        "Built secure card transaction flows with end-to-end encryption, ensuring data integrity and compliance for card-present payments on mobile devices.",
      ],
    },
  ],
};

export const skills = [
  {
    group: "Programming",
    items: ["Go (Golang)", "Java", "Python", "Kotlin", "Swift", "JavaScript"],
  },
  {
    group: "Backend & Architecture",
    items: [
      "Spring Boot",
      "REST APIs",
      "gRPC",
      "Microservices",
      "Apache Kafka",
      "Redis",
      "Event-Driven Architecture",
      "Concurrent Programming",
    ],
  },
  {
    group: "Mobile Development",
    items: [
      "iOS (Swift, SwiftUI, UIKit, Objective-C)",
      "Android (Kotlin, Java)",
      "Flutter",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "OracleDB", "SQLite"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Bitbucket Pipelines", "Git"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Angular"],
  },
];

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  school: "Anna University",
  period: "2020 — 2024",
  location: "India",
};

export const projects = [
  {
    name: "Habit Tracker",
    description:
      "Cross-platform habit tracking app with calendar-based streaks and interactive checklists, built for a unified experience across Android, iOS, and web.",
    stack: ["Flutter", "Hive"],
    ghLink: "https://github.com/WAZF/Habit-tracker.git",
    demoLink: "https://www.youtube.com/watch?v=Rc5O1e9DgLY",
  },
  {
    name: "Confab",
    description:
      "Cross-platform chat app with real-time messaging, image sharing, Google sign-in, and profile management, backed by Firebase.",
    stack: ["Flutter", "Firebase"],
    ghLink: "https://github.com/WAZF/Confab-chatting-app.git",
    demoLink: "https://www.youtube.com/watch?v=8RkmzNKC-JA",
  },
  {
    name: "Mayilai Mart",
    description:
      "Local-commerce concept bridging offline showrooms with online product discovery — from market research on showroom placement to the storefront build.",
    stack: ["JavaScript", "HTML/CSS"],
    ghLink: "https://github.com/WAZF/Mayilai-Mart-host",
    demoLink: "https://wazf.github.io/Mayilai-Mart-host/main.html",
  },
];
