import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Github, Linkedin, Presentation, Scroll, User2 } from "lucide-react";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getNavItems = () => {
  return [
    {
      name: "Projects",
      href: "/projects",
      icon: Presentation,
    },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1EgKnHkOfAnBCwTyjcdxfWOKdXNmB0qhi/view?usp=sharing",
      icon: Scroll,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ritikyadav1999/",
      icon: Linkedin,
    },
    {
      name: "Github",
      href: "https://github.com/ritikyadav1999",
      icon: Github,
    },
  ];
};

export const getSkills = () => {
  return [
    {
      name: "angularjs",
      url: "https://angularjs.org/",
    },
    {
      name: "nextjs",
      url: "https://nextjs.org",
    },
    {
      name: "react",
      url: "https://react.dev",
    },
    {
      name: "tailwind",
      url: "https://tailwindcss.com",
    },
    {
      name: "mongodb",
      url: "https://www.mongodb.com",
    },
    {
      name: "prisma",
      url: "https://www.prisma.io",
    },
    {
      name: "planetscale",
      url: "https://planetscale.com",
    },
    {
      name: "zustand",
      url: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "git",
      url: "https://git-scm.com",
    },
    {
      name: "cpp",
      url: "https://isocpp.org",
    },
    {
      name: "typescript",
      url: "https://typescriptlang.org",
    },
    {
      name: "redis",
      url: "https://redis.io/",
    },
    {
      name: "java",
      url: "https://java.com",
    },
    {
      name: "python",
      url: "https://python.org",
    },
  ];
};

export const getProjects = () => {
  interface Project {
    title: string;
    description: string;
    name: string;
    theme: "blue" | "orange" | "pink" | "emerald" | "yellow";
    background:
      | "bg-blue-300"
      | "bg-orange-300"
      | "bg-pink-300"
      | "bg-emerald-300"
      | "bg-yellow-300";
    text:
      | "text-blue-900"
      | "text-orange-900"
      | "text-pink-900"
      | "text-emerald-900"
      | "text-yellow-900";
    github: string;
    live: string;
    tech: string[];
    expandable: boolean;
    fullExplanation: string;
    videoUrl: string;
  }

  const projects: Project[] = [
    {
      title: "SnoozleFull-Stack eCommerce Web Application",
      description:
        "Snoozle is a full-stack eCommerce platform with clean UI and complete admin control. Users can browse products, manage carts, and securely checkout, while admins handle listings, orders, and analytics through a powerful dashboard.",
      name: "snoozle",
      theme: "emerald",
      background: "bg-emerald-300",
      text: "text-emerald-900",
      github: "https://github.com/ritikyadav1999/snoozle_backend",
      live: "https://snoozle-857f5.web.app/",
      tech: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Cloudinary",
      ],
      expandable: true,
      fullExplanation: `

<p><strong>Snoozle</strong> is a modern, production-ready eCommerce platform built with the <span class="text-emerald-600 font-semibold">MEAN stack</span> (MongoDB, Express.js, Angular, Node.js). It delivers a seamless shopping experience for users and robust operational control for admins, all within a scalable, modular architecture.</p>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Key Features</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>
    <h4 class="text-xl font-semibold mb-2">User Functionality</h4>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Authentication:</strong> Secure JWT-based login/signup</li>
      <li><strong>Product Browsing:</strong> Category-based filtering, sorting, and search</li>
      <li><strong>Cart & Checkout:</strong> Add to cart, quantity updates, checkout flow</li>
      <li><strong>Order History:</strong> View past orders and track statuses</li>
    </ul>
  </div>
  <div>
    <h4 class="text-xl font-semibold mb-2">Admin Functionality</h4>
    <ul class="list-disc pl-6 space-y-2">
      <li><strong>Dashboard:</strong> Overview of revenue, users, and inventory</li>
      <li><strong>Product Management:</strong> Add/edit/delete with image upload</li>
      <li><strong>Order Control:</strong> Update and manage order statuses</li>
      <li><strong>User Roles:</strong> Role-based access for admin and users</li>
    </ul>
  </div>
</div>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Tech Stack</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Frontend:</strong> Angular + Angular Material</li>
  <li><strong>Backend:</strong> Node.js + Express (REST APIs)</li>
  <li><strong>Database:</strong> MongoDB + Mongoose</li>
  <li><strong>Auth:</strong> JWT with role-based access control</li>
  <li><strong>Cloud:</strong> Cloudinary for images, Render for backend</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Why I Built This</h3>
<p>I wanted to simulate a real-world eCommerce system that mirrors the architecture, complexity, and workflows of a production-grade application. Snoozle gave me the opportunity to implement authentication, state management, dashboard analytics, and clean API design with robust backend logic.</p>

<h3 class="text-2xl font-semibold mt-8 mb-2">What I Learned</h3>
<ul class="list-disc pl-6 space-y-2">
  <li>REST API development and structuring backend logic</li>
  <li>Secure user management and token-based auth</li>
  <li>CI/CD pipeline setup and cloud deployment</li>
  <li>Clean component structure and service separation in Angular</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">🔗 Links</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><a href="#" class="text-emerald-600 font-semibold">🌐 Live Demo</a></li>
  <li><a href="#" class="text-emerald-600 font-semibold">💻 GitHub – Frontend</a></li>
  <li><a href="#" class="text-emerald-600 font-semibold">🔧 GitHub – Backend</a></li>
  <li><a href="#" class="text-emerald-600 font-semibold">📹 Project Walkthrough Video</a></li>
</ul>
`,
      videoUrl: "https://www.youtube.com/embed/your_video_id_here",
    },
    {
      title: "Thracto-AI Powered Finance Management Application",
      description:
        "A smart finance tracker that uses AI to analyze spending, suggest savings, and manage budgets. Features include income/expense tracking, goal setting, receipt uploads with auto-categorization, and personalized financial insights..",
      name: "moments",
      theme: "blue",
      background: "bg-blue-300",
      text: "text-blue-900",
      github: "https://github.com/ritikyadav1999/finance_backend",
      live: "https://finance-364b4.web.app/",
      tech: [
        "Angular",
        "Node.js",
        "Express",
        "MongoDB",
        "AI",
        "Redis",
        "BullMQ",
        "ChartJs",
        "LLM",
        "OpenRouter",
        "Web Sockets",
      ],
      expandable: true,
      fullExplanation: `
<h2 class="text-4xl font-bold mb-4">💸 Thracto – AI Powered Finance Management Application</h2>

<p><strong>Thracto</strong> is a smart, full-stack finance management platform designed to help users take complete control of their financial lives. It leverages artificial intelligence to analyze transactions, categorize expenses, and provide actionable financial insights. Built with a clean UI, secure backend, and real-time analytics, Thracto bridges the gap between traditional budget apps and intelligent financial advisors.</p>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mb-2 mt-10">Problem Statement</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>Lack of Awareness:</strong> Users often don’t realize where their money goes each month. Spending leaks occur due to missing visibility.</li>
  <li><strong>Manual Tracking is Inefficient:</strong> Logging every expense manually is tedious and error-prone, leading to financial mismanagement.</li>
  <li><strong>No Personalization:</strong> Existing tools lack AI-driven suggestions or contextual alerts for better financial decision-making.</li>
  <li><strong>Fragmented Experience:</strong> Users need to juggle multiple apps for tracking, goal setting, and visualization—leading to decision fatigue.</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Solution</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>AI-Powered Financial Insights:</strong> Thracto uses AI models to detect overspending, monthly patterns, and suggest smarter habits.</li>
  <li><strong>Automated Categorization:</strong> Each transaction is auto-tagged using NLP and intelligent rule mapping (e.g., "Starbucks" → Food & Beverage).</li>
  <li><strong>Visual Financial Dashboards:</strong> Real-time charts, category-wise breakdowns, and trend analytics help users stay on track.</li>
  <li><strong>Goal-Driven Budgeting:</strong> Users can set monthly financial goals and get predictive progress indicators and alerts.</li>
  <li><strong>Receipt OCR:</strong> Upload receipts and let AI auto-extract and tag the transaction data into the system.</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Key Features</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Smart expense tracking with category suggestions</li>
  <li>AI-driven transaction labeling using natural language and pattern recognition</li>
  <li>Receipt image upload with OCR text extraction and auto-linking to records</li>
  <li>Interactive dashboards for income, savings, expenses, and goals</li>
  <li>Monthly summary reports and visual financial health overview</li>
  <li>Responsive UI optimized for both mobile and desktop</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Tech Stack</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>Frontend:</strong> AngularJS + Angular Material + Chart.js for graphs and interactivity</li>
  <li><strong>Backend:</strong> Node.js + Express.js for API routing, AI request handling, and secure auth</li>
  <li><strong>Database:</strong> MongoDB (Mongoose) – for transactional records, user data, and categorized logs</li>
  <li><strong>AI & ML:</strong> OpenRouter + GROQ APIs integrated for real-time suggestions, tagging, and spending analysis</li>
  <li><strong>Cloud:</strong> Cloudinary (receipt/image uploads), Render (backend deployment), GitHub CI/CD (auto deploys)</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">What Did I Learn?</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>How to embed LLM APIs (GROQ, OpenRouter) into backend pipelines</li>
  <li>Designed a financial data model with accurate transaction schemas and AI-tag mapping</li>
  <li>Crafted user-friendly dashboards using Angular and Chart.js to visualize behavioral insights</li>
  <li>Created secure JWT authentication system and role-based access flow</li>
  <li>Improved my product thinking — building a solution that solves a real-world personal pain</li>
  <li>Learned to use Redis with BullMQ for background job queues and transaction processing efficiency</li>
  <li>Integrated WebSockets to enable real-time updates across components for a more dynamic experience</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Challenges Faced</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Designing an AI logic that works reliably with real-world transaction formats and unstructured text</li>
  <li>Maintaining performance and accuracy while parsing hundreds of transactions using APIs</li>
  <li>Creating an intuitive UX for users unfamiliar with budgeting or analytics tools</li>
  <li>Ensuring data privacy and building a secure flow for sensitive financial data</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Impact & Takeaways</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Helped users develop awareness and discipline around daily spending</li>
  <li>Demonstrated the power of combining LLMs with traditional web apps</li>
  <li>Strengthened full-stack integration, cloud deployment, and API scalability skills</li>
  <li>Enabled modularity to expand into income forecasting and auto-bill detection in future</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Future Scope & Expansion</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Integration with actual banking APIs for real-time financial data sync</li>
  <li>Predictive analytics to recommend investment strategies and saving goals</li>
  <li>Gamified finance management features to encourage savings behavior</li>
  <li>Subscription tracking and intelligent reminders for bills and renewals</li>
  <li>Mobile app version with push notifications and offline support</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Links</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><a href="#" class="text-blue-600 font-semibold">🌐 Live Demo</a></li>
  <li><a href="#" class="text-blue-600 font-semibold">💻 GitHub – Frontend</a></li>
  <li><a href="#" class="text-blue-600 font-semibold">🔧 GitHub – Backend</a></li>
  <li><a href="https://www.youtube.com/embed/your_video_id_here" class="text-blue-600 font-semibold">📹 Project Walkthrough Video</a></li>
</ul>
`,
      videoUrl: "https://www.youtube.com/embed/your_video_id_here",
    },
    {
      title: "MyFraction-Blockchain Powered Fractional Ownership Platform",
      description:
        "A decentralized platform enabling users to invest in real estate by purchasing fractional ownership tokens. Built on blockchain to ensure secure, transparent, and tamper-proof ownership records with a secondary market for trading shares.",
      name: "rhythmix",
      theme: "orange",
      background: "bg-orange-300",
      text: "text-orange-900",
      github: "https://github.com/ritikyadav1999/MyFraction_Backend",
      live: "/",
      tech: [
        "Node.js",
        "Blockchain",
        "Solidity",
        "Express",
        "HardHat",
        "Redis",
        "BullMQ",
        "Socket.io",
        "MongoDB",
        "Angular",
      ],
      expandable: true,
      fullExplanation: `
<h2 class="text-4xl font-bold mb-4">🏠 MyFraction – Blockchain Powered Fractional Ownership for Real Estate</h2>

<p><strong>MyFraction</strong> is a decentralized platform that simplifies fractional ownership of real estate using blockchain technology. It allows users to invest in real estate assets by buying digital ownership tokens, enabling transparent, secure, and low-entry investments in property markets. Built for transparency and accessibility, it leverages smart contracts to record ownership, manage transactions, and allow secondary market trading of shares.</p>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mb-2 mt-10">Problem Statement</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>High Entry Barrier:</strong> Real estate investing typically requires large capital, making it inaccessible for average investors.</li>
  <li><strong>Lack of Liquidity:</strong> Traditional property investments are hard to resell or divide into smaller units.</li>
  <li><strong>Opaqueness in Ownership:</strong> No real-time verification of ownership and transaction records in conventional systems.</li>
  <li><strong>Centralized Control:</strong> Buyers must trust intermediaries for records and legal documentation.</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Solution</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>Fractional Ownership:</strong> Allows users to invest in small percentages of properties instead of full ownership.</li>
  <li><strong>Blockchain Ledger:</strong> All transactions, ownership shares, and transfers are recorded immutably on-chain.</li>
  <li><strong>Smart Contracts:</strong> Automatically execute buy/sell agreements and enforce rules without third parties.</li>
  <li><strong>Secondary Market:</strong> Owners can list their fractions for resale, increasing liquidity of investments.</li>
  <li><strong>Ownership Transfers:</strong> Real-time ownership transfer ensures traceability and transparency.</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Key Features</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Fractional investment in verified real estate listings</li>
  <li>On-chain ownership ledger using smart contracts</li>
  <li>Automated KYC & wallet linking</li>
  <li>Secondary market to trade property fractions</li>
  <li>Ownership dashboards and transaction histories</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Tech Stack</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><strong>Frontend:</strong> Angular + Web3.js + Metamask integration</li>
  <li><strong>Backend:</strong> Node.js + Express.js (REST APIs)</li>
  <li><strong>Blockchain:</strong> Solidity, Hardhat for contract development and testing</li>
  <li><strong>Database:</strong> MongoDB (for off-chain metadata)</li>
  <li><strong>Queueing & Jobs:</strong> Redis + BullMQ for async blockchain interactions</li>
  <li><strong>Deployment:</strong> Render for backend, GitHub Actions for CI/CD</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">What Did I Learn?</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>First hands-on experience with blockchain development using Solidity and Hardhat</li>
  <li>Learned to sync on-chain blockchain data with off-chain data stored in MongoDB</li>
  <li>Worked with Redis and BullMQ to offload and queue heavy async blockchain write operations</li>
  <li>Implemented a persistent notification system to alert users about transactions and ownership changes</li>
  <li>Understood how to design real estate tokens, smart contract logic, and secure ownership transfers</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Challenges Faced</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>This was my first large-scale blockchain project, so I had to learn how to design scalable architecture</li>
  <li>Faced difficulty in syncing off-chain records with on-chain data due to MongoDB's lack of native Int64 support, which required custom conversion algorithms</li>
  <li>Learning to manage project structure and flow — from frontend to backend to blockchain — including handling transaction confirmations and rollbacks</li>
  <li>Building reliability into blockchain interactions and testing with multiple edge-case scenarios</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Impact & Takeaways</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Democratized real estate investment by lowering capital requirement</li>
  <li>Improved transparency and traceability of ownership history</li>
  <li>Learned to build a decentralized app (dApp) from scratch</li>
  <li>Enabled a secondary property market to unlock liquidity for investors</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Future Scope & Expansion</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li>Integration with government property registries for legal proof</li>
  <li>Adding rental income sharing feature for investors</li>
  <li>Dynamic NFT-based property valuations based on market demand</li>
  <li>Multi-chain support (Polygon, Solana) for gas fee optimization</li>
  <li>Mobile-first dApp with embedded wallet and native alerts</li>
</ul>

<h3 class="text-2xl font-semibold mb-2 mt-10">Links</h3>
<ul class="list-disc pl-6 space-y-2 mb-10">
  <li><a href="#" class="text-blue-600 font-semibold">🌐 Live Demo</a></li>
  <li><a href="#" class="text-blue-600 font-semibold">💻 GitHub – Frontend</a></li>
  <li><a href="#" class="text-blue-600 font-semibold">🔧 GitHub – Backend</a></li>
  <li><a href="https://www.youtube.com/embed/your_video_id_here" class="text-blue-600 font-semibold">📹 Project Walkthrough Video</a></li>
</ul>

`,
      videoUrl: "https://www.youtube.com/embed/your_video_id_here",
    },
    {
      title: "SafetyNet – Community-Driven Emergency Response System",
      description:
        "A location-based emergency response system that lets users trigger SOS alerts, instantly notifying nearby responders via real-time geolocation and WebSocket-based communication. Designed for speed, safety, and community-driven rescue.",
      name: "goalkeeper",
      theme: "pink",
      background: "bg-pink-300",
      text: "text-pink-900",
      github: "https://github.com/ritikyadav1999/SafetyNet",
      live: "/",
      tech: [
        "React Native",
        "Node.js",
        "WebSockets",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Web Sockets",
      ],
      expandable: true,
      fullExplanation: `
<p>SafetyNet is a real-time emergency response system designed to provide immediate assistance in critical situations. It leverages geolocation and WebSocket communication to ensure rapid notification of nearby responders.</p>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Key Features</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Real-time Geolocation:</strong> Accurate location tracking of users in emergency situations.</li>
  <li><strong>WebSocket Communication:</strong> Instant bidirectional communication between users and responders.</li>
  <li><strong>Emergency Triggers:</strong> Users can trigger SOS alerts with a single click, which are immediately broadcast to nearby devices.</li>
  <li><strong>Community-Driven Rescue:</strong> The system is designed to be community-driven, allowing users to help each other in emergencies.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Tech Stack</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Frontend:</strong> React + Material UI</li>
  <li><strong>Backend:</strong> Node.js + Express (REST APIs)</li>
  <li><strong>Database:</strong> MongoDB + Mongoose</li>
  <li><strong>Auth:</strong> JWT with role-based access control</li>
  <li><strong>WebSockets:</strong> Socket.io for real-time communication.</li>
  <li><strong>Cloud:</strong> Render for backend deployment, IPFS for decentralized storage.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Why I Built This</h3>
<p>I created SafetyNet to address the critical need for immediate emergency response in urban areas. The combination of geolocation, WebSocket, and community-driven rescue makes it a powerful tool for personal safety and community resilience.</p>

<h3 class="text-2xl font-semibold mt-8 mb-2">What I Learned</h3>
<ul class="list-disc pl-6 space-y-2">
  <li>Building a real-time emergency response system.</li>
  <li>Implementing secure authentication and role-based access control.</li>
  <li>Handling WebSocket communication and geolocation.</li>
  <li>Designing a scalable backend architecture.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">🔗 Links</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><a href="#" class="text-pink-600 font-semibold">🌐 Live Demo</a></li>
  <li><a href="#" class="text-pink-600 font-semibold">💻 GitHub – Frontend</a></li>
  <li><a href="#" class="text-pink-600 font-semibold">🔧 GitHub – Backend</a></li>
  <li><a href="#" class="text-pink-600 font-semibold">📹 Project Walkthrough Video</a></li>
</ul>
`,
      videoUrl: "https://www.youtube.com/embed/your_video_id_here",
    },
    {
      title: "SocioPedia",
      description:
        "Sociopedia, a social media platform that enables users to connect, share moments, and build a digital community.Back-end is developed using NodeJs and ExpressJS to handle user authentication, database queries, and API calls.",
      name: "silly-notes",
      theme: "yellow",
      background: "bg-yellow-300",
      text: "text-yellow-900",
      github: "https://github.com/ritikyadav1999/Sociopedia",
      live: "/",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      expandable: true,
      fullExplanation: `
<p>SocioPedia is a social media platform that allows users to connect, share moments, and build a digital community. It features a robust backend infrastructure for user authentication, database queries, and API calls.</p>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Key Features</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>User Authentication:</strong> Secure JWT-based login/signup for users.</li>
  <li><strong>Database Operations:</strong> Efficient CRUD operations for user data, posts, comments, and likes.</li>
  <li><strong>API Endpoints:</strong> Comprehensive RESTful API endpoints for user management, post creation, and interaction.</li>
  <li><strong>Real-time Updates:</strong> WebSocket communication for instant updates on posts, comments, and likes.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Tech Stack</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><strong>Frontend:</strong> React + Material UI</li>
  <li><strong>Backend:</strong> Node.js + Express (REST APIs)</li>
  <li><strong>Database:</strong> MongoDB + Mongoose</li>
  <li><strong>Auth:</strong> JWT with role-based access control</li>
  <li><strong>WebSockets:</strong> Socket.io for real-time communication.</li>
  <li><strong>Cloud:</strong> Render for backend deployment, IPFS for decentralized storage.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">Why I Built This</h3>
<p>I developed SocioPedia to provide a platform for users to connect, share, and engage in a digital community. The backend infrastructure ensures secure user management, efficient data operations, and real-time updates.</p>

<h3 class="text-2xl font-semibold mt-8 mb-2">What I Learned</h3>
<ul class="list-disc pl-6 space-y-2">
  <li>Building a full-stack social media platform.</li>
  <li>Implementing secure authentication and role-based access control.</li>
  <li>Handling WebSocket communication and real-time updates.</li>
  <li>Designing efficient API endpoints and database operations.</li>
</ul>

<hr class="my-6" />

<h3 class="text-2xl font-semibold mt-8 mb-2">🔗 Links</h3>
<ul class="list-disc pl-6 space-y-2">
  <li><a href="#" class="text-yellow-600 font-semibold">🌐 Live Demo</a></li>
  <li><a href="#" class="text-yellow-600 font-semibold">💻 GitHub – Frontend</a></li>
  <li><a href="#" class="text-yellow-600 font-semibold">🔧 GitHub – Backend</a></li>
  <li><a href="#" class="text-yellow-600 font-semibold">📹 Project Walkthrough Video</a></li>
</ul>
`,
      videoUrl: "https://www.youtube.com/embed/your_video_id_here",
    },
  ];

  return projects;
};

export const getEducation = () => {
  return [
    {
      degree: "Secondary",
      year: "2016",
      school: "Suraj Public School",
      location: "Kosli, Rewari",
      image: "/education/school-bag.svg",
    },
    {
      degree: "Higher Secondary",
      year: "2018",
      school: "Vivekanand Sr. Sec. School",
      location: "Kosli, Rewari",
      image: "/education/high-school.svg",
    },
    {
      degree: "Bachelor of Technology",
      year: "2025",
      school: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      image: "/education/graduation-cap.svg",
      dept: "Information Technology",
    },
  ];
};
