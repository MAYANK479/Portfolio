import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, Cloud, Cpu, Server, Wifi, ArrowRight } from 'lucide-react'

export default function Certifications() {
  const [flippedCards, setFlippedCards] = useState({})

  // 100% Exact Certifications from Mayank Pandey's Resume
  const certificates = [
    {
      id: 1,
      title: "Introduction to Internet of Things",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "Apr 2026",
      badge: "NPTEL Certified",
      badgeColor: "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border-emerald-500/30",
      issuerColor: "text-emerald-700 dark:text-emerald-400",
      icon: <Wifi className="text-emerald-700 dark:text-emerald-400" size={20} />,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/20",
      description: "Completed comprehensive NPTEL curriculum on IoT architectures, sensor networks, wireless protocols, embedded systems, and cloud integration from IIT Kharagpur.",
      skills: ["IoT Architectures", "Sensors", "Embedded Protocols", "Cloud Connectivity"]
    },
    {
      id: 2,
      title: "Google IT Support Certificate",
      issuer: "Google Career Certificates",
      date: "Jan 2026",
      badge: "Google Certified",
      badgeColor: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/10 border-blue-500/30",
      issuerColor: "text-blue-700 dark:text-blue-400",
      icon: <Server className="text-blue-700 dark:text-blue-400" size={20} />,
      iconBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-500/20",
      description: "Professional certification validating computer networking fundamentals, system administration, operating systems management, and cybersecurity best practices.",
      skills: ["Computer Networking", "System Administration", "Security", "Operating Systems"]
    },
    {
      id: 3,
      title: "AWS Certification Course",
      issuer: "Intellipaat",
      date: "Sep 2025",
      badge: "AWS Certified",
      badgeColor: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10 border-amber-500/30",
      issuerColor: "text-amber-700 dark:text-amber-500",
      icon: <Cloud className="text-amber-700 dark:text-amber-400" size={20} />,
      iconBg: "bg-amber-50 dark:bg-amber-500/10 border-amber-500/20",
      description: "Intensive training in AWS Cloud architecture, compute (EC2), storage (S3), identity & access management (IAM), VPC networking, and cloud deployment pipelines.",
      skills: ["AWS Cloud", "EC2", "S3", "IAM", "VPC Networking"]
    },
    {
      id: 4,
      title: "Applied Machine Learning in Python",
      issuer: "University of Michigan",
      date: "Nov 2025",
      badge: "UMich Certified",
      badgeColor: "text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-400/10 border-emerald-500/30",
      issuerColor: "text-emerald-700 dark:text-emerald-400",
      icon: <Cpu className="text-emerald-700 dark:text-emerald-400" size={20} />,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/20",
      description: "Applied machine learning specialization focusing on Scikit-learn, supervised classification, feature engineering, model evaluation, and cross-validation techniques.",
      skills: ["Python", "Scikit-Learn", "Feature Engineering", "Model Evaluation"]
    },
    {
      id: 5,
      title: "Cloud Computing",
      issuer: "NPTEL (IIT Kharagpur)",
      date: "Apr 2025",
      badge: "NPTEL Certified",
      badgeColor: "text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-400/10 border-purple-500/30",
      issuerColor: "text-purple-700 dark:text-purple-400",
      icon: <Award className="text-purple-700 dark:text-purple-400" size={20} />,
      iconBg: "bg-purple-50 dark:bg-purple-500/10 border-purple-500/20",
      description: "Rigorous coursework on distributed systems, virtualization techniques, resource management, cloud storage, and IaaS/PaaS/SaaS architectures from IIT Kharagpur.",
      skills: ["Cloud Computing", "Virtualization", "Distributed Systems", "Resource Scaling"]
    }
  ]

  const toggleCard = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="py-12 sm:py-14 relative bg-slate-100/80 dark:bg-[#090909] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="certifications">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-block font-mono text-[11px] font-semibold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase">
            VERIFIED CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto"></div>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Hover or tap any card to see details
          </p>
        </div>

        {/* 3D Folding Flip Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => {
            const isFlipped = !!flippedCards[cert.id]

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="h-[210px] w-full [perspective:1000px] cursor-pointer group"
                onMouseEnter={() => setFlippedCards(prev => ({ ...prev, [cert.id]: true }))}
                onMouseLeave={() => setFlippedCards(prev => ({ ...prev, [cert.id]: false }))}
                onClick={() => toggleCard(cert.id)}
              >
                <div
                  className={`relative h-full w-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] shadow-sm dark:shadow-md ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-[#222222] p-5 flex flex-col justify-between [backface-visibility:hidden] hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-xs hover:shadow-md transition-all">
                    
                    {/* Top Row: Icon & Status Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-xl border ${cert.iconBg} shadow-xs`}>
                        {cert.icon}
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${cert.badgeColor}`}>
                        {cert.badge}
                      </span>
                    </div>

                    {/* Middle: Title & Issuer */}
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center justify-between mt-1.5 font-mono text-xs">
                        <span className={`font-semibold ${cert.issuerColor}`}>
                          {cert.issuer}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Prompt */}
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                      <span>Hover to see details</span>
                      <ArrowRight size={11} className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>

                  </div>

                  {/* BACK OF CARD (FOLDED STATE) */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-white dark:bg-[#161616] border border-emerald-500/50 dark:border-emerald-500/40 p-5 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-md">
                    
                    <div>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div>
                      {/* Skills Tags on Back */}
                      <div className="flex flex-wrap gap-1 mb-2.5">
                        {cert.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-[#202020] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#333333]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Issuer & Date footer */}
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700 dark:text-emerald-400 border-t border-slate-200 dark:border-[#2a2a2a] pt-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>{cert.issuer} • {cert.date}</span>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
