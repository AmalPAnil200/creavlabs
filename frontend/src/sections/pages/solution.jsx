import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HiChip, HiCode, HiDeviceMobile, HiCog, HiLightningBolt,
    HiShieldCheck, HiArrowRight, HiCheckCircle,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";


/* ─────────────────────────────────────────
   SOLUTIONS DATA
───────────────────────────────────────── */

const projects = [
    {
        id: "fintech-portal",
        category: "Custom Software",
        title: "VentureScale Dashboard",
        description: "A real-time investment tracking portal for a Dubai-based VC firm, managing $500M+ in assets.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Replace with your own
        tags: ["React", "Node.js", "Chart.js"],
        accent: "text-blue-400"
    },
    {
        id: "logistics-ai",
        category: "Automation",
        title: "RouteOptima Engine",
        description: "An AI-powered logistics platform that reduced delivery times by 22% using automated route sequencing.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "FastAPI", "Google Maps API"],
        accent: "text-violet-400"
    },
    {
        id: "ecommerce-platform",
        category: "Web Platforms",
        title: "Luxe Thread Storefront",
        description: "A headless e-commerce experience built for high-speed conversion and global scaling.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Shopify API"],
        accent: "text-indigo-400"
    },
    {
        id: "ecommerce-platform",
        category: "Web Platforms",
        title: "Luxe Thread Storefront",
        description: "A headless e-commerce experience built for high-speed conversion and global scaling.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Shopify API"],
        accent: "text-indigo-400"
    },
    {
        id: "ecommerce-platform",
        category: "Web Platforms",
        title: "Luxe Thread Storefront",
        description: "A headless e-commerce experience built for high-speed conversion and global scaling.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Shopify API"],
        accent: "text-indigo-400"
    },
    {
        id: "ecommerce-platform",
        category: "Web Platforms",
        title: "Luxe Thread Storefront",
        description: "A headless e-commerce experience built for high-speed conversion and global scaling.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Tailwind", "Shopify API"],
        accent: "text-indigo-400"
    },
];



const solutions = [
    {
        id: "custom-software",
        icon: <HiChip className="w-6 h-6" />,
        tag: "01",
        label: "Custom Software",
        title: "Bespoke Software Development",
        short: "End-to-end software tailored exactly to your business logic.",
        accentText: "text-blue-400",
        accentBorder: "border-blue-400/40",
        accentBg: "bg-blue-400/10",
        accentBarBg: "bg-blue-400",
        accentBtnBg: "bg-blue-400 hover:bg-white",
        accentBtnBorder: "border-blue-400",
        accentHex: "#60A5FA",
        headline: "Software that fits like a glove",
        description:
            "We don't believe in off-the-shelf. Every business is unique, and your software should be too. We engineer bespoke platforms — from internal tools to customer-facing products — that align perfectly with your workflows, your team, and your growth trajectory.",
        outcomes: [
            "Workflow automation that saves 40%+ in ops time",
            "Custom dashboards with real-time analytics",
            "Secure, GDPR-compliant data architecture",
            "Seamless integration with your existing stack",
            "Role-based access control and audit trails",
            "99.9% uptime SLA with proactive monitoring",
        ],
        approach: [
            { step: "01", title: "Listen", desc: "We start by deeply understanding your pain points, team, and ambitions." },
            { step: "02", title: "Architect", desc: "We design a scalable system architecture before writing a line of code." },
            { step: "03", title: "Build", desc: "Agile sprints with bi-weekly demos — full transparency throughout." },
            { step: "04", title: "Evolve", desc: "Continuous support, iteration, and growth as your needs change." },
        ],
        stack: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Terraform"],
    },
    {
        id: "web-platforms",
        icon: <HiCode className="w-6 h-6" />,
        tag: "02",
        label: "Web Platforms",
        title: "High-Performance Web Apps",
        short: "Scalable web platforms engineered for speed, reliability, and growth.",
        accentText: "text-indigo-400",
        accentBorder: "border-indigo-400/40",
        accentBg: "bg-indigo-400/10",
        accentBarBg: "bg-indigo-400",
        accentBtnBg: "bg-indigo-400 hover:bg-white",
        accentBtnBorder: "border-indigo-400",
        accentHex: "#818CF8",
        headline: "Built to handle whatever you throw at it",
        description:
            "From SaaS products to enterprise portals, we build web applications that scale effortlessly. Our engineering prioritises Core Web Vitals, zero-downtime deployments, and architectures that grow with your user base — whether that's 100 or 10 million users.",
        outcomes: [
            "90+ Lighthouse performance scores, always",
            "Micro-frontend architecture for large teams",
            "Server-side rendering and static generation",
            "Real-time features with WebSockets and SSE",
            "CI/CD pipelines for rapid, safe releases",
            "Multi-tenant infrastructure with data isolation",
        ],
        approach: [
            { step: "01", title: "Scope", desc: "Map out features, user flows, and non-functional requirements." },
            { step: "02", title: "Design", desc: "High-fidelity UI and system design reviewed with your team." },
            { step: "03", title: "Engineer", desc: "Production-grade code, thorough testing, and clear documentation." },
            { step: "04", title: "Launch", desc: "Zero-downtime deployment, monitoring, and post-launch support." },
        ],
        stack: ["React", "Next.js", "TypeScript", "GraphQL", "Vercel", "Cloudflare"],
    },
    {
        id: "mobile",
        icon: <HiDeviceMobile className="w-6 h-6" />,
        tag: "03",
        label: "Mobile Solutions",
        title: "Cross-Platform Mobile Apps",
        short: "Native-quality apps for iOS and Android from a single codebase.",
        accentText: "text-sky-400",
        accentBorder: "border-sky-400/40",
        accentBg: "bg-sky-400/10",
        accentBarBg: "bg-sky-400",
        accentBtnBg: "bg-sky-400 hover:bg-white",
        accentBtnBorder: "border-sky-400",
        accentHex: "#38BDF8",
        headline: "Your users deserve a great mobile experience",
        description:
            "We build polished, performant mobile apps using React Native that feel truly native. Whether it's a consumer app or an enterprise tool, we take it from concept to the App Store and beyond — with the analytics, A/B testing, and OTA updates you need to keep improving.",
        outcomes: [
            "iOS and Android from a single React Native codebase",
            "Offline-first with intelligent local data sync",
            "Push notifications, deep linking, biometrics",
            "App Store and Google Play submission handled",
            "Crash analytics and performance monitoring built in",
            "OTA updates via Expo — no store review needed",
        ],
        approach: [
            { step: "01", title: "Define", desc: "Clarify core user journeys, platform targets, and MVP scope." },
            { step: "02", title: "Prototype", desc: "Interactive prototype to validate UX before development starts." },
            { step: "03", title: "Develop", desc: "Weekly demo sessions, feature flags, and comprehensive QA." },
            { step: "04", title: "Ship", desc: "Store submission, onboarding analytics, and iteration planning." },
        ],
        stack: ["React Native", "Expo", "TypeScript", "Firebase", "Zustand", "RevenueCat"],
    },
    {
        id: "automation",
        icon: <HiCog className="w-6 h-6" />,
        tag: "04",
        label: "Automation",
        title: "Process Automation & AI",
        short: "Eliminate manual work and unlock exponential efficiency with smart automation.",
        accentText: "text-violet-400",
        accentBorder: "border-violet-400/40",
        accentBg: "bg-violet-400/10",
        accentBarBg: "bg-violet-400",
        accentBtnBg: "bg-violet-400 hover:bg-white",
        accentBtnBorder: "border-violet-400",
        accentHex: "#A78BFA",
        headline: "Let your systems do the heavy lifting",
        description:
            "We identify your highest-cost manual processes and engineer intelligent automation solutions — from robotic process automation and API orchestration to AI-powered decision engines. The result: your team focuses on what humans do best, while the machines handle the rest.",
        outcomes: [
            "Automated reporting, invoicing, and data pipelines",
            "AI-powered document processing and extraction",
            "CRM and ERP workflow automation",
            "Custom chatbots and virtual assistants",
            "Intelligent alert and escalation systems",
            "Integration with 200+ third-party services",
        ],
        approach: [
            { step: "01", title: "Audit", desc: "Map every manual touchpoint and quantify the cost in time and money." },
            { step: "02", title: "Prioritise", desc: "Rank automation opportunities by ROI and implementation effort." },
            { step: "03", title: "Automate", desc: "Build, test, and deploy automation workflows with full monitoring." },
            { step: "04", title: "Optimise", desc: "Continuous tuning and expansion as your processes evolve." },
        ],
        stack: ["Python", "LangChain", "OpenAI", "n8n", "Zapier", "Apache Airflow"],
    },
    {
        id: "api",
        icon: <HiLightningBolt className="w-6 h-6" />,
        tag: "05",
        label: "APIs & Integrations",
        title: "API Design & Integration",
        short: "Connect everything. Make your systems speak to each other flawlessly.",
        accentText: "text-cyan-400",
        accentBorder: "border-cyan-400/40",
        accentBg: "bg-cyan-400/10",
        accentBarBg: "bg-cyan-400",
        accentBtnBg: "bg-cyan-400 hover:bg-white",
        accentBtnBorder: "border-cyan-400",
        accentHex: "#22D3EE",
        headline: "Your tools should work together, not against you",
        description:
            "Siloed systems slow your business down. We design and build clean, secure REST and GraphQL APIs, and integrate your platforms — whether it's Salesforce, Stripe, HubSpot, or a bespoke legacy system. Everything talking, everything in sync.",
        outcomes: [
            "REST and GraphQL API design with OpenAPI specs",
            "Webhook infrastructure and event-driven architecture",
            "Third-party integrations (Stripe, HubSpot, Slack, etc.)",
            "Legacy system modernisation and adapter layers",
            "Rate limiting, caching, and API gateway setup",
            "Developer portals and API documentation",
        ],
        approach: [
            { step: "01", title: "Discover", desc: "Understand every system, data schema, and integration point." },
            { step: "02", title: "Design", desc: "Draft API contracts, data mappings, and error handling strategies." },
            { step: "03", title: "Integrate", desc: "Build and test each integration with end-to-end validation." },
            { step: "04", title: "Monitor", desc: "Real-time error tracking, alerting, and SLA reporting." },
        ],
        stack: ["Node.js", "FastAPI", "GraphQL", "Kafka", "AWS API Gateway", "Postman"],
    },
    {
        id: "security",
        icon: <HiShieldCheck className="w-6 h-6" />,
        tag: "06",
        label: "Security",
        title: "Cloud Security & Compliance",
        short: "Build trust into every layer — secure by design, compliant by default.",
        accentText: "text-emerald-400",
        accentBorder: "border-emerald-400/40",
        accentBg: "bg-emerald-400/10",
        accentBarBg: "bg-emerald-400",
        accentBtnBg: "bg-emerald-400 hover:bg-white",
        accentBtnBorder: "border-emerald-400",
        accentHex: "#34D399",
        headline: "Security isn't a feature — it's a foundation",
        description:
            "From penetration testing and vulnerability assessments to GDPR compliance frameworks and zero-trust architecture, we make sure your software is as secure as it is functional. We harden your existing systems and bake security into every new build.",
        outcomes: [
            "Penetration testing and security audits",
            "GDPR, SOC 2, and ISO 27001 compliance consulting",
            "Zero-trust network architecture design",
            "Secret management and secrets rotation",
            "DDoS protection and WAF configuration",
            "Security training for your engineering team",
        ],
        approach: [
            { step: "01", title: "Assess", desc: "Full security audit — code, infrastructure, and access controls." },
            { step: "02", title: "Plan", desc: "Prioritised remediation roadmap aligned with compliance needs." },
            { step: "03", title: "Harden", desc: "Implement fixes, controls, and automated security scanning." },
            { step: "04", title: "Certify", desc: "Support through compliance audits and ongoing security reviews." },
        ],
        stack: ["AWS Shield", "Vault", "Snyk", "OWASP ZAP", "Cloudflare", "Wazuh"],
    },
];

/* ─────────────────────────────────────────
   SOLUTION CARD (left panel)
───────────────────────────────────────── */
function SolutionCard({ solution, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`
        w-full text-left group relative overflow-hidden
        border-b border-white/[0.07] py-5
        transition-colors duration-200
        ${isActive ? "bg-white/[0.03]" : "bg-transparent hover:bg-white/[0.015]"}
      `}
        >
            {/* Active bar */}
            <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${isActive ? solution.accentBarBg : "bg-transparent"
                    }`}
            />

            <div className="flex items-center gap-5 pl-5 pr-4">
                <span className={`shrink-0 font-mono text-xs tracking-widest ${isActive ? solution.accentText : "text-white/20"}`}>
                    {solution.tag}
                </span>

                <div
                    className={`shrink-0 w-9 h-9 flex items-center justify-center border transition-colors duration-200 ${isActive ? `${solution.accentBorder} ${solution.accentText}` : "border-white/10 text-white/40"
                        }`}
                >
                    {solution.icon}
                </div>

                <div className="flex-1 min-w-0">
                    <p className={`font-mono text-xs uppercase tracking-widest mb-0.5 transition-colors duration-200 ${isActive ? solution.accentText : "text-white/30"}`}>
                        {solution.label}
                    </p>
                    <h3 className={`font-serif text-[15px] font-semibold leading-tight transition-colors duration-200 ${isActive ? "text-white" : "text-white/70"}`}>
                        {solution.title}
                    </h3>
                </div>

                <HiArrowRight
                    className={`shrink-0 transition-all duration-300 ${isActive ? `${solution.accentText} translate-x-0.5` : "text-white/15"
                        }`}
                />
            </div>
        </button>
    );
}

/* ─────────────────────────────────────────
   SOLUTION DETAIL (right panel)
───────────────────────────────────────── */
function SolutionDetail({ solution }) {
    return (
        <motion.div
            key={solution.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10 h-full"
        >
            {/* Header */}
            <div className="pb-8 border-b border-white/[0.06]">
                <div className="flex items-center gap-3 mb-5">
                    <span className={`font-mono text-xs tracking-widest uppercase px-2 py-1 border ${solution.accentText} ${solution.accentBorder} ${solution.accentBg}`}>
                        {solution.tag} — {solution.label}
                    </span>
                </div>
                <h2 className="font-serif text-4xl xl:text-5xl font-normal text-white tracking-tight leading-none mb-4">
                    {solution.headline}
                </h2>
                <p className="font-mono text-sm font-light leading-relaxed text-white/45 max-w-xl">
                    {solution.description}
                </p>
            </div>

            {/* Outcomes */}
            <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-5">Key Outcomes</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2">
                    {solution.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 py-3 pr-4 border-b border-white/[0.05]">
                            <span className={`shrink-0 font-mono text-xs mt-px ${solution.accentText}`}>↳</span>
                            <span className="font-mono text-xs leading-relaxed text-white/65">{o}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Approach */}
            <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-5">Our Approach</p>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    {solution.approach.map((a) => (
                        <div key={a.step} className="p-4 border border-white/[0.07] bg-white/[0.015]">
                            <span className={`block font-mono text-xs mb-3 ${solution.accentText}`}>{a.step}</span>
                            <p className="font-serif text-sm font-semibold text-white mb-1.5">{a.title}</p>
                            <p className="font-mono text-xs leading-relaxed text-white/35">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stack + CTA */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2">
                <div className="flex-1">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-3">Technology</p>
                    <div className="flex flex-wrap gap-2">
                        {solution.stack.map((t) => (
                            <span key={t} className="font-mono text-xs px-2.5 py-1 border border-white/10 bg-white/[0.02] text-white/50 tracking-wide">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={`group shrink-0 flex items-center gap-3 font-mono text-xs uppercase tracking-widest px-5 py-3 border transition-all duration-200 text-zinc-950 ${solution.accentBtnBg} ${solution.accentBtnBorder}`}
                >
                    Start This Project
                    <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                </button>
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function SolutionPage() {
    const [active, setActive] = useState(solutions[0]);
    // 1. Add useState to your imports if not already there
    const [visibleCount, setVisibleCount] = useState(6);

    // 2. Slice your projects array
    const visibleProjects = projects.slice(0, visibleCount);
    const hasMore = projects.length > visibleCount;

    return (
        <div className="min-h-screen bg-zinc-950">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');
        * { font-family: 'DM Mono', monospace; }
        .font-serif { font-family: 'DM Serif Display', Georgia, serif !important; }
        .grid-lines {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker-inner { display:inline-flex; animation: ticker 30s linear infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-med  { animation: float 4.5s ease-in-out infinite 1s; }
      `}</style>


            {/* ── HERO ── */}
            <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
                {/* Grid */}
                <div className="grid-lines absolute inset-0 pointer-events-none" />

                {/* Blue glow blobs */}
                <div className="pointer-events-none absolute top-1/4 left-2/3 w-[600px] h-[600px] rounded-full bg-blue-500/[0.07] blur-[100px]" />
                <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.06] blur-[80px]" />

                {/* Floating decorative elements */}
                <div className="pointer-events-none absolute right-16 top-1/3 float-slow hidden xl:flex flex-col gap-2 opacity-20">
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 self-center" />
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                </div>
                <div className="pointer-events-none absolute left-12 bottom-1/3 float-med hidden xl:block opacity-15">
                    <div className="w-16 h-16 border border-blue-400/50 rotate-45" />
                </div>

                <div className="relative z-10 px-6 pt-36 pb-20 max-w-7xl mx-auto w-full">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-blue-400/30 text-blue-400 bg-blue-400/[0.06]">
                            Solutions
                        </span>
                        <span className="font-mono text-xs text-white/20">— CreaveLabs Software</span>
                    </motion.div>

                    {/* Hero headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 36 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="space-y-2 mb-10"
                    >
                        <h1 className="font-serif font-normal text-white leading-none tracking-tight text-[clamp(50px,7.5vw,105px)]">
                            Solutions have
                        </h1>
                        <h1 className="font-serif font-normal italic text-blue-400 leading-none tracking-tight text-[clamp(50px,7.5vw,105px)]">
                            a voice.
                        </h1>
                        <h1 className="font-serif font-normal text-white/20 leading-none tracking-tight text-[clamp(50px,7.5vw,105px)]">
                            We listen.
                        </h1>
                    </motion.div>

                    {/* Tagline + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
                    >
                        <div className="max-w-md">
                            <p className="font-mono text-xs leading-relaxed text-white/40 mb-5">
                                At CreaveLabs, we believe every business challenge deserves a thoughtful software answer. We don't sell products — we craft solutions by first mastering the art of listening.
                            </p>
                            {/* Pull quote */}
                            <div className="flex items-start gap-3 pl-4 border-l-2 border-blue-400/50">
                                <p className="font-serif italic text-white/60 text-sm leading-relaxed">
                                    "In CreaveLabs, Solutions have a voice — we know the art of listening."
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 shrink-0">
                            <button
                                onClick={() => document.querySelector("#solutions-panel")?.scrollIntoView({ behavior: "smooth" })}
                                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
                            >
                                Explore Solutions
                                <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200"
                            >
                                Talk to Us
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Ticker */}
                <div className="relative z-10 overflow-hidden whitespace-nowrap border-t border-b border-white/[0.06] py-3">
                    <div className="ticker-inner">
                        {[...Array(6)].map((_, i) => (
                            <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.2em] text-white/20">
                                Custom Software <span className="text-blue-400">✦</span>
                                Web Platforms <span className="text-indigo-400">✦</span>
                                Mobile Apps <span className="text-sky-400">✦</span>
                                Process Automation <span className="text-violet-400">✦</span>
                                API Integrations <span className="text-cyan-400">✦</span>
                                Cloud Security <span className="text-emerald-400">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PHILOSOPHY STRIP ── */}
            <section className="border-t border-white/[0.06] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.07]">
                        {[
                            {
                                num: "01",
                                title: "We Listen First",
                                body: "Every engagement starts with deep discovery. We ask the questions others skip — so the software we build actually solves the real problem.",
                                accent: "text-blue-400",
                            },
                            {
                                num: "02",
                                title: "We Build with Purpose",
                                body: "No unnecessary complexity. Every architectural decision is tied to a business outcome. Clean code, clear reasoning, measurable results.",
                                accent: "text-indigo-400",
                            },
                            {
                                num: "03",
                                title: "We Grow with You",
                                body: "Our relationship doesn't end at launch. We're your long-term technology partner — scaling, optimising, and evolving your software as you grow.",
                                accent: "text-sky-400",
                            },
                        ].map((p, i) => (
                            <motion.div
                                key={p.num}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 border-b md:border-b-0 md:border-r border-white/[0.07] last:border-0"
                            >
                                <span className={`font-mono text-xs mb-5 block ${p.accent}`}>{p.num}</span>
                                <h3 className="font-serif text-xl font-normal text-white mb-3">{p.title}</h3>
                                <p className="font-mono text-xs leading-relaxed text-white/40">{p.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SOLUTIONS PANEL ── */}
            <section id="solutions-panel" className="py-24 px-6 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                    >
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-4">What We Build</p>
                            <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-6xl">
                                Software that{" "}
                                <span className="italic text-blue-400">moves businesses</span>
                            </h2>
                        </div>
                        <p className="font-mono text-xs leading-relaxed text-white/30 max-w-xs">
                            Select a solution to see exactly what we deliver, how we approach it, and what technology powers it.
                        </p>
                    </motion.div>

                    {/* Two-column panel */}
                    <div className="flex flex-col lg:flex-row border border-white/[0.07]">
                        {/* LEFT */}
                        <div className="flex flex-col lg:w-[360px] xl:w-[400px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
                            {solutions.map((sol) => (
                                <SolutionCard
                                    key={sol.id}
                                    solution={sol}
                                    isActive={active.id === sol.id}
                                    onClick={() => setActive(sol)}
                                />
                            ))}
                        </div>

                        {/* RIGHT */}
                        <div className="flex-1 p-8 xl:p-12 min-h-[700px] bg-white/[0.012]">
                            <AnimatePresence mode="wait">
                                <SolutionDetail key={active.id} solution={active} />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECT SHOWCASE ── */}
            <section className="py-24 px-6 border-t border-white/[0.06] bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-4">Selected Works</p>
                        <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-6xl">
                            Built to <span className="italic text-blue-400">Perform</span>
                        </h2>
                    </div>

                    {/* The Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                {/* ... Your existing Image Container and Details ... */}
                                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 mb-6">
                                    <img src={project.image} alt={project.title} className="..." />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                                </div>

                                <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${project.accent}`}>
                                    {project.category}
                                </p>
                                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs leading-relaxed text-white/40 mb-5 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-white/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* ── SHOW MORE BUTTON ── */}
                    {hasMore && (
                        <div className="mt-16 flex justify-center">
                            <button
                                onClick={() => setVisibleCount(prev => prev + 6)}
                                className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-white/10 text-white/50 hover:border-blue-400 hover:text-white transition-all duration-300"
                            >
                                Show More Projects
                                <motion.span
                                    animate={{ y: [0, 4, 0] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                >
                                    ↓
                                </motion.span>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* ── STATS ── */}
            <section className="border-t border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                    {[
                        { value: "120+", label: "Software solutions shipped" },
                        { value: "4.9★", label: "Average client rating" },
                        { value: "40%", label: "Avg. ops efficiency gain" },
                        { value: "3×", label: "Faster time-to-market" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex flex-col justify-center py-12 px-8 gap-2"
                        >
                            <span className="font-serif font-normal text-white leading-none tracking-tight text-5xl xl:text-6xl">
                                {stat.value}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-[0.15em] text-white/30">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── TESTIMONIAL ── */}
            <section className="py-24 px-6 border-t border-white/[0.06]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400 mb-8">Client Perspective</p>
                        <blockquote className="font-serif italic font-normal text-white leading-relaxed text-2xl xl:text-3xl mb-8 tracking-tight">
                            "CreaveLabs didn't just build what we asked for — they helped us figure out what we actually needed. The listening phase alone saved us months of going in the wrong direction."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-px h-4 bg-white/20" />
                            <p className="font-mono text-xs text-white/40 uppercase tracking-[0.15em]">
                                Head of Engineering — Fintech Startup, Dubai
                            </p>
                            <div className="w-px h-4 bg-white/20" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden border border-blue-400/15 px-12 py-24 xl:px-24"
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-blue-400/[0.08] blur-[80px]" />
                        <div className="pointer-events-none absolute -top-20 -left-10 w-[300px] h-[300px] rounded-full bg-indigo-400/[0.05] blur-[60px]" />

                        <div className="relative z-10 max-w-3xl">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-6">
                                Start a Conversation
                            </p>
                            <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-7xl mb-6">
                                Tell us your
                                <br />
                                <span className="italic text-white/35">biggest challenge.</span>
                            </h2>
                            <p className="font-mono text-sm leading-relaxed text-white/40 mb-10 max-w-sm">
                                We'll listen. Then we'll come back with a clear plan, a realistic timeline, and a price. No sales fluff — just honest engineering.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                                    className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] px-7 py-4 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
                                >
                                    Let's Talk
                                    <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                                <button
                                    onClick={() => document.querySelector("#solutions-panel")?.scrollIntoView({ behavior: "smooth" })}
                                    className="font-mono text-xs uppercase tracking-[0.12em] px-7 py-4 border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200"
                                >
                                    Explore Solutions
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
