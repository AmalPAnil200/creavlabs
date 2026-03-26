import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Finance', 'E-Commerce', 'Healthcare', 'SaaS', 'Enterprise'];

const projects = [
  {
    title: 'FinFlow',
    tagline: 'Simplifying personal finance for 50K users',
    category: 'Finance',
    stack: ['React', 'Node.js', 'MongoDB'],
    result: '+240% engagement',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
    accent: '#7C3AED',
    year: '2025',
  },
  {
    title: 'ShopNest',
    tagline: 'Commerce engine driving $1.2M revenue in 6 months',
    category: 'E-Commerce',
    stack: ['Next.js', 'Stripe', 'AWS'],
    result: '$1.2M in 6 months',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&q=80',
    accent: '#3B82F6',
    year: '2025',
  },
  {
    title: 'MedTrack',
    tagline: 'Healthcare app adopted by 50K+ patients in 3 countries',
    category: 'Healthcare',
    stack: ['React Native', 'Firebase', 'Redux'],
    result: '50K+ active users',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80',
    accent: '#10B981',
    year: '2024',
  },
  {
    title: 'CreatorHub',
    tagline: 'SaaS platform tripling subscription growth for creators',
    category: 'SaaS',
    stack: ['Vue.js', 'Python', 'PostgreSQL'],
    result: '3x subscription growth',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80',
    accent: '#EC4899',
    year: '2024',
  },
  {
    title: 'RealEstate Pro',
    tagline: 'Property discovery with 180% more qualified leads',
    category: 'Finance',
    stack: ['React', 'Django', 'Google Maps'],
    result: '+180% lead generation',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80',
    accent: '#F59E0B',
    year: '2024',
  },
  {
    title: 'LogiTrack',
    tagline: 'Logistics intelligence reducing ops cost by 40%',
    category: 'Enterprise',
    stack: ['Angular', 'Node.js', 'Docker'],
    result: '40% cost reduction',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80',
    accent: '#8B5CF6',
    year: '2023',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" style={{ background: '#fafaf8', padding: '100px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span style={{
                fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
                fontWeight: 700, color: '#3a86ff', display: 'block', marginBottom: 14,
                fontFamily: 'Poppins, sans-serif',
              }}>
                Selected Works
              </span>
              <h2 style={{
                fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 100,
                color: '#0f0f0f', lineHeight: 1.05, margin: 0,
                letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif',
              }}>
                Our Finished{' '}
                <span className='text-blue-500'>
                  Projects
                </span>
              </h2>
            </div>

            <button
              onClick={() => window.location.href = '/showcase'}
              style={{
                padding: '13px 28px', borderRadius: 999, border: '1.5px solid rgba(0,0,0,0.12)',
                background: 'transparent', color: '#1a1a1a', fontSize: 14, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'all 0.25s ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#0f0f0f';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = '#0f0f0f';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1a1a1a';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
              }}
            >
              View All Projects →
            </button>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: 8, marginTop: 36, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 20px', borderRadius: 999,
                  border: `1.5px solid ${activeCategory === cat ? '#0f0f0f' : 'rgba(0,0,0,0.1)'}`,
                  background: activeCategory === cat ? '#0f0f0f' : 'transparent',
                  color: activeCategory === cat ? '#fff' : '#6b6b6b',
                  fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif', transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onMouseEnter={() => setHovered(project.title)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
                onClick={() => window.location.href = '/showcase'}
              >
                {/* Image Block */}
                <div style={{
                  position: 'relative',
                  borderRadius: 24,
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  marginBottom: 20,
                  background: '#e5e4e0',
                }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    animate={{ scale: hovered === project.title ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  />

                  {/* Hover Overlay */}
                  <motion.div
                    animate={{ opacity: hovered === project.title ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(0,0,0,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <span style={{
                      color: '#fff', fontSize: 13, fontWeight: 600,
                      border: '1.5px solid rgba(255,255,255,0.7)',
                      padding: '10px 24px', borderRadius: 999,
                      fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em',
                    }}>
                      View Case Study →
                    </span>
                  </motion.div>

                  {/* Year Tag */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16,
                    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
                    padding: '4px 12px', borderRadius: 99, fontSize: 11, fontWeight: 700, color: '#1a1a1a',
                    fontFamily: 'Poppins, sans-serif',
                  }}>
                    {project.year}
                  </div>

                  {/* Stack Badges */}
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: '65%',
                  }}>
                    {project.stack.map(tech => (
                      <span key={tech} style={{
                        fontSize: 10, fontWeight: 600, color: '#fff',
                        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                        padding: '3px 10px', borderRadius: 999,
                        fontFamily: 'Poppins, sans-serif', letterSpacing: '0.02em',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text Block */}
                <div style={{ paddingLeft: 2 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: '#22c55e',
                    display: 'block', marginBottom: 8, letterSpacing: '0.05em',
                    textTransform: 'uppercase', fontFamily: 'Poppins, sans-serif',
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700,
                    color: '#0f0f0f', lineHeight: 1.3, margin: '0 0 8px',
                    letterSpacing: '-0.02em', fontFamily: 'Poppins, sans-serif',
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6b6b6b', margin: '0 0 14px', fontFamily: 'Poppins, sans-serif' }}>
                    {project.tagline}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: project.accent }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: project.accent, fontFamily: 'Poppins, sans-serif' }}>
                      {project.result}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
