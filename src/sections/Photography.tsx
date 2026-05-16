import { motion } from 'framer-motion'
import { ArrowUpRight, Camera } from 'lucide-react'
import Section from '../components/Section'
import { photography } from '../data/portfolio'

export default function Photography() {
  return (
    <Section id="photography" label="05 · Lens" title="When I'm not coding">
      <div className="mb-8 max-w-xl space-y-3">
        <p className="text-base leading-relaxed text-ink-700">
          {photography.intro}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-500">
          {photography.motto}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photography.photos.map((photo, i) => (
          <motion.a
            key={photo.page}
            href={photo.page}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            className="group relative block aspect-square overflow-hidden rounded-lg bg-ink-100"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute right-2 top-2 rounded-full bg-ink-50/90 p-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-900" />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.a
        href={photography.profile}
        target="_blank"
        rel="noreferrer noopener"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group mt-8 inline-flex items-center gap-2 text-sm text-ink-900"
      >
        <Camera className="h-4 w-4" />
        <span>
          See all {photography.totalCount}+ photos on Unsplash
        </span>
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.a>
    </Section>
  )
}
