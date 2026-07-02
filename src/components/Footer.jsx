import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'Our Story' },
    { href: '/#services', label: 'Offerings' },
    { href: '/#contact', label: 'Connect' }
  ]

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' }
  ]

  const linkClass = "text-slate-300 hover:text-white transition-colors duration-200 text-sm block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 py-0.5"

  return (
    /* FIXED: Removed 'border-t border-blue-900/40' to get rid of the line above the wave */
    <footer className="bg-gradient-to-b from-blue-950 to-slate-950 text-white relative overflow-hidden">

      {/* Decorative top wave */}
      {/* ================= Premium Animated Background ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Layer 1 */}
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-20 fill-white dark:fill-zinc-950"
        >
          <path d="M0,0V70c80,30,160,45,260,28c120-20,180-55,310-40c110,13,185,65,310,48c110-15,190-80,320-28V0Z" />
        </svg>

        {/* Layer 2 */}
        <motion.svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-24 fill-cyan-300/10"
          animate={{ x: [0, -20, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M0,30C120,90,250,0,420,40C610,85,720,120,930,60C1050,25,1140,10,1200,45V0H0Z" />
        </motion.svg>

        {/* Main Glow */}
        <motion.div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,.18), transparent 70%)"
          }}
          animate={{
            opacity: [.25, .5, .25],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />

        {/* Side Glow */}
        <motion.div
          className="absolute -left-24 top-32 w-80 h-80 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,.15), transparent 70%)"
          }}
          animate={{
            x: [-10, 20, -10],
            opacity: [.2, .4, .2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
        />

        {/* Blur Bubbles */}
        {[
          { x: "10%", y: "40%", s: 90 },
          { x: "82%", y: "30%", s: 110 },
          { x: "62%", y: "70%", s: 70 },
          { x: "35%", y: "65%", s: 100 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10 blur-3xl"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 12, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Premium Floating Droplets */}
        {[
          { left: "8%", top: "52%", size: 10, delay: 0 },
          { left: "22%", top: "28%", size: 7, delay: 1 },
          { left: "40%", top: "72%", size: 8, delay: 2 },
          { left: "58%", top: "18%", size: 12, delay: .8 },
          { left: "74%", top: "58%", size: 7, delay: 2.8 },
          { left: "90%", top: "36%", size: 10, delay: 1.6 },
        ].map((d, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: d.left,
              top: d.top
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, 5, -5],
              opacity: [.25, .8, .25]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: d.delay,
              ease: "easeInOut"
            }}
          >
            <svg
              width={d.size}
              height={d.size * 1.45}
              viewBox="0 0 30 42"
              className="fill-cyan-400/50 drop-shadow-[0_0_12px_rgba(34,211,238,.6)]"
            >
              <path d="M15 0C15 0 0 17.14 0 27C0 35.28 6.72 42 15 42C23.28 42 30 35.28 30 27C30 17.14 15 0 15 0Z" />
            </svg>
          </motion.div>
        ))}

        {/* Sparkles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-300"
            style={{
              width: 2,
              height: 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 2, 0.5]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="bg-white/5 p-1 rounded-xl backdrop-blur-sm border border-white/10 shadow-inner">
                <img src={logo} alt="Magical Waters Logo" className="h-16 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]" />
              </div>
              <span className="text-xl font-medium tracking-wide text-white">
                <span className="italic font-serif font-semibold text-cyan-300">Magical</span> Waters
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              This service is for spiritual and wellness support and is not a substitute for medical treatment.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:col-start-7"
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5 text-cyan-400">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5 text-cyan-400">
              Connect
            </h4>
            <div className="space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/laura-gardner-86063b3b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 4 }}
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-200">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </span>
                Laura Gardner
              </motion.a>

              <motion.a
                href="https://magical-waters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 1 }}
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-200">
                  <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </span>
                magical-waters.com
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-xs tracking-wide">
            &copy; {currentYear} <span className="italic font-serif text-slate-400">Magical Waters</span>. Crafted with intention.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
            <span>Calm is always welcome</span>
            <span className="text-cyan-400 animate-pulse">💧</span>
          </div>
        </motion.div>
      </div>

      {/* Background decorative waves layout */}
      <div className="absolute bottom-0 right-0 w-full max-w-lg pointer-events-none overflow-hidden opacity-10">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-blue-100 to-transparent" />
        <svg viewBox="0 0 1440 320" className="w-full h-28">
          <path fill="#3B82F6" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,218.7C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer