import { motion, useReducedMotion } from "framer-motion"
import type { PropsWithChildren } from "react"

type RevealProps = PropsWithChildren<{
    delay?: number;
    y?: number;
}>

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 16}) => {
    const reduce = useReducedMotion();
    const initial = reduce ? undefined : { y, opacity: 0 };
    const animate = reduce ? undefined : { y: 0, opacity: 1};

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            >
                {children}
            </motion.div>
    )
}

export default Reveal
