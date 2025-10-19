import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type Props = {
  mode?: "inline" | "floating" | "half";
  title?: string;
  lines?: string[];
};

const LiaNotice = ({
  mode = "inline",
  title = "Söker LIA",
  lines = [
    "Period 1: 13 jan – 30 maj 2026",
    "Göteborg eller distans",
    "Fullstack JavaScript",
  ],
}: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, []);

  // ord-för-ord animation
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.28, delayChildren: 0.3 } },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 2.5, ease: "easeOut" } },
  };

  const card = (
    <motion.div
      initial={{ x: 12, opacity: 0, scale: 0.98 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 12, opacity: 0, scale: 0.98 }}
      transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full h-full overflow-visible"
      role="status"
      aria-live="polite"
    >
      <div className="p-8 flex h-full flex-col justify-center">
        <h3 className="text-2xl font-bold tracking-tight mb-3">{title}</h3>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-2 text-2xl sm:text-3xl font-semibold leading-snug"
        >
          {lines.map((line, i) => (
            <p key={i} className="flex flex-wrap gap-x-2">
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
  );

  // --- RENDER MODES ---
  if (mode === "inline") {
    // Renderas där du placerar komponenten (t.ex. i herons högerspalt)
    return <AnimatePresence>{show && card}</AnimatePresence>;
  }

  if (mode === "floating") {
    // Liten toast längst ner
    return (
      <AnimatePresence>
        {show && (
          <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2">
            {card}
          </div>
        )}
      </AnimatePresence>
    );
  }

  // mode === "half" → täck höger halva av skärmen
  return (
    <AnimatePresence>
      {show && (
        <div
          className="absolut inset-y-0 right-0 z-50 w-full sm:w-[85vw] lg:w-[50vw] pointer-events-none"
          aria-hidden={false}
        >
          <div className="h-full p-4 sm:p-6 lg:p-8 pointer-events-auto">
            {card}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LiaNotice;
