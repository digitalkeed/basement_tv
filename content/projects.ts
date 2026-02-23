export type ProjectCategory = "editors" | "the-lookout" | "music-videos" | "films";

export interface Project {
  slug: string;
  client: string;
  title: string;
  category: ProjectCategory;
  videoSrc: string;
  poster: string;
  credits?: string;
  year?: number;
  /** Service tags for card: Edit, Color, Sound, Motion */
  serviceTags?: string[];
}

export const projects: Project[] = [
  {
    slug: "project-one",
    client: "Client A",
    title: "Editor Name · Project One",
    category: "editors",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    credits: "Director, DP, Editor",
    year: 2024,
  },
  {
    slug: "project-two",
    client: "Client B",
    title: "Editor Name · Project Two",
    category: "music-videos",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    credits: "Director, Editor",
    year: 2024,
  },
  {
    slug: "lookout-one",
    client: "Client Lookout",
    title: "Editor Name · The Lookout",
    category: "the-lookout",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    credits: "Director, Editor",
    year: 2024,
  },
  {
    slug: "project-three",
    client: "Client C",
    title: "Editor Name · Project Three",
    category: "films",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    credits: "Director, DP, Editor, Color",
    year: 2023,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

/** Curated subset for home "Selected Work" (max 6–8) */
export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 6);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1]! : null,
    next: index < projects.length - 1 ? projects[index + 1]! : null,
  };
}
