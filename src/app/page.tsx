"use client";

import { Hero } from "@/components/sections/Hero";
import { WhyNow } from "@/components/sections/WhyNow";
import { Mission } from "@/components/sections/Mission";
import { WhyAIOS } from "@/components/sections/WhyAIOS";
import { Architecture } from "@/components/sections/Architecture";
import { DevStatus } from "@/components/sections/DevStatus";
import { Roadmap } from "@/components/sections/Roadmap";
import { Technology } from "@/components/sections/Technology";
import { OpenSource } from "@/components/sections/OpenSource";
import { Founder } from "@/components/sections/Founder";
import { JoinTeam } from "@/components/sections/JoinTeam";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyNow />
      <Mission />
      <WhyAIOS />
      <Architecture />
      <DevStatus />
      <Roadmap />
      <Technology />
      <OpenSource />
      <Founder />
      <JoinTeam />
      <Footer />
    </main>
  );
}
