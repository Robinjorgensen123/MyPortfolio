// src/components/sections/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeToggle } from "../shell/ThemeToggle";
import { Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const { theme, toggle } = useThemeToggle();

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-900/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="font-extrabold text-lg tracking-tight no-underline"
        >
          Home
        </NavLink>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Projekt
          </NavLink>
          <NavLink
            to="/CV"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            CV
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Om mig
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "font-semibold" : "")}
          >
            Kontakt
          </NavLink>

          <button
            onClick={toggle}
            aria-label="Växla tema"
            title={
              theme === "dark" ? "Byt till ljust läge" : "Byt till mörkt läge"
            }
            className="rounded-full border border-zinc-900/10 dark:border-white/10 p-2 hover:bg-zinc-900/5 dark:hover:bg-white/5"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
