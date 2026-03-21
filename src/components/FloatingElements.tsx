import { motion } from "framer-motion";

const elements = [
  { char: "🌙", top: "8%",  left: "6%",   size: "text-lg",   delay: 0,   duration: 6   },
  { char: "♥",  top: "14%", right: "8%",  size: "text-sm",   delay: 1.2, duration: 7   },
  { char: "🌙", top: "32%", right: "5%",  size: "text-base", delay: 0.5, duration: 5.5 },
  { char: "♥",  top: "45%", left: "4%",   size: "text-xs",   delay: 2,   duration: 6.5 },
  { char: "🌙", top: "58%", left: "7%",   size: "text-sm",   delay: 1,   duration: 7   },
  { char: "♥",  top: "68%", right: "6%",  size: "text-base", delay: 0.8, duration: 6   },
  { char: "🌙", top: "82%", right: "4%",  size: "text-xs",   delay: 1.5, duration: 5   },
  { char: "♥",  top: "90%", left: "5%",   size: "text-sm",   delay: 0.3, duration: 6.5 },
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
            opacity: [0, 0.35, 0.2, 0.35, 0],
            y: [0, -10, 0, 10, 0],
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
