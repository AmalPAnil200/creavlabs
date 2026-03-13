import { useState, useEffect, useRef } from 'react';

const MouseParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let mouse = { x: -100, y: -100 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const particles = [];
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        // Cyan color spectrum
        this.color = `hsla(${180 + Math.random() * 60}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mouse.x > 0 && mouse.y > 0 && Math.random() > 0.4) {
        particles.push(new Particle(mouse.x, mouse.y));
        particles.push(new Particle(mouse.x + Math.random() * 10 - 5, mouse.y + Math.random() * 10 - 5));
      }
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiMail, HiPhone } from 'react-icons/hi';
import { RiSparklingFill } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaBehance, FaDribbble, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', action: 'menu' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Public Reactions', href: '#public-reactions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setDesktopMenuOpen(false);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (desktopMenuOpen || mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [desktopMenuOpen, mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${scrolled ? ' bg-white shadow-lg shadow-black/20' : ''
          }`}
      >
        <div className="container-custom relative flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-2 group cursor-pointer z-50">
            <span
              className="flex items-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}
            >
              <img src={logo} alt="Logo" className="w-30 h-30 object-contain" />
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => {
                    if (link.action === "menu") {
                      setDesktopMenuOpen(!desktopMenuOpen);
                    } else {
                      handleNav(link.href);
                    }
                  }}
                  className={`relative text-lg font-light transition-colors duration-200
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-white
        after:transition-all after:duration-300 hover:after:w-full ${scrolled ? 'text-black' : 'text-white'}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Menu Icon */}
          <div className="hidden lg:block relative z-50">
            <button
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
              className={`relative w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300
  bg-white/5 hover:bg-white/10 border 
  ${scrolled ? "text-black border-black/60" : "text-white border-white/10"}`}
              aria-label="Toggle menu"
            >
              <div className="relative w-4 h-3 flex flex-col justify-between">

                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300
      ${desktopMenuOpen ? "translate-y-[5px] rotate-45" : ""}
      ${scrolled ? "bg-black" : "bg-white"}`}
                />

                <span
                  className={`block h-[2px] w-full rounded-full transition-all duration-300
      ${desktopMenuOpen ? "-translate-y-[5px] -rotate-45" : ""}
      ${scrolled ? "bg-black" : "bg-white"}`}
                />

              </div>
            </button>


            {/* Desktop Full-Screen Menu Overlay */}
            <AnimatePresence>
              {desktopMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 top-0 w-full h-screen bg-black/100 backdrop-blur-2xl z-40 overflow-y-auto overflow-x-hidden"
                >
                  <MouseParticles />
                  {/* Background Accents for the Menu */}
                  <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
                  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

                  {/* Close Button Inside Menu */}
                  <button
                    onClick={() => setDesktopMenuOpen(false)}
                    className="fixed top-8 right-8 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl hover:bg-white/10 transition-colors duration-300 z-50 cursor-pointer"
                    aria-label="Close menu"
                  >
                    <HiX />
                  </button>

                  <div className="container-custom relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-24 md:py-32">
                    <div className="w-full max-w-5xl">

                      {/* Grid Layout: 2 or 3 columns, max 4 links per column */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24 w-full">

                        {/* Column 1: Services */}
                        <div className="flex flex-col gap-6">
                          <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Core Services</h3>
                          {[
                            { label: 'Web Development', href: '#services' },
                            { label: 'Mobile Apps', href: '#services' },
                            { label: 'UI/UX Design', href: '#services' },
                            { label: 'Custom Software', href: '#services' }
                          ].map((link, i) => (
                            <motion.button
                              key={link.label}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4, delay: i * 0.05 + 0.1 }}
                              onClick={() => handleNav(link.href)}
                              className="group w-fit text-left text-3xl md:text-4xl font-bold text-slate-300 hover:text-white transition-colors duration-300"
                              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                            >
                              {link.label}
                            </motion.button>
                          ))}
                        </div>

                        {/* Column 2: Company */}
                        <div className="flex flex-col gap-6">
                          <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Company</h3>
                          {[
                            { label: 'Our Story', href: '#why-us' },
                            { label: 'Process', href: '#process' },
                            { label: 'Careers', href: '#contact' },
                            { label: 'Contact Us', href: '#contact' }
                          ].map((link, i) => (
                            <motion.button
                              key={link.label}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4, delay: i * 0.05 + 0.2 }}
                              onClick={() => handleNav(link.href)}
                              className="group w-fit text-left text-3xl md:text-4xl font-bold text-slate-300 hover:text-white transition-colors duration-300"
                              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                            >
                              {link.label}
                            </motion.button>
                          ))}
                        </div>

                        {/* Column 3: Work & Socials */}
                        <div className="flex flex-col gap-6">
                          <h3 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Showcase</h3>
                          {[
                            { label: 'Portfolio', href: '#portfolio' },
                            { label: 'Case Studies', href: '#portfolio' },
                            { label: 'Dribbble', href: '#' },
                            { label: 'Twitter / X', href: '#' }
                          ].map((link, i) => (
                            <motion.button
                              key={link.label}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.4, delay: i * 0.05 + 0.3 }}
                              onClick={() => handleNav(link.href)}
                              className="group w-fit text-left text-3xl md:text-4xl font-bold text-slate-300 hover:text-white transition-colors duration-300"
                              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
                            >
                              {link.label}
                            </motion.button>
                          ))}
                        </div>

                      </div>

                    </div>
                  </div>

                  {/* Social Media & Bottom Strip inside overlay */}
                  {/* Social Media & Bottom Strip inside overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 w-full flex flex-col items-center gap-8 pb-8"
                  >
                    {/* The Container needs to have high z-index and pointer-events */}
                    <div className="flex flex-row items-center justify-center gap-6 relative z-50">
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
                          /* KEY CHANGES:
                             1. mix-blend-difference: Handles the automatic color inversion.
                             2. bg-white: The "base" color that will be inverted.
                             3. text-white: The icon itself must be white to be inverted.
                          */
                          className="w-12 h-12 rounded-full border border-current flex items-center justify-center transition-all duration-300 transform hover:scale-110 mix-blend-difference bg-white text-white"
                        >
                          <item.Icon className="text-xl" />
                        </a>
                      ))}
                    </div>

                    <p className="text-sm font-medium px-4 text-center mix-blend-difference text-white opacity-80">
                      © {new Date().getFullYear()} CreaveLabs Agency. All rights reserved.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Toggle Icon */}
          <button
            className="lg:hidden text-white text-2xl p-1 relative z-50"
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

                <button onClick={() => handleNav("#about")} className="text-left text-2xl text-slate-300 hover:text-white transition">
                  About
                </button>

                {/* Services */}
                <div className="flex flex-col gap-3">

                  <div
                    className="flex items-center justify-between text-2xl text-slate-300 hover:text-white cursor-pointer transition"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    <span>Services</span>
                    <span className={`transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </div>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-3 pl-6 border-l border-blue-500/30 overflow-hidden"
                      >
                        <button onClick={() => handleNav("#services")} className="text-lg text-slate-400 hover:text-blue-400">
                          Web Development
                        </button>
                        <button onClick={() => handleNav("#services")} className="text-lg text-slate-400 hover:text-blue-400">
                          Mobile Apps
                        </button>
                        <button onClick={() => handleNav("#services")} className="text-lg text-slate-400 hover:text-blue-400">
                          UI/UX Design
                        </button>
                        <button onClick={() => handleNav("#services")} className="text-lg text-slate-400 hover:text-blue-400">
                          Custom Software
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => handleNav("#solutions")} className="text-left text-2xl text-slate-300 hover:text-white">
                  Solutions
                </button>

                <button onClick={() => handleNav("#showcase")} className="text-left text-2xl text-slate-300 hover:text-white">
                  Showcase
                </button>

                <button onClick={() => handleNav("#public-reactions")} className="text-left text-2xl text-slate-300 hover:text-white">
                  Public Reactions
                </button>

                <button onClick={() => handleNav("#contact")} className="text-left text-2xl text-slate-300 hover:text-white">
                  Contact
                </button>

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

                {/* Common Rounded 4 Buttons Section */}
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
