import { profile } from "../data/profile"

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> {profile.brand} · {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          {profile.location} ·{" "}
          <a href={profile.emailHref} className="hover:text-accent-deep">
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
