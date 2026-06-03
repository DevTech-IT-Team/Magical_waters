import React from 'react'

const WaterBottles = () => {
  return (
    <section id="water-bottles" className="py-20 px-4 md:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Subtle Section Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-xs uppercase tracking-[0.3em] font-semibold">
            Water Bottles for Sale
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mt-3 font-serif">
            Heart Glass Bottles & Calm Water
          </h2>
        </div>

        {/* Balanced Grid Layout: Uses items-stretch to align left and right column heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Perfect Image Framework Container */}
          <div className="lg:col-span-5 w-full bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] shadow-inner">
              <img
                src="heartbottle.jpg"
                alt="Heart Glass Bottle for intentional hydration"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Side: Proportional Content Frame matching Left Column height */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Title & Description Card */}
            <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm flex-grow flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl text-slate-900 font-serif font-light mb-3">
                Heart Glass Water Bottle
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                A calming glass bottle crafted for daily water rituals. This elegant piece is perfect for keeping your hydration practice gentle, grounded, and beautifully intentional.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm flex flex-col justify-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium mb-1">Capacity</span>
                <span className="text-lg md:text-xl font-medium text-slate-800">500ml</span>
              </div>
              <div className="rounded-2xl bg-white p-5 border border-slate-100 shadow-sm flex flex-col justify-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium mb-1">Price</span>
                <span className="text-lg md:text-xl font-medium text-slate-800">$25</span>
              </div>
            </div>

            {/* Note Panel */}
            <div className="rounded-2xl border border-blue-100/40 bg-blue-50/30 p-5 text-slate-600 text-xs md:text-sm leading-relaxed">
              Each bottle is paired with a peaceful water image and an invitation to let your day move more slowly, gently, and with more clarity. <strong className="text-slate-700">Shipping included.</strong>
            </div>

            {/* Action Button */}
            <button className="w-full relative overflow-hidden rounded-full py-4 bg-[#1A3A8A] text-white font-medium text-sm tracking-widest transition-all duration-300 hover:bg-blue-900 shadow-md hover:shadow-lg active:scale-[0.99]">
              <span className="relative z-10 flex items-center justify-center gap-2">
                PURCHASE BOTTLE <span className="text-base">→</span>
              </span>
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WaterBottles