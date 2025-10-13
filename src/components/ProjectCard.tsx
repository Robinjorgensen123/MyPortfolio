

type Project = {
  title: string; slug: string; description: string;
  tags?: string[]; repoUrl?: string; liveUrl?: string; images?: string[];
};

type Props = { p: Project };

const ProjectCard: React.FC<Props> = ({ p }) => {
  const cover = p.images?.[0] || `https://picsum.photos/seed/${encodeURIComponent(p.slug)}/800/500`;
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow transition hover:shadow-lg">
      <div className="aspect-video overflow-hidden rounded-t-2xl">
        <img src={cover} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="mt-1 text-sm text-zinc-400">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5">{t}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer">Live ↗</a>}
          {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
