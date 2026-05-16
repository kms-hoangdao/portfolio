import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/60">
      <div className="container-narrow flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-400">
          Built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  )
}
