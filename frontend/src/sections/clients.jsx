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
      className="bg-white py-12 md:py-20 overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase font-bold text-[#3A86FF] block mb-3 md:mb-4 font-['Poppins',sans-serif]">
            Trusted Globally
          </span>
          <h2 className="text-[clamp(28px,5vw,52px)] font-thin text-black leading-[1.1] mx-auto tracking-[-0.03em] font-['Poppins',sans-serif] max-w-[560px]">
            Powering businesses across{' '}
            <span className="text-[#3A86FF]">25+ countries</span>
          </h2>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="relative mb-4 overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[120px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[120px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max"
            style={{ animation: 'marquee-clients 28s linear infinite' }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="shrink-0 bg-[#f5f5f5] rounded-xl md:rounded-2xl px-6 md:px-9 py-3 md:py-5 border border-black/5 flex items-center justify-center min-w-[120px] md:min-w-[160px] h-[56px] md:h-[72px] transition-colors duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-[20px] md:max-h-[28px] max-w-[100px] md:max-w-[120px] object-contain brightness-50 hover:brightness-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — reverse */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-[40px] md:w-[120px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[120px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          <div 
            className="flex gap-4 md:gap-6 pr-4 md:pr-6 w-max"
            style={{ animation: 'marquee-clients-rev 22s linear infinite' }}
          >
            {[...trustedBy, ...trustedBy].map((region, i) => (
              <div
                key={i}
                className="shrink-0 bg-[#f5f5f5] rounded-xl md:rounded-2xl px-5 md:px-7 py-3 md:py-4 border border-black/5 flex items-center gap-2 md:gap-2.5 min-w-[140px] md:min-w-[180px] h-[48px] md:h-[56px]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#3A86FF] shrink-0" />
                <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-black/40 font-['Poppins',sans-serif] whitespace-nowrap">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-full border-[1.5px] border-black/10 bg-transparent text-black/70 text-xs md:text-sm font-semibold cursor-pointer font-['Poppins',sans-serif] transition-all duration-300 hover:bg-black/5 hover:border-black/25 hover:text-black">
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