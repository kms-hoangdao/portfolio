import Section from '../components/Section'
import { profile, education } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about" label="01 · About" title="A bit about me">
      <div className="space-y-6 text-base leading-relaxed text-ink-700">
        <p>{profile.about}</p>
        <div className="rounded-xl border border-ink-200 bg-white/60 p-5">
          <div className="section-label mb-2">Education</div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <div className="font-medium text-ink-900">{education.school}</div>
              <div className="text-sm text-ink-500">{education.degree}</div>
            </div>
            <div className="font-mono text-xs text-ink-500">
              {education.period}
            </div>
          </div>
          <p className="mt-3 text-sm text-ink-600">{education.detail}</p>
        </div>
      </div>
    </Section>
  )
}
