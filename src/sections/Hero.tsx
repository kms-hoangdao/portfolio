import { motion } from 'framer-motion'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="top" className="container-narrow pt-24 pb-16 sm:pt-32 sm:pb-24">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 text-xs text-ink-500"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new work
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-medium leading-[1.1] tracking-tight text-ink-900 sm:text-5xl"
        >
          {profile.name}.
          <span className="block text-ink-400">{profile.title}.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-mono text-sm text-ink-500"
        >
          aka <span className="text-ink-900">{profile.nickname}</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1 text-ink-900 transition-colors hover:text-ink-600"
          >
            {profile.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
