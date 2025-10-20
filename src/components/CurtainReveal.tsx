import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion"

type Props = {
    delay?: number;
    durationSec?: number;
    oncePerSession?: boolean;
    overlayOpacity?: number;
    imageUrl?: string
}

const CurtainReveal: React.FC<Props> = ({
    delay = 150,
    durationSec = 2.5,
    oncePerSession = true,
    overlayOpacity = 30,
    imageUrl = "/curtain.jpg",
}) => {
    const reduce = useReducedMotion()
    const [show, setShow] = useState<boolean>(() => {
        if(!oncePerSession) return true
        try { return sessionStorage.getItem("curtain:played") !== "1"}
        catch { return true }
    })

    useEffect(() => {
        if(!show) return
        if(reduce) {
            setShow(false)
            try { sessionStorage.setItem("curtain:played", "1" )} catch {}
        }
    }, [show, reduce])

    if(!show) return null

    const easing = [0.16, 1, 0.3, 1] as const;
    const onComplete = () => {
        setShow(false)
        try { sessionStorage.setItem("curtain:played", "1" )} catch {}
    }

    const baseStyle: React.CSSProperties = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200% 100%",
        boxShadow: "inset 0 0 120px rgba(0,0,0,.45)",
    }

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity / 100})` }}
        />
      )}

     
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ delay: delay / 1000, duration: durationSec, ease: easing }}
        onAnimationComplete={onComplete}
        className="absolute inset-y-0 left-0 w-1/2"
        style={{ ...baseStyle, backgroundPosition: "left center" }}
      />

      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ delay: delay / 1000, duration: durationSec, ease: easing }}
        className="absolute inset-y-0 right-0 w-1/2"
        style={{ ...baseStyle, backgroundPosition: "right center" }}
      />

     
      <div
        className="absolute left-0 right-0 top-0 h-16"
        style={{
          background: `url(${imageUrl}) center/cover no-repeat`,
          boxShadow: "0 12px 24px rgba(0,0,0,.35)",
          opacity: 0.9,
        }}
      />
    </div>
  );
};

export default CurtainReveal