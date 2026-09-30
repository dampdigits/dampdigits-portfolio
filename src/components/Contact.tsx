import { motion } from "framer-motion"
import { profile } from "../data/profile"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden border border-accent/30 bg-panel px-5 py-10 sm:px-8 md:py-14"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative">
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
              href={profile.phoneHref}
              className="font-mono text-[11px] text-muted uppercase transition-colors hover:text-accent"
            >
              {profile.phone}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
