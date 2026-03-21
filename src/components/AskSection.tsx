import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const evidence = [
  "I already know where I want to take you.",
  "I'll let you pick the playlist.",
  "I'm told I'm good company. sample size: debatable.",
  "I look forward to spending time with you and holding your hand.",
];

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
          <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-4">
            the part that actually matters
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-5">
            okay. here's why I really built this.
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-sm mx-auto">
            Diya, you have made me the happiest person.
            <br />
            <span className="text-base">
              Will you go on a date with me?
              <br />
              <span className="text-sm text-muted-foreground/60 italic">
                (you have to say yes.)
              </span>
            </span>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!answered && (
            <motion.div
              key="buttons"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setAnswered("yes")}
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-body font-medium text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
              >
                yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setAnswered("evidence")}
                className="px-8 py-3.5 bg-secondary text-secondary-foreground rounded-full font-body font-medium text-base shadow-sm hover:shadow-md transition-shadow"
              >
                make your case
              </motion.button>
            </motion.div>
          )}

          {answered === "yes" && (
            <motion.div
              key="yes"
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl overflow-hidden w-72 shadow-lg mb-4"
              >
                <iframe
                  src="https://tenor.com/embed/14374383"
                  width="100%"
                  height="195"
                  frameBorder="0"
                  allowFullScreen
                  title="Jake Peralta - she said yes"
                />
              </motion.div>

              <motion.img
                src="https://i.pinimg.com/1200x/13/18/49/131849f6f50c7cf9de8972786f118929.jpg"
                alt="she said yes"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl w-72 shadow-lg mb-4"
              />

              <motion.img
                src="https://media.giphy.com/media/wBsF6mUZa9Erj9lgAa/giphy.gif"
                alt="Jake Peralta - she said yes"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-2xl w-72 shadow-lg mb-6"
              />

              <p className="text-lg font-body text-foreground font-medium">
                she said yes. she said yes.
              </p>
              <p className="text-muted-foreground font-body mt-2 leading-relaxed">
                I'll text you.
                <br />
                <span className="text-sm">(yes, I have ideas in mind.)</span>
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
              className="mt-12 text-left max-w-sm mx-auto"
            >
              <p className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-4 text-center">
                further evidence, as requested
              </p>
              <div className="bg-card rounded-2xl border border-border/50 divide-y divide-border/40 overflow-hidden">
                {evidence.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-start gap-3 px-5 py-3.5"
                  >
                    <span className="text-primary mt-0.5 text-xs">→</span>
                    <span className="text-sm font-body text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-5 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setAnswered("yes")}
                  className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm shadow-md shadow-primary/20"
                >
                  okay, yes
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-xs text-muted-foreground/50 font-body"
        >
          built with too many tabs open and exactly the right amount of nerve
        </motion.p>
      </div>
    </section>
  );
};

export default AskSection;
