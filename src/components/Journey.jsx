import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react'

export default function Journey() {
  const milestones = [
    {
      period: "2023 - 2027",
      role: "B.Tech CSE with Specialisation in AIML",
      institution: "VIT Bhopal University",
      location: "Bhopal, India",
      type: "education",
      icon: <GraduationCap size={16} className="text-emerald-600 dark:text-emerald-400" />,
      description: "Specializing in Artificial Intelligence & Machine Learning with an academic CGPA of 8.44/10. Core coursework in Data Structures & Algorithms, OOP, DBMS, Operating Systems, and Computer Networks.",
      skills: ["CGPA: 8.44/10", "AI & ML", "Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"]
    },
    {
      period: "2023 - Present",
      role: "Full-Stack & Machine Learning Systems",
      institution: "Production Projects & Software Engineering",
      location: "Open Source / Independent",
      type: "experience",
      icon: <Briefcase size={16} className="text-emerald-600 dark:text-emerald-400" />,
      description: "Engineered and deployed production platforms: SentinelAI (dual-backend fraud detection with Spring Boot & FastAPI), careerpilot-ai (local AI ATS simulator on Vite & Ollama), Smart Expense Tracker (Gemini AI OCR), and deep learning computer vision benchmarks.",
      skills: ["React 19", "Next.js", "FastAPI", "Spring Boot", "PostgreSQL", "Docker", "XGBoost", "TensorFlow"]
    },
    {
      period: "2025 - 2026",
      role: "Professional Certifications & Verified Training",
      institution: "NPTEL (IIT Kharagpur), Google, UMich, Intellipaat",
      location: "Verified Credentials",
      type: "certification",
      icon: <Award size={16} className="text-emerald-600 dark:text-emerald-400" />,
      description: "Earned industry credentials in IoT (NPTEL IIT Kharagpur), Cloud Computing (NPTEL IIT Kharagpur), Google IT Support, Applied Machine Learning in Python (University of Michigan), and AWS Cloud.",
      skills: ["IoT", "Cloud Computing", "AWS", "Applied Machine Learning", "Google IT Support"]
    }
  ]

  return (
    <section className="py-12 sm:py-14 relative bg-slate-100/70 dark:bg-[#0d0d0d] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="journey">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'<04.'}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Journey & Education</h2>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'/>'}</span>
          <div className="h-px bg-slate-200 dark:bg-[#262626] flex-grow ml-4"></div>
        </div>

        {/* Timeline Container - Compacted */}
        <div className="relative pl-6 md:pl-10 space-y-6">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-2.5 md:left-4 top-3 bottom-3 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400/40 to-slate-300 dark:to-[#222222]"></div>

          {milestones.map((item, index) => (
            <motion.div 
              key={item.role}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative pl-6 md:pl-8 group"
            >
              {/* Timeline Glowing Dot */}
              <div className="absolute -left-[29px] md:-left-[35px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#121212] border-2 border-emerald-500 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              </div>

              {/* Card */}
              <div className="p-5 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#222222] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 transition-all duration-300 shadow-xs hover:shadow-md">
                
                {/* Period & Location Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role and Institution */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {item.role}
                </h3>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5 mb-2 font-semibold">
                  {item.institution}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-slate-100 dark:border-[#222222]">
                  {item.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-50 dark:bg-[#181818] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#282828]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
