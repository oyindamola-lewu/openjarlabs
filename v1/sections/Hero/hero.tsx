"use client";
import Navbar from "@/components/layout/navbar";
import SkillCards from "@/components/cards/SkillCards";
import BioBlurb from "@/components/ui/BioBlurb";

export default function Hero() {
  return (
    <div className="w-full">
      <section className="w-full min-h-[40vh] text-accent flex flex-col justify-between rounded-4xl px-4 md:px-8 p-8 items-center">
        <Navbar />
        <SkillCards />
      </section>
      <BioBlurb />
    </div>
  );
}
