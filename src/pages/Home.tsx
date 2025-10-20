import ProjectCard from "../components/ProjectCard";
import React from "react";
import { projects } from "../data/projects";
import Reveal from "../lib/Reveal";
import { Link } from "react-router-dom";
import SkillsSection from "../components/skillsSection";
import LiaNotice from "../components/LiaNotice";

const Hero: React.FC = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-2xl">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                     border border-white/10 bg-white/10 backdrop-blur whitespace-nowrap"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
          Work in progress.....
        </span>
      </div>

      <p className="mt-6 text-sm tracking-widest text-gold/90 uppercase">
        Fullstack JavaScript
      </p>
      <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">
        Robin Jörgensen
      </h1>

      <p className="mt-3">
        <a
          className="inline-flex mt-3 items-center gap-4 rounded-xl px-4 py-2 font-bold border border-gold hover:text-gold"
          href="https://github.com/Robinjorgensen123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub</strong>
        </a>
      </p>

      <div className="mt-8 flex gap-3">
        <Reveal>
          <Link to="/projects" className="ticket px-6 py-3 font-semibold">
            <span>SE PROJEKT</span>
            <br />
            <small>ADMIT ONE</small>
          </Link>
        </Reveal>
        <Reveal>
          <Link to="/contact" className="ticket px-6 py-3 font-semibold">
            <span>KONTAKT</span>
            <br />
            <small>BOX OFFICE</small>
          </Link>
        </Reveal>
      </div>
    </div>

    {/* Marquee-ram för LIA-rutan */}
    <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:flex items-center justify-center z-10 pointer-events-none">
      <div className="pointer-events-auto px-6 w-[32rem]">
        <div className="marquee p-5">
          <LiaNotice
            mode="inline"
            title="Söker LIA"
            lines={[
              "Göteborg eller distans",
              "Period 1: Vecka 2–11, 2026",
              "Period 2: Vecka 14–23, 2026",
            ]}
          />
        </div>
      </div>
    </div>

    {/* Spotlights (subtil ljussättning) */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(600px 300px at 30% 10%, rgba(255,255,255,.08), transparent 60%), radial-gradient(800px 500px at 80% 0%, rgba(212,175,55,.12), transparent 60%)",
      }}
    />
  </section>
);

const Home: React.FC = () => {
  const featured = projects.slice(0, 6);
  return (
    <>
      <Hero />
      <SkillsSection />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-gold/90 uppercase">Utvalda</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Projekt</h2>
          <p className="mt-2 text-zinc-300/90 max-w-2xl">Github.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
