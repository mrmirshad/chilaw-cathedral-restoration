import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2";
    const variants: Record<string, string> = {
      default: "bg-primary text-primary-foreground hover:opacity-90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);
Button.displayName = "Button";
