import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Our Story' },
    { href: '#services', label: 'Offerings' },
    { href: '#contact', label: 'Connect' }
  ]

  return (
    <footer className="bg-blue-950 text-white relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 fill-white"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-lg shadow-blue-300/20">
                💧
              </div>
              <span className="text-xl tracking-wide">
                <span className="italic font-serif">Magical</span> Waters
              </span>
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              This service is for spiritual and wellness support and is not a substitute for medical treatment.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/90">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-white/90">
              Connect
            </h4>
            <div className="space-y-3">
              <motion.a
                href="https://www.linkedin.com/in/laura-gardner-86063b3b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  in
                </span>
                Laura Gardner
              </motion.a>
              <motion.a
                href="https://magical-waters.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm group"
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  🌐
                </span>
                magical-waters.com
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm">
            &copy; {currentYear} <span className="italic font-serif">Magical Waters</span>. Crafted with intention.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Calm is always welcome</span>
            <span>💧</span>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-full max-w-lg pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-blue-100 to-transparent" />
        <svg viewBox="0 0 1440 320" className="w-full h-28">
          <path fill="#3B82F6" fillOpacity="0.15" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,218.7C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer
