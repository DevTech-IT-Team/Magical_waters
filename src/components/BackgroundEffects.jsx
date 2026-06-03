import { motion } from 'framer-motion'

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute top-10 left-8 w-56 h-56 rounded-full bg-blue-200/40 blur-3xl"
        animate={{ opacity: [0.35, 0.55, 0.35], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-16 right-10 w-72 h-72 rounded-full bg-sky-200/30 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 via-white/90 to-transparent opacity-80" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[480px] h-px bg-gradient-to-r from-blue-300/20 via-blue-200/50 to-blue-300/20" />
      </div>
    </div>
  )
}

export default BackgroundEffects
