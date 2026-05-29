import { AavoRidePartners } from "@/components/aavo-ride-partners";
import { Cta } from "@/components/cta";
import { Faqs } from "@/components/faqs";
import { ForDriverPartners } from "@/components/for-driver-partners";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { OurMission } from "@/components/our-mission";
import { StartJourney } from "@/components/start-journey";
import React from "react";

const Page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AavoRidePartners />
      <ForDriverPartners />
      <StartJourney />
      <OurMission />
      <Cta />
      <Faqs />
    </div>
  );
};

export default Page;
