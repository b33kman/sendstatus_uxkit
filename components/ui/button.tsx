import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-lime text-forest hover:bg-lime-hover hover:scale-[1.02] shadow-lg shadow-lime/20",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20",
        outline:
          "border-2 border-forest/10 bg-transparent text-forest hover:bg-forest/5",
        secondary:
          "bg-forest text-white hover:bg-forest-light shadow-lg shadow-forest/20",
        ghost: "hover:bg-forest/5 text-forest hover:text-forest-light",
        link: "text-forest underline-offset-4 hover:underline decoration-lime",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
      shape: {
        pill: "rounded-full",
        rounded: "rounded-xl",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }