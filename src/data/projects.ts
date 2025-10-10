export type Project = {
    title: string;
    slug: string;
    description: string;
    tags: string[],
    repoUrl?: string;
    liveUrl?: string,
    images?: string[];
}

export const projects: Project[] = [
  {
    title: "test",
    slug: "test",
    description: "Drag & drop, localStorage. React + TS.",
    tags: ["React", "TypeScript"],
    repoUrl: "https://github.com/Robinjorgensen123?tab=repositories",
    liveUrl: ""
  },
  {
    title: "Bildgalleri",
    slug: "image-galleri",
    description: "Lazy loading & keyboard nav.",
    tags: ["React"],
    repoUrl: "https://github.com/Robinjorgensen123?tab=repositories"
  }
]