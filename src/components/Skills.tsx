import { motion } from "framer-motion"
import { skills } from "../data/profile"
import { Section } from "./Section"

const groups = [
  { label: "languages", items: skills.languages },
  { label: "frameworks", items: skills.frameworks },
  { label: "databases", items: skills.databases },
  { label: "patterns", items: skills.patterns },
  { label: "tools", items: skills.tools },
]

export function Skills() {
  return (
    <Section id="skills" prompt="ls ~/stack" title="Tech stack">
      <div className="space-y-5">
        {groups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: gi * 0.04 }}
            className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4"
          >
            <p className="w-24 shrink-0 pt-1 font-mono text-[10px] tracking-wider text-accent-dim uppercase">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line bg-panel px-2.5 py-1 font-mono text-[11px] text-soft transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
