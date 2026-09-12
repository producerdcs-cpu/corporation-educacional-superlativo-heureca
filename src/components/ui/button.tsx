import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy", { variants: { variant: { primary: "bg-magenta text-white hover:bg-magenta-deep", navy: "bg-navy text-white hover:bg-navy-deep", gold: "bg-gold text-ink hover:bg-gold-deep hover:text-white", outline: "bg-surface text-navy shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ink)_12%,transparent)] hover:bg-paper", ghost: "bg-transparent text-navy hover:bg-white/70", whatsapp: "bg-whatsapp text-white hover:brightness-110" }, size: { sm: "h-11 min-h-11 px-3.5 text-sm rounded-lg", md: "h-12 min-h-12 px-5 text-sm rounded-xl", lg: "h-13 min-h-12 px-6 text-base rounded-xl" } }, defaultVariants: { variant: "primary", size: "md" } });
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean };
export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) { const Comp = asChild ? Slot : "button"; return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />; }
export { buttonVariants };