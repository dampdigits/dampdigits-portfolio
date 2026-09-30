import { profile } from "../data/profile"

export function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 font-mono text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="text-accent">$</span> {profile.brand} · {profile.name}
        </p>
        <p>
          {profile.location} ·{" "}
          <a href={profile.emailHref} className="hover:text-accent">
            {profile.email}
          </a>
        </p>
      </div>
    </footer>
  )
}
