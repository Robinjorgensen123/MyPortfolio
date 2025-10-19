import { skills } from "../data/skills"

const Badge: React.FC<{ label: string; Icon?: React.ComponentType<{ className?: string}> }> = ({ label, Icon }) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm">
    { Icon ? <Icon className="h-4 w-4"/> : null}
    {label}
    </span>
);

const SkillsSection = () => (
    <section id="skills" className="max-w-6x1 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs tracking-widest text-violet-300/90 uppercase">Kompetens</p>
        <h2 className="mt-2 text-2x1 sm:text-3x1 font-bold">Tekniker & verktyg</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((cat) => (
                <article key={cat.title} className="rounded-2x1 border border-white/10 bg-white/5 backdrop-blur p-5">
                    <h3 className="font-semibold text-lg">{cat.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {cat.items.map(({ name, icon: Icon }) => (
                            <Badge key={name} label={name} Icon={Icon}/>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default SkillsSection