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
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[31px] top-2.5 h-2.5 w-2.5 rounded-full bg-ink-900 ring-4 ring-ink-50" />

            <div className="rounded-xl border border-ink-200 bg-white/60 p-5 transition-all hover:border-ink-400 hover:shadow-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-base font-medium text-ink-900">
                  {job.company}
                </h3>
                <span className="font-mono text-xs text-ink-500">
                  {job.period}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-600">
                <span>{job.role}</span>
                <span className="text-ink-300">·</span>
                <span className="text-ink-500">{job.type}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-700">
                {job.summary}
              </p>

              <ul className="mt-3 space-y-1.5">
                {job.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm leading-relaxed text-ink-600"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-ink-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
