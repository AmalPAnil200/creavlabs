import { LogoCloud } from "@/components/ui/logo-cloud-3";

const regions = [
    {
        name: "STATE GOVERNMENT",
        speed: 60,
        reverse: false,
        logos: [
            { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Gov 1" },
            { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Gov 2" },
            { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "Gov 3" },
            { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Gov 4" },
        ],
    },
    {
        name: "MIDDLE EAST",
        speed: 80,
        reverse: true, // Moves in opposite direction
        logos: [
            { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "ME 1" },
            { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "ME 2" },
            { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "ME 3" },
            { src: "https://svgl.app/library/claude-ai-wordmark-icon_light.svg", alt: "ME 4" },
        ],
    },
    {
        name: "INDIA",
        speed: 70,
        reverse: false,
        logos: [
            { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "IN 1" },
            { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "IN 2" },
            { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "IN 3" },
            { src: "https://svgl.app/library/clerk-wordmark-light.svg", alt: "IN 4" },
        ],
    },
];

export default function ClientSection() {
    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-light text-bg tracking-tight mb-4">
                        Our Global <span className="text-blue-500 font-bold">Footprint</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Trusted by government bodies and private enterprises across the globe.
                    </p>
                </div>

                <div className="space-y-12">
                    {regions.map((region) => (
                        <div key={region.name} className="space-y-4">
                            {/* Region Label */}
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-bold tracking-[0.2em] text-blue-500/80 uppercase">
                                    {region.name}
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                            </div>

                            {/* Individual Slider for this region */}
                            <LogoCloud
                                logos={region.logos}
                                reverse={region.reverse}
                                duration={region.speed} // Pass the unique speed here
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-16">
                    <button className="px-8 py-3 border-2 border-blue-500  text-blue-500 rounded-full hover:border-black hover:text-black transition-colors">
                        View All Clients
                    </button>
                </div>
            </div>
        </section>
    );
}