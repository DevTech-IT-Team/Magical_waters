import React from 'react';

const offerings = [
  {
    icon: "�",
    title: "Intentional Water Bottles",
    image: "/image2.jpeg",
    description:
      "Beautiful glass bottles designed for calm hydration rituals, enhanced with gentle frequency support and a soft, intentional presence.",
    accent: "from-sky-500/20 to-blue-500/20",
  },
  {
    icon: "🌈",
    title: "Ocean-Inspired Rituals",
    image: "/image3.jpeg",
    description:
      "Rituals that feel like a breath of ocean air — designed to realign your day, soothe your nervous system, and invite a clearer mind.",
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "🌿",
    title: "Personal Support Sessions",
    image: "/image0.jpeg",
    description:
      "One-on-one guidance to help you create gentle practices, clear intentions, and supportive rhythm for your daily life.",
    accent: "from-violet-500/20 to-indigo-500/20",
  },
];

const WhatWeOffer = () => {
  return (
    <section id="offerings" className="relative py-24 px-4 md:px-6 font-serif overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-violet-300/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-300/10 to-sky-300/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-12 bg-blue-500/40"></div>
            <span className="text-blue-600 font-medium uppercase tracking-[0.3em] text-xs">
              Our Offerings
            </span>
            <div className="h-[1px] w-12 bg-blue-500/40"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-slate-800 tracking-tight mb-4">
            What We Offer
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Calm tools crafted with intention, frequency support, and love — designed to
            support your inner world and uplift quiet daily rituals.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 rounded-[2rem] overflow-hidden
                         hover:-translate-y-2 transition-all duration-500
                         shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)]"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Card Image */}
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-slate-50/50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="relative z-10 p-8 pt-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex items-center justify-center mb-5 
                              -mt-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-wide">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-400 mb-4 group-hover:w-16 transition-all duration-500"></div>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
