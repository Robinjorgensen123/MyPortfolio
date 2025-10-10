// src/shell/AppLayout.tsx
import { Outlet, NavLink } from "react-router-dom";

export const ThemeToggle = () => {
  const onClick = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    html.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-white/10 p-2 hover:bg-white/5"
      aria-label="Växla tema"
    >
      ☾/☀︎
    </button>
  );
};

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        {/* fix: max-w-6xl (inte 6x1) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <NavLink to="/" className="font-extrabold text-lg tracking-tight no-underline">
            du.dev
          </NavLink>

          <nav className="flex items-center gap-6 text-sm">
            {/* fix: korrekt className-funktion + label */}
            <NavLink
              to="/projects"
              className={({ isActive }: {isActive: boolean} ) => (isActive ? "font-semibold" : "")}
            >
              Projekt
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }: {isActive: boolean} ) => (isActive ? "font-semibold" : "")}
            >
              Om mig
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }: {isActive: boolean} ) => (isActive ? "font-semibold" : "")}
            >
              Kontakt
            </NavLink>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-white/10">
        {/* fix: max-w-6xl (inte 6x1) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Robin Jörgensen</p>
          <p>Byggd med React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
};
