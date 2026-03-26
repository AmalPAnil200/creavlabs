import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactBanner from "@/components/contactbanner";   

import {
  HiCode, HiDeviceMobile, HiColorSwatch, HiChip, HiTrendingUp,
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
    accentText:      "text-blue-500",
    accentBorder:    "border-blue-500/20",
    accentBg:        "bg-blue-50",
    accentBtnBg:     "bg-blue-500 text-white hover:bg-black",
    accentBtnBorder: "border-transparent",
    headline: "Websites that work as hard as you do",
    description:
      "We design and build conversion-focused, blazing-fast websites using React, Next.js, and modern web technologies. Every pixel is intentional — from architecture to animation — ensuring you leave a lasting impression and turn visitors into customers.",
    features: [
      "Server-side rendering & static generation",
      "Core Web Vitals optimized — 90+ Lighthouse",
      "SEO-first architecture with structured data",
      "Fully responsive across all device sizes",
      "Modern CMS integration (Sanity, Contentful)",
      "Pixel-perfect Figma-to-code implementation",
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep-dive into your goals, audience, and landscape." },
      { step: "02", title: "Design",    desc: "Wireframes and high-fidelity UI design, refined." },
      { step: "03", title: "Build",     desc: "Clean, scalable code built with performance in mind." },
      { step: "04", title: "Launch",    desc: "QA, deployment, and ongoing support post-launch." },
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity", "Vercel"],
  },
  {
    id: "mobile",
    icon: <HiDeviceMobile className="w-6 h-6" />,
    tag: "02", label: "Mobile",
    title: "Mobile App Dev",
    short: "Native-quality mobile experiences for iOS and Android.",
    accentText:      "text-orange-500",
    accentBorder:    "border-orange-500/20",
    accentBg:        "bg-orange-50",
    accentBtnBg:     "bg-orange-500 text-white hover:bg-black",
    accentBtnBorder: "border-transparent",
    headline: "Apps your users will actually love",
    description:
      "We build polished, high-performance mobile applications using React Native. Whether you need an MVP in weeks or a complex enterprise app, we deliver smooth, native-feeling experiences that keep users coming back.",
    features: [
      "Cross-platform iOS & Android codebase",
      "Offline-first architecture with local sync",
      "Push notifications and biometric auth",
      "App Store & Google Play submission",
      "Real-device testing with automated QA",
      "OTA updates with Expo Application Services",
    ],
    process: [
      { step: "01", title: "Scope",     desc: "Define core features, flows, and tech requirements." },
      { step: "02", title: "Prototype", desc: "Interactive prototype to validate UX early on." },
      { step: "03", title: "Develop",   desc: "Agile sprints, demos, and full transparency." },
      { step: "04", title: "Ship",      desc: "Store submission, monitoring, and iteration." },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Zustand", "Firebase", "RevenueCat"],
  },
  {
    id: "design",
    icon: <HiColorSwatch className="w-6 h-6" />,
    tag: "03", label: "Design",
    title: "UI/UX Design",
    short: "User-centered design that converts — beautiful and intuitive.",
    accentText:      "text-fuchsia-500",
    accentBorder:    "border-fuchsia-500/20",
    accentBg:        "bg-fuchsia-50",
    accentBtnBg:     "bg-fuchsia-500 text-white hover:bg-black",
    accentBtnBorder: "border-transparent",
    headline: "Design that feels as good as it looks",
    description:
      "Great design is the intersection of beauty and function. Our designers craft interfaces that guide users effortlessly, build trust instantly, and communicate your brand's story. From discovery to handoff, we design with data and empathy.",
    features: [
      "User research, personas, and journey mapping",
      "Information architecture and wireframing",
      "High-fidelity UI design in Figma",
      "Interactive prototyping and usability testing",
      "Design system and component libraries",
      "Developer-ready Figma handoff with tokens",
    ],
    process: [
      { step: "01", title: "Research", desc: "Understand users' needs, pains, and mental models." },
      { step: "02", title: "Ideate",   desc: "Sketches and flows to explore creative solutions." },
      { step: "03", title: "Design",   desc: "High-fidelity screens crafted with brand identity." },
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
    accentText:      "text-cyan-500",
    accentBorder:    "border-cyan-500/20",
    accentBg:        "bg-cyan-50",
    accentBtnBg:     "bg-cyan-500 text-white hover:bg-black",
    accentBtnBorder: "border-transparent",
    headline: "Software built for your exact workflow",
    description:
      "Off-the-shelf tools only get you so far. We build bespoke software tailored to your processes — from internal tools and CRMs to full SaaS platforms. Scalable, secure, and designed to grow with your business.",
    features: [
      "Custom CRM and ERP systems",
      "SaaS product development from MVP to scale",
      "REST & GraphQL API design and development",
      "Admin dashboards and analytics platforms",
      "Third-party integrations (Stripe, HubSpot, etc.)",
      "Cloud-native architecture on AWS or Azure",
    ],
    process: [
      { step: "01", title: "Analyse",   desc: "Map your workflows and identify value points." },
      { step: "02", title: "Architect", desc: "Design the system architecture before coding." },
      { step: "03", title: "Build",     desc: "Iterative development with full test coverage." },
      { step: "04", title: "Operate",   desc: "Deployment, monitoring, backups, and maintenance." },
    ],
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe"],
  },
  {
    id: "seo",
    icon: <HiTrendingUp className="w-6 h-6" />,
    tag: "05", label: "Growth",
    title: "SEO & Content",
    short: "Data-driven strategies to grow visibility and drive revenue.",
    accentText:      "text-emerald-500",
    accentBorder:    "border-emerald-500/20",
    accentBg:        "bg-emerald-50",
    accentBtnBg:     "bg-emerald-500 text-white hover:bg-black",
    accentBtnBorder: "border-transparent",
    headline: "Get found. Get chosen. Get results.",
    description:
      "Visibility is the foundation of growth. We combine technical SEO, content strategy, and performance marketing to put you in front of the right people at the right time — and convert that attention into revenue.",
    features: [
      "Technical SEO audit and full-site optimization",
      "Keyword research and content strategy",
      "Link building and digital PR networking",
      "Google Ads and Meta campaign management",
      "Conversion rate optimization (CRO)",
      "Monthly reporting with actionable insights",
    ],
    process: [
      { step: "01", title: "Audit",    desc: "A full technical audit to find big opportunities." },
      { step: "02", title: "Strategy", desc: "A 90-day roadmap prioritized by impact." },
      { step: "03", title: "Execute",  desc: "On-page, off-page, and paid campaigns rolled out." },
      { step: "04", title: "Optimise", desc: "Monthly reviews, A/B tests, and data pivots." },
    ],
    tech: ["Ahrefs", "SEMrush", "GA4", "Search Console", "Google Ads", "Meta Ads"],
  },
];

/* ─────────────────────────────────────────
   SERVICE CARD (GRID ITEM)
───────────────────────────────────────── */
function ServiceCard({ service, onClick }) {
  return (
    <div className="group flex flex-col h-full bg-white border border-black/5 rounded-[2rem] p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
      <div className={`w-14 h-14 rounded-2xl text-blue-500 flex items-center justify-center mb-8 shadow-sm \${service.accentBg} \${service.accentText}`}>
        {service.icon}
      </div>
      
      <h3 className="text-2xl font-bold text-[#0f0f0f] mb-3 group-hover:text-blue-500 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-[15px] font-light text-[#666] leading-relaxed mb-8 flex-grow">
        {service.short}
      </p>

      <button
        onClick={onClick}
        className="self-start flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider px-6 py-3 bg-[#fafaf8] border border-black/5 hover:bg-black text-[#555] hover:text-white rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5"
      >
        Learn More
        <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────
   SERVICE MODAL
───────────────────────────────────────── */
function ServiceModal({ service, onClose }) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl bg-white/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto custom-scrollbar flex flex-col gap-10 bg-white rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/10 p-8 md:p-12 xl:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-gray-100 hover:bg-black text-gray-500 hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Header */}
        <div className="pb-8 border-b border-black/5 mt-4 md:mt-0">
          <div className="flex items-center gap-3 mb-6">
            <span className={`text-[11px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border \${service.accentText} \${service.accentBorder} \${service.accentBg}`}>
              {service.tag} — {service.label}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f0f0f] tracking-tight leading-[1.1] mb-6 pr-10">
            {service.headline}
          </h2>
          <p className="text-[17px] font-light leading-relaxed text-[#666] max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            What's Included
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 py-2">
                <span className={`shrink-0 text-lg mt-0.5 \${service.accentText}`}>✓</span>
                <span className="text-[15px] font-medium leading-relaxed text-[#444]">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="pt-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
            Our Process
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {service.process.map((p) => (
              <div key={p.step} className="p-6 rounded-[1.5rem] border border-black/5 bg-[#fafaf8] shadow-sm hover:shadow-md transition-shadow">
                <span className={`block text-3xl font-light mb-4 \${service.accentText}`}>{p.step}</span>
                <p className="text-[15px] font-bold text-[#0f0f0f] mb-2">{p.title}</p>
                <p className="text-[13px] leading-relaxed text-[#666]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8 mt-4 border-t border-black/5">
          <div className="flex-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Core Stack</p>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span key={t} className="text-[11px] font-bold px-3 py-1.5 rounded-lg border border-black/5 bg-[#fafaf8] text-[#555] tracking-widest uppercase">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => window.location.href = '/contact'}
            className={`group shrink-0 w-full sm:w-auto flex items-center justify-center gap-3 text-[13px] font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 \${service.accentBtnBg} \${service.accentBtnBorder}`}
          >
            Start Project
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="min-h-screen bg-[#fafaf8] selection:bg-blue-500/30 font-[Poppins,sans-serif] overflow-hidden">
      
      {/* ── SERVICE MODAL (Overlay) ── */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal 
            service={activeService} 
            onClose={() => setActiveService(null)} 
          />
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[85vh] flex flex-col justify-center pt-32 pb-20 md:pt-40 md:pb-32">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] shadow-sm">
                Services
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 hidden sm:inline-block">— Digital Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0f0f0f] mb-8"
            >
              Everything you <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-light">
                need to build
              </span>
              <br className="hidden lg:block"/>
              {" "}& grow online.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl leading-relaxed text-[#666] max-w-xl mx-auto lg:mx-0 font-light mb-10"
            >
              From strategy to launch — we're your end-to-end digital partner. Design, develop, and grow with a team that cares about your results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
               <button
                  onClick={() => document.querySelector("#services-grid")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 w-full sm:w-auto"
               >
                  Explore
                  <FaArrowRight className="text-xs" />
               </button>
               <a href="/contact" className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 text-[#444] hover:text-black transition-colors rounded-full border border-black/5 bg-white hover:bg-black/5 hover:border-transparent w-full sm:w-auto">
                  Get a Quote
               </a>
            </motion.div>
          </div>

          {/* Right Visual Content */}
          <div className="flex-1 w-full max-w-[600px] relative mt-16 lg:mt-0 hidden md:flex">
             <motion.div 
               initial={{ opacity: 0, x: 50, rotate: -2 }}
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
                     <div className="h-4 w-12 bg-black/5 rounded-full"></div>
                   </div>
                </div>

                {/* Workspace Content */}
                <div className="flex-1 grid grid-cols-2 gap-4 h-[calc(100%-2rem)] pb-4 hidden">
                   {/* Column 1 */}
                   <div className="flex flex-col gap-4">
                      {/* SEO Chart Card */}
                      <div className="h-28 bg-gradient-to-tr from-emerald-500/10 to-blue-500/5 rounded-2xl border border-black/5 p-4 flex flex-col justify-between shadow-inner">
                         <div className="flex justify-between items-start mb-2">
                            <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-600">
                               <HiTrendingUp />
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">+125%</span>
                         </div>
                         <div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Traffic Growth</div>
                            <div className="flex items-end gap-1 h-8">
                               {[20, 35, 25, 60, 45, 80, 100].map((h, i) => (
                                 <motion.div 
                                   key={i} 
                                   initial={{ height: 0 }}
                                   animate={{ height: `${h}%` }}
                                   transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                                   className="w-full bg-emerald-400 rounded-t-sm" 
                                 />
                               ))}
                            </div>
                         </div>
                      </div>
                      
                      {/* Mobile App Card */}
                      <div className="flex-1 bg-[#0f0f0f] text-white rounded-2xl border border-black border-opacity-10 p-4 relative shadow-lg overflow-hidden flex flex-col justify-end min-h-[120px]">
                         <div className="absolute top-0 right-0 p-4 opacity-30 text-white"><HiDeviceMobile size={48}/></div>
                         <div>
                            <div className="text-sm font-bold">iOS / Android</div>
                            <div className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Cross-platform native</div>
                         </div>
                      </div>
                   </div>

                   {/* Column 2 */}
                   <div className="flex flex-col gap-4">
                      {/* Design System Card */}
                      <div className="h-24 bg-fuchsia-500/10 rounded-2xl border border-fuchsia-500/20 p-4 flex flex-col gap-2 shadow-inner">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-600 shrink-0">
                               <HiColorSwatch size={16} />
                            </div>
                            <div className="text-xs font-bold text-gray-800">Design System</div>
                         </div>
                         <div className="flex gap-2 mt-auto">
                            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
                            <div className="w-6 h-6 rounded-full bg-fuchsia-500 border-2 border-white shadow-sm -ml-3"></div>
                            <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white shadow-sm -ml-3"></div>
                            <div className="w-6 h-6 rounded-full bg-cyan-500 border-2 border-white shadow-sm -ml-3"></div>
                         </div>
                      </div>

                      {/* Code Execution Card */}
                      <div className="flex-1 bg-white/60 rounded-2xl border border-black/5 p-4 relative shadow-sm flex flex-col justify-between min-h-[140px]">
                         <div className="absolute top-4 right-4 text-blue-500/20"><HiCode size={32} /></div>
                         <div className="space-y-2 mt-2">
                           <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                           <div className="h-2 w-1/2 bg-gray-200 rounded-full"></div>
                           <div className="h-2 w-5/6 bg-gray-200 rounded-full"></div>
                           <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                         </div>
                         <div className="mt-4 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                           <span className="text-[10px] uppercase font-bold text-blue-600 tracking-wider">Compiling...</span>
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
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500">
                   <HiChip size={24} />
                </div>
                <div>
                   <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Software</div>
                   <div className="text-sm font-bold text-gray-900">Custom Built</div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -left-4 top-8 lg:-left-8 lg:top-12 z-20 bg-white/90 border border-black/5 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
             >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                   <FaArrowRight className="-rotate-45" size={14} />
                </div>
                <div className="pr-2">
                   <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Development</div>
                   <div className="text-sm font-bold text-gray-900">Sprint Done</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section id="services-grid" className="pb-32 px-5 md:px-10 lg:px-16 mt-10">
        <div className="relative z-10 max-w-[1240px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => setActiveService(service)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-b border-black/5 bg-blue-500 relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-black/5">
          {[
            { value: "700+", label: "Projects delivered" },
            { value: "98%",  label: "Client satisfaction" },
            { value: "10M+", label: "Daily active users" },
            { value: "5+",   label: "Years of excellence" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center justify-center py-16 px-8 gap-4 transition-colors"
            >
              <span className="font-bold text-[#fff] text tracking-tight text-5xl xl:text-6xl">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#555]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <ContactBanner />

    </div>
  );
}