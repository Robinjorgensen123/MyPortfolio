
import ProjectCard from "../components/ProjectCard"
import React from "react";
import { projects } from "../data/projects"
import Reveal from "../lib/Reveal"
import { Link } from "react-router-dom"
import SkillsSection from "../components/skillsSection";


const Hero: React.FC = () => (
    <section className="relative py-24 sm:py-32 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       <div className="mb-2">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold
                     border border-white/10 bg-white/40 dark:bg-white/10 backdrop-blur
                     whitespace-nowrap"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
          Work in progress.....
        </span>
      </div>

      <p className="text-sm tracking-widest text-violet-300/90 uppercase">
      Fullstack JavaScript
      </p>
      <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold leading-tight">Robin Jörgensen</h1>


<p>
  <a className="inline-flex mt-3 items-center gap-4 rounded-xl px-4 py-2 font-bold border border-white/50"
   href="https://github.com/Robinjorgensen123" 
   target="_blank" 
   rel="noopener noreferrer"
   >
    <strong>GitHub </strong>
    </a>
    </p>
      <div className="mt-8 flex gap-3">
        <Reveal>
          <Link to="/projects" 
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-violet-600 text-white"
          >
            Se projekt
            </Link>
            </Reveal>
        <Reveal>
          <Link to="/contact"
           className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold border border-white/10"
           >
            Kontakta mig
            </Link>
            </Reveal>
      </div>
    </div>


    <div 
      className="absolute -right-20 -top-10 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30 pointer-events-none"
      style={{background:'conic-gradient(from 90deg at 50% 50%, #7C3AED, #06B6D4, #7C3AED)'}} 
      />
  </section>
);


const Home = () => {
    const featured = projects.slice(0, 6);
    return (
           <>
      <Hero />
      <SkillsSection/>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs tracking-widest text-violet-300/90 uppercase">Utvalda</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Projekt</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl">Github.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </>
    )
}

export default Home;