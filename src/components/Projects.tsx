import { motion } from "framer-motion"
import { projects } from "../data/profile"
import { Section } from "./Section"

export function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Personal builds">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group flex flex-col border border-line bg-paper/50 p-6 transition-colors hover:border-ink/40 md:p-8"
          >
            <div className="mb-1 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold text-ink">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent-deep"
                >
                  {project.name}
                </a>
              </h3>
              <span
                className="font-mono text-accent transition-transform group-hover:translate-x-0.5"
                aria-hidden
              >
                ↗
              </span>
            </div>

            <ul className="mt-4 flex-1 space-y-2">
              {project.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-muted">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-4">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-wide text-muted uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-3">
              {project.repos.map((repo) => (
                <a
                  key={repo.href}
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent-deep underline-offset-2 hover:underline"
                >
                  {repo.label}
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
