import { cn } from "@/lib/utils";

export function BrandMark({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-2xl",
          light ? "bg-white/15 ring-1 ring-white/20" : "bg-white ring-1 ring-line",
        )}
        aria-hidden="true"
      >
        <img
          src="/images/logo-heureca-kids.png"
          alt=""
          className="size-full object-cover"
          width={40}
          height={40}
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-semibold italic tracking-tight",
            light ? "text-white" : "text-navy",
          )}
        >
          Superlativo Heureca®
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em]",
            light ? "text-white/70" : "text-muted",
          )}
        >
          O mais alto grau do aprender
        </span>
      </span>
    </span>
  );
}
