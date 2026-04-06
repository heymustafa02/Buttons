import React from "react";
import { cn } from "@/lib/utils"; // optional (class merge util)

interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm min-w-[100px] min-h-[36px]",
  md: "px-[1.4em] py-[0.9em] text-base min-w-[120px] min-h-[44px]",
  lg: "px-6 py-3 text-lg min-w-[140px] min-h-[50px]",
};

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className,
  size = "md",
  ...props
}) => {
  return (
    <button
      className={cn(
        "cursor-pointer font-medium rounded-[0.5em] border-none",
        "transition-all duration-[800ms] ease-in-out",
        "bg-[length:280%_auto]",
        
        // Gradient background (exact match)
        "bg-[linear-gradient(325deg,hsla(217,100%,56%,1)_0%,hsla(194,100%,69%,1)_55%,hsla(217,100%,56%,1)_90%)]",
        
        // Text color
        "text-white",

        // Shadows (outer + inset)
        "shadow-[0px_0px_20px_rgba(71,184,255,0.5),0px_5px_5px_-1px_rgba(58,125,233,0.25),inset_4px_4px_8px_rgba(175,230,255,0.5),inset_-4px_-4px_8px_rgba(19,95,216,0.35)]",

        // Hover effect
        "hover:bg-right-top",

        // Focus / active ring
        "focus:outline-none focus-visible:outline-none active:outline-none",
        "focus:shadow-[0_0_0_3px_white,0_0_0_6px_hsla(217,100%,56%,1)]",
        "active:shadow-[0_0_0_3px_white,0_0_0_6px_hsla(217,100%,56%,1)]",

        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};