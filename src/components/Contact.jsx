import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, MessageSquare, Check, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mayankpandey1331@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <footer className="py-12 sm:py-14 relative bg-white dark:bg-[#0a0a0a] transition-colors duration-300 border-t border-slate-200 dark:border-[#1a1a1a]" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'<05.'}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Get In Touch</h2>
          <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm font-semibold">{'/>'}</span>
          <div className="h-px bg-slate-200 dark:bg-[#222222] flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Contact Details (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Let's Build Something <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Extraordinary.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                Open to Full-Stack & AI Software Engineering opportunities, project collaborations, and discussions.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-2.5 pt-1">
              
              {/* Email Card with Copy */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] flex items-center justify-between hover:border-emerald-500/40 transition-all shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">EMAIL DIRECT</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white font-medium">mayankpandey1331@gmail.com</div>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2e2e2e] text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-xs cursor-pointer"
                >
                  {copied ? <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><Check size={12} /> Copied</span> : 'Copy'}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a 
                href="https://www.linkedin.com/in/mayank-pandey1331/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] flex items-center justify-between hover:border-emerald-500/40 hover:bg-slate-100/80 dark:hover:bg-[#151515] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <LinkedinIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">LINKEDIN</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">in/mayank-pandey1331</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a 
                href="https://github.com/MAYANK479" 
                target="_blank" 
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] flex items-center justify-between hover:border-emerald-500/40 hover:bg-slate-100/80 dark:hover:bg-[#151515] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <GithubIcon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">GITHUB</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">github.com/MAYANK479</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] flex items-center gap-3 shadow-xs">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold">LOCATION</div>
                  <div className="text-xs sm:text-sm font-mono text-slate-900 dark:text-white font-medium">Bhopal, India</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column - Contact Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-7 p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-[#121212] border border-slate-200 dark:border-[#222222] shadow-lg relative overflow-hidden"
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <MessageSquare size={18} className="text-emerald-600 dark:text-emerald-400" />
              <span>Send a Message</span>
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-4">
              Fill out the form below and I will respond to your inquiry promptly.
            </p>

            {formSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-500/30 text-center space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-1">
                  <Check size={20} />
                </div>
                <h5 className="text-slate-900 dark:text-white font-bold text-base">Message Sent Successfully!</h5>
                <p className="text-slate-600 dark:text-slate-300 text-xs">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">YOUR NAME</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Recruiter / Hiring Manager" 
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-300 dark:border-[#282828] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">YOUR EMAIL</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com" 
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-300 dark:border-[#282828] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">SUBJECT</label>
                  <input 
                    type="text" 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Full-Stack / AI Opportunity" 
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-300 dark:border-[#282828] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-700 dark:text-slate-300 mb-1 font-semibold">MESSAGE</label>
                  <textarea 
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Mayank, I came across your portfolio and would like to discuss..." 
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#181818] border border-slate-300 dark:border-[#282828] text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500 transition-colors resize-none shadow-xs"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3 rounded-xl font-mono font-bold text-xs cursor-pointer"
                >
                  <Send size={15} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            Designed & Engineered by <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Mayank Pandey</span>
          </div>
          <div>
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  )
}
