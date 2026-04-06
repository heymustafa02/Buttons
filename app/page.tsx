"use client";

import { useState } from "react";
import { GlowButton } from "@/components/GlowButton";
import { JellySqueeze } from "@/components/JellyButton";
import { PebbleButton } from "@/components/PebbleButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PremiumLiquidButton } from "@/components/PremiumLiquidButton";
import { SwipeToConfirm } from "@/components/SwipeToConfirm";

export default function Home() {
  // 1. Store components in array
  const components = [
    <GlowButton key="glow">Donate</GlowButton>,
    <JellySqueeze key="jelly" />,
    <PebbleButton key="pebble" />,
    <PremiumLiquidButton text="Get Started" />,
    <SwipeToConfirm key="swipe" />
  ];

  // 2. Track current component
  const [index, setIndex] = useState(0);

  // 3. Navigation functions
  const next = () => {
    setIndex((prev) => (prev + 1) % components.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + components.length) % components.length);
  };

  return (
    <div className="h-screen flex items-center justify-center relative">
      
      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        className="absolute left-5 p-3 rounded-full bg-black text-white"
      >
        <ChevronLeft />
      </button>

      {/* CURRENT COMPONENT */}
      <div className="flex items-center justify-center">
        {components[index]}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        className="absolute right-5 p-3 rounded-full bg-black text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}