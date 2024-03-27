import React from "react";

import { tv } from "tailwind-variants";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}
const spinner = tv({
  base: "abjad-loading-spinner flex items-center justify-center",
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

const Loading = ({ size = "md", className }: LoadingProps) => (
  <span
    className={spinner({
      size,
      className
    })}
  >
    <span
      style={{
        animationDelay: "-0.45s"
      }}
      className="absolute block h-full w-full animate-[lds-ring_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] rounded-full border-2 border-[currentColor_transparent_transparent_transparent]"
    />
    <span
      style={{
        animationDelay: "-0.3s"
      }}
      className="absolute block h-full w-full animate-[lds-ring_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] rounded-full border-2 border-[currentColor_transparent_transparent_transparent]"
    />
    <span
      style={{
        animationDelay: "-0.15s"
      }}
      className="absolute block h-full w-full animate-[lds-ring_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] rounded-full border-2 border-[currentColor_transparent_transparent_transparent]"
    />
    <span className="absolute block h-full w-full animate-[lds-ring_1.2s_cubic-bezier(0.5,0,0.5,1)_infinite] rounded-full border-2 border-[currentColor_transparent_transparent_transparent]" />
  </span>
);

export default Loading;
