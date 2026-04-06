"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface SwipeToConfirmProps {
  onComplete?: () => void;
  className?: string;
}

export function SwipeToConfirm({
  onComplete,
  className,
}: SwipeToConfirmProps) {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    if (completed) return;
    setCompleted(true);
    onComplete?.();
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative w-[320px] h-[70px] perspective-[800px]">
        <div
          className={cn(
            "relative w-full h-full rounded-full overflow-hidden",
            "bg-gradient-to-b from-[#d4dade] to-[#c5c8cb]",
            "shadow-[0_20px_35px_rgba(0,0,0,0.2),0_8px_15px_rgba(0,0,0,0.15)]",
            completed && "swipe-completed"
          )}
        >
          {/* Glass */}
          <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden z-[8] glass-sheen" />

          {/* Progress */}
          <div
            className={cn(
              "absolute top-0 left-0 h-full rounded-full overflow-hidden z-[1] progress",
              completed ? "w-full" : "w-0"
            )}
          />

          {/* Track text */}
          {!completed && (
            <div className="absolute inset-0 flex items-center justify-center text-[#666] font-semibold text-[20px] tracking-wide z-[6] track">
              Swipe to Confirm
            </div>
          )}

          {/* Handle */}
          <div
            onClick={handleComplete}
            className={cn(
              "absolute top-[8px] left-[8px] w-[54px] h-[54px] rounded-full flex items-center justify-center cursor-pointer z-[10]",
              "bg-[radial-gradient(circle,#d4dade_40%,rgba(255,255,255,0.8)_100%)]",
              "shadow-[0_6px_12px_rgba(149,158,164,0.3),inset_0_4px_8px_rgba(255,255,255,0.9),inset_0_-4px_8px_rgba(149,158,164,0.3)]",
              "transition-all duration-500",
              completed && "translate-x-[248px]"
            )}
          >
            {/* ripple */}
            <div className="press-ripple absolute inset-0 rounded-full" />

            {/* icons */}
            {!completed ? (
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
              >
                <path d="M8 11V7a4 4 0 118 0v4M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
              >
                <path d="M8 11V7a4 4 0 118 0M5 11h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
              </svg>
            )}
          </div>

          {/* Success */}
          {completed && (
            <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-[22px] z-[7] success">
              <svg
                className="w-6 h-6 mr-3 tick"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Confirmed
            </div>
          )}
        </div>

        {/* wave */}
        <div className={cn("confirmation-wave", completed && "active")} />

        {/* splash */}
        <div className="splash-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="droplet" />
          ))}
        </div>
      </div>
    </div>
  );
}
/*
ADD THIS TO global.css (required)

Based on original advanced animation system :contentReference[oaicite:0]{index=0}

.progress::before,
.progress::after {
  content: "";
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat-x;
  background-size: 50% 100%;
  animation: flowing-water 4s linear infinite;
}

.progress::before {
  bottom: -5px;
  background-image: url('data:image/svg+xml;utf8,<svg ... />');
}

.progress::after {
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg ... />');
}

@keyframes flowing-water {
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
}

.glass-sheen::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -150%;
  width: 70px;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.4) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-25deg);
  transition: left 0.7s ease;
}

.glass-sheen:hover::before {
  left: 150%;
}

.confirmation-wave.active::before,
.confirmation-wave.active::after {
  animation: wave-burst 1.5s ease-out forwards;
}

@keyframes wave-burst {
  0% { transform: scale(0.9); opacity: 0; }
  20% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.tick {
  animation: tick-pop-in 0.6s ease forwards;
}

@keyframes tick-pop-in {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.press-ripple:active {
  animation: press-ripple-effect 0.5s ease-out forwards;
}

@keyframes press-ripple-effect {
  0% { transform: scale(0); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

.splash-particles .droplet {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff 30%, #aeeeee 80%);
  opacity: 0;
}

.swipe-completed .droplet {
  animation: splash-burst 1s ease-out forwards;
}

@keyframes splash-burst {
  to {
    transform: translate(100px, -100px);
    opacity: 0;
  }
}
*/