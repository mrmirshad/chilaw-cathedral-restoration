import * as React from "react";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type Ctx = {
  open: boolean;
  setOpen: (o: boolean) => void;
  value?: string;
  onValueChange?: (v: string) => void;
  selectedLabel?: string;
  setSelectedLabel: (s?: string) => void;
};

const SelectCtx = React.createContext<Ctx | null>(null);

type SelectRootProps = {
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Select = ({ value, onValueChange, children, className, ...props }: SelectRootProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedLabel, setSelectedLabel] = React.useState<string | undefined>(undefined);
  return (
    <SelectCtx.Provider value={{ open, setOpen, value, onValueChange, selectedLabel, setSelectedLabel }}>
      <div className={cn("relative", className)} {...props}>{children}</div>
    </SelectCtx.Provider>
  );
};

export const SelectTrigger = ({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const ctx = React.useContext(SelectCtx);
  return (
    <button type="button" className={cn("flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm", className)} onClick={() => ctx?.setOpen(!ctx.open)} {...props}>
      {children}
    </button>
  );
};

export const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const ctx = React.useContext(SelectCtx);
  return <span className="truncate text-left">{ctx?.selectedLabel ?? placeholder}</span>;
};

export const SelectContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const ctx = React.useContext(SelectCtx);
  if (!ctx?.open) return null;
  return (
    <div className={cn("absolute z-50 mt-2 w-full rounded-md border bg-popover p-1 shadow-md", className)} {...props}>
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children, className, ...props }: { value: string; children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  const ctx = React.useContext(SelectCtx);
  const selected = ctx?.value === value;
  return (
    <div
      role="option"
      aria-selected={selected}
      onClick={() => {
        ctx?.onValueChange?.(value);
        ctx?.setSelectedLabel(typeof children === "string" ? children : undefined);
        ctx?.setOpen(false);
      }}
      className={cn("cursor-pointer select-none rounded-sm px-2 py-1.5 text-sm hover:bg-accent", selected && "bg-accent", className)}
      {...props}
    >
      {children}
    </div>
  );
};
