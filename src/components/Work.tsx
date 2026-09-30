import { motion } from "framer-motion"
import { experience } from "../data/profile"
import { Section } from "./Section"

export function Work() {
  return (
    <Section id="work" eyebrow="02 / Experience" title="Freelance & client work">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-12 border-l-2 border-accent pl-5"
      >
        <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
          {experience.role}
        </h3>
        <p className="mt-1 text-muted">
          {experience.type} · {experience.company}
        </p>
        <p className="mt-1 font-mono text-xs text-muted">
          {experience.location} · {experience.period}
        </p>
      </motion.div>

      <div className="space-y-0 divide-y divide-line border-y border-line">
        {experience.clients.map((client, index) => (
          <motion.article
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="grid gap-6 py-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10"
          >
            <div>
              <h4 className="font-display text-lg font-bold text-ink">
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent-deep"
                  >
                    {client.name}
                  </a>
                ) : (
                  client.name
                )}
              </h4>
              {"urls" in client && client.urls && (
                <ul className="mt-3 space-y-1">
                  {client.urls.map((u) => (
                    <li key={u.href}>
                      <a
                        href={u.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted hover:text-accent-deep"
                      >
                        {u.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {client.stack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="border border-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="space-y-3">
              {client.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-ink-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-warm" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
