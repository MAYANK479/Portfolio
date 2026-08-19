import { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { 
  Brain, 
  Layout, 
  Code2, 
  Server, 
  Wrench, 
  Sparkles
} from 'lucide-react'

// Interactive Spotlight Card Component
function SkillCard({ category, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl p-5 sm:p-6 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-xl border border-slate-200 dark:border-[#222222] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-md hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        category.span || ''
      }`}
    >
      {/* Radial Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.12), transparent 70%)`
          ),
        }}
      />

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-[#1c1c1c]">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl ${category.iconBg} border ${category.iconBorder} text-slate-900 dark:text-white shadow-xs group-hover:scale-105 transition-transform duration-300`}>
              {category.icon}
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {category.subtitle}
              </p>
            </div>
          </div>

          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-[#181818] border border-slate-200 dark:border-[#2a2a2a] text-slate-600 dark:text-slate-300 shrink-0">
            {category.badge}
          </span>
        </div>

        {/* Skills Tag Cloud */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -2, scale: 1.04 }}
              className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-[#161616] border border-slate-200/80 dark:border-[#262626] text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 transition-all duration-200 flex items-center gap-1.5 cursor-default select-none group/pill"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${skill.hot ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400 dark:bg-slate-600 group-hover/pill:bg-emerald-400'}`}></span>
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-4 pt-2.5 border-t border-slate-100 dark:border-[#181818] flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
        <span>{category.highlight}</span>
        <Sparkles size={11} className="text-emerald-600 dark:text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      subtitle: "Models, Pipelines & Vision",
      badge: "Core Domain",
      highlight: "VGG16 · MTCNN · XGBoost · LLMs",
      icon: <Brain size={20} className="text-emerald-600 dark:text-emerald-400" />,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
      iconBorder: "border-emerald-200 dark:border-emerald-500/30",
      span: "lg:col-span-2",
      skills: [
        { name: "Scikit-learn", hot: true },
        { name: "XGBoost", hot: true },
        { name: "TensorFlow", hot: true },
        { name: "Keras", hot: false },
        { name: "OpenCV", hot: true },
        { name: "MTCNN", hot: true },
        { name: "VGG16", hot: true },
        { name: "NLP (TF-IDF)", hot: false },
        { name: "LLMs (Gemini, Ollama, Qwen3)", hot: true }
      ]
    },
    {
      title: "Web Development",
      subtitle: "Architecture & Microservices",
      badge: "Production Ready",
      highlight: "React 19 · Next.js · FastAPI · Spring Boot",
      icon: <Layout size={20} className="text-teal-600 dark:text-teal-400" />,
      iconBg: "bg-teal-50 dark:bg-teal-500/10",
      iconBorder: "border-teal-200 dark:border-teal-500/30",
      span: "lg:col-span-1",
      skills: [
        { name: "React 19", hot: true },
        { name: "Next.js", hot: true },
        { name: "Vite", hot: true },
        { name: "Node.js", hot: false },
        { name: "Express", hot: false },
        { name: "FastAPI", hot: true },
        { name: "Spring Boot", hot: true },
        { name: "Flask", hot: false },
        { name: "Django", hot: false }
      ]
    },
    {
      title: "Programming Languages",
      subtitle: "Algorithmic & OOP Logic",
      badge: "Polyglot",
      highlight: "Python · Java · TypeScript · C++",
      icon: <Code2 size={20} className="text-blue-600 dark:text-blue-400" />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
      iconBorder: "border-blue-200 dark:border-blue-500/30",
      span: "lg:col-span-1",
      skills: [
        { name: "Python", hot: true },
        { name: "C++", hot: false },
        { name: "Java", hot: true },
        { name: "SQL", hot: true },
        { name: "JavaScript (ES6+)", hot: true },
        { name: "TypeScript", hot: true }
      ]
    },
    {
      title: "CS Fundamentals",
      subtitle: "Theoretical Foundations",
      badge: "Strong Foundation",
      highlight: "DSA · OOP · DBMS · OS · Networks",
      icon: <Server size={20} className="text-purple-600 dark:text-purple-400" />,
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
      iconBorder: "border-purple-200 dark:border-purple-500/30",
      span: "lg:col-span-1",
      skills: [
        { name: "Data Structures & Algorithms", hot: true },
        { name: "Object-Oriented Programming (OOP)", hot: true },
        { name: "DBMS", hot: true },
        { name: "Operating Systems", hot: false },
        { name: "Computer Networks", hot: false }
      ]
    },
    {
      title: "Tools & Databases",
      subtitle: "DevOps & Infrastructure",
      badge: "Deployment",
      highlight: "PostgreSQL · Docker · Git · Vercel",
      icon: <Wrench size={20} className="text-amber-600 dark:text-amber-400" />,
      iconBg: "bg-amber-50 dark:bg-amber-500/10",
      iconBorder: "border-amber-200 dark:border-amber-500/30",
      span: "lg:col-span-1",
      skills: [
        { name: "Git & GitHub", hot: true },
        { name: "Docker", hot: true },
        { name: "PostgreSQL", hot: true },
        { name: "MongoDB", hot: false },
        { name: "MySQL", hot: false },
        { name: "Vercel", hot: true },
        { name: "Render", hot: true }
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-14 relative bg-slate-50/70 dark:bg-[#070707] transition-colors duration-300 overflow-hidden border-t border-slate-200 dark:border-[#1a1a1a]" id="skills">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'<02.'}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Technical Arsenal</h2>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'/>'}</span>
          <div className="h-px bg-slate-200 dark:bg-[#262626] flex-grow ml-4"></div>
        </motion.div>

        {/* Dynamic Bento Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}
