import { cn } from "./Button";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-800",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Chip({ children, className, variant = "default" }: { children: React.ReactNode; className?: string; variant?: "default" | "featured" | "status" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold",
        {
          "bg-white border-border text-foreground": variant === "default",
          "bg-amber-50 border-amber-200 text-amber-800": variant === "featured",
          "bg-emerald-100 border-emerald-200 text-emerald-800": variant === "status",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
