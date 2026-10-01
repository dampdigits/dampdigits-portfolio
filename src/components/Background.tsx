import { motion } from "framer-motion"
import {
  achievements,
  education,
  leetcode,
  organizations,
} from "../data/profile"

export function Background() {
  return (
    <section id="background" className="scroll-mt-20 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="mb-6 md:mb-8"
      >
        <p className="mb-2 font-mono text-[11px] tracking-widest text-accent uppercase">
          <span className="text-accent-dim">$</span> cat ~/background.md
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
          Education & Achievements
        </h2>
      </motion.div>

      {/* Achievements + Education */}
      <div className="mb-6 grid gap-3 md:grid-cols-[0.8fr_1.4fr] lg:hidden">
        <div className="border border-line bg-panel p-4">
          <p className="mb-3 font-mono text-[10px] tracking-wider text-accent-dim uppercase">
            education
          </p>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-bold text-white">{e.title}</p>
                  <span className="shrink-0 font-mono text-[9px] text-muted">{e.period}</span>
                </div>
                <p className="mt-0.5 text-[12px] text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="overflow-hidden border border-line bg-panel"
            >
              <div className="aspect-video overflow-hidden bg-ink">
                <img
                  src={a.image}
                  alt=""
                  className="h-full w-full object-cover opacity-85"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5 sm:p-3">
                <p className="font-display text-xs font-bold text-white sm:text-sm">{a.title}</p>
                <p className="mt-0.5 font-mono text-[9px] text-muted sm:text-[10px]">{a.detail}</p>
                {a.links.length > 0 && (
                  <div className="mt-1.5 flex gap-2">
                    {a.links.map((l) => (
                      <a
                        key={l.href + l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[9px] text-accent hover:underline"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-6 hidden gap-3 lg:grid lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden border border-line bg-panel"
        >
          <div className="overflow-hidden bg-ink p-4">
            <div className="flex h-full flex-col justify-end">
              <p className="font-mono text-[10px] tracking-wider text-accent-dim uppercase">
                education
              </p>
              <p className="mt-1 font-display text-lg font-bold text-white">Education</p>
              <p className="mt-0.5 text-[12px] text-muted">Formal education and academic milestones.</p>
            </div>
          </div>
          <div className="space-y-3 p-3.5 sm:p-4">
            {education.map((e) => (
              <div key={e.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-display text-sm font-bold text-white">{e.title}</p>
                  <span className="shrink-0 font-mono text-[9px] text-muted">{e.period}</span>
                </div>
                <p className="mt-0.5 text-[12px] text-muted">{e.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="overflow-hidden border border-line bg-panel"
          >
            <div className="aspect-video overflow-hidden bg-ink">
              <img
                src={a.image}
                alt=""
                className="h-full w-full object-cover opacity-85"
                loading="lazy"
              />
            </div>
            <div className="p-2.5 sm:p-3">
              <p className="font-display text-xs font-bold text-white sm:text-sm">{a.title}</p>
              <p className="mt-0.5 font-mono text-[9px] text-muted sm:text-[10px]">{a.detail}</p>
              {a.links.length > 0 && (
                <div className="mt-1.5 flex gap-2">
                  {a.links.map((l) => (
                    <a
                      key={l.href + l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[9px] text-accent hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* LeetCode strip */}
      <div>
        <p className="mb-3 font-mono text-[10px] tracking-wider text-accent-dim uppercase">
          LeetCode Stats
        </p>
        <div className="mb-6 grid grid-cols-3 gap-px overflow-hidden border border-line bg-line">
          {leetcode.map((stat) => (
            <div key={stat.label} className="bg-panel px-3 py-3 sm:px-4 sm:py-4">
              <p className="font-mono text-[9px] tracking-wider text-muted uppercase sm:text-[10px]">
                {stat.label}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-accent sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 font-mono text-[9px] text-muted sm:text-[10px]">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Organizations */}
      <div>
        <p className="mb-3 font-mono text-[10px] tracking-wider text-accent-dim uppercase">
          organizations
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {organizations.map((org, i) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="border border-line bg-panel p-3.5 sm:p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <p className="font-display text-sm font-bold text-white">{org.role}</p>
                <span className="font-mono text-[9px] text-muted">{org.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-[10px] text-accent-dim">{org.name}</p>
              <ul className="mt-2 space-y-1">
                {org.points.map((p) => (
                  <li key={p} className="text-[12px] leading-snug text-muted">
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
