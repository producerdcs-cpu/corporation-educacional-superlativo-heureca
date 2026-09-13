import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-magenta">Página não encontrada</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-navy">
        Esse endereço não está no caderno.
      </h1>
      <p className="mt-3 text-muted">Volte ao início ou abra o explorador de estudo.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button asChild>
          <Link to="/">Início</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/explorador">Explorador</Link>
        </Button>
      </div>
    </div>
  );
}
