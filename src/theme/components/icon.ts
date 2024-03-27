import { VariantProps, tv } from "tailwind-variants";

const icon = tv({
  slots: {
    icon: "",
    base: "flex"
  },
  variants: {
    size: {
      xl: {
        icon: "w-10 h-10"
      },
      lg: {
        icon: "w-8 h-8"
      },
      md: {
        icon: "w-6 h-6"
      },
      sm: {
        icon: "w-5 h-5"
      },
      xs: {
        icon: "w-4 h-4"
      }
    },
    variant: {
      solid: { base: "p-2" },
      soft: { base: "p-2" },
      outline: { base: "p-2" },
      transparent: { base: "p-0" }
    },
    color: {
      primary: "",
      secondary: "",
      warning: "",
      success: "",
      danger: "",
      info: "",
      gray: "",
      inherit: ""
    },
    rounded: {
      none: "rounded-none",
      base: "rounded",
      full: "rounded-full"
    }
  },
  compoundVariants: [
    // Solid
    {
      variant: "solid",
      color: "primary",
      class: {
        base: "text-white bg-primary"
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: "text-white bg-secondary"
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "text-white bg-warning"
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "text-white bg-success"
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "text-white bg-danger"
      }
    },
    {
      variant: "solid",
      color: "info",
      class: {
        base: "text-white bg-info"
      }
    },
    {
      variant: "solid",
      color: "gray",
      class: {
        base: "text-white bg-gray-900"
      }
    },
    // Soft
    {
      variant: "soft",
      color: "primary",
      class: {
        base: "text-primary bg-primary-50"
      }
    },
    {
      variant: "soft",
      color: "secondary",
      class: {
        base: "text-secondary bg-secondary-50"
      }
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        base: "text-warning bg-warning-50"
      }
    },
    {
      variant: "soft",
      color: "success",
      class: {
        base: "text-success bg-success-50"
      }
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        base: "text-danger bg-danger-50"
      }
    },
    {
      variant: "soft",
      color: "info",
      class: {
        base: "text-info bg-info-50"
      }
    },
    {
      variant: "soft",
      color: "gray",
      class: {
        base: "text-gray-950 bg-black/[0.04]"
      }
    },
    // Outline
    {
      variant: "outline",
      color: "primary",
      class: {
        base: "text-primary border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "secondary",
      class: {
        base: "text-secondary border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "warning",
      class: {
        base: "text-warning border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "success",
      class: {
        base: "text-success border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "danger",
      class: {
        base: "text-danger border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "info",
      class: {
        base: "text-info border border-black/[0.06]"
      }
    },
    {
      variant: "outline",
      color: "gray",
      class: {
        base: "text-gray-950 border border-black/[0.06]"
      }
    },
    // Transparent
    {
      variant: "transparent",
      color: "primary",
      class: {
        base: "text-primary"
      }
    },
    {
      variant: "transparent",
      color: "secondary",
      class: {
        base: "text-secondary"
      }
    },
    {
      variant: "transparent",
      color: "warning",
      class: {
        base: "text-warning"
      }
    },
    {
      variant: "transparent",
      color: "success",
      class: {
        base: "text-success"
      }
    },
    {
      variant: "transparent",
      color: "danger",
      class: {
        base: "text-danger"
      }
    },
    {
      variant: "transparent",
      color: "info",
      class: {
        base: "text-info"
      }
    },
    {
      variant: "transparent",
      color: "gray",
      class: {
        base: "text-gray-950"
      }
    },
    {
      variant: "transparent",
      color: "inherit",
      class: {
        base: "text-inherit"
      }
    }
  ],
  defaultVariants: {
    variant: "transparent",
    color: "inherit",
    size: "md",
    rounded: "base"
  }
});

export type IconVariantProps = VariantProps<typeof icon>;

export { icon };
