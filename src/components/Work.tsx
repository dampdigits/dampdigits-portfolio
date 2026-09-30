import { motion } from "framer-motion"
import { experience } from "../data/profile"
import { Section } from "./Section"

export function Work() {
  return (
    <Section id="work" prompt="cat ~/experience.log" title="Client work">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 border border-line bg-panel px-4 py-3 sm:px-5"
      >
        <p className="font-display text-base font-bold text-white md:text-lg">
          {experience.role}
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-muted">
          {experience.type} · {experience.company} · {experience.period}
        </p>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {experience.clients.map((client, index) => (
          <motion.a
            key={client.name}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group flex flex-col overflow-hidden border border-line bg-panel transition-colors hover:border-accent/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <img
                src={client.image}
                alt={`${client.name} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
            </div>
            <div className="flex flex-1 flex-col p-3.5 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-base font-bold text-white">{client.name}</h3>
                <span className="font-mono text-xs text-accent opacity-70 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <p className="mt-1.5 flex-1 text-[13px] leading-snug text-muted">{client.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {client.stack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] tracking-wide text-accent-dim uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
