import { motion } from "framer-motion";
import catLavender from "@/assets/cat-lavender.png";

const MusicSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card/60 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-3">
            section 3 of things that didn't need a website
          </p>
          <h2 className="font-display text-3xl sm:text-4xl mb-4">
            important cultural exchange
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-md mx-auto">
            since we both love music, I made you a playlist.
            because that's what any normal person in my position would do.
          </p>
        </motion.div>

        {/* Embed + cat wrapped together so cat overlaps from bottom */}
        <div className="relative pb-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-md"
          >
            <iframe
              style={{ borderRadius: "16px" }}
              src="https://open.spotify.com/embed/playlist/6YlOlTcCt6gQLqP1359Fgw?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            />
          </motion.div>

          <motion.img
            src={catLavender}
            alt="Cat holding lavender"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-2 right-0 md:-right-6 w-52 md:w-72 pointer-events-none select-none z-10"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-sm text-muted-foreground font-body italic"
        >
          scientifically curated for someone who is suspiciously similar to me
        </motion.p>
      </div>
    </section>
  );
};

export default MusicSection;
