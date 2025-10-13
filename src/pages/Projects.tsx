import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
    const [q, setQ] = useState("")
    const [tag, setTag] = useState("")

    const tags = useMemo(
        () => Array.from(new Set(projects.flatMap(p => p.tags || []))),
        []
    )


const items = useMemo(() => projects.filter(p => {
    const hitQ = q
    ? (p.title + p.description +(p.tags || []).join(" ")).toLocaleLowerCase().includes(q.toLocaleLowerCase())
    : true;
    const hitT = tag ? (p.tags || []).includes(tag) : true;
    return hitQ && hitT
}), [q, tag]);

return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold">Projekt</h1>
        <input
          className="w-full sm:w-80 rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-violet-400"
          placeholder="Sök projekt…" value={q} onChange={e=>setQ(e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={()=>setTag("")}
                className={`text-xs px-2.5 py-1 rounded-full border ${!tag?'bg-violet-600 text-white border-violet-600':'border-white/10 bg-white/5'}`}>
          Alla
        </button>
        {tags.map(t => (
          <button key={t} onClick={()=>setTag(t)}
                  className={`text-xs px-2.5 py-1 rounded-full border ${tag===t?'bg-violet-600 text-white border-violet-600':'border-white/10 bg-white/5'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
      {!items.length && <p className="mt-10 text-zinc-400">Inga projekt matchar din sökning.</p>}
    </section>
)
}

export default Projects