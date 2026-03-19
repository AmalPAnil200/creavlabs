import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlay } from "react-icons/hi";

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
            accent: "text-blue-400"
        },
        {
            id: "vid-02",
            title: "Scaling Node.js to 10 Million Users",
            category: "Technical",
            thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
            youtubeId: "dQw4w9WgXcQ",
            duration: "18:20",
            accent: "text-violet-400"
        },
        {
            id: "vid-03",
            title: "CreaveLabs: The Art of Listening",
            category: "Philosophy",
            thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
            youtubeId: "dQw4w9WgXcQ",
            duration: "05:10",
            accent: "text-emerald-400"
        },
        // Add more as needed...
    ];

    return (
        <div className="min-h-screen bg-zinc-950 pt-32 pb-24 px-6 relative">
            {/* Background Grid Lines */}
            <div className="grid-lines fixed inset-0 pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ── HEADER ── */}
                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.25em] px-3 py-1.5 border border-emerald-400/30 text-emerald-400 bg-emerald-400/[0.06]">
                            Public Release
                        </span>
                        <span className="font-mono text-xs text-white/20">— Media & Insights</span>
                    </motion.div>

                    <h1 className="font-serif font-normal text-white leading-none tracking-tight text-[clamp(40px,6vw,80px)]">
                        Visualizing <span className="italic text-white/30">Innovation.</span>
                    </h1>
                </header>

                {/* ── VIDEO GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoGallery.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo(video)}
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden border border-white/10 bg-zinc-900 mb-6">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 opacity-50 group-hover:opacity-100"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
                                        <HiPlay className="text-white group-hover:text-zinc-950 text-2xl ml-1" />
                                    </div>
                                </div>

                                {/* Duration Tag */}
                                <div className="absolute bottom-4 right-4 font-mono text-[9px] text-white/60 bg-black/60 px-2 py-1 backdrop-blur-md">
                                    {video.duration}
                                </div>
                            </div>

                            {/* Info */}
                            <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${video.accent}`}>
                                {video.category}
                            </p>
                            <h3 className="font-serif text-xl text-white group-hover:text-emerald-400 transition-colors leading-snug">
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
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 backdrop-blur-2xl bg-zinc-950/90"
                        onClick={() => setActiveVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute -top-12 right-0 font-mono text-[10px] text-white/40 hover:text-white uppercase tracking-[0.2em]"
                            >
                                [ Close Player ]
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}