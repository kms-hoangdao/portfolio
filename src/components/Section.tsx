import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  id: string
  label: string
  title: string
  children: ReactNode
}

export default function Section({ id, label, title, children }: Props) {
  return (
    <section id={id} className="container-narrow py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 flex flex-col gap-2"
      >
        <span className="section-label">{label}</span>
        <h2 className="text-2xl font-medium tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}
