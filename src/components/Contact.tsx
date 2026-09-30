import { motion } from "framer-motion"
import codingStill from "../assets/sameer/coding-still-pic.webp"
import { profile } from "../data/profile"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden border border-accent/30 bg-panel"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative grid items-center gap-6 p-5 sm:p-8 md:grid-cols-[1fr_auto] md:gap-10 md:p-10">
          <div>
            <p className="mb-3 font-mono text-[11px] tracking-widest text-accent uppercase">
              <span className="text-accent-dim">$</span> mail -s "let's build" {profile.email}
            </p>
            <h2 className="font-display max-w-lg text-3xl font-bold tracking-tight text-white md:text-4xl">
              Ready to ship something real.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Open to freelance and full-time roles. Product builds, redesigns, CRMs, PWAs — from
              brief to production.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={profile.emailHref}
                className="inline-flex bg-accent px-6 py-3.5 font-mono text-[11px] font-medium tracking-wide text-void uppercase transition-colors hover:bg-white"
              >
                Email me →
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-line px-5 py-3.5 font-mono text-[11px] tracking-wide text-soft uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Resume
              </a>
              <a
                href={profile.phoneHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-line px-5 py-3.5 font-mono text-[11px] tracking-wide text-soft uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative mx-auto shrink-0 overflow-hidden border border-line sm:w-80 md:w-110">
            <img
              src={codingStill}
              alt={profile.name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
