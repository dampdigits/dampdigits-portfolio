import { motion } from "framer-motion"
import { achievements, education } from "../data/profile"
import { Section } from "./Section"

export function Education() {
  return (
    <Section id="education" eyebrow="05 / Background" title="Education & achievements">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Education
          </h3>
          <ul className="space-y-0 divide-y divide-line border-y border-line">
            {education.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="py-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display font-bold text-ink">{item.title}</p>
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {item.detail} · {item.place}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs tracking-[0.18em] text-muted uppercase">
            Achievements
          </h3>
          <ul className="space-y-0 divide-y divide-line border-y border-line">
            {achievements.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="py-5"
              >
                <p className="font-display font-bold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
                {item.links.length > 0 && (
                  <div className="mt-2 flex gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href + link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent-deep hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
