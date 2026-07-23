import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AvengersCursor } from "../components/AvengersCursor";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center doom-panel p-10">
        <h1 className="font-display text-7xl font-bold doom-glow-text">404</h1>
        <h2 className="mt-4 font-display text-xl tracking-widest uppercase">Sector Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This dimension does not exist in our archives.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-doom inline-flex">Return to Base</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MCU_0012 — Marvel Content Creator" },
      { name: "description", content: "Cinematic Marvel-themed content creator portfolio. Reels, edits, VFX and visual storytelling." },
      { property: "og:title", content: "MCU_0012 — Marvel Content Creator" },
      { property: "og:description", content: "Cinematic Marvel-themed content creator portfolio. Reels, edits, VFX and visual storytelling." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MCU_0012 — Marvel Content Creator" },
      { name: "twitter:description", content: "Cinematic Marvel-themed content creator portfolio. Reels, edits, VFX and visual storytelling." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/8428mBkfFwdC7J9ImNO5IncDDp02/social-images/social-1777725259312-G83YIVpaMAEEOL-.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/8428mBkfFwdC7J9ImNO5IncDDp02/social-images/social-1777725259312-G83YIVpaMAEEOL-.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <AvengersCursor />
      <Nav />
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
