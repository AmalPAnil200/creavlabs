import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEye,
  FaLaptopCode,
  FaStar,
  FaTrophy,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Qualified Staff" },
    { value: "15+", label: "Awards Won" },
    { value: "700+", label: "Projects Completed" },
  ];

  const trustCards = [
    {
      num: "01",
      title: "Our Vision",
      description:
        "Process faster and better so that you can maintain your market advantage and leadership.",
      icon: <FaEye />,
      link: "/contact",
      linkText: "Contact us",
    },
    {
      num: "02",
      title: "What We Do",
      description:
        "We excel at marketing websites, innovative web apps, and mobile applications to propel your business.",
      icon: <FaLaptopCode />,
      link: "/services",
      linkText: "Our solutions",
    },
    {
      num: "03",
      title: "Core Values",
      description:
        "Redefining business solutions with reliable systems and dedicated services, serving holistic solutions.",
      icon: <FaStar />,
      link: "/process",
      linkText: "Discover more",
    },
  ];

  const leadersFeatures = [
    {
      title: "Focus on driving results",
      description:
        "Our quick time and proactive approach assist our clients to rehearse the future and outperform the competition.",
    },
    {
      title: "Help your business grow",
      description:
        "Our dynamic resourcing calibration can replicate any solution for a much larger playing ground.",
    },
    {
      title: "Best quality customer service",
      description:
        "Cognitive capabilities and data analytics bring efficiency and competitive edge.",
    },
  ];

  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Jane Smith",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Michael Johnson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Emily Davis",
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] selection:bg-blue-500/30">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-30 md:pb-32">
        {/* Background Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16 text-center">
          {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-black/3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] font-[Poppins,sans-serif] mb-6">
                            Company Overview
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-[80px] font-light leading-[1.1] tracking-[-0.03em] text-[#0f0f0f] font-[Poppins,sans-serif] mb-8"
                    >
                        Bring new digital <br className="hidden md:block" />
                        <span className="text-blue-500 font-medium">ideas to life</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl leading-relaxed text-[#666] max-w-3xl mx-auto font-[Poppins,sans-serif] font-light mb-10"
                    >
                        We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.
                    </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden mx-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
              alt="Team collaborating"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/60 to-transparent flex flex-col items-left justify-center pb-12 md:pb-16 px-6">
              <span className="text-blue-400 font-semibold tracking-widest uppercase text-xs mb-3 font-[Poppins,sans-serif] text-left">
                Company Overview
              </span>
              <h2 className="text-white text-3xl md:text-4xl lg:text-7xl font-bold font-[Poppins,sans-serif] tracking-tight leading-tight text-left">
                Bring new digital <br className="hidden md:block" />
                <span className="text-gray-200/90 font-medium">
                  ideas to life
                </span>
              </h2>
            </div>
            <div className="absolute bottom-10 left-10 border border-white/20 text-white/40 px-6 py-3 rounded-lg font-light font-[Poppins,sans-serif] flex items-center gap-2 w-fit">
              <a href="/">Home</a>
              <FaArrowRight className="text-sm" />
              <a href="/about">About</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-10 border-y border-black/5 bg-blue-500">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-black/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[Poppins,sans-serif] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-white font-[Poppins,sans-serif] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUSINESS PARTNER ── */}
      <section className="py-24 md:py-32 bg-[#fafaf8]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-black/3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] font-[Poppins,sans-serif] mb-6">
              Highlight Features
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f0f0f] font-[Poppins,sans-serif]">
              Business partner <br />
              <span className="text-blue-500 font-light">you can trust</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative bg-white border border-black/5 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
              >
                {/* 🔻 Bottom-right notch */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-100 rounded-tl-[30px]"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 text-2xl group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <span className="text-black/20 font-bold text-2xl font-[Poppins,sans-serif]">
                      {card.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0f0f0f] mb-4 font-[Poppins,sans-serif]">
                    {card.title}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-[#666] font-[Poppins,sans-serif] font-light grow mb-8">
                    {card.description}
                  </p>

                  <a
                    href={card.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors uppercase tracking-wider font-[Poppins,sans-serif]"
                  >
                    {card.linkText}
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERS IN DIGITAL SOLUTIONS ── */}
      <section className="py-24 md:py-32 bg-black border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-[-0.03em] text-white font-[Poppins,sans-serif] mb-6">
                We are leader in <br />
                <span className="text-blue-500 font-light">
                  digital solutions
                </span>
              </h2>
              <h4 className="text-xl md:text-2xl text-[#5f5d5d] font-[Poppins,sans-serif] font-light italic mb-6 border-l-4 border-blue-500 pl-4">
                “We are committed to providing supportive and positive work”
              </h4>
              <p className="text-[16px] leading-[1.8] text-[#d3d3d3] font-[Poppins,sans-serif] font-light mb-10">
                We're a team of expert designers, web developers and marketers
                who've been delivering digital success for more than a decade.
                We excel at marketing websites, innovative web apps and mobile
                applications.
              </p>

              <a
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2f2e2e] text-white rounded-sm font-[Poppins,sans-serif] text-sm font-semibold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                Explore Company <FaArrowRight className="text-xs" />
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            {leadersFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-[#fafaf8] border border-black/5 p-6 rounded-2xl flex gap-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#0f0f0f] font-[Poppins,sans-serif] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[14.5px] leading-[1.7] text-[#666] font-[Poppins,sans-serif] font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TEAM ── */}
      <section className="py-24 md:py-32 bg-[#fafaf8]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-black/3 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] font-[Poppins,sans-serif] mb-6">
              Our Professionals
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0f0f0f] font-[Poppins,sans-serif]">
              Meet the <br />
              <span className="text-blue-500 font-light">creative minds</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-full aspect-4/5 rounded-[24px] overflow-hidden mb-6 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5 bg-black/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] grayscale group-hover:grayscale-0"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 mix-blend-overlay"></div>
                </div>
                <h4 className="text-xl font-bold text-[#0f0f0f] font-[Poppins,sans-serif] mb-2">
                  {member.name}
                </h4>
                <p className="text-[14px] text-blue-500 font-[Poppins,sans-serif] font-medium tracking-wide">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FULL WIDTH ── */}
      
    </div>
  );
}
