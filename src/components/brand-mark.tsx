import { cn } from "@/lib/utils";

/** P1: logo institucional no chrome; cartoon fica no hero/campanhas. */
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
          src="/images/logo-institution.jpg"
          alt=""
          className="size-9 object-contain p-0.5"
          width={36}
          height={36}
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.hidden = false;
          }}
        />
        <svg viewBox="0 0 32 32" className="size-6" fill="none" hidden>
          <circle cx="16" cy="16" r="10.5" stroke={light ? "#FBF6EF" : "#E3B23C"} strokeWidth="1.6" />
          <ellipse cx="16" cy="16" rx="4.5" ry="10.5" stroke={light ? "#FBF6EF" : "#E3B23C"} strokeWidth="1.4" />
          <path d="M6 16h20M8.5 11.2h15M8.5 20.8h15" stroke={light ? "#FBF6EF" : "#E3B23C"} strokeWidth="1.2" />
          <path d="M11 23.5c1.4-2.2 3.1-3.4 5-3.4s3.6 1.2 5 3.4" stroke="#C2185B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
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
