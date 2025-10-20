import { skills } from "../data/skills"
import type { IconType } from "react-icons"

type BadgeProps = {
    label: string,
    Icon: IconType;
    color?: string;
}

const Badge = ({ label, Icon, color }: BadgeProps) => (
    <span
    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm whitespace-nowrap"
              title={label}
              style={{
                border: "1px solid var(--cinema-border)",
                background:
                    "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
              }}
              >
                <Icon className="h-5 w-5" style={{ color }} aria-hidden/>
                {label}
              </span>
)

const SkillsSection = () => (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs tracking-widest text-gold/90 uppercase">Kompetens</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Tekniker & verktyg</h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((cat) => (
                <article
                  key={cat.title}
                  className="rounded-2xl card-cinema p-5 transition hover:shadow-xl hover:translate-y-[-1px]"
                >
                    <h3 className="font-semibold text-lg">{cat.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {cat.items.map(({ name, icon: Icon, color }) => (
                            <Badge key={name} label={name} Icon={Icon} color={color}/>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    </section>
)

export default SkillsSection