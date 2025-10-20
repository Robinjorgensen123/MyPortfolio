import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type Props = {
  title?: string;
  lines?: string[];
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  styleVariant?: "marquee" | "glass" | "none";
  delayMs?: number;
  animateWords?: boolean;
  replayable?: boolean;
  replayLabel?: string;
};

const sizeToClasses = (size: Props["size"]) => {
  switch (size) {
    case "lg":
      return "text-2xl sm:text-3xl font-bold";
    case "sm":
      return "text-lg sm:text-xl font-semibold";
    default:
      return "text-2xl sm:text-3xl font-semibold"; // md
  }
};

  const wrapStart = (variant: Props["styleVariant"]) => {
    if (variant === "marquee") return "marquee p-5";
    if (variant === "glass")
      return "rounded-2xl border border-gold/70 bg-black/30 backdrop-blur p-5";
    return "";
  }

  const CinemaContent: React.FC<Props> = ({
    title = "Söker Lia",
    lines = [
      "Göteborg eller på distans",
      "Lia Period 1: Vecka 2 till 11, 2026",
      "Period 2: Vecka 14-23, 2026",
    ],
    align = "center",
    size = "md",
    styleVariant = "marquee",
    delayMs = 600,
    animateWords = true,
    replayable = true,
    replayLabel = "Replay Movie",
  }) => {
    const [mounted, setMounted] = useState(false);
    const [seed, setSeed] = useState(0) // remount animation
    const btnRef = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
      const t = setTimeout(() => setMounted(true), delayMs);
      return () => clearTimeout(t);
    }, [delayMs, seed])

    const handleReplay = () => {
      setMounted(false);

      setTimeout(() => {
        setSeed((s) => s + 1);
        setMounted(true)
        requestAnimationFrame(() => btnRef.current?.focus());
      }, 30)
    }

    const container: Variants = animateWords
    ? { hidden: {}, show: { transition: { staggerChildren: 0.22, delayChildren: 0.25 } } }
    : { hidden: {}, show: {} };

    const word: Variants = animateWords
    ? {
      hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
      show: {
        opacity: 1,
        y: 0, 
        filter: "blur(0px)" ,
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  }
  : { hidden: {}, show: {} };

  return (
    <div className="w-full h-full overflow-visible">
      <div className={`${wrapStart(styleVariant)} relative`}>
        {replayable && (
          <div className="absolute right-3 top-3 z-10">
            <button
            ref={btnRef}
            onClick={handleReplay}
            className="inline-flex items-center gap-2 rounded-full border border-gold bg-black/30 backdrop-blur px-3 py-1.5 text-sm hover:text-gold focus:outline-none focus:ring-2 focus:ring-[rgba(212,175,55,.35)]"
            aria-label="Replay animation"
            title="Replay"
            >{replayLabel}%%%%
            </button>
          </div>
        )}

        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
            key={seed}
            initial={{ x:12, opacity: 0, scale: 0.98 }}
            animate={{ x:0, opacity: 1, scale: 1 }}
            exit={{ x:12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            role="status"
            aria-live="polite"
            >
              <div className={`p-4 ${align === "center" ? "text-center" : "text-left" }`}>
                {!!title && (
                  <h3
                  className={`${sizeToClasses(size)} tracking-tight mb-3`}
                  style={{ color: "var(--cinema-ivory)" }}
                  >
                    {title}
                  </h3>
                )}
                <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className={`space-y-2 ${
                  size === "lg"
                  ? "text-2xl sm:text-3xl"
                  : size === "sm"
                  ? "text-lg sm:text-xl"
                  : "text-2xl sm:text-3xl"
                } font-semibold leading-snug`}
                style={{ color: "var(--cinema-ivory)" }}
                >
                  {lines.map((line, i) => (
                    <p key={i} className={`flex flex-wrap gap-x-2 ${align === "center" ? "justify-center" : ""}`}>
                      {line.split(" ").map((w, j) => (
                        <motion.span key={j} variants={word} className="whitespace-pre">
                          {w}
                        </motion.span>
                      ))}
                    </p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
  }
  export default CinemaContent