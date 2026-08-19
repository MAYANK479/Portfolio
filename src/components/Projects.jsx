import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react'
import { GithubIcon } from './Icons'

// 3D Perspective Tilt Image Component
function ProjectTiltImage({ src, alt, index }) {
  const x = useMotionValue(0.3)
  const y = useMotionValue(0.35)

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 })

  // 3D Rotation transforms
  const rotateX = useTransform(mouseYSpring, [0, 1], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [0, 1], ["-12deg", "12deg"])
  const glareX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / rect.width)
    y.set(mouseY / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.3)
    y.set(0.35)
  }

  return (
    <div 
      className="relative [perspective:1200px] w-full py-1 group/tilt cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-[#282828] bg-slate-900 shadow-xl group-hover/tilt:border-emerald-500/60 dark:group-hover/tilt:border-emerald-400/60 transition-colors duration-500"
      >
        <div className="overflow-hidden aspect-[16/10] bg-slate-950">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover group-hover/tilt:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Dynamic Interactive Glare Sheen */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover/tilt:opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(500px circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.45), transparent 60%)`
          }}
        />

        {/* Ambient Dark Gradient Shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50 group-hover/tilt:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>

      {/* Decorative Glow Shadow Behind Tilted Card */}
      <div className="absolute inset-x-8 -bottom-2 h-8 bg-emerald-500/20 dark:bg-emerald-500/20 blur-xl -z-10 rounded-full opacity-60 group-hover/tilt:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

export default function Projects() {
  const projects = [
    {
      title: "SentinelAI - Real-time Fraud Detection Platform",
      category: "Full-Stack & Machine Learning",
      description: "High-performance fraud detection platform integrating rule-based heuristics with an XGBoost/Random Forest ML pipeline for real-time transaction risk scoring. Dual-backend system: Spring Boot for business logic and FastAPI microservice for ML inference over REST. Built with a live monitoring dashboard in Next.js & TypeScript, deployed on Render.",
      bullets: [
        "Rule-based heuristics integrated with XGBoost/Random Forest ML pipeline for real-time risk scoring.",
        "Dual-backend: Spring Boot for core business logic & FastAPI microservice serving ML inference over REST.",
        "Live monitoring dashboard in Next.js & TypeScript tracking flagged transactions and anomaly trends.",
        "Deployed to Render with CI-friendly structure for end-to-end testing."
      ],
      tags: ["TypeScript", "Next.js", "FastAPI", "Spring Boot", "XGBoost", "Render"],
      github: "https://github.com/MAYANK479/SentinelAI",
      live: "https://sentinel-dashboard-zv4v.onrender.com/",
      image: "/sentinelai.jpg",
      featured: true
    },
    {
      title: "careerpilot-ai - Automated Career Platform",
      category: "Full-Stack AI Platform",
      description: "Comprehensive career preparation platform featuring ATS resume analysis, keyword-gap detection, and intelligent job matching. Implemented a mock interview simulator powered entirely by locally-hosted AI models (Ollama + Qwen3) for 100% free private inference with zero API cost.",
      bullets: [
        "ATS resume analysis, keyword-gap detection, and intelligent job matching algorithms.",
        "Mock interview simulator powered by local AI (Ollama + Qwen3) for 100% free and private inference.",
        "Resume-parsing and feedback pipeline generating section-wise actionable improvement suggestions.",
        "Optimized frontend utilizing React 19 & Vite for low-latency UX, deployed on Vercel."
      ],
      tags: ["React 19", "Node.js", "Vite", "Ollama", "Qwen3", "Vercel"],
      github: "https://github.com/MAYANK479/careerpilot-ai",
      live: "https://careerpilot-ai-two-ebon.vercel.app/",
      image: "/careerpilot.jpg",
      featured: true
    },
    {
      title: "Smart Expense Tracker",
      category: "Full-Stack Financial Platform",
      description: "Full-stack expense tracking solution featuring automated receipt OCR powered by the Gemini AI API for line-item extraction. Implemented monthly budget alerts, category-wise spend analytics, and CSV bank statement parsing with normalized PostgreSQL schema.",
      bullets: [
        "Automated receipt OCR powered by Gemini AI API for line-item extraction.",
        "Monthly budget alerts, category-wise spend analytics, and CSV bank statement parsing.",
        "Normalized PostgreSQL schema for transactions, budgets, and categories for fast reporting.",
        "100% integration test coverage ensuring enterprise reliability, deployed on Vercel & Render."
      ],
      tags: ["React 18", "Express", "PostgreSQL", "Gemini AI", "Vercel", "Render"],
      github: "https://github.com/MAYANK479/smart-expense-tracker",
      live: "https://smart-expense-tracker-sable.vercel.app/",
      image: "/expense.jpg",
      featured: true
    },
    {
      title: "Deepfake Detection Model Comparison",
      category: "Deep Learning & Computer Vision",
      description: "Benchmarked 6 deep learning architectures (VGG16+MTCNN, CNN, LSTM, CNN+LSTM, InceptionV3, InceptionV3+Attention) for binary deepfake image classification across 2 datasets (12K+ images). Identified CNN+InceptionV3+Attention as top performer (99.66% train, 100% val accuracy).",
      bullets: [
        "Benchmarked 6 deep architectures (VGG16+MTCNN, CNN, LSTM, InceptionV3, Attention) across 12K+ images.",
        "CNN+InceptionV3+Attention achieved 99.66% training and 100% validation accuracy on Dataset 1.",
        "Evaluated accuracy and loss trends across train/validation splits to surface overfitting and generalization gaps.",
        "Structured codebase into reproducible notebooks with a shared preprocessing pipeline."
      ],
      tags: ["Python", "TensorFlow", "Keras", "Computer Vision", "VGG16", "MTCNN", "InceptionV3"],
      github: "https://github.com/MAYANK479/deepfake-detection-comparison",
      live: null,
      image: "/deepfake.jpg",
      featured: true
    }
  ]

  return (
    <section className="py-12 sm:py-14 relative bg-white dark:bg-[#0a0a0a] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'<03.'}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Featured Projects</h2>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'/>'}</span>
          <div className="h-px bg-slate-200 dark:bg-[#262626] flex-grow ml-4"></div>
        </motion.div>

        {/* Projects List - Compacted */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center p-5 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 group shadow-md hover:shadow-xl dark:hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] relative"
            >
              
              {/* UNIFORM LEFT: 3D Tilted Image Preview (6 cols) */}
              <div className="lg:col-span-6">
                <ProjectTiltImage 
                  src={project.image} 
                  alt={project.title} 
                  index={index}
                />
              </div>

              {/* UNIFORM RIGHT: Project Details & Single Action Button Row (6 cols) */}
              <div className="lg:col-span-6 space-y-3">
                
                {/* Category Badge Only */}
                <div>
                  <span className="inline-block font-mono text-emerald-700 dark:text-emerald-400 text-[11px] font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Bullets directly from resume */}
                <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400 list-disc pl-4">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#262626] text-[11px] font-mono text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Single, Clean, Dedicated Action Buttons Row */}
                <div className="pt-3 flex flex-wrap items-center gap-3 border-t border-slate-200 dark:border-[#202020]">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono font-bold text-xs shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      <ExternalLink size={13} />
                      <span>Launch Live Demo</span>
                    </a>
                  )}

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-[#181818] border border-slate-300 dark:border-[#2a2a2a] text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 font-mono font-semibold text-xs transition-all shadow-xs hover:scale-105 active:scale-95"
                  >
                    <GithubIcon size={14} />
                    <span>{project.live ? 'View Code' : 'Explore Codebase on GitHub'}</span>
                    {!project.live && <ArrowUpRight size={12} />}
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* View More on GitHub Banner - Compacted */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <a 
            href="https://github.com/MAYANK479?tab=repositories" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-[#141414] border border-slate-900 dark:border-[#262626] hover:border-emerald-500 dark:hover:border-emerald-400 text-white dark:text-slate-200 hover:text-emerald-400 dark:hover:text-emerald-300 font-mono text-xs font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <FolderGit2 size={16} className="text-emerald-400" />
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
