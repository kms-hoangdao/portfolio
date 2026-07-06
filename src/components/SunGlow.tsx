import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Mode = 'interactive' | 'drift' | 'static'

export default function SunGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<Mode>('static')
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 45, damping: 18, mass: 0.8 })
  const springY = useSpring(y, { stiffness: 45, damping: 18, mass: 0.8 })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduced) return
    if (!canHover) {
      setMode('drift')
      return
    }

    setMode('interactive')
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      x.set(rect.width * 0.8)
      y.set(rect.height * 0.15)
    }

    const onMove = (e: PointerEvent) => {
      const bounds = ref.current?.getBoundingClientRect()
      if (!bounds) return
      x.set(e.clientX - bounds.left)
      y.set(e.clientY - bounds.top)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
    >
      {mode === 'interactive' ? (
        <motion.div
          style={{ x: springX, y: springY }}
          className="sun-glow-bg absolute -left-44 -top-44 h-[22rem] w-[22rem] rounded-full blur-2xl"
        />
      ) : (
        <div
          className={`sun-glow-bg absolute right-[-8%] top-[-25%] h-[24rem] w-[24rem] rounded-full blur-2xl ${
            mode === 'drift' ? 'animate-sun-drift' : ''
          }`}
        />
      )}
    </div>
  )
}
