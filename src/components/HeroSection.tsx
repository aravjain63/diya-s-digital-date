import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToEvidence = () => {
    document.getElementById("evidence")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-6"
      >
        a website that probably didn't need to exist
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight max-w-2xl"
      >
        so… this might be <em className="text-primary">slightly</em> unnecessary
        <br />
        but hear me out
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-8 max-w-md text-muted-foreground font-body text-lg leading-relaxed"
      >
        when two people keep discovering they are basically the same person,
        eventually someone has to make a website about it.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={scrollToEvidence}
        className="mt-12 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-body font-medium text-base shadow-lg shadow-primary/20 transition-shadow hover:shadow-xl hover:shadow-primary/30"
      >
        continue investigation ↓
      </motion.button>
    </section>
  );
};

export default HeroSection;
