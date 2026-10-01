import { motion } from "framer-motion"
import faceAscii from "../assets/sameer/face-ascii-art.webp"
import { profile, skills } from "../data/profile"

const techStack = Array.from(new Set(Object.values(skills).flat()))

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease },
  }),
}

export function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-14">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div className="min-w-0">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-2 font-mono text-[10px] tracking-widest text-accent uppercase sm:mb-3 sm:text-[11px]"
          >
            <span className="text-accent-dim">~/</span>
            {profile.location} · available for hire
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-[clamp(2.1rem,10vw,2.75rem)] leading-[0.92] font-extrabold tracking-tight break-words text-white sm:text-6xl"
          >
            {profile.brand}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-2 font-mono text-xs text-soft sm:text-sm md:text-base"
          >
            {profile.name} · {profile.title}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-[15px] md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5"
          >
            <a
              href={profile.emailHref}
              className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] font-medium tracking-wide text-void uppercase transition-colors hover:bg-white sm:px-5 sm:py-3"
            >
              Contact me →
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] tracking-wide text-soft uppercase transition-colors hover:border-accent hover:text-accent sm:px-5 sm:py-3"
            >
              Resume
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-mono text-[11px] tracking-wide text-soft uppercase transition-colors hover:border-accent hover:text-accent sm:px-5 sm:py-3"
            >
              See work
            </a>
          </motion.div>

          <motion.ul
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 flex flex-wrap gap-x-4 gap-y-1 sm:mt-6"
          >
            {profile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 sm:mt-8"
          >
            <p className="mb-2 font-mono text-[10px] tracking-[0.2em] text-muted uppercase sm:text-[11px]">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span
                  key={item}
                  className="border border-line bg-panel px-2.5 py-1.5 font-mono text-[10px] text-soft transition-colors hover:border-accent hover:text-accent sm:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="relative mx-auto w-full"
        >
          <div className="relative overflow-hidden border border-line bg-panel">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="ml-2 font-mono text-[10px] text-muted">whoami</span>
            </div>
            <div className="relative aspect-[4/5] scanlines">
              <img
                src={faceAscii}
                alt={`${profile.name} — ASCII portrait`}
                className="w-full object-cover object-top opacity-90"
                style={{ filter: "hue-rotate(95deg) saturate(0.85) brightness(0.95)" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-70" />
            </div>
            <p className="border-t border-line px-3 py-2 font-mono text-[10px] text-muted">
              <span className="text-accent">guest@dampdigits</span>:~$ cat status → hireable
            </p>
          </div>
          <motion.div
            className="absolute -right-2 -bottom-2 hidden h-14 w-14 border border-accent/40 bg-accent-soft sm:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  )
}
