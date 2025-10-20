import ProjectCard from "../components/ProjectCard";
import React from "react";
import { projects } from "../data/projects";
import Reveal from "../lib/Reveal";
import { Link } from "react-router-dom";
import SkillsSection from "../components/skillsSection";
import LiaNotice from "../components/LiaNotice";
import CinemaScreen from "../components/CinemaScreen";

const Hero: React.FC = () => (
  <section className="relative overflow-hidden h-[70vh] lg:h-[80vh]">
    {/* Bioduk som fyller hela heron */}
    <div className="absolute inset-0">
      <CinemaScreen
        widthClass="w-full h-full"
        heightClass="h-full"
        align="center"   // eller "left"
        delay={0.35}
        lines={[
          "Robin Jörgensen",
          "Fullstack JavaScript – Göteborg eller distans",
          "Period 1: Vecka 2–11, 2026  •  Period 2: Vecka 14–23, 2026",
        ]}
      />
    </div>

    {/* Overlay-innehåll (knappar) */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div className="flex flex-col justify-end h-full pb-8 gap-4">
        <div className="flex flex-wrap gap-3">
          <Reveal>
            <a
              className="inline-flex items-center gap-4 rounded-xl px-4 py-2 font-bold border border-gold hover:text-gold bg-black/20 backdrop-blur"
              href="https://github.com/Robinjorgensen123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>GitHub</strong>
            </a>
          </Reveal>
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
    </div>
  </section>
);

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
