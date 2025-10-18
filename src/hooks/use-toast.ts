export type ToastOptions = {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | string;
};

// Minimal shim so calls like toast({ title, description, variant }) work without a provider.
// Replace with a UI toaster (e.g., shadcn/ui) when ready.
export function toast(opts: ToastOptions) {
  const parts = [opts.title, opts.description].filter(Boolean).join('\n');
  if (typeof window !== 'undefined' && typeof window.alert === 'function') {
    // Basic UX so users see feedback for now
    window.alert(parts || '');
  } else {
    // Fallback for non-DOM contexts
    // eslint-disable-next-line no-console
    console.log(`[toast${opts.variant ? ':' + opts.variant : ''}]`, parts);
  }
}
