import React from "react";
import Image from "next/image";
import { Wallet, MapPin, Shield } from "lucide-react";
import { GooglePlay } from "./icons/google-play";
import { AppStore } from "./icons/app-store";

interface KeyPoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const keyPoints: KeyPoint[] = [
  {
    title: "High Earnings",
    description: "Earn up to 30% more per KM.",
    icon: <Wallet className="w-6 h-6 text-primary" />,
  },
  {
    title: "Intercity Trips",
    description: "Stable long-distance routes.",
    icon: <MapPin className="w-6 h-6 text-primary" />,
  },
  {
    title: "Safe & Secure",
    description: "24/7 road assistance & support.",
    icon: <Shield className="w-6 h-6 text-primary" />,
  },
];

export const ForDriverPartners = () => {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Column: Driver Partner Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Badge */}
            <span className="bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-4 py-1.5 leading-none">
              For Driver Partners
            </span>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-[1.15] tracking-tight mt-6 mb-6 font-sans">
              Become an Intercity <br className="hidden sm:inline" />
              <span className="text-primary">Cab Driver Partner</span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Join AAVORide as a driver partner and earn more with intercity and
              outstation cab trips, flexible timings, secure payouts, and 24/7
              support.
            </p>

            {/* Key Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full mb-12">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div>{point.icon}</div>
                  <h3 className="text-base font-bold text-neutral-900 mt-2 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1 leading-normal">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* App Store / Google Play Buttons */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              {/* Google Play Button */}
              <a
                href="#google-play"
                className="bg-neutral-950 hover:bg-neutral-900 text-white rounded-full px-6 py-3 flex items-center gap-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md w-full sm:w-auto justify-center"
              >
                <GooglePlay className="w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-neutral-400">
                    Get it on
                  </span>
                  <span className="text-sm font-bold text-white mt-1">
                    Google Play
                  </span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#app-store"
                className="bg-neutral-950 hover:bg-neutral-900 text-white rounded-full px-6 py-3 flex items-center gap-3.5 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md w-full sm:w-auto justify-center"
              >
                <AppStore className="w-6 h-6 shrink-0" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-medium text-neutral-400">
                    Download on the
                  </span>
                  <span className="text-sm font-bold text-white mt-1">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Mobile App Screenshot Display */}
          <div className="lg:col-span-6 relative md:flex justify-center lg:justify-end items-center w-full hidden">
            {/* Subtle glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <Image
              src="/phone.png"
              alt="AAVORide Partner Mobile App Showcase"
              width={550}
              height={800}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
