import { motion } from 'framer-motion';

const clients = [
  { name: 'Vercel', logo: 'https://svgl.app/library/vercel_wordmark.svg', dark: true },
  { name: 'Supabase', logo: 'https://svgl.app/library/supabase_wordmark_light.svg', dark: true },
  { name: 'OpenAI', logo: 'https://svgl.app/library/openai_wordmark_light.svg', dark: true },
  { name: 'NVIDIA', logo: 'https://svgl.app/library/nvidia-wordmark-light.svg', dark: true },
  { name: 'Clerk', logo: 'https://svgl.app/library/clerk-wordmark-light.svg', dark: true },
  { name: 'GitHub', logo: 'https://svgl.app/library/github_wordmark_light.svg', dark: true },
  { name: 'Claude', logo: 'https://svgl.app/library/claude-ai-wordmark-icon_light.svg', dark: true },
  { name: 'Turso', logo: 'https://svgl.app/library/turso-wordmark-light.svg', dark: true },
];

const trustedBy = [
  'State Government', 'Middle East Partners', 'India', 'Europe',
  'USA Clients', 'Southeast Asia', 'UAE', 'UK Markets',
];

export default function ClientSection() {
  return (
    <section
      id="clients"
      style={{ background: '#fff', padding: '80px 0', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            fontWeight: 700, color: '#3A86FF', display: 'block', marginBottom: 16,
            fontFamily: 'Poppins, sans-serif',
          }}>
            Trusted Globally
          </span>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 100,
            color: '#000', lineHeight: 1.1, margin: '0 auto',
            letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif', maxWidth: 560,
          }}>
            Powering businesses across{' '}
            <span style={{ color: '#3A86FF' }}>25+ countries</span>
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div style={{ position: 'relative', marginBottom: 16, overflow: 'hidden' }}>
          {/* Left fade */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to right, #fff, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          {/* Right fade */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to left, #fff, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          <div style={{ display: 'flex', animation: 'marquee-clients 28s linear infinite', gap: 24 }}>
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: '#f5f5f5',
                  borderRadius: 16,
                  padding: '20px 36px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 160,
                  height: 72,
                  transition: 'border-color 0.25s ease',
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{ maxHeight: 28, maxWidth: 120, objectFit: 'contain', filter: 'brightness(0.5)', transition: 'filter 0.25s ease' }}
                  onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1)'}
                  onMouseLeave={e => e.currentTarget.style.filter = 'brightness(0.5)'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — reverse */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to right, #fff, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to left, #fff, transparent)',
            zIndex: 2, pointerEvents: 'none',
          }} />
          <div style={{ display: 'flex', animation: 'marquee-clients-rev 22s linear infinite', gap: 24 }}>
            {[...trustedBy, ...trustedBy].map((region, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  background: '#f5f5f5',
                  borderRadius: 16,
                  padding: '16px 28px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  minWidth: 180,
                  height: 56,
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3A86FF', flexShrink: 0 }} />
                <span style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)',
                  fontFamily: 'Poppins, sans-serif', whiteSpace: 'nowrap',
                }}>
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button
            style={{
              padding: '13px 32px', borderRadius: 999,
              border: '1.5px solid rgba(255,255,255,0.12)',
              background: 'transparent', color: 'rgba(0,0,0,0.7)',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              fontFamily: 'Poppins, sans-serif', transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
              e.currentTarget.style.color = 'rgba(0,0,0,0.7)';
            }}
          >
            View All Clients →
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee-clients {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-clients-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}