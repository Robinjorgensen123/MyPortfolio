import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail: React.FC = () => {
    const { slug } = useParams()
    const p = projects.find(x => x.slug === slug)

    if(!p) {
        return (
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p>Hittar inte projektet.</p>
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-violet-600 text-white mt-4">
          Till projekt
        </Link>
      </section>
        )
    }

    const cover = p.images?.[0] || `https://picsum.photos/seed/${encodeURIComponent(p.slug)}/1200/700`;
    return (
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/projects" className="text-sm text-zinc-400">← Tillbaka</Link>
      <h1 className="mt-2 text-4xl font-extrabold">{p.title}</h1>
      <p className="mt-2 text-zinc-300 max-w-2xl">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags?.map(t => <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5">{t}</span>)}
      </div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
        <img src={cover} alt={p.title} className="w-full h-auto object-cover" />
      </div>
      <div className="mt-6 flex gap-6 text-sm">
        {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
        {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
      </div>
    </article>
    )
}   

export default ProjectDetail