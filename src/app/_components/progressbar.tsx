"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function ProgressBar() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="left-0 h-1 bg-transparent overflow-hidden">
            <motion.div 
                onAnimationStart={() => console.log("start")}
                onAnimationComplete={() => console.log("complete")}
                className="h-full
                bg-[hsl(280,100%,70%)]
                transform origin-[0%]"
                style={{ scaleX: scrollYProgress }} />
        </div>
    )
}
