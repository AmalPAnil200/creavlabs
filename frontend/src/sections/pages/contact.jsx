import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative overflow-hidden mt-10">
      {/* Background Decor */}
      <div className="grid-lines fixed inset-0 pointer-events-none opacity-40" />
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-500/[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* ── LEFT SIDE: INFO ── */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-blue-400/30 text-blue-400 bg-blue-400/[0.06]">
                Connect
              </span>
            </motion.div>

            <h1 className="font-serif text-6xl text-white mb-8 tracking-tighter">
              Let's build <br />
              <span className="italic text-white/30">the future.</span>
            </h1>

            <p className="font-mono text-xs text-white/40 leading-relaxed mb-12 max-w-sm">
              Whether you have a fully-formed spec or just a "biggest challenge," we're here to listen and engineer the solution.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                  <HiMail />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Email</p>
                  <p className="font-mono text-sm text-white/70">hello@creavelabs.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:border-blue-400 group-hover:text-blue-400 transition-colors">
                  <HiLocationMarker />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Studio</p>
                  <p className="font-mono text-sm text-white/70">Dubai Design District, UAE</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/5 flex items-center justify-center text-white/20 hover:border-white/20 hover:text-white transition-all">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDE: FORM ── */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-white/[0.02] border border-white/[0.07] p-8 md:p-12 backdrop-blur-sm"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors font-mono text-sm" placeholder="Amal Anil" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors font-mono text-sm" placeholder="amal@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Service Category</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 text-white/60 focus:outline-none focus:border-blue-400 transition-colors font-mono text-sm appearance-none">
                  <option className="bg-zinc-900">Custom Software</option>
                  <option className="bg-zinc-900">Automation & AI</option>
                  <option className="bg-zinc-900">Web Platforms</option>
                  <option className="bg-zinc-900">Mobile Solutions</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Your Challenge</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors font-mono text-sm resize-none" placeholder="Describe the problem we need to solve..."></textarea>
              </div>

              <button className="group flex items-center gap-4 bg-blue-400 text-zinc-950 font-mono text-xs uppercase tracking-[0.2em] px-10 py-5 hover:bg-white transition-all duration-300">
                Dispatch Inquiry
                <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-2" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* ── MAP SECTION ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 h-[400px] w-full border border-white/[0.07] bg-white/[0.02] p-2 backdrop-blur-sm"
        >
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.527376044719!2d55.29369835!3d25.18023775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cb307908b%3A0xc3fec024765b2102!2sDubai%20Design%20District!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
}