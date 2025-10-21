// src/shell/AppLayout.tsx
import { Outlet, NavLink } from "react-router-dom";
import { useThemeToggle } from "./ThemeToggle";
import { Sun, Moon } from "lucide-react";


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
    <div
      className="min-h-screen flex flex-col dark:text-zinc-100"
      style={{ color: "var(--cinema-ivory)" }}
    >
      <div className="bg-cinema vignette min-h-screen flex flex-col">
  

        <header id ="site-header" className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-zinc-950/30 border-b border-gold">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <NavLink
              to="/"
              className="font-extrabold text-lg tracking-tight no-underline text-gold"
            >
              ✦ Robin Jörgensen
            </NavLink>

            <nav className="flex items-center gap-6 text-sm">
              <NavLink
                to="/CV"
                className={({ isActive }) =>
                  `${isActive ? "text-gold font-semibold" : ""} hover:text-gold`
                }
              >
                CV
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `${isActive ? "text-gold font-semibold" : ""} hover:text-gold`
                }
              >
                Projekt
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "text-gold font-semibold" : ""} hover:text-gold`
                }
              >
                Om mig
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-gold font-semibold" : ""} hover:text-gold`
                }
              >
                Kontakt
              </NavLink>
              <ThemeToggleButton />
            </nav>
          </div>
          <div className="filmstrip" />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="mt-12 border-t border-gold">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Robin Jörgensen</p>
            <p>Byggd med React + Tailwind</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
