// src/components/ui/logo-cloud-3.jsx

import { InfiniteSlider } from "./infinite-slider"; // Named import
import { cn } from "@/lib/utils";

export function LogoCloud({ logos, reverse, duration = 25, className, ...props }) {
    return (
        <div className={cn("overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]", className)}>
            <InfiniteSlider
                gap={42}
                reverse={reverse}
                duration={duration}
                durationOnHover={duration * 2} // Optional: slow down on hover
            >
                {logos.map((logo, i) => (
                    <img
                        key={i}
                        alt={logo.alt}
                        src={logo.src}
                        className="h-6 md:h-8 w-auto px-8 brightness-0  opacity-50 hover:opacity-100 transition-all"
                    />
                ))}
            </InfiniteSlider>
        </div>
    );
}