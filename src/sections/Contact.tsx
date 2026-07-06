import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react'
import Section from '../components/Section'
import { profile } from '../data/portfolio'

const channels = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: Github, label: 'github.com/kms-hoangdao', href: profile.github },
  { icon: Linkedin, label: 'linkedin.com/in/dvhoang2106', href: profile.linkedin },
]

export default function Contact() {
  return (
    <Section id="contact" label="06 · Contact" title="Let's build something">
      <p className="mb-8 max-w-xl text-base leading-relaxed text-ink-700">
        I'm open to interesting frontend and full-stack opportunities, collaborations,
        or a friendly chat about React, mobile, or product engineering.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {channels.map((c, i) => {
          const Icon = c.icon
          const external = c.href.startsWith('http')
          return (
            <motion.li
              key={c.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <a
                href={c.href}
                {...(external && { target: '_blank', rel: 'noreferrer noopener' })}
                className="group flex items-center justify-between rounded-xl border border-ink-200 bg-white/60 px-4 py-3 transition-all hover:border-sun-300"
              >
                <span className="flex items-center gap-3 text-sm text-ink-700">
                  <Icon className="h-4 w-4 text-ink-500" />
                  {c.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun-600" />
              </a>
            </motion.li>
          )
        })}
      </ul>
    </Section>
  )
}
