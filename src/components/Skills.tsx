import { motion } from "framer-motion"
import { skills } from "../data/profile"
import { Section } from "./Section"

const groups = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Databases", items: skills.databases },
  { label: "Patterns", items: skills.patterns },
  { label: "Tools", items: skills.tools },
]

export function Skills() {
  return (
    <Section id="skills" eyebrow="04 / Skills" title="Technical stack">
      <div className="space-y-8">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: gi * 0.04 }}
          >
            <h3 className="mb-3 font-mono text-xs tracking-[0.18em] text-muted uppercase">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item, ii) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: ii * 0.02 }}
                  className="border border-line bg-paper px-3 py-1.5 font-mono text-xs text-ink-soft transition-colors hover:border-accent hover:text-ink"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
