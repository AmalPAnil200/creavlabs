import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    num: "Intro",
    title: "our working process in 3 steps",
    description: "We, Team CreaveLabs are here to process your dreams into reality, the dreams to build your web presence. Which will make your world more beautiful. Let us be your technical partners.. and leave the rest to us",
    bg: "#000000",
    color: "#ffffff",
    isHero: true // Tag to identify the special styling
  },
  {
    num: "01",
    title: "We Understand your Needs",
    description: "Give us an opportunity to study what you need exactly.",
    bg: "#ffffff",
    color: "#000000"
  },
  {
    num: "02",
    title: "Analyse Your Requirements",
    description: "Our expert team will study your organization and submit you a proposal.",
    bg: "#000000",
    color: "#ffffff"
  },
  {
    num: "03",
    title: "Provide the Best Solution",
    description: "Our international team of experts can deliver you an exposure with international standards.",
    bg: "#ffffff",
    color: "#000000"
  }
];

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const panels = gsap.utils.toArray(".stack-panel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${panels.length * 100}%`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    panels.forEach((panel, i) => {
      if (i > 0) {
        tl.fromTo(panel, { yPercent: 100 }, { yPercent: 0, ease: "none" }, i);
      }
      if (i < panels.length - 1) {
        tl.to(panel, { scale: 0.9, filter: "brightness(0.5)", ease: "none" }, i + 1);
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());


  }, []);

  return (
    <div style={{ background: "#07070f" }}>
      <section ref={containerRef} style={{ position: "relative", height: "100vh", overflow: "hidden" }}>

        {/* Background Grid Lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0
        }} />

        {steps.map((step, i) => (
          <div
            key={i}
            className="stack-panel"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              background: step.bg,
              color: step.color,
              zIndex: i + 1,
              padding: "40px",
              textAlign: "center"
            }}
          >
            {/* Special UI for Intro Card */}
            {step.isHero ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Glow Effect */}
                <div style={{
                  position: "absolute",
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: -1
                }} />

                <span style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.05)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  marginBottom: "24px",
                  backdropFilter: "blur(10px)"
                }}>
                  CreaveLabs Process
                </span>

                <h2 style={{
                  fontSize: "clamp(10px, 8vw, 70px)",
                  fontWeight: "900",
                  lineHeight: "1",
                  marginBottom: "24px",
                  background: "linear-gradient(to bottom, #ffffff 30%, #a5a5a5 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  {step.title}
                </h2>
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
                  <span style={{ fontSize: 11, letterSpacing: "0.2em", color: "white", textTransform: "uppercase" }}>
                    Scroll
                  </span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      width: 1, height: 40,
                      background: "linear-gradient(to bottom, rgb(255, 255, 255), transparent)",
                    }}
                  />
                </motion.div>
              </div>
            ) : (
              /* Regular Step UI */
              <>
                <span style={{ fontSize: "14px", fontWeight: "900", opacity: 0.3, letterSpacing: "10px", marginBottom: "10px" }}>
                  {step.num}
                </span>
                <h2 style={{ fontSize: "clamp(40px, 5vw, 58px)", fontWeight: "bold", marginBottom: "20px" }}>
                  {step.title}
                </h2>
              </>
            )}

            <p style={{
              maxWidth: "800px",
              fontSize: step.isHero ? "17px" : "18px",
              lineHeight: "1.6",
              opacity: 0.7,
              fontWeight: "300",
            }}>
              {step.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}