import { motion } from 'framer-motion'
import { Brain, Layers, Code, Database, School, GraduationCap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: <Brain className="text-emerald-600 dark:text-emerald-400" size={20} />,
      title: "AI & Machine Learning",
      description: "Expertise in Scikit-learn, XGBoost, TensorFlow, Keras, OpenCV, MTCNN, Transfer Learning, NLP, and LLMs."
    },
    {
      icon: <Code className="text-emerald-600 dark:text-emerald-400" size={20} />,
      title: "Programming",
      description: "Proficient in Python, SQL, JavaScript, along with foundational knowledge in Java and C++."
    },
    {
      icon: <Database className="text-emerald-600 dark:text-emerald-400" size={20} />,
      title: "Databases & Storage",
      description: "Hands-on experience designing and managing relational databases with PostgreSQL and MySQL."
    },
    {
      icon: <Layers className="text-emerald-600 dark:text-emerald-400" size={20} />,
      title: "Tools & Deployment",
      description: "Strong workflow foundation utilizing Git, Docker containerization, Vercel, and Render for modern deployments."
    }
  ]

  return (
    <section className="py-12 sm:py-14 relative bg-white dark:bg-[#0a0a0a] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'<01.'}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">About Me</h2>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'/>'}</span>
          <div className="h-px bg-slate-200 dark:bg-[#222222] flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base"
          >
            <p>
              Results-driven <strong className="text-slate-900 dark:text-white font-semibold">AI/ML &amp; Full-Stack Developer</strong> with strong foundations in Python, SQL, and JavaScript, specializing in Machine Learning, Computer Vision, and NLP.
            </p>

            <p>
              Pursuing my <strong className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science & Engineering with Specialisation in AIML</strong> at <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">VIT Bhopal University</strong> (2023 – 2027) with an academic <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">CGPA of 8.44/10</strong>.
            </p>

            <p>
              Experienced in developing end-to-end intelligent applications, training &amp; evaluating deep learning models, and building scalable full-stack web platforms backed by PostgreSQL and containerized deployments.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] shadow-xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-semibold mb-1">
                  <School size={13} />
                  <span>EDUCATION</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">VIT Bhopal University</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">B.Tech CSE (AIML) • 2023 – 2027</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] shadow-xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-semibold mb-1">
                  <GraduationCap size={13} />
                  <span>ACADEMICS</span>
                </div>
                <div className="text-slate-900 dark:text-white font-bold text-sm">CGPA: 8.44 / 10</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Bhopal, India</div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid (6 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-3"
          >
            {highlights.map((item) => (
              <div 
                key={item.title}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-slate-100/80 dark:hover:bg-[#161616] transition-all duration-300 group shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] group-hover:border-emerald-500/40 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-500/10 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
