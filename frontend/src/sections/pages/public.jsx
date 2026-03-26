import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlay, HiOutlineX, HiVideoCamera, HiMicrophone, HiMusicNote } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

export default function MediaPage() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videoGallery = [
        {
            id: "vid-01",
            title: "The Future of AI in SaaS Development",
            category: "Insights",
            thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000",
            youtubeId: "dQw4w9WgXcQ", // Replace with real IDs
            duration: "12:45",
            accent: "text-blue-500",
            bgAccent: "bg-blue-50"
        },
        {
            id: "vid-02",
            title: "Scaling Node.js to 10 Million Users",
            category: "Technical",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
            youtubeId: "dQw4w9WgXcQ",
            duration: "18:20",
            accent: "text-violet-500",
            bgAccent: "bg-violet-50"
        },
        {
            id: "vid-03",
            title: "CreaveLabs: The Art of Listening",
            category: "Philosophy",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
            youtubeId: "dQw4w9WgXcQ",
            duration: "05:10",
            accent: "text-emerald-500",
            bgAccent: "bg-emerald-50"
        },
    ];

    return (
        <div className="min-h-screen bg-[#fafaf8] selection:bg-emerald-500/30 font-[Poppins,sans-serif] overflow-hidden relative">
            
            {/* ── HERO ── */}
            <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-32">
                {/* Soft Background Accents */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

                <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full mb-16">
                    {/* Left Text Content */}
                    <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 mb-6"
                        >
                            <span className="inline-block px-5 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] shadow-sm">
                                Public Release
                            </span>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 hidden sm:inline-block">— Insights & Media</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-[#0f0f0f] mb-8"
                        >
                            Visualizing <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600 font-light">
                                Innovation.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl leading-relaxed text-[#666] max-w-xl mx-auto lg:mx-0 font-light mb-10"
                        >
                            Dive into our exclusive media, behind-the-scenes content, and technical insights driving the next generation of software.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
                        >
                            <button
                                onClick={() => document.querySelector("#media-grid")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center gap-2 font-semibold text-[13px] uppercase tracking-wider px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 w-full sm:w-auto"
                            >
                                Browse Content
                                <FaArrowRight className="text-xs" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Visual Content */}
                    <div className="flex-1 w-full max-w-[600px] relative mt-16 lg:mt-0 hidden md:flex">
                        <motion.div 
                            initial={{ opacity: 0, x: 50, rotate: -2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="relative z-10 w-full aspect-[4/3] bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-4 sm:p-6 overflow-hidden flex flex-col"
                        >
                            {/* Mockup Header */}
                            <div className="flex items-center justify-between border-b border-black/5 pb-4 mb-4 shrink-0">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-4 w-12 bg-black/5 rounded-full"></div>
                                </div>
                            </div>

                            {/* Media Dashboard */}
                            <div className="flex-1 flex flex-col gap-4 h-[calc(100%-2rem)] pb-4">
                                {/* Top Video Player Card */}
                                <div className="flex-1 bg-gradient-to-br from-[#0f0f0f] to-zinc-800 rounded-2xl border border-black/20 p-4 flex flex-col justify-end shadow-xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform shadow-lg">
                                            <HiPlay className="text-3xl ml-1" />
                                        </div>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs"><HiVideoCamera /></div>
                                            <div>
                                                <div className="text-xs font-bold text-white">Live Keynote</div>
                                                <div className="text-[9px] text-gray-400 uppercase tracking-widest">Currently Streaming</div>
                                            </div>
                                        </div>
                                        {/* Progress bar */}
                                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden flex items-center">
                                            <div className="h-full w-2/3 bg-emerald-500 rounded-full relative">
                                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow blur-[1px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Cards */}
                                <div className="grid grid-cols-2 gap-4 h-28">
                                    <div className="bg-emerald-500/10 rounded-2xl border border-emerald-500/20 p-4 flex items-center gap-4 shadow-inner">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-xl shrink-0">
                                            <HiMicrophone />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">Podcast</div>
                                            <div className="text-[10px] text-gray-500 mt-0.5">Episode 42</div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-blue-500/10 rounded-2xl border border-blue-500/20 p-4 flex items-center gap-4 shadow-inner">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                            <HiMusicNote />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-800">Audiobook</div>
                                            <div className="text-[10px] text-gray-500 mt-0.5">Chapter 1</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }} 
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 z-20 bg-white/90 border border-black/5 rounded-2xl p-4 shadow-xl flex items-center gap-4 backdrop-blur-md"
                        >
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500">
                                <HiPlay size={24} />
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">New Video</div>
                                <div className="text-sm font-bold text-gray-900">Published</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 10, 0] }} 
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-4 top-8 lg:-left-8 lg:top-12 z-20 bg-white/90 border border-black/5 rounded-2xl p-3 shadow-xl flex items-center gap-3 backdrop-blur-md"
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white">
                                <HiVideoCamera size={18} />
                            </div>
                            <div className="pr-2">
                                <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Streaming</div>
                                <div className="text-sm font-bold text-gray-900">1080p HD</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div id="media-grid" className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 pb-24 pt-8 top-0">
                {/* ── VIDEO GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoGallery.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group cursor-pointer flex flex-col"
                            onClick={() => setActiveVideo(video)}
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden border border-black/10 bg-gray-100 mb-6 ">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                                    <div className="w-14 h-14 rounded-full bg-white/50 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                                        <HiPlay className="text-zinc-800 group-hover:text-emerald-500 text-2xl ml-1" />
                                    </div>
                                </div>

                                {/* Duration Tag */}
                                <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/90 bg-black/60 px-2 py-1 backdrop-blur-md">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Info */}
                            <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${video.accent}`}>
                                {video.category}
                            </p>
                            <h3 className="font-[DM_Serif_Display,Georgia,serif] text-xl text-[#0f0f0f] group-hover:text-emerald-500 transition-colors leading-snug">
                                {video.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── VIDEO MODAL ── */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 backdrop-blur-xl bg-white/80"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-full max-w-5xl aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/\${activeVideo.youtubeId}?autoplay=1`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 w-12 h-12 bg-black/50 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-lg"
                            >
                                <HiOutlineX className="text-2xl" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}