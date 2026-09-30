import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { navItems, profile } from "../data/profile"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-surface/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18 md:px-8">
        <a href="#top" className="group flex items-baseline gap-1.5">
          <span className="font-mono text-accent">$</span>
          <span className="font-display text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-accent-deep">
            {profile.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-wide text-muted uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.emailHref}
            className="border border-ink bg-ink px-4 py-2 font-mono text-xs tracking-wide text-surface uppercase transition-colors hover:border-accent hover:bg-accent hover:text-ink"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-b border-line bg-surface px-5 pb-6 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-4 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-2xl font-bold text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.emailHref}
                className="mt-2 inline-flex w-fit border border-ink bg-ink px-5 py-3 font-mono text-xs tracking-wide text-surface uppercase"
                onClick={() => setOpen(false)}
              >
                Hire me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
