import { useState, useEffect, useRef } from 'react';
import CompanyCircle from '@/components/ui/textcircle';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiMail, HiPhone } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';
import CircularText from '../components/ui/CircleText';
import logo from '../assets/logo.png';

const MouseParticles = () => {
  const canvasRef = useRef(null);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solution' },
  { label: 'Showcase', href: '/showcase' },
  { label: 'Public Reactions', href: '/public' },
  { label: 'Contact', href: '/contact' },
];


const menuItems = [
  {
    label: 'Impact',
    href: '#why-us',
    title: 'Our Impact',
    description:
      'Every innovation that happens here is out of a quest to get better at what we are already doing. We deliver ideas that make a difference, create experiences that transform lives and build ecosystems that foster progress.',
    stats: [
      { value: '700+', desc: 'Projects launched successfully across the globe' },
      { value: '10M', desc: 'Daily customer engagement through our projects' },
      { value: '100+', desc: 'Digital transformation stories that made a difference' },
    ],
    cta: { label: 'Our Impact', href: '#why-us' },
  },
  {
    label: 'Public',
    href: '#public',
    title: 'Public',
    description: 'We craft world-class digital products...',
    videos: [
      "https://www.youtube.com/embed/khxjetCR59k",
      "https://www.youtube.com/embed/VIDEO_ID_2",
      "https://www.youtube.com/embed/VIDEO_ID_3",
      "https://www.youtube.com/embed/VIDEO_ID_4",
    ],
    cta: { label: 'View Public-media', href: '#public-reactions' },
  },
  {
    label: 'Testimonial',
    href: '#testimonial',
    title: 'Our Testimonial',
    description:
      'Real stories from real clients — hear directly from the people and businesses whose lives we have helped transform through our work.',
    quotes: [
      {
        text: '"Working with Creavelabs was a game-changer. They turned our vision into a world-class product that our users absolutely love."',
        name: 'Sarah M.',
        role: 'CEO, NovaTech',
      },
      {
        text: '"Exceptional team. Delivered ahead of schedule with quality that exceeded every expectation we had. Truly outstanding."',
        name: 'James K.',
        role: 'Founder, Buildify',
      },
    ],
    cta: { label: 'View Testimonials', href: '#testimonial' },
  },
  {
    label: 'Process',
    href: '#process',
    title: 'Our Process',
    description:
      'Our proven, agile-driven process takes your idea from conception to launch efficiently. We collaborate closely with you, ensuring transparency, quality and speed at every step.',
    stats: [
      { value: '6', desc: 'Structured phases from discovery to delivery' },
      { value: '2x', desc: 'Faster delivery compared to industry average' },
      { value: '100%', desc: 'Transparency throughout every project stage' },
    ],
    cta: { label: 'See Process', href: '#process' },
  },
  {
    label: 'Contact',
    href: '#contact',
    title: 'Get In Touch',
    description:
      "Have a project in mind? Let's talk. Our team is always ready to listen, advise, and help you build something extraordinary. Reach out and let's create together.",
    stats: [
      { value: '24h', desc: 'Average response time to all enquiries' },
      { value: '3', desc: 'Offices across different time zones for your convenience' },
      { value: '∞', desc: 'Passion for building great digital experiences' },
    ],
    cta: { label: 'Contact Us', href: '#contact' },
  },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);
  const [scrolled, setScrolled] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setDesktopMenuOpen(false);
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    if (desktopMenuOpen || mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [desktopMenuOpen, mobileOpen]);

  // Reset active menu to first item when overlay opens
  useEffect(() => {
    if (desktopMenuOpen) setActiveMenu(menuItems[0]);
  }, [desktopMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed bg-white top-0 left-0 right-0 z-60 transition-all duration-300 ${scrolled ? ' bg-white shadow-lg shadow-black/20' : ''
          }`}
      >
        <div className="container-custom relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" onClick={() => handleNav('/')} className="flex items-center gap-2 group cursor-pointer z-50">
            <span
              className="flex items-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}
            >
              <img src={logo} alt="Logo" className="w-30 h-30 object-contain" />
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={`relative text-base font-light transition-colors duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-px after:w-0
                    after:transition-all after:duration-300 hover:after:w-full
                    ${scrolled
                      ? 'text-zinc-800 hover:text-black after:bg-black'
                      : 'text-black/80 hover:text-black after:bg-black'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Hamburger Icon */}
          <div className="hidden lg:block relative z-50">
            <button
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
              className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300
  bg-white/5 hover:bg-white/10 border 
  ${scrolled ? "text-black border-black/60" : "text-black border-black/50"}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-3 flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300
      ${desktopMenuOpen ? "translate-y-[5px] rotate-45" : ""}
      ${scrolled ? "bg-black" : "bg-black"}`}
                />
                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300
      ${desktopMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}
      ${scrolled ? "bg-black" : "bg-black"}`}
                />
              </div>
            </button>

            {/* Full-Screen Menu Overlay */}
            <AnimatePresence>
              {desktopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 top-0 w-full h-screen z-40 overflow-hidden"
                  style={{ background: 'radial-gradient(ellipse at 70% 80%, #0a0a2e 0%, #05050f 60%, #000000 100%)' }}
                >
                  <MouseParticles />
                  {/* Subtle blue glow bottom-right */}
                  <div
                    className="pointer-events-none fixed bottom-0 right-0 w-[500px] h-[400px] rounded-full"
                    style={{ background: 'radial-gradient(ellipse, rgba(30,60,200,0.35) 0%, transparent 70%)' }}
                  />
                  {/* Grid overlay */}
                  <div className="fixed inset-0 grid-bg opacity-10 pointer-events-none" />

                  {/* Close Button */}
                  <button
                    onClick={() => setDesktopMenuOpen(false)}
                    className="fixed top-8 right-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-white/10 transition-colors duration-300 z-50 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <HiX />
                  </button>

                  {/* Two-column layout */}
                  <div className="relative z-10 w-full h-full flex">

                    {/* LEFT — 5 Navigation Links */}
                    <div className="flex flex-col justify-center pl-16 xl:pl-24 pr-10 w-[45%] gap-1 border-r border-white/5">
                      {menuItems.map((item, i) => (
                        <motion.button
                          key={item.label}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: i * 0.06 }}
                          onMouseEnter={() => setActiveMenu(item)}
                          onClick={() => handleNav(item.href)}
                          className="group text-left transition-colors duration-300 py-3 border-b border-white/5 last:border-b-0"
                          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                        >
                          <span
                            className={`text-5xl xl:text-6xl font-bold transition-colors duration-300 ${activeMenu?.label === item.label
                              ? 'text-white'
                              : 'text-white/25 group-hover:text-white/70'
                              }`}
                          >
                            {item.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>

                    {/* RIGHT — Active Link Details */}
                    <div className="flex flex-col justify-center pl-14 xl:pl-20 pr-16 w-[55%]">
                      <AnimatePresence mode="wait">
                        {activeMenu && (
                          <motion.div
                            key={activeMenu.label}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="flex flex-col gap-6"
                          >
                            {/* Title */}
                            <h2
                              className="text-4xl xl:text-5xl font-light text-white"
                              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                            >
                              {activeMenu.title}
                            </h2>

                            {/* Description */}
                            <p className="text-slate-400 text-base xl:text-lg leading-relaxed max-w-md font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                              {activeMenu.description}
                            </p>

                            {/* Videos — YouTube iframes (Public) */}
                            {activeMenu?.videos?.length > 0 && typeof activeMenu.videos[0] === 'string' && (
                              <div className="grid grid-cols-2 gap-3 mt-4 max-w-md">
                                {activeMenu.videos.map((video, i) => (
                                  <div key={i} className="relative w-full pb-[56.25%] rounded-lg overflow-hidden border border-white/10">
                                    <iframe
                                      src={video}
                                      title={`video-${i}`}
                                      className="absolute top-0 left-0 w-full h-full"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Quote Cards (Testimonial) */}
                            {activeMenu?.quotes?.length > 0 && (
                              <div className="flex flex-col gap-3 mt-4 max-w-md">
                                {activeMenu.quotes.map((quote, i) => (
                                  <div
                                    key={i}
                                    className="relative rounded-xl border border-white/10 bg-white/4 backdrop-blur-sm px-5 py-4"
                                  >
                                    {/* Big quote mark */}
                                    <span
                                      className="absolute top-2 left-4 text-4xl leading-none text-white/10 select-none"
                                      style={{ fontFamily: 'Georgia, serif' }}
                                    >
                                      “
                                    </span>
                                    <p
                                      className="text-slate-300 text-sm leading-relaxed font-light pt-3"
                                      style={{ fontFamily: 'Inter, sans-serif' }}
                                    >
                                      {quote.text}
                                    </p>
                                    <div className="flex items-center gap-2 mt-3">
                                      <div className="w-1 h-6 rounded-full bg-blue-500/60" />
                                      <div>
                                        <p className="text-white text-xs font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{quote.name}</p>
                                        <p className="text-slate-500 text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{quote.role}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Stats */}
                            {activeMenu?.stats?.length > 0 && (
                              <div className="flex gap-10 mt-2">
                                {activeMenu.stats.map((stat) => (
                                  <div key={stat.value} className="flex flex-col gap-1">
                                    <span className="text-3xl xl:text-4xl font-bold text-white">
                                      {stat.value}
                                    </span>
                                    <span className="text-slate-500 text-sm leading-snug max-w-[110px] font-light">
                                      {stat.desc}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* CTA Button */}
                            <button
                              onClick={() => handleNav(activeMenu.cta.href)}
                              className="group mt-2 w-fit flex items-center gap-3 border border-white/20 text-white text-sm font-medium px-6 py-3 hover:bg-white/5 transition-all duration-300"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {activeMenu.cta.label}
                              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <CircularText
                      text="DEV*COMPANY*CREAVLABS*"
                      onHover="speedUp"
                      spinDuration={20}
                      className="custom-class"
                    />

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle Icon */}
          <button
            className={`lg:hidden text-black text-2xl p-1 relative z-50 ${!scrolled ? 'text-white' : 'text-black'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-bg border-l border-white/10 shadow-2xl flex flex-col pt-24 px-10 pb-10 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xl hover:bg-white/10 transition"
              >
                <HiX />
              </button>

              <div className="flex flex-col gap-7 font-light" style={{ fontFamily: "Space Grotesk, sans-serif" }}>

                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.href)}
                    className="text-left text-2xl text-slate-300 hover:text-white transition"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Contact Information */}
                <div className="flex flex-col gap-4 mt-4">
                  <a
                    href="mailto:hello@creavelabs.com"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all duration-300">
                      <HiMail className="text-lg" />
                    </div>
                    <span className="text-base font-light font-sans">hello@creavelabs.com</span>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                      <HiPhone className="text-lg" />
                    </div>
                    <span className="text-base font-light font-sans">+1 (234) 567-890</span>
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex flex-row items-center justify-start gap-4 mt-8">
                  {[
                    { Icon: FaFacebookF, href: "#" },
                    { Icon: FaInstagram, href: "#" },
                    { Icon: FaLinkedinIn, href: "#" },
                    { Icon: FaBehance, href: "#" }
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <item.Icon className="text-lg" />
                    </a>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
