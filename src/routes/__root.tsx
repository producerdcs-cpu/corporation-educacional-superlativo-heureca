import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import appCss from "../styles.css?url";

const APP_NAME = "Superlativo Heureca";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "description", content: "Corporation Educacional Superlativo Heureca® — aprendizagem integral, aulas dinâmicas, preparação, exploração com IA e apoio acadêmico." },
      { name: "theme-color", content: "#1B2A6B" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=IBM+Plex+Mono:wght@500&family=Nunito:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return <html lang="pt-BR" suppressHydrationWarning className="antialiased"><head><HeadContent /></head><body><SiteShell><Outlet /></SiteShell><Scripts /></body></html>;
}