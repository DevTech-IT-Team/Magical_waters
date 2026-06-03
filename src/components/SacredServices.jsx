import React from 'react';

const SacredServices = ({ onServiceSelect }) => {
  const services = [
    {
      title: "Reiki Session",
      description: "A gentle energy session to support balance, calm, and emotional clarity.",
      accent: "#E0F2FE", // Soft ocean blue reflection
      iconColor: "#0284C7",
      // Custom inline SVG Icon replacing the emoji
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 11 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      options: [
        { label: "In Person Session", price: "$60", duration: "60 min" },
        { label: "Remote Healing", price: "$50", duration: "45 min" }
      ]
    },
    {
      title: "Massage & Energy Care",
      description: "A soothing body and energy treatment designed to help you release tension.",
      accent: "#ECFDF5", // Gentle healing water green
      iconColor: "#16A34A",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 18 11 20z" />
          <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
        </svg>
      ),
      options: [{ label: "Full Session", price: "$80", duration: "90 min" }]
    },
    {
      title: "Water Bottle Rituals",
      description: "Beautiful glass bottles designed for calm hydration and slow, intentional living.",
      accent: "#F0FDFA", // Luminescent rainbow water teal
      iconColor: "#2563EB",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8.5 2h7M10 2v3h4V2M9 5h6v13a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V5z" />
          <path d="M9 11h6M9 15h6" />
        </svg>
      ),
      options: [{ label: "Heart Bottle", price: "$25", duration: "Shipping included" }]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 px-4 md:px-6 font-serif overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/ocean-bg.png')`
      }}
    >
      {/* Calm Cream Shade Overlay */}
      <div className="absolute inset-0 bg-[#F7F4F0]/92 backdrop-blur-[3px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-4 w-24 h-24 rounded-full bg-sky-100/70 blur-3xl" />
          <div className="flex items-center justify-center gap-4 mb-3 relative z-10">
            <div className="h-[1px] w-10 bg-slate-300"></div>
            <span className="text-slate-400 font-light uppercase tracking-[0.4em] text-[10px]">Offerings</span>
            <div className="h-[1px] w-10 bg-slate-300"></div>
          </div>
          <h2 className="text-slate-800 text-4xl md:text-5xl font-light tracking-wide relative z-10">
            Healing Offerings
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto leading-relaxed relative z-10">
            Calming water rituals and supportive sessions designed to help you move through each day with more ease.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group h-full">
              
              {/* Perfectly Balanced Organic Quatrefoil Shape */}
              <div 
                className="relative w-56 h-56 mb-8 cursor-pointer drop-shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                onClick={() => onServiceSelect(service)}
              >
                <svg 
                  className="absolute inset-0 w-full h-full transform transition-all duration-1000 ease-out group-hover:scale-105" 
                  viewBox="0 0 200 200"
                >
                  <path 
                    d="M 100 35 
                       C 120 35, 135 50, 135 70 
                       C 135 90, 150 105, 170 105 
                       C 190 105, 165 140, 145 145 
                       C 125 150, 120 165, 100 165 
                       C 80 165, 75 150, 55 145 
                       C 35 140, 10 105, 30 105 
                       C 50 105, 65 90, 65 70 
                       C 65 50, 80 35, 100 35 Z" 
                    fill={service.accent} 
                    className="transition-colors duration-500"
                  />
                </svg>
                
                {/* Clean SVG Vector Icon Integration */}
                <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: service.iconColor }}>
                  {service.iconSvg}
                </div>
              </div>

              {/* Minimal Text Container Card */}
              <div className="text-center w-full max-w-sm bg-white/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:bg-white/70 flex flex-col justify-between h-full min-h-[540px]">
                <div>
                  <h3 className="text-slate-800 text-xl font-medium mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 italic font-light px-2">
                    "{service.description}"
                  </p>
                  
                  {/* Pricing Architecture */}
                  <div className="space-y-5 mb-8">
                    {service.options.map((opt, i) => (
                      <div key={i} className="flex flex-col items-center border-b border-slate-200/40 last:border-0 pb-4 last:pb-0">
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-1.5">{opt.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[#D3755E] font-medium text-base">{opt.price}</span>
                          <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                          <span className="text-slate-400 text-xs font-light tracking-wide">{opt.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text-Link Button */}
                <button 
                  className="relative py-2 px-4 transition-all duration-300 group/btn mt-4"
                  onClick={() => onServiceSelect(service)}
                >
                  <span className="relative z-10 text-slate-700 group-hover/btn:text-slate-900 font-medium text-xs tracking-[0.2em] flex items-center gap-2">
                    LEARN MORE <span className="transition-transform duration-300 transform group-hover/btn:translate-x-1.5">→</span>
                  </span>
                  <div className="absolute bottom-1 left-4 right-4 h-[1px] bg-slate-400 transform scale-x-70 group-hover/btn:scale-x-100 transition-transform duration-300 origin-center"></div>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacredServices;