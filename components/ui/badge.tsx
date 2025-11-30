import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-lime text-forest hover:bg-lime-hover",
        secondary:
          "border-transparent bg-forest text-white hover:bg-forest/80",
        outline: "text-forest border-forest/20",
        destructive:
          "border-transparent bg-red-100 text-red-800 hover:bg-red-200",
        success: 
            "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
        warning: 
            "border-transparent bg-orange-100 text-orange-800 hover:bg-orange-200",
        info: 
            "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200",
        waiting: 
            "border-transparent bg-pink-100 text-pink-800 hover:bg-pink-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }