import { motion } from "framer-motion"
import faceAscii from "../assets/sameer/face-ascii-art.webp"
import { highlights, profile } from "../data/profile"

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
    <section id="top" className="grid-bg relative overflow-hidden pt-20 pb-10 md:pt-24 md:pb-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-3 font-mono text-[11px] tracking-widest text-accent uppercase"
          >
            <span className="text-accent-dim">~/</span>
            {profile.location} · available for hire
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-[2.75rem] leading-[0.92] font-extrabold tracking-tight text-white sm:text-6xl md:text-6xl lg:text-7xl"
          >
            {profile.brand}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-2 font-mono text-sm text-soft md:text-base"
          >
            {profile.name} · {profile.title}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <a
              href={profile.emailHref}
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] font-medium tracking-wide text-void uppercase transition-colors hover:bg-white"
            >
              Contact me →
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-line px-5 py-3 font-mono text-[11px] tracking-wide text-soft uppercase transition-colors hover:border-accent hover:text-accent"
            >
              See work
            </a>
          </motion.div>

          <motion.ul
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-x-4 gap-y-1"
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

          <motion.dl
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4"
          >
            {highlights.map((h) => (
              <div key={h.label} className="bg-panel px-3 py-3 sm:px-4">
                <dt className="font-mono text-[10px] tracking-wider text-muted uppercase">
                  {h.label}
                </dt>
                <dd className="mt-0.5 font-display text-lg font-bold text-accent">{h.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none"
        >
          <div className="relative overflow-hidden border border-line bg-panel">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-line" />
              <span className="h-2 w-2 rounded-full bg-accent/70" />
              <span className="ml-2 font-mono text-[10px] text-muted">whoami.png</span>
            </div>
            <div className="relative aspect-[4/5] scanlines">
              <img
                src={faceAscii}
                alt={`${profile.name} — ASCII portrait`}
                className="h-full w-full object-cover object-top opacity-90"
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
