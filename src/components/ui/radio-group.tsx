import * as React from "react";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type ContextType = {
  value?: string;
  onValueChange?: (v: string) => void;
  name: string;
};

const Ctx = React.createContext<ContextType | null>(null);

export const RadioGroup = ({ value, onValueChange, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: string; onValueChange?: (v: string) => void }) => {
  const name = React.useId();
  return (
    <Ctx.Provider value={{ value, onValueChange, name }}>
      <div className={cn("grid gap-2", className)} {...props}>{children}</div>
    </Ctx.Provider>
  );
};

export const RadioGroupItem = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const ctx = React.useContext(Ctx);
    const checked = ctx?.value === value;
    return (
      <input
        ref={ref}
        type="radio"
        name={ctx?.name}
        value={value}
        checked={checked}
        onChange={() => ctx?.onValueChange?.(value)}
        className={cn("h-4 w-4", className)}
        {...props}
      />
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
