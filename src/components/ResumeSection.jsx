import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, ExternalLink, GraduationCap, Award, CheckCircle2, Sparkles } from 'lucide-react'

export default function ResumeSection() {
  return (
    <section className="py-12 sm:py-14 relative bg-slate-50 dark:bg-[#070707] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="resume">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-300 shadow-xs">
            <FileText size={13} />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Resume</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Interested in my detailed background? Download or view my official resume highlighting my AI/ML engineering skills, project architectures, and academic credentials.
          </p>
        </div>

        {/* Main Resume Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0f0f0f] border-2 border-slate-200 dark:border-[#222222] shadow-lg hover:border-emerald-500/40 dark:hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

          {/* Top Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-[#181818] border border-slate-200 dark:border-[#2a2a2a] text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-4">
            <Sparkles size={12} className="text-emerald-600 dark:text-emerald-400" />
            <span>Latest Version (Updated 2026)</span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
            Mayank Pandey — Resume.pdf
          </h3>
          <p className="text-xs sm:text-sm font-mono font-medium text-emerald-700 dark:text-emerald-400 mb-6">
            Full-Stack & AI Developer • VIT Bhopal (CGPA 8.44)
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a 
              href="/Mayank_Pandey_Resume.pdf" 
              download="Mayank_Pandey_Resume.pdf"
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-mono font-bold text-xs shadow-md hover:shadow-emerald-500/25 cursor-pointer"
            >
              <Download size={15} />
              <span>Download Resume (PDF)</span>
            </a>

            <a 
              href="/Mayank_Pandey_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#181818] dark:hover:bg-[#202020] border border-slate-300 dark:border-[#2c2c2c] text-slate-900 dark:text-white font-mono text-xs font-semibold hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all shadow-xs cursor-pointer"
            >
              <ExternalLink size={15} />
              <span>View Resume (PDF)</span>
            </a>
          </div>

          {/* Bottom Bento Grid */}
          <div className="grid md:grid-cols-2 gap-4 pt-5 border-t border-slate-200 dark:border-[#202020]">
            
            {/* Education Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold mb-2">
                <GraduationCap size={15} />
                <span>Education</span>
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-0.5">
                VIT Bhopal University
              </h4>
              <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-1 font-medium">
                B.Tech in Computer Science & Engineering (AIML)
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                2023 – 2027 • <strong className="text-slate-700 dark:text-slate-300">CGPA: 8.44 / 10</strong>
              </p>
            </div>

            {/* Key Certifications Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#141414] border border-slate-200 dark:border-[#262626] shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold">
                <Award size={15} />
                <span>Key Certifications</span>
              </div>
              
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Applied Machine Learning in Python</strong> (University of Michigan)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Cloud Computing & Internet of Things</strong> (NPTEL IIT Kharagpur)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Google IT Support & AWS Cloud Course</strong></span>
                </li>
              </ul>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
