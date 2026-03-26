import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactBanner from "@/components/contactbanner";
import {
  HiChip,
  HiCode,
  HiDeviceMobile,
  HiCog,
  HiLightningBolt,
  HiShieldCheck,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    id: "fintech-portal",
    category: "Custom Software",
    title: "VentureScale Dashboard",
    description:
      "A real-time investment tracking portal for a Dubai-based VC firm, managing $500M+ in assets.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Chart.js"],
    accent: "text-blue-500",
    bgAccent: "bg-blue-500",
  },
  {
    id: "logistics-ai",
    category: "Automation",
    title: "RouteOptima Engine",
    description:
      "An AI-powered logistics platform that reduced delivery times by 22% using automated route sequencing.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "FastAPI", "Google Maps API"],
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
  },
  {
    id: "ecommerce-platform",
    category: "Web Platforms",
    title: "Luxe Thread Storefront",
    description:
      "A headless e-commerce experience built for high-speed conversion and global scaling.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Next.js", "Tailwind", "Shopify API"],
    accent: "text-indigo-500",
    bgAccent: "bg-indigo-500",
  },
];

const solutions = [
  {
    id: "custom-software",
    icon: <HiChip className="w-8 h-8" />,
    tag: "01",
    label: "Custom Software",
    title: "Bespoke Software Development",
    short: "End-to-end software tailored exactly to your business logic.",
    color: "blue",
    description:
      "We build bespoke platforms that align exactly with your workflows, from internal tools to polished customer-facing products.",
    stack: ["Node.js", "PostgreSQL", "React"],
    colSpan: "md:col-span-2",
  },
  {
    id: "web-platforms",
    icon: <HiCode className="w-8 h-8" />,
    tag: "02",
    label: "Web Platforms",
    title: "High-Performance Web Apps",
    short:
      "Scalable web platforms engineered for speed, reliability, and growth.",
    color: "emerald",
    description:
      "We construct modern SaaS products and enterprise portals optimized for Core Web Vitals and zero-downtime scalability.",
    stack: ["Next.js", "TypeScript", "Vercel"],
    colSpan: "md:col-span-1",
  },
  {
    id: "mobile",
    icon: <HiDeviceMobile className="w-8 h-8" />,
    tag: "03",
    label: "Mobile Solutions",
    title: "Cross-Platform Mobile Apps",
    short: "Native-quality apps for iOS and Android from a single codebase.",
    color: "indigo",
    description:
      "Polished, performant applications for iOS and Android using unified codebases to accelerate your time-to-market.",
    stack: ["React Native", "Expo", "Firebase"],
    colSpan: "md:col-span-1",
  },
  {
    id: "automation",
    icon: <HiCog className="w-8 h-8" />,
    tag: "04",
    label: "Automation",
    title: "Process Automation & AI",
    short: "Eliminate manual work and unlock exponential efficiency.",
    color: "violet",
    description:
      "Intelligent workflows, API orchestration, and AI-powered decision engines to drastically cut operational costs.",
    stack: ["Python", "OpenAI", "LangChain"],
    colSpan: "md:col-span-2",
  },
  {
    id: "api",
    icon: <HiLightningBolt className="w-8 h-8" />,
    tag: "05",
    label: "APIs & Integrations",
    title: "API Design & Integration",
    short: "Make your disparate systems speak to each other flawlessly.",
    color: "sky",
    description:
      "We design REST & GraphQL architectures that seamlessly connect CRMs, payment gateways, and your bespoke systems.",
    stack: ["FastAPI", "GraphQL", "Kafka"],
    colSpan: "md:col-span-1",
  },
  {
    id: "security",
    icon: <HiShieldCheck className="w-8 h-8" />,
    tag: "06",
    label: "Security",
    title: "Cloud Security & Compliance",
    short: "Secure by design, compliant by default at every single layer.",
    color: "rose",
    description:
      "Implementing Zero-Trust frameworks, vulnerability scanning, and robust compliance measures for mission-critical software.",
    stack: ["AWS", "Vault", "Snyk"],
    colSpan: "md:col-span-1",
  },
];

const colorMap = {
  blue: "text-blue-500 bg-blue-50 border-blue-100",
  emerald: "text-emerald-500 bg-emerald-50 border-emerald-100",
  indigo: "text-indigo-500 bg-indigo-50 border-indigo-100",
  violet: "text-violet-500 bg-violet-50 border-violet-100",
  sky: "text-sky-500 bg-sky-50 border-sky-100",
  rose: "text-rose-500 bg-rose-50 border-rose-100",
  zinc: "text-zinc-800 bg-zinc-50 border-zinc-200",
};

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-[#fafaf8] selection:bg-blue-500/30 overflow-hidden font-[Poppins,sans-serif]">
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-6 shadow-sm">
                Capabilities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0f0f0f] mb-8"
            >
              Software that <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-light">
                moves businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-[#666] max-w-xl mx-auto lg:mx-0 font-light mb-10"
            >
              We don't believe in off-the-shelf. Every business is unique, and
              your software should be too. We engineer scalable platforms
              designed to solve real operational bottlenecks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Solutions
                <FaArrowRight className="text-xs" />
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 text-[#444] hover:text-black transition-colors rounded-full border border-black/5 bg-white hover:bg-black/5 hover:border-transparent w-full sm:w-auto"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>

          {/* Right Visual Content */}
          <div className="flex-1 w-full max-w-[600px] relative mt-10 lg:mt-0 hidden md:flex">
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full aspect-[4/3] bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-4 sm:p-6 overflow-hidden"
            >
              {/* Dashboard Mockup Header */}
              <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-4 w-32 bg-black/5 rounded-full"></div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)] pb-4">
                <div className="flex flex-col gap-4">
                  <div className="h-28 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-black/5 p-4 flex flex-col justify-between shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600">
                      <HiLightningBolt />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                        Performance
                      </div>
                      <div className="text-xl font-bold text-gray-800">
                        99.99%
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white/50 rounded-2xl border border-black/5 p-4 flex flex-col justify-end min-h-[120px]">
                    <div className="flex justify-between items-end h-full gap-2 pt-2">
                      {[40, 70, 45, 90, 65, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className="w-full bg-blue-400/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex-1 bg-[#0f0f0f] text-white rounded-2xl p-4 font-mono text-xs overflow-hidden relative shadow-lg min-h-[140px]">
                    <div className="absolute top-0 right-0 p-3 opacity-50">
                      <HiCode size={16} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="leading-loose"
                    >
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-blue-400">scale</span> ={" "}
                      <span className="text-yellow-300">async</span> () {"=>"}{" "}
                      {"{"}
                      <br />
                      &nbsp;&nbsp;<span className="text-pink-400">
                        await
                      </span>{" "}
                      system.optimize();
                      <br />
                      &nbsp;&nbsp;<span className="text-pink-400">
                        return
                      </span>{" "}
                      <span className="text-green-400">"Success"</span>;<br />
                      {"}"}
                    </motion.div>
                  </div>
                  <div className="h-24 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 p-4 flex items-center gap-4 shadow-inner">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
                      <HiShieldCheck size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-800">
                        Secure
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                        Enterprise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 z-20 bg-white/90 border border-black/5 rounded-2xl p-4 shadow-xl flex items-center gap-4 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                <HiChip size={24} />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                  Custom Build
                </div>
                <div className="text-sm font-bold text-gray-900">Deployed</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-4 top-8 lg:-left-8 lg:top-12 z-20 bg-white/90 border border-black/5 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                <FaArrowRight className="-rotate-45" size={14} />
              </div>
              <div className="pr-2">
                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                  Conversion
                </div>
                <div className="text-sm font-bold text-gray-900">+42.8%</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENTO GRID SOLUTIONS ── */}
      <section
        id="process"
        className="py-20 md:py-32 relative z-10 bg-white/40 border-t border-black/5"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f0f0f]">
                What We Build
              </h2>
              <p className="text-[#666] font-light mt-4 max-w-md">
                End-to-end engineering tailored for scale, security, and
                exceptional user experience.
              </p>
            </div>
            <div className="flex bg-gray-100 p-1 rounded-full w-fit border border-black/5">
              {["all", "engineering", "design"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-[13px] font-medium capitalize transition-all \${activeTab === tab ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden \${sol.colSpan}`}
              >
                {/* Background Hover Flare */}
                <div
                  className={`absolute -right-20 -top-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 \${colorMap[sol.color].split(' ')[1]}`}
                />

                {sol.isCta ? (
                  <div className="flex flex-col h-full justify-center items-center text-center">
                    <h3 className="text-3xl font-bold mb-4">{sol.title}</h3>
                    <p className="text-gray-500 mb-8 max-w-xs mx-auto font-light">
                      {sol.description}
                    </p>
                    <a
                      href="/contact"
                      className="flex items-center gap-2 justify-center w-14 h-14 bg-black text-white rounded-full hover:scale-110 transition-transform"
                    >
                      <FaArrowRight />
                    </a>
                  </div>
                ) : (
                  <>
                    <div>
                      <div className="flex justify-between items-start mb-10">
                        <div
                          className={`w-14 h-14 text-blue-500 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 \${colorMap[sol.color].split(' ')[1]} \${colorMap[sol.color].split(' ')[0]} \${colorMap[sol.color].split(' ')[2]} border`}
                        >
                          {sol.icon}
                        </div>
                        <span className="text-black/10 font-bold text-lg font-[Poppins]">
                          {sol.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#0f0f0f] mb-3">
                        {sol.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-[#666] font-light mb-8 max-w-[90%]">
                        {sol.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {sol.stack.map((s) => (
                          <span
                            key={s}
                            className="px-3 py-1 bg-blue-100 border border-gray-100 rounded-lg text-xs font-semibold text-gray-500 uppercase tracking-wide"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/services`}
                        className={`inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all \${colorMap[sol.color].split(' ')[0]}`}
                      >
                        Learn more <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT SHOWCASE ── */}
      <section className="py-24 md:py-32 bg-[#fafaf8]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-black/5 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-6">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0f0f0f]">
              Built to <span className="text-blue-500 font-light">perform</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
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

                <p
                  className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${project.accent}`}
                >
                  {project.category}
                </p>
                <h3 className="font-[DM_Serif_Display,Georgia,serif] text-2xl text-[#0f0f0f] mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-[#666] mb-5 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 border border-black/10 text-gray-500 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/showcase"
              className="inline-flex items-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-white border border-black/10 hover:border-blue-500 hover:text-blue-500 text-black rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              View All Projects <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS / PROOF ── */}
      <section className="border-y border-black/5 bg-[#0a0a0a] text-white py-20 relative overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 gap-y-10">
          {[
            { value: "120+", label: "Platforms Built" },
            { value: "4.9★", label: "Client Rating" },
            { value: "40%", label: "Faster Delivery" },
            { value: "24/7", label: "System Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <ContactBanner />
    </div>
  );
}
