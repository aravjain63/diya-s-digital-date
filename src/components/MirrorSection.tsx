import { motion } from "framer-motion";

const stats = [
  { label: "Mirror Similarity Score", value: "94.3%" },
  { label: "Odds She Finishes My Sentences", value: "Honestly Too High" },
  { label: "Number of Times I Said 'wait, me too'", value: "Lost Count" },
  { label: "Conclusion, Per The Data", value: "Go On A Date Already", highlight: true },
];

const MirrorSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-body tracking-widest uppercase text-muted-foreground mb-8"
        >
          Sol 15 · Mission log
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl mb-6">
            I tried to science the shit out of this
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-md mx-auto leading-relaxed">
            Made a spreadsheet. Ran the numbers. Looked for the variable that
            explained everything.
            <br />
            Turns out the variable has a name.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/70 font-body italic">
            (Watney farmed potatoes with astronaut poop to stay alive.
            <br />I built a website. we're basically the same.)
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-muted-foreground font-body italic"
        >
          Jake Peralta has a word for this situation.
          <br />
          <span className="text-foreground font-medium not-italic">
            cool cool cool cool cool.
          </span>
          <br />
          <span className="text-sm not-italic">(no doubt no doubt no doubt.)</span>
        </motion.p>

        {/* Compatibility report */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden text-left"
        >
          <div className="px-6 py-4 border-b border-border/50">
            <p className="text-xs font-body tracking-widest uppercase text-primary font-medium">
              Findings Report · Sol 1
            </p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">
              Subject: Diya. Analyst: the guy who built this instead of just texting.
            </p>
          </div>
          <div className="divide-y divide-border/40">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="flex items-center justify-between px-6 py-3.5"
              >
                <span className="text-sm font-body text-muted-foreground">
                  {stat.label}
                </span>
                <span
                  className={`text-sm font-body font-semibold ${
                    stat.highlight ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="px-6 py-3 border-t border-border/50">
            <p className="text-xs text-muted-foreground font-body italic">
              * NASA peer-reviewed this report. they said "just go." · Sol 15, signing off.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MirrorSection;
