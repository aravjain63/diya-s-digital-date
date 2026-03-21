import { motion } from "framer-motion";

const exhibits = [
  {
    label: "Exhibit A",
    title: "SHOWSSS",
    description: "It's mildly suspicious that I started Gilmore Girls right before meeting you.\nThen we discovered the overlap list: Brooklyn-99, HIMYM, The Pitt, medical dramas… and everything in between.\n\nAt this point the algorithm might just be the same for both of us.",
    emoji: "📺",
  },
  {
    label: "Exhibit B",
    title: "MOVIESSSS",
    description: "You watched The Martian with me AND LOVED IT\nand then finished it without me (still processing that betrayal but okay).\n\nBut you also love Fight Club and you're excited for Project Hail Mary, which means your movie taste is both elite and slightly chaotic — which checks out.",
    emoji: "🏥",
  },
  {
    label: "Exhibit C",
    title: "Both suspiciously chalant",
    description: "Emotionally present and intentional? In this economy? Rare.",
    emoji: "✨",
  },
  {
    label: "Exhibit D",
    title: "Cultured people energy",
    description: "The kind of people who say 'have you seen this film?' and actually mean it.",
    emoji: "🎭",
  },
  {
    label: "Exhibit E",
    title: "Music obsession",
    description: "A shared Spotify history that would make any algorithm proud.",
    emoji: "🎵",
  },
];

const EvidenceSection = () => {
  return (
    <section id="evidence" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            case file #001
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            evidence that we are the same person
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit, i) => (
            <motion.div
              key={exhibit.label}
              initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
            >
              <span className="text-3xl mb-3 block">{exhibit.emoji}</span>
              <p className="text-xs font-body font-medium tracking-widest uppercase text-primary mb-1.5">
                {exhibit.label}
              </p>
              <h3 className="font-display text-lg mb-2">{exhibit.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                {exhibit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvidenceSection;
