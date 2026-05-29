import React from "react";
import { UserPlus, FileUp, ShieldCheck, Car } from "lucide-react";

interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    number: 1,
    title: "Register",
    description: "Quick sign-up with basic details",
    icon: <UserPlus className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Upload Docs",
    description: "Submit KYC & vehicle papers",
    icon: <FileUp className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Get Verified",
    description: "Fast 24h background verification",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
  },
  {
    number: 4,
    title: "Start Driving",
    description: "Accept trips and earn instantly",
    icon: <Car className="w-8 h-8 text-white" />,
  },
];

export const StartJourney = () => {
  return (
    <section className="w-full py-20 bg-white flex flex-col items-center relative">
      <div className="absolute top-0 left-[-272px] size-[570px] bg-primary rounded-full blur-[100px] pointer-events-none opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight max-w-2xl font-sans">
          Start Your Journey in <span className="text-primary">4 Steps</span>
        </h2>

        {/* Paragraph */}
        <p className="text-neutral-500 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
          We provide the tools and connections to help professional partners
          build a sustainable business with complete freedom.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mt-16 w-full max-w-5xl">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Icon Container */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/35">
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-neutral-900 mt-6 font-sans">{step.title}</h3>

              {/* Step Description */}
              <p className="text-sm text-neutral-500 mt-2 max-w-[220px] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
