import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AskSection = () => {
  const [answered, setAnswered] = useState<"yes" | "evidence" | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 bg-card/60">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            the part that actually matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-6">
            so here's the actual reason this website exists.
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-md mx-auto">
            Diya, I was wondering if you'd like to go on a proper date with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setAnswered("yes")}
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-body font-medium text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
          >
            yes obviously
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setAnswered("evidence")}
            className="px-8 py-3.5 bg-secondary text-secondary-foreground rounded-full font-body font-medium text-base shadow-sm hover:shadow-md transition-shadow"
          >
            I need more evidence
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          {answered === "yes" && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10"
            >
              <p className="text-2xl font-display">🎉</p>
              <p className="mt-2 text-lg font-body text-foreground font-medium">
                I knew it.
              </p>
              <p className="text-muted-foreground font-body mt-1">
                I'll text you the details. This is going to be great.
              </p>
            </motion.div>
          )}

          {answered === "evidence" && (
            <motion.div
              key="evidence"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 bg-card rounded-2xl p-6 border border-border/50 shadow-sm inline-block"
            >
              <p className="font-body text-foreground">
                fair. we can get coffee and discuss the findings. ☕
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-xs text-muted-foreground/60 font-body"
        >
          made with questionable amounts of effort and an unreasonable number of tabs open
        </motion.p>
      </div>
    </section>
  );
};

export default AskSection;
