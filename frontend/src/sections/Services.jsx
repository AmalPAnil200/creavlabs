import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "../components/ui/GlowingEffect";
import {
  HiCode, HiDeviceMobile, HiColorSwatch, HiTrendingUp, HiChip,
} from "react-icons/hi";
import { MessageCircleCheck } from 'lucide-react';

const services = [
  {
    icon: <HiCode className="w-7 h-7" />,
    title: "Website Development",
    description: "Lightning-fast, SEO-optimized websites built with React, Next.js, and modern web standards.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: <HiDeviceMobile className="w-7 h-7" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences with React Native and Flutter.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <HiColorSwatch className="w-7 h-7" />,
    title: "UI/UX Design",
    description: "User-centered design that converts — balancing stunning aesthetics with intuitive usability.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: <HiTrendingUp className="w-7 h-7" />,
    title: "SEO & Digital Marketing",
    description: "Data-driven strategies to grow your organic visibility and turn visitors into customers.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: <HiChip className="w-7 h-7" />,
    title: "Custom Software",
    description: "End-to-end solutions tailored to your business — APIs, dashboards, SaaS platforms, and more.",
    gradient: "from-orange-500 to-amber-500",
  },
];

const WORDS = [
  "CreaveLabs", "delivers", "international-standard", "web", "solutions", "tailored", "to", "your", "business.", "We", "analyze", "your", "needs,", "design", "the", "right", "strategy,", "and", "build", "websites", "that", "create", "real", "digital", "experiences."
];

export default function Services() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const wordsRef = useRef([]);
  const progressRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const words = wordsRef.current;
    if (!section || !words.length) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const sectionH = section.offsetHeight;
        const windowH = window.innerHeight;

        // scroll progress: 0 when sticky phase starts, 1 when done
        const scrolled = -rect.top;
        const total = sectionH - windowH;
        const raw = Math.min(Math.max(scrolled / total, 0), 1);

        progressRef.current = raw;

        words.forEach((el, i) => {
          if (!el) return;
          const wordStart = i / WORDS.length;
          const wordEnd = (i + 1) / WORDS.length;
          const wordProgress = Math.min(Math.max((raw - wordStart) / (wordEnd - wordStart), 0), 1);
          // clip-path reveal + subtle lift
          el.style.setProperty("--p", `${wordProgress * 100}%`);
          el.style.transform = `translateY(${(1 - wordProgress) * 6}px)`;
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div style={{ background: "#07070f", minHeight: "100vh" }}>

      {/* ── PINNED SCROLL TEXT ── */}
      <div
        ref={sectionRef}
        style={{ height: "350vh", position: "relative",backgroundColor:'white' }}
      >
        <div
          ref={stickyRef}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* ambient glow */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }} />

          {/* eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "#000000", marginBottom: 32, fontWeight: 600,
            }}
          >
            Why creavelabs web solutions
          </motion.p>

          {/* sentence */}
          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: "0.35em 0.5em",
            maxWidth: 760, padding: "0 24px", textAlign: "center",
          }}>
            {WORDS.map((word, i) => (
              <span
                key={i}
                ref={el => wordsRef.current[i] = el}
                style={{
                  position: "relative",
                  display: "inline-block",
                  fontSize: "clamp(28px, 5vw, 45px)",
                  fontWeight: 200,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  fontFamily: "Poppins, sans-serif",
                  transition: "transform 0.1s ease",
                  willChange: "transform",
                  "--p": "0%",
                }}
              >
                {/* dim base layer */}
                <span style={{
                  color: "gray",
                  userSelect: "none",
                  display: "block",
                }}>
                  {word}
                </span>
                {/* lit reveal layer */}
                <span style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #000000 0%, #000000 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  clipPath: "inset(0 calc(100% - var(--p)) 0 0)",
                  display: "block",
                }}>
                  {word}
                </span>
              </span>
            ))}
          </div>

          {/* scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              position: "absolute", bottom: 40,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            }}
          >
            <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "black", textTransform: "uppercase" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 1, height: 40,
                background: "linear-gradient(to bottom, rgb(0, 0, 0), transparent)",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── SERVICES SECTION ── */}
      <div style={{ background: "#07070f", padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* header */}
          <div style={{ textAlign: "center", marginBottom: 72, }}>
            <span style={{
              fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase",
              color: "rgba(167,139,250,0.7)", fontWeight: 600, display: "block", marginBottom: 16,
            }}>
              What We Do
            </span>
            <h2 style={{
              fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 900,
              color: "#fff", margin: 0, lineHeight: 1.1, letterSpacing: "-0.03em",
              fontFamily: "Poppins, sans-serif",fontWeight:200,
            }}>
              Services That{" "}
              <span style={{
                background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Drive Results
              </span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, maxWidth: 520, margin: "20px auto 0", lineHeight: 1.7 }}>
              From concept to launch — end-to-end digital solutions designed to grow your business.
            </p>
          </div>

          {/* grid */}
          <ul style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}>
            {services.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ minHeight: "14rem", listStyle: "none" }}
              >
                {/* Outer wrapper — border + rounded */}
                <div style={{
                  position: "relative",
                  height: "100%",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: 8,
                }}>
                  <GlowingEffect
                    spread={40}
                    glow={false}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  {/* Inner card */}
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    style={{
                      position: "relative",
                      height: "100%",
                      background: "rgba(12,12,18,0.92)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderRadius: 14,
                      border: "1px solid rgba(255,255,255,0.05)",
                      padding: "28px 24px",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    {/* top-edge shimmer */}
                    <div style={{
                      position: "absolute", top: 0, left: 0, right: 0, height: 1,
                      background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)",
                    }} />

                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 20,
                    }} className={`bg-gradient-to-br ${s.gradient} text-white shadow-lg`}>
                      {s.icon}
                    </div>

                    <h3 style={{
                      fontSize: 16, fontWeight: 700, color: "#fff",
                      margin: "0 0 10px", letterSpacing: "-0.01em",
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      fontSize: 14, color: "rgba(255,255,255,0.38)",
                      margin: 0, lineHeight: 1.65,
                    }}>
                      {s.description}
                    </p>

                    <div style={{
                      marginTop: 20, fontSize: 13, fontWeight: 600,
                      color: "rgba(167,139,250,0.7)", display: "flex", alignItems: "center", gap: 6,
                    }}>
                      Learn more <span>→</span>
                    </div>
                  </motion.div>
                </div>
              </motion.li>
            ))}

            {/* CTA card */}
            <motion.li
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: services.length * 0.08 }}
              style={{ minHeight: "14rem", listStyle: "none" }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div style={{
                position: "relative",
                height: "100%",
                borderRadius: 20,
                border: "1px dashed rgba(124,58,237,0.3)",
                padding: 8,
              }}>
                <GlowingEffect
                  spread={40}
                  glow={false}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div style={{
                  position: "relative",
                  height: "100%",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.04)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  textAlign: "center", gap: 16, minHeight: 180,
                  cursor: "pointer",
                  background: "rgba(124,58,237,0.04)",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    border: "1.5px dashed rgba(124,58,237,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                  }}><MessageCircleCheck /></div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, margin: 0 }}>
                    Have a custom project in mind?
                  </p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(167,139,250,0.8)" }}>
                    Let's Talk →
                  </span>
                </div>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}