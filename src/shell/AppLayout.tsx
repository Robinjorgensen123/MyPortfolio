// src/shell/AppLayout.tsx
import { Outlet, NavLink } from "react-router-dom";
import { useThemeToggle } from "./ThemeToggle"
import { Sun, Moon } from "lucide-react"

const ThemeToggleButton: React.FC = () => {
  const { theme, toggle } = useThemeToggle();
  return (
    <button
      onClick={toggle}
      className="rounded-full border border-zinc-900/10 dark:border-white/10 p-2 hover:bg-zinc-900/5 dark:hover:bg-white/5"
      aria-label="Växla tema"
      title={theme === "dark" ? "Byt till ljust läge" : "Byt till mörkt läge"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export const AppLayout: React.FC = () => {
  return (
    // Ljus som default + dark: varianter (inte alltid-mörkt!)
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-900/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <NavLink to="/" className="font-extrabold text-lg tracking-tight no-underline">
            du.dev
          </NavLink>

          <nav className="flex items-center gap-6 text-sm">
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "font-semibold" : "")}>
              Projekt
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "font-semibold" : "")}>
              Om mig
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-semibold" : "")}>
              Kontakt
            </NavLink>

            <ThemeToggleButton />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-zinc-900/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Robin Jörgensen</p>
          <p>Byggd med React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
};
