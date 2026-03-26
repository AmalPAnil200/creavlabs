import { motion } from "framer-motion";
import { FaArrowRight, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] selection:bg-blue-500/30 font-[Poppins,sans-serif] pt-32 pb-24 px-5 md:px-10 lg:px-16 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-[90px] translate-y-1/4 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20">
          
          {/* ── LEFT SIDE: INFO ── */}
          <div className="lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block flex items-center gap-4 mb-8"
            >
              <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] shadow-sm">
                Connect
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-[72px] font-bold text-[#0f0f0f] mb-8 tracking-tight leading-[1.08]"
            >
              Let's build <br />
              <span className="text-blue-500 font-light">the future.</span>
            </motion.h1>

            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="text-lg text-[#666] font-light leading-relaxed mb-12 max-w-md"
            >
              Whether you have a fully-formed spec or just a "biggest challenge," we're here to listen and engineer the solution.
            </motion.p>

            {/* Contact Details */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="space-y-8 mb-12"
             >
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <HiMail className="text-xl" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#999] mb-1">Email</p>
                    <p className="text-[15px] font-medium text-[#0f0f0f]">hello@creavelabs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <HiLocationMarker className="text-xl" />
                  </div>
                  <div className="pt-1">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#999] mb-1">Studio</p>
                    <p className="text-[15px] font-medium text-[#0f0f0f]">Dubai Design District, UAE</p>
                  </div>
                </div>
            </motion.div>

            {/* Socials */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="flex gap-4"
            >
              {[FaLinkedin, FaGithub, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#555] hover:bg-blue-500 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT SIDE: FORM ── */}
          <div className="lg:w-7/12">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3, duration: 0.6 }}
               className="bg-white rounded-[2rem] border border-black/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
             >
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-[12px] font-bold uppercase tracking-wider text-[#555]">Full Name</label>
                     <input type="text" className="w-full bg-[#fafaf8] border border-black/5 rounded-xl px-5 py-4 text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-[15px]" placeholder="Amal Anil" />
                   </div>
                   <div className="space-y-3">
                     <label className="text-[12px] font-bold uppercase tracking-wider text-[#555]">Email Address</label>
                     <input type="email" className="w-full bg-[#fafaf8] border border-black/5 rounded-xl px-5 py-4 text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-[15px]" placeholder="amal@example.com" />
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[12px] font-bold uppercase tracking-wider text-[#555]">Service Category</label>
                   <div className="relative">
                      <select className="w-full bg-[#fafaf8] border border-black/5 rounded-xl px-5 py-4 text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-[15px] appearance-none">
                        <option>Custom Software</option>
                        <option>Automation & AI</option>
                        <option>Web Platforms</option>
                        <option>Mobile Solutions</option>
                      </select>
                      {/* Custom select arrow */}
                      <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-gray-400">
                         ▼
                      </div>
                   </div>
                 </div>

                 <div className="space-y-3">
                   <label className="text-[12px] font-bold uppercase tracking-wider text-[#555]">Your Challenge</label>
                   <textarea rows="4" className="w-full bg-[#fafaf8] border border-black/5 rounded-xl px-5 py-4 text-[#0f0f0f] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all text-[15px] resize-none" placeholder="Describe the problem we need to solve..."></textarea>
                 </div>

                 <button type="submit" className="group flex items-center justify-center w-full md:w-auto gap-3 bg-blue-500 text-white font-semibold text-[13px] uppercase tracking-wider px-10 py-5 rounded-sm hover:bg-black transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                   Dispatch Inquiry
                   <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                 </button>
               </form>
             </motion.div>
          </div>

        </div>

        {/* ── MAP SECTION ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="h-[400px] w-full rounded-[2rem] overflow-hidden border border-black/5 shadow-sm bg-white"
        >
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.527376044719!2d55.29369835!3d25.18023775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682cb307908b%3A0xc3fec024765b2102!2sDubai%20Design%20District!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

      </div>
    </div>
  );
}