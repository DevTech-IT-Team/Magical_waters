import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-20 relative overflow-hidden">
      {/* Decorative background glow ambient elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-slate-400 mt-3 text-sm tracking-wide uppercase">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
              <span className="text-xs text-cyan-500/50 font-mono">01</span> Introduction
            </h2>
            <p className="text-slate-300">At Magical-Waters, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">02</span> Information We Collect
            </h2>
            <p className="mb-3 text-slate-300">We may collect the following info securely:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
              {[
                "Name & Identity Information",
                "Email Address",
                "Phone Number",
                "Billing or Shipping Address",
                "Payment Information Securely",
                "Information submitted via contact forms"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-300 text-base">
                  <span className="text-cyan-400 mt-1.5">💧</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">03</span> How We Use Your Information
            </h2>
            <p className="mb-3 text-slate-300">The information we collect may be utilized to:</p>
            <ul className="space-y-2.5 pl-2">
              {[
                "Provide our specialized products and workflow wellness services.",
                "Respond comprehensively to inquiries and client support requests.",
                "Optimize application framework performance and user interactions.",
                "Circulate optional updates, newsletters, or intentional marketing communication.",
                "Securely process electronic transactions and billing items."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-slate-300 text-base">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">04</span> Cookies and Tracking
            </h2>
            <p className="text-slate-300">Our website may use cookies and similar technologies to improve user experience, analyze website traffic, and personalize dynamic content safely.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">05</span> Third-Party Services
            </h2>
            <p className="text-slate-300">We may use trusted third-party services such as analytics providers, payment processors, marketing platforms, and customer support tools to help operate our secure interactions efficiently.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">06</span> Data Security
            </h2>
            <p className="text-slate-300">We implement appropriate and robust technical security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="border-b border-white/5 pb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">07</span> Your Rights
            </h2>
            <p className="text-slate-300">You retain full rights to request access to, structural correction of, or permanent deletion of your personal data records by initiating verification contact with us.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="text-xs text-cyan-500/50 font-mono">08</span> Contact Us
            </h2>
            <p className="mb-4 text-slate-300">If you have any questions regarding this Privacy Policy framework, please reach out directly:</p>
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

export default PrivacyPolicy;