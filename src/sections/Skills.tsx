import { motion } from 'framer-motion'
import Section from '../components/Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" label="02 · Toolbox" title="Things I work with">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group, gi) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
          >
            <div className="section-label mb-3">{group.group}</div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-ink-200 bg-white/60 px-3 py-1 text-sm text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
