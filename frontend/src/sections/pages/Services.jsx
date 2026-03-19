import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCode, HiDeviceMobile, HiColorSwatch, HiChip, HiTrendingUp,
  HiArrowRight,
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";


/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const services = [
  {
    id: "web",
    icon: <HiCode className="w-6 h-6" />,
    tag: "01", label: "Web",
    title: "Website Development",
    short: "Lightning-fast, SEO-optimized websites built with modern standards.",
    accentText:      "text-blue-400",
    accentBorder:    "border-blue-400/40",
    accentBg:        "bg-blue-400/10",
    accentBarBg:     "bg-blue-400",
    accentBtnBg:     "bg-blue-400 hover:bg-white",
    accentBtnBorder: "border-blue-400",
    headline: "Websites that work as hard as you do",
    description:
      "We design and build conversion-focused, blazing-fast websites using React, Next.js, and modern web technologies. Every pixel is intentional — from architecture to animation — ensuring you leave a lasting impression and turn visitors into customers.",
    features: [
      "Server-side rendering & static generation for peak performance",
      "Core Web Vitals optimized — 90+ Lighthouse scores",
      "SEO-first architecture with structured data",
      "Fully responsive across all devices and screen sizes",
      "CMS integration (Sanity, Contentful, Strapi)",
      "Pixel-perfect Figma-to-code implementation",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep-dive into your goals, audience, and competitive landscape." },
      { step: "02", title: "Design",    desc: "Wireframes and high-fidelity UI design, refined with your feedback." },
      { step: "03", title: "Build",     desc: "Clean, scalable code built with performance and maintainability in mind." },
      { step: "04", title: "Launch",    desc: "QA, deployment, and ongoing support post-launch." },
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel"],
  },
  {
    id: "mobile",
    icon: <HiDeviceMobile className="w-6 h-6" />,
    tag: "02", label: "Mobile",
    title: "Mobile App Development",
    short: "Native-quality mobile experiences for iOS and Android.",
    accentText:      "text-orange-400",
    accentBorder:    "border-orange-400/40",
    accentBg:        "bg-orange-400/10",
    accentBarBg:     "bg-orange-400",
    accentBtnBg:     "bg-orange-400 hover:bg-white",
    accentBtnBorder: "border-orange-400",
    headline: "Apps your users will actually love",
    description:
      "We build polished, high-performance mobile applications using React Native. Whether you need an MVP in weeks or a complex enterprise app, we deliver smooth, native-feeling experiences that keep users coming back.",
    features: [
      "Cross-platform iOS & Android from a single codebase",
      "Offline-first architecture with local data sync",
      "Push notifications, biometric auth, deep linking",
      "App Store & Google Play submission handled for you",
      "Real-device testing with automated QA",
      "OTA updates with Expo Application Services",
    ],
    process: [
      { step: "01", title: "Scope",     desc: "Define core features, user flows, and technical requirements." },
      { step: "02", title: "Prototype", desc: "Interactive prototype to validate UX before a line of code is written." },
      { step: "03", title: "Develop",   desc: "Agile sprints, weekly demos, and full transparency throughout." },
      { step: "04", title: "Ship",      desc: "Store submission, monitoring setup, and post-launch iteration." },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Firebase", "RevenueCat"],
  },
  {
    id: "design",
    icon: <HiColorSwatch className="w-6 h-6" />,
    tag: "03", label: "Design",
    title: "UI/UX Design",
    short: "User-centered design that converts — beautiful and intuitive.",
    accentText:      "text-fuchsia-400",
    accentBorder:    "border-fuchsia-400/40",
    accentBg:        "bg-fuchsia-400/10",
    accentBarBg:     "bg-fuchsia-400",
    accentBtnBg:     "bg-fuchsia-400 hover:bg-white",
    accentBtnBorder: "border-fuchsia-400",
    headline: "Design that feels as good as it looks",
    description:
      "Great design is the intersection of beauty and function. Our designers craft interfaces that guide users effortlessly, build trust instantly, and communicate your brand's story. From discovery to handoff, we design with data and empathy.",
    features: [
      "User research, personas, and journey mapping",
      "Information architecture and wireframing",
      "High-fidelity UI design in Figma",
      "Interactive prototyping and usability testing",
      "Design system and component library creation",
      "Developer-ready Figma handoff with tokens",
    ],
    process: [
      { step: "01", title: "Research", desc: "Understand your users' needs, pain points, and mental models." },
      { step: "02", title: "Ideate",   desc: "Sketches, flows, and low-fidelity wireframes to explore solutions." },
      { step: "03", title: "Design",   desc: "High-fidelity screens crafted with your brand identity." },
      { step: "04", title: "Handoff",  desc: "Annotated specs, assets, and a living design system." },
    ],
    tech: ["Figma", "FigJam", "Lottie", "Framer", "Storybook", "Zeroheight"],
  },
  {
    id: "software",
    icon: <HiChip className="w-6 h-6" />,
    tag: "04", label: "Software",
    title: "Custom Software",
    short: "End-to-end solutions — APIs, dashboards, SaaS platforms.",
    accentText:      "text-sky-400",
    accentBorder:    "border-sky-400/40",
    accentBg:        "bg-sky-400/10",
    accentBarBg:     "bg-sky-400",
    accentBtnBg:     "bg-sky-400 hover:bg-white",
    accentBtnBorder: "border-sky-400",
    headline: "Software built for your exact workflow",
    description:
      "Off-the-shelf tools only get you so far. We build bespoke software tailored to your processes — from internal tools and CRMs to full SaaS platforms. Scalable, secure, and designed to grow with your business.",
    features: [
      "Custom CRM and ERP systems",
      "SaaS product development from MVP to scale",
      "REST & GraphQL API design and development",
      "Admin dashboards and analytics platforms",
      "Third-party integrations (Stripe, HubSpot, Slack, etc.)",
      "Cloud-native architecture on AWS, GCP, or Azure",
    ],
    process: [
      { step: "01", title: "Analyse",   desc: "Map your current workflows and identify the highest-value opportunities." },
      { step: "02", title: "Architect", desc: "Design the system architecture before writing a single line of code." },
      { step: "03", title: "Build",     desc: "Iterative development with bi-weekly demos and full test coverage." },
      { step: "04", title: "Operate",   desc: "Deployment, monitoring, backups, and ongoing maintenance." },
    ],
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe"],
  },
  {
    id: "seo",
    icon: <HiTrendingUp className="w-6 h-6" />,
    tag: "05", label: "Growth",
    title: "SEO & Digital Marketing",
    short: "Data-driven strategies to grow visibility and drive revenue.",
    accentText:      "text-emerald-400",
    accentBorder:    "border-emerald-400/40",
    accentBg:        "bg-emerald-400/10",
    accentBarBg:     "bg-emerald-400",
    accentBtnBg:     "bg-emerald-400 hover:bg-white",
    accentBtnBorder: "border-emerald-400",
    headline: "Get found. Get chosen. Get results.",
    description:
      "Visibility is the foundation of growth. We combine technical SEO, content strategy, and performance marketing to put you in front of the right people at the right time — and convert that attention into revenue.",
    features: [
      "Technical SEO audit and full-site optimization",
      "Keyword research and content strategy",
      "Link building and digital PR",
      "Google Ads and Meta campaign management",
      "Conversion rate optimization (CRO)",
      "Monthly reporting with actionable insights",
    ],
    process: [
      { step: "01", title: "Audit",    desc: "A full technical and content audit to find your biggest opportunities." },
      { step: "02", title: "Strategy", desc: "A 90-day roadmap prioritized by impact and effort." },
      { step: "03", title: "Execute",  desc: "On-page, off-page, and paid campaigns rolled out continuously." },
      { step: "04", title: "Optimise", desc: "Monthly reviews, A/B tests, and strategy pivots based on data." },
    ],
    tech: ["Ahrefs", "SEMrush", "GA4", "Search Console", "Google Ads", "Meta Ads"],
  },
];

/* ─────────────────────────────────────────
   SERVICE CARD
───────────────────────────────────────── */
function ServiceCard({ service, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full text-left group relative overflow-hidden
        border-b border-white/[0.08] py-5
        transition-colors duration-200
        ${isActive ? "bg-white/[0.03]" : "bg-transparent hover:bg-white/[0.015]"}
      `}
    >
      {/* Active left bar */}
      <div
        className={`
          absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300
          ${isActive ? service.accentBarBg : "bg-transparent"}
        `}
      />

      <div className="flex items-center gap-5 pl-5 pr-4">
        <span
          className={`shrink-0 font-mono text-xs tracking-widest ${isActive ? service.accentText : "text-white/20"}`}
        >
          {service.tag}
        </span>

        <div
          className={`
            shrink-0 w-9 h-9 flex items-center justify-center border transition-colors duration-200
            ${isActive ? `${service.accentBorder} ${service.accentText}` : "border-white/10 text-white/40"}
          `}
        >
          {service.icon}
        </div>

        <div className="flex-1 min-w-0">
          <p className={`font-mono text-xs uppercase tracking-widest mb-0.5 transition-colors duration-200 ${isActive ? service.accentText : "text-white/30"}`}>
            {service.label}
          </p>
          <h3 className={`font-serif text-[15px] font-semibold leading-tight transition-colors duration-200 ${isActive ? "text-white" : "text-white/70"}`}>
            {service.title}
          </h3>
        </div>

        <HiArrowRight
          className={`shrink-0 transition-all duration-300 ${isActive ? `${service.accentText} translate-x-0.5` : "text-white/15"}`}
        />
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────
   SERVICE DETAIL
───────────────────────────────────────── */
function ServiceDetail({ service }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-10 h-full"
    >
      {/* Header */}
      <div className="pb-8 border-b border-white/[0.06]">
        <div className="flex items-center gap-3 mb-5">
          <span className={`font-mono text-xs tracking-widest uppercase px-2 py-1 border ${service.accentText} ${service.accentBorder} ${service.accentBg}`}>
            {service.tag} — {service.label}
          </span>
        </div>
        <h2 className="font-serif text-4xl xl:text-5xl font-normal text-white tracking-tight leading-none mb-4">
          {service.headline}
        </h2>
        <p className="font-mono text-sm font-light leading-relaxed text-white/45 max-w-xl">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-5">
          What's Included
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-3 py-3 pr-4 border-b border-white/[0.05]">
              <span className={`shrink-0 font-mono text-xs mt-px ${service.accentText}`}>↳</span>
              <span className="font-mono text-xs leading-relaxed text-white/65">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-5">
          Our Process
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
          {service.process.map((p) => (
            <div key={p.step} className="p-4 border border-white/[0.07] bg-white/[0.015]">
              <span className={`block font-mono text-xs mb-3 ${service.accentText}`}>{p.step}</span>
              <p className="font-serif text-sm font-semibold text-white mb-1.5">{p.title}</p>
              <p className="font-mono text-xs leading-relaxed text-white/35">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stack + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2">
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {service.tech.map((t) => (
              <span key={t} className="font-mono text-xs px-2.5 py-1 border border-white/10 bg-white/[0.02] text-white/50 tracking-wide">
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className={`group shrink-0 flex items-center gap-3 font-mono text-xs uppercase tracking-widest px-5 py-3 border transition-all duration-200 text-zinc-950 ${service.accentBtnBg} ${service.accentBtnBorder}`}
        >
          Start Project
          <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ServicesPage() {
  const [active, setActive] = useState(services[0]);
  const sectionRef = useRef(null);
  const wordsRef   = useRef([]);

  const WORDS =
    "We build world-class digital products — from blazing-fast websites to mobile apps and custom software — all crafted to drive real business growth."
      .split(" ");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const words = wordsRef.current;

    const onScroll = () => {
      const rect     = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const windowH  = window.innerHeight;
      const scrolled = -rect.top;
      const total    = sectionH - windowH;
      const raw      = Math.min(Math.max(scrolled / total, 0), 1);

      words.forEach((el, i) => {
        if (!el) return;
        const wordStart = i / WORDS.length;
        const wordEnd   = (i + 1) / WORDS.length;
        const progress  = Math.min(Math.max((raw - wordStart) / (wordEnd - wordStart), 0), 1);
        el.style.opacity = 0.12 + progress * 0.88;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [WORDS.length]);

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
        .ticker-inner { display:inline-flex; animation: ticker 28s linear infinite; }
      `}</style>


      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="grid-lines absolute inset-0 pointer-events-none" />
        <div className="pointer-events-none absolute top-1/4 left-2/3 w-[500px] h-[500px] rounded-full bg-blue-400/[0.07] blur-[80px]" />

        <div className="relative z-10 px-6 pt-32 pb-16 max-w-7xl mx-auto w-full">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-blue-400/30 text-blue-400 bg-blue-400/[0.06]">
              Services
            </span>
            <span className="font-mono text-xs text-white/20">— Digital Studio</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="space-y-1"
          >
            <h1 className="font-serif font-normal text-white leading-none tracking-tight text-[clamp(52px,8vw,110px)]">
              Everything you
            </h1>
            <h1 className="font-serif font-normal italic text-blue-400 leading-none tracking-tight text-[clamp(52px,8vw,110px)]">
              need to build
            </h1>
            <h1 className="font-serif font-normal text-white/20 leading-none tracking-tight text-[clamp(52px,8vw,110px)]">
              & grow online
            </h1>
          </motion.div>

          {/* Sub row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-14"
          >
            <p className="font-mono text-xs leading-relaxed text-white/40 max-w-sm">
              From strategy to launch — we're your end-to-end digital partner. Design, develop, and grow with a team that cares about your results.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => document.querySelector("#service-details")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
              >
                Explore
                <FaArrowRight className="text-[9px] transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="font-mono text-xs uppercase tracking-[0.12em] px-5 py-3 border border-white/15 text-white/60 hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="relative z-10 overflow-hidden whitespace-nowrap border-t border-b border-white/[0.06] py-3">
          <div className="ticker-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-6 px-6 font-mono text-xs uppercase tracking-[0.2em] text-white/20">
                Website Development <span className="text-lime-300">✦</span>
                Mobile Apps <span className="text-orange-400">✦</span>
                UI/UX Design <span className="text-fuchsia-400">✦</span>
                Custom Software <span className="text-sky-400">✦</span>
                SEO &amp; Growth <span className="text-emerald-400">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Scroll-reveal sentence */}
        {/* <div ref={sectionRef} className="relative w-full" style={{ height: "220vh" }}>
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="max-w-5xl px-6 text-center flex flex-wrap justify-center gap-x-4 gap-y-2">
              {WORDS.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => (wordsRef.current[i] = el)}
                  className="font-serif font-normal text-white tracking-tight inline-block"
                  style={{ fontSize: "clamp(24px,3.8vw,42px)", opacity: 0.12, transition: "opacity 0.1s ease" }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </section>

      {/* ── SERVICE DETAILS ── */}
      <section id="service-details" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/25 mb-4">What We Do</p>
              <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-6xl">
                Services that{" "}
                <span className="italic text-blue-400">drive results</span>
              </h2>
            </div>
            <p className="font-mono text-xs leading-relaxed text-white/30 max-w-xs">
              Select a service to explore what we deliver, how we work, and what technology we use.
            </p>
          </motion.div>

          {/* Two-column panel */}
          <div className="flex flex-col lg:flex-row border border-white/[0.07]">
            <div className="flex flex-col lg:w-[340px] xl:w-[380px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/[0.07]">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  isActive={active.id === service.id}
                  onClick={() => setActive(service)}
                />
              ))}
            </div>

            <div className="flex-1 p-8 xl:p-12 min-h-[700px] bg-white/[0.012]">
              <AnimatePresence mode="wait">
                <ServiceDetail key={active.id} service={active} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {[
            { value: "700+", label: "Projects delivered" },
            { value: "98%",  label: "Client satisfaction" },
            { value: "10M+", label: "Daily active users" },
            { value: "5+",   label: "Years of excellence" },
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
            <div className="pointer-events-none absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-blue-400/[0.08] blur-[80px]" />

            <div className="relative z-10 max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-6">
                Let's Work Together
              </p>
              <h2 className="font-serif font-normal text-white tracking-tight leading-none text-5xl xl:text-7xl mb-6">
                Ready to build
                <br />
                <span className="italic text-white/35">something great?</span>
              </h2>
              <p className="font-mono text-sm leading-relaxed text-white/40 mb-10 max-w-sm">
                Tell us about your project — we'll come back with a plan, a timeline, and a price. No fluff.
              </p>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] px-7 py-4 bg-blue-400 hover:bg-white text-zinc-950 transition-colors duration-200"
              >
                Start a Conversation
                <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}