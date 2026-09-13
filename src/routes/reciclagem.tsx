import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, CalendarDays, CheckCircle2, Clock3, GraduationCap, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RECICLAGEM, SITE } from "@/lib/site";

export const Route = createFileRoute("/reciclagem")({
  component: ReciclagemPage,
  head: () => ({
    meta: [{ title: "Cursos de Reciclagem — Superlativo Heureca" }],
  }),
});

function ReciclagemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <section className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-deep p-6 text-white shadow-card sm:p-9">
          <div className="absolute -right-16 -top-16 size-48 rounded-full bg-magenta/30 blur-3xl" aria-hidden />
          <p className="inline-flex items-center gap-2 rounded-full bg-magenta px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
            <Sparkles className="size-3.5" />
            {RECICLAGEM.badge}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">{RECICLAGEM.title}</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80">{RECICLAGEM.pitch}</p>
          <p className="mt-4 text-sm font-semibold text-gold">
            Matérias: {RECICLAGEM.subjects.join(" e ")} · Foco: {RECICLAGEM.focus}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <a href={SITE.whatsappReciclagem} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" /> Inscrever no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contato">Falar com a {SITE.teacher}</Link>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-paper shadow-card">
          <div className="bg-gradient-to-b from-[#E8F4FF] to-[#FFF8F0] px-4 pt-5 sm:px-6">
            <img
              src="/images/hero-heureca-kids.jpg"
              alt="Pessoinhas do Superlativo Heureca com o globo — cursos de reciclagem."
              className="mx-auto w-full max-w-md object-contain"
              width={640}
              height={400}
            />
          </div>
          <div className="space-y-4 p-6 sm:p-7">
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <CalendarDays className="mt-0.5 size-5 shrink-0 text-magenta" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Período</p>
                <p className="mt-1 font-semibold text-navy">{RECICLAGEM.period}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-magenta" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{RECICLAGEM.hoursLabel}</p>
                <ul className="mt-2 space-y-1 text-sm font-semibold text-navy">
                  {SITE.hours.map((h) => (
                    <li key={`${h.start}-${h.end}`}>
                      {h.start} às {h.end}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.8rem] bg-white p-6 shadow-card sm:p-8">
        <div className="flex items-center gap-2">
          <BookOpen className="size-5 text-magenta" />
          <h2 className="font-display text-2xl font-semibold text-navy">Nosso foco</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {RECICLAGEM.levels.map((level) => (
            <article key={level.id} className="rounded-2xl bg-paper p-4">
              <span className="grid size-10 place-items-center rounded-xl bg-navy text-gold">
                <GraduationCap className="size-5" />
              </span>
              <p className="mt-3 text-sm font-semibold text-navy">{level.title}</p>
            </article>
          ))}
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {[
            "Acompanhamento educacional e aulas de reforço",
            "Português e Matemática com método e prática",
            "Preparação alinhada a séries iniciais e Ensino Médio",
            "Canal direto com a professora para dúvidas e inscrição",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-magenta" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[1.8rem] bg-magenta p-6 text-white sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="font-display text-2xl font-semibold">{SITE.invite}</p>
          <p className="mt-1 text-white/85">
            {SITE.phoneDisplay} · {SITE.teacher} · Suporte • Foco • Resultados
          </p>
        </div>
        <Button asChild variant="gold">
          <a href={SITE.whatsappReciclagem} target="_blank" rel="noreferrer">
            Falar no PV / WhatsApp
          </a>
        </Button>
      </section>
    </div>
  );
}
