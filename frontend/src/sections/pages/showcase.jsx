import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { HiLightningBolt, HiStar, HiFolderOpen, HiChip } from "react-icons/hi";

const allProjects = [
    {
        id: "fintech-01",
        category: "Custom Software",
        title: "VentureScale Dashboard",
        description: "A real-time equity management platform for VC firms. Features complex data visualization and automated cap table math.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
        tags: ["React", "D3.js", "Node.js"],
        accent: "text-blue-500",
    },
    {
        id: "auto-01",
        category: "Automation",
        title: "RouteOptima AI",
        description: "Intelligent logistics engine that sequences 5,000+ daily deliveries using a custom genetic algorithm to minimize fuel cost.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
        tags: ["Python", "FastAPI", "Redis"],
        accent: "text-emerald-500",
    },
    {
        id: "web-01",
        category: "Web Platforms",
        title: "Luxe Thread Headless",
        description: "A high-performance luxury e-commerce storefront with sub-second page loads and custom 3D product configurator.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
        tags: ["Next.js", "Three.js", "Tailwind"],
        accent: "text-indigo-500",
    },
    {
        id: "mobile-01",
        category: "Mobile Solutions",
        title: "Zenith Fitness App",
        description: "Cross-platform wellness app with real-time biometric tracking and offline-first workout synchronization.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
        tags: ["React Native", "Expo", "Firebase"],
        accent: "text-sky-500",
    },
    {
        id: "api-01",
        category: "APIs & Integrations",
        title: "Nexus Bridge API",
        description: "Unified API gateway connecting legacy banking systems to modern fintech apps with military-grade encryption.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000",
        tags: ["GraphQL", "AWS Lambda", "Go"],
        accent: "text-blue-500",
    },
    {
        id: "sec-01",
        category: "Security",
        title: "ShieldWall Monitor",
        description: "Real-time threat detection system for cloud infrastructure, using ML to identify zero-day vulnerabilities.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000",
        tags: ["Rust", "Kubernetes", "Wazuh"],
        accent: "text-emerald-500",
    },
    {
        id: "web-02",
        category: "Web Platforms",
        title: "Propulse SaaS",
        description: "B2B project management tool for architectural firms with integrated CAD file viewing and redlining capabilities.",
        image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000",
        tags: ["React", "PostgreSQL", "Canvas API"],
        accent: "text-indigo-500",
    },
    {
        id: "auto-02",
        category: "Automation",
        title: "EmailFlow Decision Engine",
        description: "AI agent that categorizes and drafts responses for 10,000+ support tickets daily based on customer sentiment.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
        tags: ["OpenAI", "LangChain", "Node.js"],
        accent: "text-violet-500",
    },
    {
        id: "mobile-02",
        category: "Mobile Solutions",
        title: "PaySwift Wallet",
        description: "Crypto-fiat bridge wallet for the GCC market, supporting instant QR payments and biometric KYC.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000",
        tags: ["React Native", "Web3.js", "Zustand"],
        accent: "text-sky-500",
    },
    {
        id: "custom-02",
        category: "Custom Software",
        title: "EduTrack Portal",
        description: "Learning management system for specialized academies, featuring automated grading and parent-teacher live chat.",
        image: "https://images.unsplash.com/photo-1509062522246-37324d5927d0?q=80&w=1000",
        tags: ["Next.js", "Socket.io", "Prisma"],
        accent: "text-blue-500",
    },
    {
        id: "api-02",
        category: "APIs & Integrations",
        title: "OmniSync Hub",
        description: "Master data management tool that syncs inventory across Shopify, Amazon, and physical ERP systems in real-time.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        tags: ["Node.js", "Kafka", "Redis"],
        accent: "text-cyan-500",
    },
    {
        id: "web-03",
        category: "Web Platforms",
        title: "EcoMetric Dashboard",
        description: "ESG reporting platform for enterprise companies to track carbon footprint and sustainability goals.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000",
        tags: ["TypeScript", "Recharts", "Tailwind"],
        accent: "text-indigo-500",
    }
];

export default function ShowcasePage() {
    const [filter, setFilter] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const categories = ["All", ...new Set(allProjects.map(p => p.category))];
    const filteredProjects = filter === "All"
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = filteredProjects.length > visibleCount;

    return (
        <div className="min-h-screen bg-[#fafaf8] selection:bg-blue-500/30 overflow-hidden font-[Poppins,sans-serif]">
            
            {/* ── HERO ── */}
            <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-32">
                {/* Soft Background Accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full mb-16">
                    {/* Left Text Content */}
                    <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 mb-6"
                        >
                            <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] shadow-sm">
                                Our Portfolio
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 hidden sm:inline-block">— Selected Works</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0f0f0f] mb-8"
                        >
                            Engineering <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-light">
                                Impact.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl leading-relaxed text-[#666] max-w-xl mx-auto lg:mx-0 font-light mb-10"
                        >
                            Explore a curated selection of platforms, apps, and interfaces we've built for ambitious companies worldwide.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => document.querySelector("#portfolio-grid")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 w-full sm:w-auto"
                            >
                                View Projects
                                <FaArrowRight className="text-xs" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Visual Content */}
                    <div className="flex-1 w-full max-w-[600px] relative mt-16 lg:mt-0 hidden md:flex">
                        <motion.div 
                            initial={{ opacity: 0, x: 50, rotate: 2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative z-10 w-full aspect-[4/3] bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-4 sm:p-6 overflow-hidden flex flex-col"
                        >
                            {/* Mockup Header */}
                            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4 shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-4 w-12 bg-black/5 rounded-full"></div>
                                </div>
                            </div>

                            {/* Portfolio Dashboard */}
                            <div className="flex-1 grid grid-cols-2 gap-4 h-[calc(100%-2rem)] pb-4">
                                {/* Left Col - Featured Card */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex-1 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl border border-black/5 p-4 flex flex-col shadow-inner overflow-hidden relative">
                                        <div className="absolute top-2 right-2 text-indigo-500/20"><HiFolderOpen size={48} /></div>
                                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-600 mb-auto">
                                            <HiStar />
                                        </div>
                                        <div className="mt-4">
                                            <div className="h-3 w-3/4 bg-white/80 rounded mb-2"></div>
                                            <div className="h-2 w-1/2 bg-white/60 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="h-24 bg-white/50 rounded-2xl border border-black/5 p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 w-full bg-gray-200 rounded"></div>
                                            <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Col - Gallery */}
                                <div className="flex flex-col gap-4">
                                    <div className="h-24 bg-white/50 rounded-2xl border border-black/5 p-4 flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                                        <div className="space-y-2 flex-1">
                                            <div className="h-2 w-full bg-gray-200 rounded"></div>
                                            <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-[#0f0f0f] rounded-2xl border border-black/10 p-4 text-white flex flex-col justify-end shadow-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600/30"></div>
                                        <div className="relative z-10">
                                            <div className="text-sm font-bold">120+</div>
                                            <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Projects Shipped</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 z-20 bg-white/90 border border-black/5 rounded-2xl p-4 shadow-xl flex items-center gap-4 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                                <HiStar size={24} />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Award Winning</div>
                                <div className="text-sm font-bold text-gray-900">Designs</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-4 top-8 lg:-left-8 lg:top-12 z-20 bg-white/90 border border-black/5 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                                <HiLightningBolt size={18} />
                            </div>
                            <div className="pr-2">
                                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Performance</div>
                                <div className="text-sm font-bold text-gray-900">Scale Built</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div id="portfolio-grid" className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-24">
                {/* Filter Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-2 border-b border-black/5 pb-8 pt-8 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => { setFilter(cat); setVisibleCount(6); }}
                            className={`px-5 py-2.5 rounded-full text-[13px] font-medium capitalize transition-all duration-300 ${
                                filter === cat
                                    ? "bg-black text-white shadow-md shadow-black/10"
                                    : "bg-white border border-gray-200 text-gray-500 hover:text-black hover:border-black/20"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* ── PROJECT GRID ── */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="group cursor-pointer flex flex-col"
                            >
                                {/* Img Container */}
                                <div className="relative aspect-[16/10] overflow-hidden border border-black/10 mb-6 bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80" />

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                            <FaArrowRight className="text-[10px]" />
                                        </div>
                                    </div>
                                </div>

                                <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${project.accent}`}>
                                    {project.category}
                                </p>
                                <h3 className="font-[DM_Serif_Display,Georgia,serif] text-2xl text-[#0f0f0f] mb-3 group-hover:text-blue-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs leading-relaxed text-[#666] mb-5 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-mono px-2 py-0.5 border border-black/10 text-gray-500 uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── LOAD MORE CTA ── */}
                {hasMore && (
                    <motion.div 
                        layout 
                        className="mt-20 flex justify-center pt-12 border-t border-black/5"
                    >
                        <button
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="inline-flex items-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-white border border-black/10 hover:border-blue-500 hover:text-blue-500 text-black rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                        >
                            Load Next Batch
                            <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                ↓
                            </motion.span>
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}