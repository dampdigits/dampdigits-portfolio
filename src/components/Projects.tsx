import { motion } from "framer-motion"
import { projects } from "../data/profile"
import { Section } from "./Section"

export function Projects() {
  return (
    <Section id="projects" prompt="ls ~/projects" title="Personal projects">
      <div className="grid gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex overflow-hidden border border-line bg-panel transition-colors hover:border-accent/40"
          >
            {project.image ? (
              <div
                className={`relative hidden w-28 shrink-0 overflow-hidden sm:block md:w-36 bg-ink"
                }`}
              >
                <img
                  src={project.image}
                  alt=""
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-void/30" />
              </div>
            ) : (
              <div className="hidden w-28 shrink-0 items-center justify-center border-r border-line bg-panel-2 font-mono text-[10px] text-accent-dim sm:flex md:w-36">
                {"</>"}
              </div>
            )}
            <div className="flex flex-1 flex-col p-3.5 sm:p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-bold text-white">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {project.name}
                  </a>
                </h3>
                <span className="font-mono text-xs text-accent" aria-hidden>
                  ↗
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-snug text-muted">{project.blurb}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                {project.stack.slice(0, 4).map((t) => (
                  <span key={t} className="font-mono text-[9px] text-accent-dim uppercase">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex gap-3">
                {project.repos.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] text-soft hover:text-accent"
                  >
                    {r.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
