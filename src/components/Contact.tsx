import { motion } from "framer-motion"
import { profile } from "../data/profile"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden border border-ink bg-ink px-6 py-14 text-surface md:px-12 md:py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,180,166,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,180,166,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        <div className="relative max-w-2xl">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent uppercase">
            06 / Contact
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Let’s build something that ships.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-line md:text-lg">
            Open to freelance engagements and full-time roles. Reach out for product builds,
            redesigns, or end-to-end web platforms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={profile.emailHref}
              className="inline-flex items-center gap-2 bg-accent px-7 py-4 font-mono text-xs tracking-wide text-ink uppercase transition-colors hover:bg-accent-soft"
            >
              Email me
              <span aria-hidden>→</span>
            </a>
            <a
              href={profile.phoneHref}
              className="font-mono text-xs tracking-wide text-line uppercase transition-colors hover:text-surface"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-8">
            {profile.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
