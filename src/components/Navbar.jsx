import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, ArrowUpRight, Terminal, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Journey', href: '#journey' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3.5 bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md border-b border-slate-200 dark:border-[#222222] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5 text-xl font-bold font-mono tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
            <Terminal size={18} />
          </div>
          <span className="text-slate-900 dark:text-white font-bold">
            mayank<span className="text-emerald-600 dark:text-emerald-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-px h-5 bg-slate-300 dark:bg-[#222222]"></div>
          
          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-300 dark:border-[#262626] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} className="text-emerald-400" /> : <Moon size={18} className="text-slate-800" />}
          </button>
          
          {/* GitHub Icon Link */}
          <a 
            href="https://github.com/MAYANK479" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-300 dark:border-[#262626] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-xs"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          {/* Glowing "Hire Me" Pill Button matching screenshot */}
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono font-bold text-sm shadow-md hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Sparkles size={15} className="animate-pulse" />
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile Hamburger & Hire Me */}
        <div className="md:hidden flex items-center gap-2.5">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-mono font-bold text-xs shadow-sm"
          >
            <Sparkles size={13} />
            <span>Hire Me</span>
          </a>

          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-300 dark:border-[#262626] text-slate-800 dark:text-emerald-400"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-[#141414] border border-slate-300 dark:border-[#262626] text-slate-900 dark:text-white"
          >
            {isMobileMenuOpen ? <X size={22} className="text-emerald-500" /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0e0e0e] border-b border-slate-200 dark:border-[#222222] px-6 py-6 flex flex-col gap-4 overflow-hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-mono text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-mono font-bold text-sm shadow-md"
            >
              <Sparkles size={16} />
              <span>Hire Me</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
