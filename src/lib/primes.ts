export type SieveEvent =
  | { kind: "start"; limit: number }
  | { kind: "skip-one" }
  | { kind: "advance"; value: number }
  | { kind: "found-prime"; value: number }
  | { kind: "mark-composite"; value: number; by: number }
  | { kind: "done"; primes: number[] };

export type CellKind = "pending" | "one" | "prime" | "composite";

export function buildSieveScript(limit: number): SieveEvent[] {
  const n = Math.max(2, Math.min(200, Math.floor(limit)));
  const events: SieveEvent[] = [{ kind: "start", limit: n }, { kind: "skip-one" }];
  const composite = new Array<boolean>(n + 1).fill(false);
  const primes: number[] = [];

  for (let p = 2; p <= n; p += 1) {
    events.push({ kind: "advance", value: p });
    if (composite[p]) continue;
    primes.push(p);
    events.push({ kind: "found-prime", value: p });
    if (p > Math.sqrt(n) && p * 2 > n) continue;
    for (let m = p * 2; m <= n; m += p) {
      if (!composite[m]) {
        composite[m] = true;
        events.push({ kind: "mark-composite", value: m, by: p });
      }
    }
  }

  events.push({ kind: "done", primes: [...primes] });
  return events;
}

export function explainEvent(event: SieveEvent): string {
  switch (event.kind) {
    case "start":
      return `Vamos procurar os números primos de 1 até ${event.limit}. Um primo tem exatamente dois divisores: 1 e ele mesmo.`;
    case "skip-one":
      return "O número 1 não é primo nem composto: ele tem só um divisor. Por isso o crivo começa no 2.";
    case "advance":
      return `Olhando o ${event.value}… se ainda não foi riscado, ele é primo.`;
    case "found-prime":
      return `${event.value} é primo. Agora riscamos os múltiplos de ${event.value}, porque eles têm ${event.value} como divisor.`;
    case "mark-composite":
      return `${event.value} é múltiplo de ${event.by} (${event.by} × ${event.value / event.by} = ${event.value}), então não é primo.`;
    case "done":
      return `Pronto. Encontramos ${event.primes.length} números primos: ${event.primes.join(", ")}.`;
  }
}

export function isPrime(n: number): boolean {
  if (n < 2 || !Number.isInteger(n)) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
