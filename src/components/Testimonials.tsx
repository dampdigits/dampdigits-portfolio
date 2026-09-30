import { motion } from "framer-motion"
import { testimonials } from "../data/profile"
import { Section } from "./Section"

export function Testimonials() {
  return (
    <Section id="proof" prompt="echo $CLIENT_FEEDBACK" title="What clients say">
      <div className="grid gap-3 sm:grid-cols-2">
        {testimonials.map((t, index) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex flex-col border border-line bg-panel p-4 sm:p-5"
          >
            <p className="flex-1 text-[13px] leading-relaxed text-soft md:text-sm">
              “{t.quote}”
            </p>
            <footer className="mt-4 flex items-center gap-3 border-t border-line pt-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 object-cover"
                loading="lazy"
              />
              <div className="min-w-0">
                <cite className="not-italic font-display text-sm font-bold text-white">
                  {t.name}
                </cite>
                <p className="truncate font-mono text-[10px] text-muted">
                  {t.title} · {t.company}
                </p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}
