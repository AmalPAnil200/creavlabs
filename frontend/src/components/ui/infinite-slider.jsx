// src/components/ui/infinite-slider.jsx
'use client';

import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

/**
 * InfiniteSlider Component
 * A high-performance marquee slider using Framer Motion.
 */
export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;

        // Safety check: Don't animate until we have a measured size
        if (size <= 0) return;

        const contentSize = size / 2;

        const from = reverse ? -contentSize : 0;
        const to = reverse ? 0 : -contentSize;

        if (isTransitioning) {
            // Smoothly transition speed when hovering/unhovering
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            // Standard infinite loop
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: currentDuration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
    ]);

    // Setup hover events if durationOnHover is provided
    const hoverProps = durationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(durationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(duration);
            },
        }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex flex-nowrap w-max"
                style={{
                    ...(direction === 'horizontal'
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}
            >
                {/* We render children twice to create the seamless loop effect */}
                {children}
                {children}
            </motion.div>
        </div>
    );
}