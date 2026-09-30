import { motion } from "framer-motion"
import { profile } from "../data/profile"
import { HeroArt } from "./HeroArt"

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.55, ease },
  }),
}

export function Hero() {
  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8 lg:gap-14">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-5 font-mono text-xs tracking-[0.22em] text-accent uppercase"
          >
            {profile.location} · Available for hire
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.brand}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 font-display text-xl font-semibold text-ink-soft md:text-2xl"
          >
            {profile.name}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.emailHref}
              className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 font-mono text-xs tracking-wide text-surface uppercase transition-colors hover:bg-accent hover:text-ink"
            >
              Contact me
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-line bg-transparent px-6 py-3.5 font-mono text-xs tracking-wide text-ink uppercase transition-colors hover:border-ink"
            >
              View work
            </a>
          </motion.div>

          <motion.ul
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
          >
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent-deep hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <HeroArt />
        </motion.div>
      </div>
    </section>
  )
}
