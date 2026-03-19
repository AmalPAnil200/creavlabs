import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Reuse your existing projects array here or import it
const allProjects = [
    {
        id: "fintech-01",
        category: "Custom Software",
        title: "VentureScale Dashboard",
        description: "A real-time equity management platform for VC firms. Features complex data visualization and automated cap table math.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
        tags: ["React", "D3.js", "Node.js"],
        accent: "text-blue-400",
    },
    {
        id: "auto-01",
        category: "Automation",
        title: "RouteOptima AI",
        description: "Intelligent logistics engine that sequences 5,000+ daily deliveries using a custom genetic algorithm to minimize fuel cost.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
        tags: ["Python", "FastAPI", "Redis"],
        accent: "text-violet-400",
    },
    {
        id: "web-01",
        category: "Web Platforms",
        title: "Luxe Thread Headless",
        description: "A high-performance luxury e-commerce storefront with sub-second page loads and custom 3D product configurator.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
        tags: ["Next.js", "Three.js", "Tailwind"],
        accent: "text-indigo-400",
    },
    {
        id: "mobile-01",
        category: "Mobile Solutions",
        title: "Zenith Fitness App",
        description: "Cross-platform wellness app with real-time biometric tracking and offline-first workout synchronization.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
        tags: ["React Native", "Expo", "Firebase"],
        accent: "text-sky-400",
    },
    {
        id: "api-01",
        category: "APIs & Integrations",
        title: "Nexus Bridge API",
        description: "Unified API gateway connecting legacy banking systems to modern fintech apps with military-grade encryption.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
        tags: ["GraphQL", "AWS Lambda", "Go"],
        accent: "text-cyan-400",
    },
    {
        id: "sec-01",
        category: "Security",
        title: "ShieldWall Monitor",
        description: "Real-time threat detection system for cloud infrastructure, using ML to identify zero-day vulnerabilities.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
        tags: ["Rust", "Kubernetes", "Wazuh"],
        accent: "text-emerald-400",
    },
    {
        id: "web-02",
        category: "Web Platforms",
        title: "Propulse SaaS",
        description: "B2B project management tool for architectural firms with integrated CAD file viewing and redlining capabilities.",
        image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000",
        tags: ["React", "PostgreSQL", "Canvas API"],
        accent: "text-indigo-400",
    },
    {
        id: "auto-02",
        category: "Automation",
        title: "EmailFlow Decision Engine",
        description: "AI agent that categorizes and drafts responses for 10,000+ support tickets daily based on customer sentiment.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
        tags: ["OpenAI", "LangChain", "Node.js"],
        accent: "text-violet-400",
    },
    {
        id: "mobile-02",
        category: "Mobile Solutions",
        title: "PaySwift Wallet",
        description: "Crypto-fiat bridge wallet for the GCC market, supporting instant QR payments and biometric KYC.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000",
        tags: ["React Native", "Web3.js", "Zustand"],
        accent: "text-sky-400",
    },
    {
        id: "custom-02",
        category: "Custom Software",
        title: "EduTrack Portal",
        description: "Learning management system for specialized academies, featuring automated grading and parent-teacher live chat.",
        image: "https://images.unsplash.com/photo-1509062522246-37324d5927d0?q=80&w=1000",
        tags: ["Next.js", "Socket.io", "Prisma"],
        accent: "text-blue-400",
    },
    {
        id: "api-02",
        category: "APIs & Integrations",
        title: "OmniSync Hub",
        description: "Master data management tool that syncs inventory across Shopify, Amazon, and physical ERP systems in real-time.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        tags: ["Node.js", "Kafka", "Redis"],
        accent: "text-cyan-400",
    },
    {
        id: "web-03",
        category: "Web Platforms",
        title: "EcoMetric Dashboard",
        description: "ESG reporting platform for enterprise companies to track carbon footprint and sustainability goals.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000",
        tags: ["TypeScript", "Recharts", "Tailwind"],
        accent: "text-indigo-400",
    }
];

export default function ShowcasePage() {
    const [filter, setFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    // Filter Logic
    const categories = ["All", ...new Set(allProjects.map(p => p.category))];
    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = filteredProjects.length > visibleCount;

    return (
        <div className="min-h-screen bg-zinc-950 pt-32">
            {/* Grid Lines Background (Matching your Hero) */}
            <div className="grid-lines fixed inset-0 pointer-events-none opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

                {/* ── HEADER ── */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-blue-400/30 text-blue-400 bg-blue-400/[0.06]">
                            Showcase
                        </span>
                        <span className="font-mono text-xs text-white/20">— CreaveLabs Portfolio</span>
                    </motion.div>

                    <h1 className="font-serif font-normal text-white leading-none tracking-tight text-[clamp(40px,6vw,80px)] mb-8">
                        Engineering <span className="italic text-blue-400">Impact.</span>
                    </h1>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 border-b border-white/[0.06] pb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setFilter(cat); setVisibleCount(6); }}
                                className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${filter === cat
                                        ? "border-blue-400 text-blue-400 bg-blue-400/5"
                                        : "border-white/10 text-white/30 hover:border-white/30"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>

                {/* ── PROJECT GRID ── */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group cursor-pointer"
                            >
                                {/* Image Container (Matching your sample) */}
                                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 mb-6 bg-zinc-900">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 opacity-50 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                                    {/* Subtle hover icon */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-zinc-950">
                                            <FaArrowRight className="text-[10px]" />
                                        </div>
                                    </div>
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
                                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-white/5 text-white/20 uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── PAGINATION / SHOW MORE ── */}
                {hasMore && (
                    <div className="mt-20 flex justify-center pt-12 border-t border-white/[0.06]">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 border border-white/10 text-white/50 hover:border-blue-400 hover:text-white transition-all duration-300"
                        >
                            Load Next Batch
                            <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                ↓
                            </motion.span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}