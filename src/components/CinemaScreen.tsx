// src/components/CinemaScreen.tsx
import { motion, type Variants } from "framer-motion";

type Props = {
  lines: string[];
  widthClass?: string;   // t.ex. "w-full lg:w-[44rem]"
  heightClass?: string;  // t.ex. "h-[30rem]" (≈ 21:9 känsla)
  align?: "left" | "center";
  delay?: number;        // sekunder före intro börjar
};

const CinemaScreen: React.FC<Props> = ({
  lines,
  widthClass = "w-full",
  heightClass = "h-[30rem]",
  align = "center",
  delay = 0.25,
}) => {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.22, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const word: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const letter: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.015 },
    }),
  };

  return (
    <div
      className={[
        "relative rounded-[20px] overflow-hidden",
        "shadow-[inset_0_0_120px_rgba(0,0,0,0.55),0_20px_60px_rgba(0,0,0,0.45)]",
        widthClass, heightClass, "p-5",
      ].join(" ")}
      style={{
        background: `
          radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,.10), rgba(0,0,0,0) 45%),
          radial-gradient(120% 120% at 50% 100%, rgba(255,255,255,.06), rgba(0,0,0,0) 50%),
          linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.55))
        `,
      }}
    >
      {/* inre svag ram/glow */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_80px_rgba(0,0,0,0.55)]" />

      {/* scanlines/korn */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px)",
        }}
        animate={{ y: ["0%", "-10%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* spotlight-svep */}
      <motion.div
        aria-hidden
        className="absolute -inset-x-[40%] -inset-y-[20%] blur-[8px] pointer-events-none"
        style={{
          background:
            "radial-gradient(40% 20% at 50% 0%, rgba(255,255,255,.25), rgba(255,255,255,0) 70%)",
        }}
        initial={{ opacity: 0, rotate: -8, y: -80 }}
        animate={{ opacity: [0, 1, 0], rotate: 8, y: 40 }}
        transition={{ duration: 2.4, ease: "easeInOut" }}
      />

      {/* text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={[
          "relative z-10 h-full flex",
          align === "center"
            ? "items-center justify-center"
            : "items-start justify-start",
        ].join(" ")}
      >
        <div
          className={[
            align === "center" ? "text-center" : "text-left",
            "leading-tight",
          ].join(" ")}
        >
          {lines.map((ln, li) => (
            <motion.p
              key={li}
              variants={line}
              className="mb-2 text-[clamp(1rem,2.8vw,2rem)] font-semibold"
              style={{ color: "var(--cinema-ivory, #f5e9d7)" }}
            >
              <motion.span variants={word} className="inline-block">
                {ln.split(" ").map((w, wi) => (
                  <span key={wi} className="inline-block mr-2">
                    {w.split("").map((ch, ci) => (
                      <motion.span
                        key={ci}
                        custom={ci}
                        variants={letter}
                        className="inline-block"
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.span>
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CinemaScreen;
