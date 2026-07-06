import Nav from './components/Nav'
import SunGlow from './components/SunGlow'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Photography from './sections/Photography'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-sun-100/50 via-ink-100/60 to-transparent dark:from-sun-950/40 dark:via-ink-100/40"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]">
        <SunGlow />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
