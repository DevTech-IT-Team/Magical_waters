import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background glow ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 mt-3 text-sm tracking-wide uppercase">
            Agreement of Service Terms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8 text-base sm:text-lg leading-relaxed bg-white/[0.02] border border-white/5 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-2xl"
        >
          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">01</span> Acceptance of Terms
            </h2>
            <p className="text-slate-300">By accessing and using this website, you explicitly agree to comply with and be bound entirely by these standard operating Terms & Conditions.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">02</span> Use of Website
            </h2>
            <p className="text-slate-300">Users explicitly agree to use this website only for lawful, verified purposes and in a structured manner that completely safeguards the rights of others.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">03</span> Products and Services
            </h2>
            <p className="text-slate-300">The specific information, products, and operational wellness services provided across this website remain subject to structural iteration or modification without prior explicit notice.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">04</span> User Accounts
            </h2>
            <p className="text-slate-300">If account authentication or registration matrices are available, users hold absolute liability for maintaining the airtight confidentiality of credentials and logs.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">05</span> Payments and Billing
            </h2>
            <p className="text-slate-300">All financial processing transactions must route through approved encryption payment systems. Rate models, subscriptions, and billing terms remain subject to standard internal reviews.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">06</span> Refund and Cancellation Policy
            </h2>
            <p className="text-slate-300">Refunds, fulfillment returns, and cancellations scale directly according to our dedicated policy frame. Clients are required to review the policy structure completely prior to a purchase step.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">07</span> Intellectual Property
            </h2>
            <p className="text-slate-300">All original website asset materials—including copy matrices, graphical vectors, logos, pictures, and underlying parameters—stand as protected properties of <span className="italic font-serif text-cyan-200">Magical-Waters</span> and cannot be copied without explicit licensing consent.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">08</span> Limitation of Liability
            </h2>
            <p className="text-slate-300">We shall not be held accountable or liable for any direct, indirect, incidental, or structural consequential damages resulting from the use or processing errors of our system or services.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">09</span> Changes to Terms
            </h2>
            <p className="text-slate-300">We maintain exclusive operational rights to update, patch, or alter these strategic Terms & Conditions at any given execution cycle without advanced notice protocols.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">10</span> Contact Information
            </h2>
            <p className="mb-4 text-slate-300">For legal alignment questions regarding these Terms & Conditions framework, connect here:</p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 text-base text-slate-300">
              <p><strong className="text-white">Email:</strong> Laura@magical-waters.com</p>
              <p><strong className="text-white">Phone:</strong> 850-829-0606</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsConditions;