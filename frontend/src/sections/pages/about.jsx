import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaPaintBrush, FaGlobe, FaRocket } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function AboutPage() {
    const stats = [
        { value: "50+", label: "Projects Delivered" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "10+", label: "Years Experience" },
        { value: "24/7", label: "Support" },
    ];

    const values = [
        {
            icon: <FaCode />,
            tag: "01",
            title: "Clean Code",
            description: "We build scalable and maintainable architectures that stand the test of time.",
        },
        {
            icon: <FaPaintBrush />,
            tag: "02",
            title: "Design Driven",
            description: "Aesthetics and usability are at the core of everything we build.",
        },
        {
            icon: <FaGlobe />,
            tag: "03",
            title: "Global Reach",
            description: "Delivering solutions for clients worldwide from our Dubai studio.",
        },
        {
            icon: <FaRocket />,
            tag: "04",
            title: "Future Ready",
            description: "Embracing AI, automation, and the latest tech to keep you ahead.",
        },
    ];

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
        @keyframes slow-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .slow-spin { animation: slow-spin 22s linear infinite; }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker-inner { display:inline-flex; animation: ticker 28s linear infinite; }
      `}</style>

            <Navbar />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden min-h-screen flex items-center pt-24">
                <div className="grid-lines absolute inset-0 pointer-events-none" />
                <div className="pointer-events-none absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/[0.05] blur-[100px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
                    <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

                        {/* Left copy */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center gap-4 mb-10"
                            >
                                <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-lime-300/30 text-blue-400 bg-lime-300/[0.06]">
                                    Our Story
                                </span>
                                <span className="font-mono text-xs text-white/20">— Est. 2015</span>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                className="space-y-1 mb-10"
                            >
                                <h1 className="font-serif font-normal text-white leading-none tracking-tight text-[clamp(44px,6vw,80px)]">
                                    Engineering
                                </h1>
                                <h1 className="font-serif font-normal italic text-blue-400 leading-none tracking-tight text-[clamp(44px,6vw,80px)]">
                                    digital
                                </h1>
                                <h1 className="font-serif font-normal text-white/20 leading-none tracking-tight text-[clamp(44px,6vw,80px)]">
                                    excellence.
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4 mb-10"
                            >
                                <p className="font-mono text-xs leading-relaxed text-white/40 max-w-md">
                                    Creavelabs was founded on a simple principle: to bridge the gap between bold ideas and flawless execution. We are a collective of engineers, designers, and strategists dedicated to pushing the boundaries of what's possible on the web.
                                </p>
                                <p className="font-mono text-xs leading-relaxed text-white/40 max-w-md">
                                    From custom software to automation and AI, we craft solutions that not only look stunning but drive real, measurable results for our partners.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <a
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
                                >
                                    Work with us
                                    <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Right — circular image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:w-1/2 flex items-center justify-center"
                        >
                            <div className="relative w-[340px] h-[340px] xl:w-[420px] xl:h-[420px]">
                                {/* Outer spinning ring */}
                                <div className="slow-spin absolute inset-0 rounded-full border border-dashed border-lime-300/20" />
                                {/* Mid static ring */}
                                <div className="absolute inset-4 rounded-full border border-white/5" />
                                {/* Image circle */}
                                <div className="absolute inset-8 rounded-full overflow-hidden border border-white/10 bg-zinc-900">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-lime-300/10 to-transparent mix-blend-overlay z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                        alt="Team collaborating"
                                        className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                {/* Corner badge */}
                                <div className="absolute bottom-6 -right-4 border border-white/[0.07] bg-zinc-950 px-4 py-3">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">Based in</p>
                                    <p className="font-serif text-sm text-white italic">India, UAE</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TICKER STRIP ── */}
            <div className="overflow-hidden whitespace-nowrap border-t border-b border-white/[0.06] py-3 relative z-10">
                <div className="ticker-inner">
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.2em] text-white/20">
                            Engineering Excellence <span className="text-blue-400">✦</span>
                            Dubai Studio <span className="text-lime-300">✦</span>
                            10+ Years Experience <span className="text-green-300">✦</span>
                            50+ Projects Delivered <span className="text-yellow-300">✦</span>
                            Global Reach <span className="text-orange-300">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 space-y-0">

                {/* ── STATS ── */}
                <section className="border-b border-white/[0.06]">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex flex-col justify-center py-14 px-8 gap-2"
                            >
                                <span className="font-serif font-normal text-white leading-none tracking-tight text-5xl xl:text-6xl">
                                    {stat.value}
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── CORE VALUES ── */}
                <section className="py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                    >
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-4">What Drives Us</p>
                            <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-6xl">
                                Our core{" "}
                                <span className="italic text-blue-400">values</span>
                            </h2>
                        </div>
                        <p className="font-mono text-xs leading-relaxed text-white/30 max-w-xs">
                            The principles that guide our work, our team, and our growth every day.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/[0.07]">
                        {values.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group border-b border-r border-white/[0.07] p-8 bg-transparent hover:bg-white/[0.02] transition-colors duration-200"
                            >
                                {/* Tag + icon row */}
                                <div className="flex items-center justify-between mb-8">
                                    <span className="font-mono text-xs text-white/20 tracking-widest">{item.tag}</span>
                                    <div className="w-9 h-9 flex items-center justify-center border border-lime-300/30 text-blue-300 bg-lime-300/[0.06] text-sm group-hover:bg-lime-300/[0.12] transition-colors duration-200">
                                        {item.icon}
                                    </div>
                                </div>

                                <h3 className="font-serif font-normal text-white text-xl leading-tight mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-mono text-xs leading-relaxed text-white/35">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── MANIFESTO STRIP ── */}
                <section className="border-t border-white/[0.06] py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-8">Our Manifesto</p>
                        <blockquote className="font-serif font-normal text-white/80 leading-snug tracking-tight text-3xl xl:text-4xl mb-8">
                            "We don't just build products — we build{" "}
                            <span className="italic text-blue-400">momentum</span> for the brands bold enough to imagine what's next."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-px bg-blue-400/50" />
                            <span className="font-mono text-xs text-white/30 uppercase tracking-widest">Creavelabs Founding Team</span>
                        </div>
                    </motion.div>
                </section>
            </div>

            {/* ── CTA ── */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden border border-lime-300/15 px-12 py-24 xl:px-24"
                    >
                        {/* Glow */}
                        <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-blue-400/[0.07] blur-[80px]" />

                        <div className="relative z-10 max-w-3xl">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-6">
                                Let's Build Together
                            </p>
                            <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-7xl mb-6">
                                Ready to start
                                <br />
                                <span className="italic text-white/30">your next project?</span>
                            </h2>
                            <p className="font-mono text-xs leading-relaxed text-white/40 mb-10 max-w-sm">
                                Join the forward-thinking brands that trust us to deliver exceptional digital experiences.
                            </p>
                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] px-7 py-4 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
                            >
                                Get in Touch
                                <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}