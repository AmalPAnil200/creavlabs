import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FinFlow: Helping a fintech startup simplify personal finance for 50K users',
    category: 'Finance',
    stack: ['React', 'Node.js', 'MongoDB'],
    result: '+240% user engagement',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    accent: '#7C3AED',
  },
  {
    title: 'ShopNest: Building a cross-platform commerce engine that drove $1.2M in 6 months',
    category: 'E-Commerce',
    stack: ['Next.js', 'Stripe', 'AWS'],
    result: '$1.2M revenue in 6 months',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    accent: '#3B82F6',
  },
  {
    title: 'MedTrack: A healthcare companion app adopted by 50K+ patients across 3 countries',
    category: 'Healthcare',
    stack: ['React Native', 'Firebase', 'Redux'],
    result: '50K+ active users',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    accent: '#10B981',
  },
  {
    title: 'CreatorHub: A SaaS platform that tripled subscription growth for digital creators',
    category: 'SaaS',
    stack: ['Vue.js', 'Python', 'PostgreSQL'],
    result: '3x subscription growth',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    accent: '#EC4899',
  },
  {
    title: 'RealEstate Pro: Bringing property discovery online with 180% more qualified leads',
    category: 'Real Estate',
    stack: ['React', 'Django', 'Google Maps'],
    result: '+180% lead generation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    accent: '#F59E0B',
  },
  {
    title: 'LogiTrack: Reducing logistics operations costs by 40% with smart route intelligence',
    category: 'Enterprise',
    stack: ['Angular', 'Node.js', 'Docker'],
    result: '40% ops cost reduction',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    accent: '#8B5CF6',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: '#f7f6f2', padding: '96px 0' }}>
      <div className="container-custom">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: 64 }}
        >
          <span style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: 16,
            fontFamily: 'Poppins, sans-serif',textAlign:'center'
          }}>
            Our Work
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 300,
            color: '#1a1a1a',
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: '-0.03em',
            fontFamily: 'Poppins, sans-serif',
            textAlign:'center'
          }}>
            Projects That{' '}
            <span style={{ fontWeight: 700 }}>Speak Volumes</span>
          </h2>
          <p style={{
            color: '#6b6b6b', fontSize: 17,
            marginTop: 16, lineHeight: 1.7, fontFamily: 'Poppins, sans-serif',
            textAlign:'center'
          }}>
            Real projects. Real results. From early-stage startups to established enterprises.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 32,
        }}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ cursor: 'pointer', background: 'transparent' }}
              className="group"
            >
              {/* ── Image Block ── */}
              <div style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '4/3',
                marginBottom: 20,
                background: '#e5e4e0',
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  className="group-hover:[transform:scale(1.04)]"
                />

                {/* Hover overlay with CTA */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                  className="group-hover:opacity-100"
                >
                  <span style={{
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'Poppins, sans-serif',
                    border: '1.5px solid rgba(255,255,255,0.6)',
                    padding: '8px 20px',
                    borderRadius: 999,
                    letterSpacing: '0.02em',
                  }}>
                    View Case Study →
                  </span>
                </div>

                {/* Tech stack badges — top right */}
                <div style={{
                  position: 'absolute',
                  top: 14,
                  right: 14,
                  display: 'flex',
                  gap: 6,
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  maxWidth: '70%',
                }}>
                  {project.stack.map((tech) => (
                    <span key={tech} style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: '#fff',
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(8px)',
                      padding: '3px 10px',
                      borderRadius: 999,
                      fontFamily: 'Poppins, sans-serif',
                      letterSpacing: '0.03em',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Text Block ── */}
              <div style={{ paddingLeft: 2 }}>
                {/* Category */}
                <span style={{
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#1a1a1a',
                  display: 'block',
                  marginBottom: 10,
                  letterSpacing: '0.01em',
                }}>
                  {project.category}
                </span>

                {/* Title */}
                <h3 style={{
                  fontSize: 'clamp(18px, 2.2vw, 22px)',
                  fontWeight: 300,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#1a1a1a',
                  lineHeight: 1.35,
                  margin: '0 0 14px',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease',
                }}>
                  {project.title}
                </h3>

                {/* Result metric */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: project.accent,
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: project.accent,
                    fontFamily: 'Poppins, sans-serif',
                  }}>
                    {project.result}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: 64, textAlign: 'center' }}
        >
          <button style={{
            padding: '14px 36px',
            borderRadius: 999,
            border: '1.5px solid #1a1a1a',
            background: 'transparent',
            color: '#1a1a1a',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Poppins, sans-serif',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            transition: 'all 0.25s ease',
          }}
            onMouseEnter={e => { e.target.style.background = '#1a1a1a'; e.target.style.color = '#f7f6f2'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1a1a1a'; }}
          >
            View All Projects →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
