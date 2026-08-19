import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Code2, GraduationCap, CheckCircle2, Sparkles, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Computer Vision & NLP",
    "FastAPI & Spring Boot Architect"
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[currentRoleIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1))
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 bg-grid-pattern overflow-hidden" id="home">
      
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Badges Row */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-[#141414] border border-emerald-200 dark:border-emerald-500/30 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 font-semibold">
                Available for Opportunities
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] shadow-xs">
              <GraduationCap size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-mono text-slate-700 dark:text-slate-300 font-medium">
                VIT Bhopal • CGPA 8.44/10
              </span>
            </div>
          </div>

          {/* Subheader */}
          <div className="text-xs sm:text-sm font-mono text-emerald-700 dark:text-emerald-400 tracking-wider uppercase font-semibold flex items-center gap-2">
            <span>{'<'}</span>
            <span>HELLO WORLD</span>
            <span>{'/>'}</span>
          </div>

          {/* Main Title with Refined Glow */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none">
              I'm{' '}
              <span className="relative inline-block text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 glow-text-refined">
                Mayank
                <span className="absolute -inset-2 md:-inset-3 bg-emerald-500/10 dark:bg-emerald-400/20 blur-xl -z-10 rounded-full pointer-events-none"></span>
              </span>
            </h1>
            
            {/* Dynamic Typing Title */}
            <div className="flex items-center text-xl sm:text-2xl lg:text-3xl font-mono text-emerald-700 dark:text-emerald-400 font-semibold h-10 mt-3">
              <span className="text-slate-400 mr-2">{'>'}</span>
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-emerald-600 dark:bg-emerald-400 ml-1 animate-pulse"></span>
            </div>
          </div>

          {/* Description from Resume */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
            Innovative and results-driven Full-Stack & AI Developer with expertise in Machine Learning, Computer Vision, and Full-Stack development using React, Next.js, Node.js, Spring Boot, and FastAPI.
          </p>

          {/* Core Stacks Quick Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["AI & ML Pipelines", "Computer Vision (VGG16/MTCNN)", "Spring Boot & FastAPI", "React 19 & Next.js"].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-200 dark:border-[#222222] text-xs font-mono text-slate-700 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons & Socials */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="btn-primary flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono font-bold text-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#141414] border border-slate-300 dark:border-[#2b2b2b] text-slate-800 dark:text-white font-mono text-sm font-semibold hover:border-emerald-500 dark:hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-xs"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pl-2">
              <a 
                href="https://github.com/MAYANK479" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-400/40 transition-all shadow-xs"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mayank-pandey1331/" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-400/40 transition-all shadow-xs"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Prominent Headshot Profile Card & Interactive Terminal (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 space-y-4 w-full"
        >
          {/* Prominent Profile Identity Card */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#0f0f0f] border-2 border-slate-200 dark:border-[#242424] shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch gap-5">
            
            {/* Prominent Decent-Sized Photo */}
            <div className="relative shrink-0 w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-emerald-500/50 dark:border-emerald-400/50 shadow-lg bg-slate-900 group">
              <img 
                src="/mayank.jpg" 
                alt="Mayank Pandey" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open to Work</span>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="flex flex-col justify-between py-0.5 text-center sm:text-left flex-grow">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mb-1.5">
                  AI/ML & Full-Stack Developer
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  Mayank Pandey
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  B.Tech in Computer Science & Engineering (AIML)<br/>
                  <strong className="text-slate-700 dark:text-slate-300 font-semibold">VIT Bhopal University (2023 – 2027)</strong>
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#181818] text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#282828]">
                  CGPA: <strong className="text-emerald-700 dark:text-emerald-400 font-bold">8.44 / 10</strong>
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#181818] text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#282828] flex items-center gap-1">
                  <MapPin size={12} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Bhopal, India</span>
                </span>
              </div>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Code2 size={13} className="text-emerald-400" />
                <span>mayank_profile.ts</span>
              </div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Active
              </div>
            </div>

            {/* Terminal Code Body */}
            <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
              <div><span className="text-purple-400">const</span> <span className="text-emerald-400">engineer</span> = {'{'}</div>
              <div className="pl-4 space-y-0.5">
                <div><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Mayank Pandey"</span>,</div>
                <div><span className="text-slate-400">focus:</span> [<span className="text-emerald-300">"AI/ML"</span>, <span className="text-emerald-300">"Computer Vision"</span>, <span className="text-emerald-300">"Full-Stack Web"</span>],</div>
                <div><span className="text-slate-400">coreTech:</span> [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"FastAPI"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"React 19"</span>]</div>
              </div>
              <div>{'}'};</div>

              {/* Terminal Footer */}
              <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span>ready for deployment</span>
                </div>
                <div className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>Build passing</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
