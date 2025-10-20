import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion"


const curtainStyle: React.CSSProperties = {
    backgroundImage:`
        radial-gradient(ellipse at CgEnter, rgba(0,0,0,0.25) 0%, rgba(0,0,0,.08) 40%, rgba(0,0,0,0) 70%),
        repeating-linear-gradient(
        90deg,
        #9b1c1c 0px, #b91c1c 10px, #9b1c1c 20px, #7f1d1d 30px
        )
        `,
        backgroundBlendMode: "multiply, normal",
        backgroundColor: "#b91c1c",
        boxShadow: "inset 0 0 120px rgba(0,0,0,.45)"
}

type Props = {
    delay?: number;
    oncePerSession?: boolean;
}

const CurtainReveal: React.FC<Props> = ({ delay = 150, oncePerSession = true }) => {
    const reduce = useReducedMotion();
    const [show, setShow] = useState<boolean>(() => {
        if(!oncePerSession) return true;
        try {
            return sessionStorage.getItem("curtain:played") !== "1";
        } catch {
            return true;
        }
    })

    useEffect(() => {
        if(!show) return;
        if(reduce) {
            setShow(false);
            try{ sessionStorage.setItem("curtain:played", "1") } catch {} 
        }
    },[show, reduce])

    if(!show) return null

    const duration = 3.0;
    const easing = [0.22, 1, 0.36, 1] as const

    const onComplete = () => {
        setShow(false);
        try { sessionStorage.setItem("curtain:played", "1")} catch {}
    }

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
            <div className="absolute inset-0 bg-black/30"/>
            <motion.div
                initial={{ x:0 }}
                animate={{ x: "-100%" }}
                transition={{ delay: delay / 1000, duration, ease: easing }}
                onAnimationComplete={onComplete}
                className="absolute inset-y-0 left-0 w-1/2"
                style={curtainStyle}
            />
            <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ delay: delay / 1000, duration, ease: easing }}
            className="absolute inset-y-0 right-0 w-1/2"
            style={curtainStyle}
            />
            <div className="absolute left-0 right-0 top-0 h-16"
            style={{
                ...curtainStyle,
                boxShadow: "0 12px 24px rgba(0,0,0,.35)",
            }}
            />
            </div>
    )
} 

export default CurtainReveal