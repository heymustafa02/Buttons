import React from "react";
import { cn } from "@/lib/utils";

interface RippleProps {
  size?: number; // px
  duration?: number; // seconds
  className?: string;
  logo?: React.ReactNode;
}

export const Ripple: React.FC<RippleProps> = ({
  size = 250,
  duration = 2,
  className,
  logo,
}) => {
  return (
    <div
      className={cn("relative aspect-square", className)}
      style={
        {
          width: size,
          height: size,
          ["--duration" as any]: `${duration}s`,
        } as React.CSSProperties
      }
    >
      {/* Ripple Layers */}
      {[40, 30, 20, 10, 0].map((inset, i) => (
        <div
          key={i}
          className="absolute rounded-full backdrop-blur-[5px]
          border-t
          animate-[ripple_var(--duration)_infinite_ease-in-out]
          bg-[linear-gradient(0deg,rgba(50,50,50,0.2)_0%,rgba(100,100,100,0.2)_100%)]
          shadow-[0px_10px_10px_rgba(0,0,0,0.3)]"
          style={{
            inset: `${inset}%`,
            zIndex: 99 - i,
            borderTopColor: `rgba(100,100,100,${1 - i * 0.2})`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Logo */}
      <div className="absolute inset-0 grid place-content-center p-[30%]">
        <div
          className="w-full h-full animate-[color-change_var(--duration)_infinite_ease-in-out]"
          style={{ fill: "grey" }}
        >
          {logo}
        </div>
      </div>
    </div>
  );
};