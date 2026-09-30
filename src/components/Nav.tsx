import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { navItems, profile } from "../data/profile"

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-void/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-baseline gap-1.5 font-mono text-sm">
          <span className="text-accent">$</span>
          <span className="font-display text-base font-bold tracking-tight text-white">
            {profile.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-wide text-muted uppercase transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.emailHref}
            className="bg-accent px-3.5 py-2 font-mono text-[11px] font-medium tracking-wide text-void uppercase transition-colors hover:bg-white"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-1">
            <span
              className={`h-px w-full bg-white transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-full bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-full bg-white transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="border-b border-line bg-void px-4 pb-5 md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-3 pt-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-xl font-bold text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.emailHref}
                className="mt-2 inline-flex w-fit bg-accent px-4 py-2.5 font-mono text-[11px] text-void uppercase"
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
