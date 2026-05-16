import { motion } from 'framer-motion'
import Section from '../components/Section'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <Section id="work" label="03 · Where" title="Companies I've worked with">
      <ol className="relative border-l border-ink-200 pl-6">
        {experience.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-ink-900 ring-4 ring-ink-50" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium text-ink-900">{job.company}</h3>
              <span className="font-mono text-xs text-ink-500">{job.period}</span>
            </div>
            <div className="mt-1 text-sm text-ink-500">{job.role}</div>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {job.summary}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
