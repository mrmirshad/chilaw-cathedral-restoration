import * as React from "react";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const Badge = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", className)} {...props} />
);
