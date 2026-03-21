import { motion } from "framer-motion";

const elements = [
  // left side
  { char: "🌙", top: "5%",  left: "3%",   size: "text-2xl", delay: 0,   duration: 5   },
  { char: "♥",  top: "12%", left: "8%",   size: "text-lg",  delay: 0.7, duration: 6   },
  { char: "🌙", top: "22%", left: "5%",   size: "text-xl",  delay: 1.4, duration: 7   },
  { char: "♥",  top: "35%", left: "2%",   size: "text-2xl", delay: 0.3, duration: 5.5 },
  { char: "🌙", top: "48%", left: "7%",   size: "text-lg",  delay: 1.8, duration: 6.5 },
  { char: "♥",  top: "60%", left: "4%",   size: "text-xl",  delay: 0.5, duration: 5   },
  { char: "🌙", top: "72%", left: "6%",   size: "text-lg",  delay: 1.1, duration: 7   },
  { char: "♥",  top: "83%", left: "3%",   size: "text-2xl", delay: 0.2, duration: 6   },
  { char: "🌙", top: "92%", left: "8%",   size: "text-xl",  delay: 1.6, duration: 5.5 },

  // right side
  { char: "♥",  top: "8%",  right: "5%",  size: "text-xl",  delay: 0.9, duration: 6   },
  { char: "🌙", top: "18%", right: "3%",  size: "text-2xl", delay: 0.4, duration: 5   },
  { char: "♥",  top: "28%", right: "7%",  size: "text-lg",  delay: 1.5, duration: 7   },
  { char: "🌙", top: "40%", right: "4%",  size: "text-xl",  delay: 0.1, duration: 6.5 },
  { char: "♥",  top: "53%", right: "6%",  size: "text-2xl", delay: 1.2, duration: 5.5 },
  { char: "🌙", top: "65%", right: "2%",  size: "text-lg",  delay: 0.6, duration: 6   },
  { char: "♥",  top: "76%", right: "5%",  size: "text-xl",  delay: 1.9, duration: 5   },
  { char: "🌙", top: "87%", right: "8%",  size: "text-2xl", delay: 0.8, duration: 7   },
  { char: "♥",  top: "95%", right: "3%",  size: "text-lg",  delay: 1.3, duration: 6.5 },
];

const FloatingElements = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className={`absolute ${el.size} select-none`}
          style={{
            top: el.top,
            left: el.left,
            right: el.right,
            color: "hsl(var(--primary))",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.45, 0.25, 0.45, 0],
            y: [0, -14, 0, 14, 0],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.char}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingElements;
