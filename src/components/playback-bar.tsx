import { Pause, Play, RotateCcw, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlaybackBarProps = {
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  intervalMs: number;
  onInterval: (ms: number) => void;
  progressLabel: string;
  className?: string;
  minMs?: number;
  maxMs?: number;
};

export function PlaybackBar({
  playing,
  onPlay,
  onPause,
  onStep,
  onReset,
  intervalMs,
  onInterval,
  progressLabel,
  className,
  minMs = 200,
  maxMs = 1600,
}: PlaybackBarProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-[1.4rem] bg-surface p-4 shadow-card sm:flex-row sm:items-center",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant={playing ? "navy" : "primary"}
          onClick={playing ? onPause : onPlay}
          aria-label={playing ? "Pausar animação" : "Reproduzir animação"}
        >
          {playing ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4 ml-0.5" />
          )}
          {playing ? "Pausar" : "Reproduzir"}
        </Button>
        <Button type="button" variant="outline" onClick={onStep}>
          <SkipForward className="size-4" />
          Passo
        </Button>
        <Button type="button" variant="ghost" onClick={onReset}>
          <RotateCcw className="size-4" />
          Reiniciar
        </Button>
      </div>
      <div className="min-w-0 flex-1">
        <label htmlFor="intervalo" className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-muted">
          <span>Intervalo da animação</span>
          <span className="tabular-nums text-navy">{intervalMs} ms</span>
        </label>
        <input
          id="intervalo"
          type="range"
          min={minMs}
          max={maxMs}
          step={50}
          value={intervalMs}
          onChange={(e) => onInterval(Number(e.target.value))}
          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-mist accent-magenta"
        />
        <p className="mt-2 text-sm text-muted">{progressLabel}</p>
      </div>
    </div>
  );
}
