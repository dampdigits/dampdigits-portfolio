import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { Section } from "./Section"

export function About() {
  return (
    <Section id="about" eyebrow="01 / About" title="Who I am">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.summary}
          </p>
          <ul className="mt-8 space-y-3">
            {profile.about.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="dot-bg border border-line p-6 md:p-8"
        >
          <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">Focus</p>
          <ul className="mt-5 space-y-4">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="border-b border-line pb-3 font-display text-lg font-semibold text-ink last:border-0 last:pb-0"
              >
                {role}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </Section>
  )
}
