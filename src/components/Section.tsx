import { motion } from "framer-motion"
import type { ReactNode } from "react"

type SectionProps = {
  id: string
  prompt: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ id, prompt, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 md:py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 md:mb-8"
      >
        <p className="mb-2 font-mono text-[11px] tracking-widest text-accent uppercase">
          <span className="text-accent-dim">$</span> {prompt}
        </p>
        <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}
