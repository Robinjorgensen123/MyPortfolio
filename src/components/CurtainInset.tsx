import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

type Props = {
    imageUrl?: string;
    durationSec?: number;
    delayMs?: number,
    keepFrame?: boolean,
    framePx?: number,
}

const CurtainInset: React.FC<Props> =({
    imageUrl = "/curtain.jpg",
    durationSec = 1.4,
    delayMs = 150,
    keepFrame = true,
    framePx = 48,
}) => {
    const reduce = useReducedMotion();
    const [play, setPlay] = useState(!reduce);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if(reduce) { setPlay(false); setOpened(true) }
    }, [reduce]);

    const base: React.CSSProperties = {
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "200% 100%",
        backgroundPosition: "left center",
        boxShadow: "inset 0 0 80px rgba(0,0,0,.45)",
    }
   return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ borderRadius: "inherit" }}
      aria-hidden
    >
      <div className="absolute inset-0" style={{ background: opened ? "rgba(0,0,0,.08)" : "rgba(0,0,0,.25)" }} />

      {!opened && (
        <div
          className="absolute left-0 right-0 top-0 h-16"
          style={{ background: `url(${imageUrl}) center/cover no-repeat`, boxShadow: "0 12px 24px rgba(0,0,0,.35)", opacity: .85 }}
        />
      )}

      {play && !opened && (
        <>
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2"
            style={base}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: durationSec, delay: delayMs/1000, ease: [0.16,1,0.3,1] }}
            onAnimationComplete={() => setOpened(true)}
          />
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2"
            style={{ ...base, backgroundPosition: "right center" }}
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: durationSec, delay: delayMs/1000, ease: [0.16,1,0.3,1] }}
          />
        </>
      )}

      {opened && keepFrame && (
        <>
          <div className="absolute inset-y-0 left-0"  style={{ ...base, width: framePx }} />
          <div className="absolute inset-y-0 right-0" style={{ ...base, width: framePx, backgroundPosition: "right center" }} />
          <div className="absolute left-0 right-0 top-0 h-16" style={{ background: `url(${imageUrl}) center/cover no-repeat`, boxShadow: "0 10px 20px rgba(0,0,0,.25)", opacity: .7 }} />
          <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 120px rgba(0,0,0,.45)" }} />
        </>
      )}
    </div>
  );
};

export default CurtainInset;