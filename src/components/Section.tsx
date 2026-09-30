import { motion } from "framer-motion"
import type { ReactNode } from "react"

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 md:mb-14"
      >
        <p className="mb-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}
