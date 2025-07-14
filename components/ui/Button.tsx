import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-xs md:text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-emerald-500 text-primary-foreground hover:bg-emerald-600 duration-300",
        ghost: 'bg-transparent data-[state=open]:bg-transparent data-[state=open]:bg-transparent',
        blue: "bg-blue-500/50 text-blue-900 hover:text-blue-100 hover:bg-blue-700/75 duration-300",
        orange: "bg-orange-500/50 text-orange-900 hover:text-orange-100 hover:bg-orange-700/75 duration-300",
        pink: "bg-pink-500/50 text-pink-900 hover:text-pink-100 hover:bg-pink-700/75 duration-300",
        emerald: "bg-emerald-500/50 text-emerald-900 hover:text-emerald-100 hover:bg-emerald-700/75 duration-300",
        yellow: "bg-yellow-500/50 text-yellow-900 hover:text-yellow-100 hover:bg-yellow-700/75 duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
