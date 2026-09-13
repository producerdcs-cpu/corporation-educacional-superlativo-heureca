import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <SiteShell>
      <Outlet />
    </SiteShell>
  );
}
