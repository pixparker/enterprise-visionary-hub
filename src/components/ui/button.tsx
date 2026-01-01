import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wider ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-orbitron",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-neon-cyan/50 bg-transparent text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.3)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-cyber-surface hover:text-neon-cyan",
        link: "text-neon-cyan underline-offset-4 hover:underline",
        hero: "relative overflow-hidden bg-gradient-to-r from-neon-cyan to-neon-magenta text-cyber-black font-bold shadow-[0_0_30px_hsl(185_100%_50%_/_0.4),0_0_60px_hsl(320_100%_55%_/_0.2)] hover:shadow-[0_0_50px_hsl(185_100%_50%_/_0.6),0_0_80px_hsl(320_100%_55%_/_0.4)] hover:scale-105 active:scale-100 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        cyber: "relative bg-cyber-dark border border-neon-cyan/50 text-neon-cyan clip-path-cyber hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.4)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
