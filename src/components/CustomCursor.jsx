import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  // Silky smooth spring physics for ambient illumination
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="pointer-events-none fixed top-0 left-0 z-30 w-[500px] h-[500px] rounded-full opacity-60 dark:opacity-40 transition-opacity duration-300 hidden md:block"
    >
      {/* Soft Ambient Spotlight Glow (Recruiter-Grade Aesthetics) */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent blur-[100px]" />
    </motion.div>
  )
}
