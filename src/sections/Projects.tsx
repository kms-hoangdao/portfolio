import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Section from '../components/Section'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects" label="04 · Work" title="Selected projects">
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
            className="group rounded-2xl border border-ink-200 bg-white/60 p-6 transition-all hover:border-sun-300 hover:shadow-sm dark:bg-white/[0.04] dark:hover:border-sun-700"
          >
            <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-lg font-medium text-ink-900 transition-colors hover:text-sun-600"
                >
                  {project.name}
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sun-500" />
                </a>
              ) : (
                <h3 className="text-lg font-medium text-ink-900">
                  {project.name}
                </h3>
              )}
              <span className="font-mono text-xs text-ink-500">
                {project.tagline}
              </span>
            </header>

            <p className="text-sm leading-relaxed text-ink-700">
              {project.description}
            </p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 text-sm leading-relaxed text-ink-600"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-sun-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-ink-100 px-2 py-0.5 font-mono text-[11px] text-ink-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
