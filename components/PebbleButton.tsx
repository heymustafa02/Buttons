import React from "react";
import { cn } from "@/lib/utils";

interface PebbleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const PebbleButton: React.FC<PebbleButtonProps> = ({
  children = "Get started",
  className,
  ...props
}) => {
  return (
    <div className="relative">
     <button
  className={cn(
    "group relative flex items-center justify-between overflow-hidden",
    "px-[30px] py-[20px] min-w-[380px] rounded-[50px]",

    // ✅ Glass base (light + dark)
    "bg-white/25 dark:bg-white/10",
    "backdrop-blur-[20px] backdrop-saturate-[180%]",
    "border border-white/40 dark:border-white/20",

    // ✅ Shadows (adapted for dark)
    "shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_8px_rgba(31,38,135,0.1),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(0,0,0,0.05)]",
    "dark:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.6)]",

    // Transition
    "transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",

    // Hover (light + dark)
    "hover:-translate-y-1",
    "hover:bg-white/35 dark:hover:bg-white/15",
    "hover:backdrop-blur-[30px] hover:backdrop-saturate-[200%]",
    "hover:border-white/60 dark:hover:border-white/30",

    // Active
    "active:scale-[0.97]",
    "active:bg-white/20 dark:active:bg-white/10",

    // Focus
    "focus:outline-none focus-visible:shadow-[0_0_0_4px_rgba(161,196,253,0.4)]",

    className
  )}
>
        {/* Shine sweep */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[50px]">
          <span className="absolute top-0 left-[-100%] h-full w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] transition-all duration-[600ms] ease-linear group-hover:left-full" />
        </span>

        {/* Droplet shine */}
        <span className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),rgba(255,255,255,0.1)_30%,transparent_60%)] animate-[droplet-shine_4s_ease-in-out_infinite]" />

        {/* Text */}
        <span className="text-[42px] font-semibold text-[#1a202c] tracking-[-0.5px] z-[1] transition-all duration-300 ease-in-out hover:tracking-[0.5px] text-shadow">
          {children}
        </span>

        {/* Icon */}
        <div
          className={cn(
            "relative z-[1] flex items-center justify-center",
            "w-[80px] h-[80px] rounded-[24px]",
            
            // Gradient
            "bg-[linear-gradient(135deg,#a8edea_0%,#fed6e3_25%,#ffd89b_50%,#a1c4fd_75%,#c2e9fb_100%)]",
            "bg-[length:400%_400%]",
            
            // Shadow
            "shadow-[0_4px_16px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)]",

            // Animation
            "animate-[gradient-shift_8s_ease_infinite]",
            "transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]",

            // Hover effects
            "group-hover:scale-[1.08] group-hover:rotate-[5deg]"
          )}
        >
          {/* Glass overlay */}
          <span className="absolute inset-0 rounded-[24px] bg-[linear-gradient(145deg,rgba(255,255,255,0.7),transparent_50%,rgba(0,0,0,0.05))] opacity-80" />

          {/* Highlight */}
          <span className="absolute top-2 left-2 w-[30px] h-[30px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.8),rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-100 animate-[highlight-move_3s_ease-in-out_infinite]" />

          {/* Arrow */}
          <svg
            viewBox="0 0 24 24"
            className="w-[40px] h-[40px] stroke-white stroke-[3] drop-shadow-md transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-2"
            fill="none"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
  );
};

// Add in global.css
/* =========================
   CUSTOM ANIMATIONS (v4)
========================= */

// @layer utilities {
//   /* Ripple / Pebble Animations */

//   @keyframes droplet-shine {
//     0%, 100% {
//       opacity: 0.6;
//       transform: translate(0, 0) scale(1);
//     }
//     50% {
//       opacity: 0.8;
//       transform: translate(-10px, -10px) scale(1.1);
//     }
//   }

//   @keyframes gradient-shift {
//     0%, 100% {
//       background-position: 0% 50%;
//     }
//     25% {
//       background-position: 100% 50%;
//     }
//     50% {
//       background-position: 100% 100%;
//     }
//     75% {
//       background-position: 0% 100%;
//     }
//   }

//   @keyframes highlight-move {
//     0%, 100% {
//       transform: translate(0, 0);
//     }
//     50% {
//       transform: translate(5px, 5px);
//     }
//   }

//   @keyframes arrow-bounce {
//     0%, 100% {
//       transform: translateX(8px);
//     }
//     50% {
//       transform: translateX(12px);
//     }
//   }

//   @keyframes icon-float {
//     0%, 100% {
//       transform: scale(1.08) rotate(5deg) translateY(0);
//     }
//     50% {
//       transform: scale(1.08) rotate(5deg) translateY(-3px);
//     }
//   }

//   @keyframes ripple-effect {
//     0% {
//       box-shadow:
//         0 8px 32px rgba(31, 38, 135, 0.15),
//         0 2px 8px rgba(31, 38, 135, 0.1),
//         inset 0 1px 0 rgba(255, 255, 255, 0.6),
//         0 0 0 0 rgba(161, 196, 253, 0.4);
//     }
//     50% {
//       box-shadow:
//         0 8px 32px rgba(31, 38, 135, 0.15),
//         0 2px 8px rgba(31, 38, 135, 0.1),
//         inset 0 1px 0 rgba(255, 255, 255, 0.6),
//         0 0 0 8px rgba(161, 196, 253, 0.2);
//     }
//     100% {
//       box-shadow:
//         0 8px 32px rgba(31, 38, 135, 0.15),
//         0 2px 8px rgba(31, 38, 135, 0.1),
//         inset 0 1px 0 rgba(255, 255, 255, 0.6),
//         0 0 0 0 rgba(161, 196, 253, 0);
//     }
//   }

//   /* Optional utility classes (clean usage) */
//   .animate-droplet {
//     animation: droplet-shine 4s ease-in-out infinite;
//   }

//   .animate-gradient {
//     animation: gradient-shift 8s ease infinite;
//   }

//   .animate-highlight {
//     animation: highlight-move 3s ease-in-out infinite;
//   }

//   .animate-arrow {
//     animation: arrow-bounce 1s ease-in-out infinite;
//   }

//   .animate-float {
//     animation: icon-float 3s ease-in-out infinite;
//   }
// }