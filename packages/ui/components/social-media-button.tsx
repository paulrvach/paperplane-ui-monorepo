import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils";

const socialMediaButtonVariants = cva(
  "bg-card text-primary hover:shadow-xl transition-all duration-500 cursor-pointer shadow-md",
  {
    variants: {
      size: {
        sm: "h-[16px] w-[16px] p-1 rounded",
        md: "h-[32px] w-[32px] p-1 rounded-md",
        lg: "h-[64px] w-[64px] p-2 rounded-lg",
        xl: "h-[128px] w-[128px] p-3 rounded-2xl",
        "2xl": "h-[256px] w-[256px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface SocialMediaButtonProps
  extends React.HtmlHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof socialMediaButtonVariants> {
  asChild?: boolean;
  src?: string;
}

const SocialMediaButton = React.forwardRef<
  HTMLImageElement,
  SocialMediaButtonProps
>(({ className, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "img";
  return (
    <Comp
      className={cn(socialMediaButtonVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  );
});

export { SocialMediaButton, socialMediaButtonVariants };
