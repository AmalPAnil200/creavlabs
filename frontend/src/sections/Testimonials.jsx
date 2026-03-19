import { motion } from 'framer-motion';

const newsItems = [
  {
    title: "Revolutionizing Fintech: Our CEO Discusses the Future of Digital Payments",
    category: "Interview",
    date: "March 2026",
    videoId: "dQw4w9WgXcQ", // Replace with your YouTube ID
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
    accent: "#ff0000",
    excerpt: "Catch the latest insights on how we're building scalable infrastructure for the next billion users."
  },
  {
    title: "CreaveLabs Featured on Global Tech News: Scalability in 2026",
    category: "Press Release",
    date: "Feb 2026",
    videoId: "yPYZpwSpKmA",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    accent: "#1a73e8",
    excerpt: "A deep dive into our architectural choices that helped StyleCart handle 50k concurrent users."
  },
  {
    title: "Behind the Scenes: Crafting the QuickLoan Mobile Experience",
    category: "Documentary",
    date: "Jan 2026",
    videoId: "EngW7tLk6R8",
    thumbnail: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800",
    accent: "#10b981",
    excerpt: "Meet the engineering team behind our award-winning financial inclusion platform."
  }
];

export default function MediaSection() {
  return (
    <section id="media" style={{ background: '#f7f6f2', padding: '96px 0' }}>
      <div className="container-custom">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, textAlign: 'center' }}
        >
          <span style={{
            fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
            fontWeight: 700, color: '#1a1a1a', display: 'block', marginBottom: 16,
            fontFamily: 'Poppins, sans-serif'
          }}>
            News & Media
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300,
            color: '#1a1a1a', lineHeight: 1.1, margin: 0,
            letterSpacing: '-0.03em', fontFamily: 'Poppins, sans-serif'
          }}>
            Latest from <span style={{ fontWeight: 700 }}>CreaveLabs</span>
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 32,
        }}>
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ background: 'transparent' }}
              className="group"
            >
              {/* YouTube Card Block */}
              <div 
                onClick={() => window.open(`https://youtube.com/watch?v=${item.videoId}`, '_blank')}
                style={{
                  position: 'relative',
                  borderRadius: 20,
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  marginBottom: 24,
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  className="group-hover:scale-110"
                />

                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <div style={{
                    width: 64, height: 64, background: '#fff', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  }} className="group-hover:scale-110 group-hover:bg-red-600">
                    <div style={{
                      width: 0, height: 0, 
                      borderTop: '10px solid transparent',
                      borderBottom: '10px solid transparent',
                      borderLeft: '15px solid #1a1a1a',
                      marginLeft: 5
                    }} className="group-hover:border-left-[#fff]" />
                  </div>
                </div>

                {/* Date Tag */}
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
                  padding: '4px 12px', borderRadius: 99, fontSize: 10, fontWeight: 700, color: '#000'
                }}>
                  {item.date}
                </div>
              </div>

              {/* Text Block */}
              <div style={{ padding: '0 4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                  <span style={{
                    fontSize: 12, fontWeight: 700, color: item.accent,
                    textTransform: 'uppercase', letterSpacing: '0.05em'
                  }}>
                    {item.category}
                  </span>
                  <div style={{ width: 4, height: 4, background: '#d1d1d1', borderRadius: '50%' }} />
                  <span style={{ fontSize: 12, color: '#6b6b6b' }}>5 min watch</span>
                </div>

                <h3 style={{
                  fontSize: 20, fontWeight: 600, color: '#1a1a1a',
                  lineHeight: 1.4, margin: '0 0 12px', letterSpacing: '-0.01em',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: 15, color: '#6b6b6b', lineHeight: 1.6,
                  fontFamily: 'Poppins, sans-serif', margin: 0
                }}>
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <button style={{
            padding: '14px 36px', borderRadius: 999, border: '1.5px solid #1a1a1a',
            background: 'transparent', color: '#1a1a1a', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.25s ease'
          }}
            onMouseEnter={e => { e.target.style.background = '#1a1a1a'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1a1a1a'; }}
            onClick={() => window.location.href = '/public'}
          >
            Visit Our Channel →
          </button>
        </div>

      </div>
    </section>
  );
}