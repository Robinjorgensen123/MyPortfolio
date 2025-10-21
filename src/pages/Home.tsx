import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../lib/Reveal";
import CinemaScreen from "../components/CinemaScreen";
import CinemaContent from "../components/CinemaContent";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/skillsSection";
import { projects } from "../data/projects";

import CurtainInset from "../components/CurtainInset"

const Hero: React.FC = () => (
  <section className="relative overflow-hidden h-[70vh] lg:h-[80vh]">
    <div className="absolute inset-0">
      <CinemaScreen
        widthClass="w-full h-full"
        heightClass="h-full"
        align="center"
        delay={0.35}
        lines={[]} // Texten visas av CinemaContent nedan
      />
    </div>

    {/* Innehåll på bioduken (styrt via CinemaContent) */}
    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto w-[min(92vw,42rem)] relative rounded-2xl overflow-hidden aspect-[16/10]">
+     {/* Duken täcker exakt inom kortet */}
+     <CurtainInset imageUrl="/curtain.jpg" durationSec={1.6} delayMs={250} keepFrame />
        <div
        className="relative z-10 h-full flex items-center justify-center"
        style={{
          paddingLeft: "65px",
          paddingRight: "65px",
          paddingTop: "55px",
        }}>
        <CinemaContent
          title="Söker LIA"
          lines={[
            "Göteborg eller distans",
            "Period 1: Vecka 2–11, 2026",
            "Period 2: Vecka 14–23, 2026",
          ]}
          align="center"
          size="md"
          styleVariant="marquee"   // "glass" eller "none" funkar också
          delayMs={400}
          animateWords
          replayable
          replayLabel="Spela om"
        />
        </div>
      </div>
    </div>

    {/* Knappar i nederkant */}
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
