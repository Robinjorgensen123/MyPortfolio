export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "Todo Pro",
    slug: "todo-pro",
    description: "Drag & drop, localStorage. React + TS.",
    tags: ["React", "TypeScript", "DnD"],
    repoUrl: "https://github.com/DITTNAMN/todo-pro"
  },
  {
    title: "Bildgalleri",
    slug: "image-gallery",
    description: "Lazy-loading och keyboard navigation.",
    tags: ["React"],
    repoUrl: "https://github.com/DITTNAMN/image-gallery"
  }
];
