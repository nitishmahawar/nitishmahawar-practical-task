import React from "react";

export const Cta = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background flex justify-center items-center">
      <div className="relative w-full max-w-6xl overflow-hidden bg-[#121314] rounded-[32px] px-8 py-16 text-center flex flex-col items-center justify-center border border-neutral-800/40">
        {/* Subtle orange/red glow in the top-right corner */}
        <div className="absolute top-[-192px] right-[-192px] w-[384px] h-[384px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-30" />

        {/* Content */}
        <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl font-sans">
          Ready to Grow with <span className="text-primary">AAVORIDE</span>{" "}
          Partner?
        </h2>

        <p className="relative z-10 text-muted text-base mt-6 max-w-2xl leading-relaxed">
          Join thousands of drivers, fleet agencies, and car owners earning more
          with flexible opportunities, secure payouts, and a trusted mobility
          platform.
        </p>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row gap-4.5 mt-10 w-full sm:w-auto justify-center">
          <a
            href="#book"
            className="px-9 h-16 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-[16px] leading-none inline-flex items-center justify-center shadow-lg shadow-primary/15 cursor-pointer"
          >
            Book Via App
          </a>
          <a
            href="#join"
            className="px-9 py-4 bg-[#2A2B2D] h-16 hover:bg-[#343537] text-white font-bold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-[16px] leading-none inline-flex items-center justify-center border border-neutral-700 cursor-pointer"
          >
            Join as a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

