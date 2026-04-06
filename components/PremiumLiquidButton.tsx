"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, useRef } from "react";

interface PremiumLiquidButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function PremiumLiquidButton({
  text = "Get Started",
  className,
  ...props
}: PremiumLiquidButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = btnRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - diameter / 2}px`;
    circle.style.top = `${e.clientY - button.offsetTop - diameter / 2}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  };

  const chars = text.split("");

  return (
    <>
      {/* SVG Goo Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button
        ref={btnRef}
        onClick={(e) => {
          handleRipple(e);
          props.onClick?.(e);
        }}
        className={cn(
          "relative z-[1] overflow-hidden rounded-full p-[3px] cursor-pointer",
          "bg-[#181924] shadow-[0_10px_20px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.45)]",
          "transition-all duration-150 ease-in-out",
          "animate-hoverFloat",
          "active:scale-95 active:translate-y-[2px]",
          "hover:-translate-y-[2px] hover:animate-none",
          "group",
          className
        )}
        {...props}
      >
        {/* rotating shine */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute top-1/2 left-1/2 w-[250%] aspect-square -translate-x-1/2 -translate-y-1/2 animate-spinSlow opacity-0 group-hover:opacity-100">
            <span className="block w-full h-full bg-[linear-gradient(to_right,transparent_30%,rgba(255,255,255,0.8)_45%,#db92e8_50%,rgba(255,255,255,0.8)_55%,transparent_70%)]" />
          </span>
        </span>

        {/* TEXT WRAPPER */}
        <span
          className={cn(
            "relative z-[1] flex items-center justify-center gap-3 rounded-full px-16 py-4 overflow-hidden",
            "text-white text-[26px] font-normal tracking-[0.5px]",
            "bg-[radial-gradient(150%_100%_at_50%_100%,#000_40%,transparent_80%),linear-gradient(90deg,#181924_0%,#5691c8_25%,#f7e6a1_50%,#c4548e_75%,#181924_100%)]",
            "shadow-[1px_-1px_2px_hsla(0,0%,100%,0.5)_inset,0px_-1px_2px_hsla(0,0%,100%,0.5)_inset,-1px_-1px_2px_hsla(0,0%,100%,0.5)_inset,1px_1px_2px_hsla(0,0%,30%,0.5)_inset,-8px_4px_10px_-6px_hsla(0,0%,30%,0.25)_inset,-1px_1px_6px_hsla(0,0%,30%,0.25)_inset,-1px_-1px_8px_hsla(0,0%,60%,0.15),1px_1px_2px_hsla(0,0%,30%,0.15),2px_2px_6px_hsla(0,0%,30%,0.15),-2px_-1px_2px_hsla(0,0%,100%,0.25)_inset,3px_6px_16px_-6px_hsla(0,0%,30%,0.5)]",
            "transition-all duration-200"
          )}
        >
          {/* animated letters */}
          <span className="flex relative z-[3] transition-transform duration-300 group-hover:-translate-x-4">
            {chars.map((char, i) => (
              <span key={i} className="relative overflow-hidden block">
                <span
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className="block transition-transform duration-400 group-hover:-translate-y-full"
                  data-label={char}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
                <span
                  className="absolute left-0 top-full text-[#db92e8]"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </span>

          {/* icon */}
          <svg
            className="absolute right-[-40px] opacity-0 transition-all duration-300 group-hover:right-[30px] group-hover:opacity-100"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </span>
      </button>
    </>
  );
}
// Add in global.css
/* =========================


// @keyframes hoverFloat {
//   50% {
//     transform: translateY(-4px);
//   }
// }

// @keyframes spinSlow {
//   0% {
//     transform: translate(-50%, -50%) rotate(0deg);
//   }
//   100% {
//     transform: translate(-50%, -50%) rotate(360deg);
//   }
// }

// .animate-hoverFloat {
//   animation: hoverFloat 2.5s infinite ease-in-out;
// }

// .animate-spinSlow {
//   animation: spinSlow 3s linear infinite;
// }

// .ripple {
//   position: absolute;
//   border-radius: 9999px;
//   transform: scale(0);
//   animation: rippleAnim 600ms linear;
//   background: rgba(255, 255, 255, 0.4);
//   pointer-events: none;
//   z-index: 1;
// }

// @keyframes rippleAnim {
//   to {
//     transform: scale(4);
//     opacity: 0;
//   }
// }
// ======================== */