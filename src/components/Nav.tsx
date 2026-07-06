import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#photography', label: 'Photos' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-ink-200/60 bg-ink-50/70 backdrop-blur"
    >
      <nav className="container-narrow flex h-14 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink-900"
        >
          hoang<span className="text-sun-500">.</span>helios
        </a>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-500 transition-colors hover:text-sun-600 dark:hover:text-sun-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  )
}
