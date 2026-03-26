import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const services = [
  {
    number: "01",
    title: "Advanced Analytics",
    description:
      "Data-driven insights that transform how your business makes decisions. We turn raw data into strategic advantage.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 4 4 5-5" />
      </svg>
    ),
    bg: "#0f0f0f",
    color: "#ffffff",
    accent: "#3a86ff",
    large: true,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "High-performance websites and web apps built with modern stacks.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 12l3 3 5-5" />
      </svg>
    ),
    bg: "#f7f6f2",
    color: "#0f0f0f",
    accent: "#0f0f0f",
    large: false,
  },
  {
    number: "03",
    title: "Mobile Apps",
    description: "Cross-platform mobile experiences that users love.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
    bg: "#3a86ff",
    color: "#fff",
    accent: "#fff",
    large: false,
  },
  {
    number: "04",
    title: "Digital Strategy",
    description:
      "We craft comprehensive digital strategies to grow your business and market presence. Marketing, SEO, and beyond.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 0 20M2 12h20" />
      </svg>
    ),
    bg: "#f7f6f2",
    color: "#0f0f0f",
    accent: "#3a86ff",
    large: true,
  },
];

const metrics = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Global Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {inView ? (
        <CountUp end={value} duration={2.5} suffix={suffix} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#fafaf8", padding: "100px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: "center" }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#3a86ff",
              display: "block",
              marginBottom: 16,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Our Services
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 100,
              color: "#0f0f0f",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.03em",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Digital Services to{" "}
            <span className="text-blue-500">Grow Your Business</span>
          </h2>
          <p
            style={{
              color: "#6b6b6b",
              fontSize: 17,
              marginTop: 16,
              maxWidth: 560,
              margin: "16px auto 0",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            We're a team of experts delivering digital success for over a
            decade. Web, mobile, design, and strategy — all under one roof.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              className={`bento-item ${s.large ? "bento-item-large" : ""}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              style={{
                background: s.bg,
                borderRadius: 32,
                padding: s.large ? "48px" : "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 240,
                border:
                  s.bg === "#f7f6f2" ? "1px solid rgba(0,0,0,0.08)" : "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(0,0,0,0.12)" }}
            >
              {/* Number */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: s.accent,
                    opacity: 0.7,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {s.number}
                </span>
                <div style={{ color: s.color, opacity: 0.8 }}>{s.icon}</div>
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: s.large ? 28 : 20,
                    fontWeight: 700,
                    color: s.color,
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: s.color,
                    opacity: 0.65,
                    lineHeight: 1.65,
                    margin: 0,
                    fontFamily: "Poppins, sans-serif",
                    maxWidth: s.large ? 400 : "100%",
                  }}
                >
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
              {s.large && (
                <div style={{ marginTop: 28 }}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: s.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Learn More
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              )}
            </motion.div>
          ))}

          {/* CTA Card */}
        </div>

        {/* View All Services Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: 40 }}
        >
          <button
            onClick={() => (window.location.href = "/services")}
            style={{
              padding: "14px 36px",
              borderRadius: 999,
              border: "1.5px solid rgba(0,0,0,0.12)",
              background: "transparent",
              color: "#1a1a1a",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Poppins, sans-serif",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0f0f0f";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "#0f0f0f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1a1a1a";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
            }}
          >
            View All Services →
          </button>
        </motion.div>

        {/* Metrics Strip */}
        <motion.div
          className="metrics-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: 80,
            background: "#0f0f0f",
            borderRadius: 32,
            padding: "48px",
            display: "grid",
            gap: 24,
          }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className={`metric-item ${i < metrics.length - 1 ? 'has-border' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 40,
                  fontWeight: 800,
                  color: "#3a86ff",
                  marginBottom: 6,
                  letterSpacing: "-0.03em",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .bento-grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        }
        .bento-item {
          grid-column: span 1;
        }
        .bento-item-large {
          grid-column: span 2;
        }
        .metrics-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .metric-item.has-border {
          border-right: 1px solid rgba(255,255,255,0.08);
          padding-right: 24px;
        }
        
        @media (max-width: 1024px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .metric-item.has-border {
            border-right: none;
            padding-right: 0;
          }
          .metric-item:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.08);
            padding-right: 24px;
          }
        }

        @media (max-width: 768px) {
          .bento-grid { 
            grid-template-columns: 1fr; 
          }
          .bento-item-large {
            grid-column: span 1;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
            padding: 32px !important;
          }
          .metric-item:nth-child(odd) {
            border-right: none;
            padding-right: 0;
          }
          .metric-item.has-border {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            padding-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
