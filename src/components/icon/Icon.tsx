import React, { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";

import { IconVariantProps, icon } from "@/theme";
import { classNames } from "@/utils";

export interface IconProps
  extends Omit<ComponentPropsWithoutRef<"span">, keyof IconVariantProps | "className">,
    IconVariantProps {
  children: React.ReactNode;
  className?:
    | string
    | {
        base?: string;
        icon?: string;
      };
}

const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ children, size = "md", rounded, color = "inherit", variant = "transparent", className, ...props }, ref) => {
    const slots = useMemo(
      () =>
        icon({
          size: size,
          variant,
          color,
          rounded
        }),
      [size, variant, color, rounded]
    );

    return (
      <span
        ref={ref}
        className={slots.base({
          class: classNames(
            "abjad-icon",
            `abjad-icon-${color}`,
            `abjad-icon-${variant}`,
            typeof className === "string" ? className : className?.base
          )
        })}
        {...props}
      >
        <span
          className={slots.icon({
            className: typeof className === "string" ? "" : className?.icon
          })}
        >
          {children}
        </span>
      </span>
    );
  }
);

export default Icon;
