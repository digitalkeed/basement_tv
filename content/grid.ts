/**
 * Bento grid content: photos, photoshoots, places, text/titles, videos.
 * Each item has a grid span (row/col) for layout.
 */

export type BentoItemType = "image" | "video" | "text" | "place" | "photoshoot";

export interface BentoItemBase {
  id: string;
  type: BentoItemType;
  /** Grid column span (1–4 in a 4-col grid) */
  colSpan?: 1 | 2 | 3 | 4;
  /** Grid row span */
  rowSpan?: 1 | 2 | 3;
  /** Optional link (e.g. to /work/slug) */
  href?: string;
}

export interface BentoImage extends BentoItemBase {
  type: "image";
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export interface BentoVideo extends BentoItemBase {
  type: "video";
  videoSrc: string;
  poster: string;
  title?: string;
  caption?: string;
}

export interface BentoText extends BentoItemBase {
  type: "text";
  title: string;
  subtitle?: string;
  body?: string;
  /** Use brand accent color for title */
  accent?: boolean;
}

export interface BentoPlace extends BentoItemBase {
  type: "place";
  name: string;
  location?: string;
  image?: string;
  caption?: string;
}

export interface BentoPhotoshoot extends BentoItemBase {
  type: "photoshoot";
  title: string;
  images: { src: string; alt: string }[];
  caption?: string;
}

export type BentoItem =
  | BentoImage
  | BentoVideo
  | BentoText
  | BentoPlace
  | BentoPhotoshoot;

export const bentoItems: BentoItem[] = [
  {
    id: "hero-text",
    type: "text",
    title: "Editing & post-production",
    subtitle: "Work that moves",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "accent-title",
    type: "text",
    title: "BSMNT",
    subtitle: "Photos · Films · Places",
    accent: true,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "img-1",
    type: "image",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    alt: "Project still",
    title: "Client A",
    colSpan: 2,
    rowSpan: 2,
    href: "/work/project-one",
  },
  {
    id: "place-1",
    type: "place",
    name: "Los Angeles",
    location: "Santa Monica, CA",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "video-1",
    type: "video",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    title: "Editor Name · Project Two",
    colSpan: 2,
    rowSpan: 2,
    href: "/work/project-two",
  },
  {
    id: "text-2",
    type: "text",
    title: "Photoshoots",
    body: "Places. Stories.",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: "img-2",
    type: "image",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    alt: "The Lookout",
    caption: "The Lookout",
    colSpan: 1,
    rowSpan: 2,
    href: "/work/lookout-one",
  },
  {
    id: "text-3",
    type: "text",
    title: "Films",
    subtitle: "Narrative & brand",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "img-3",
    type: "image",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    alt: "Project Three",
    title: "Client C",
    colSpan: 2,
    rowSpan: 2,
    href: "/work/project-three",
  },
  {
    id: "place-2",
    type: "place",
    name: "New York",
    location: "Canal Street",
    colSpan: 1,
    rowSpan: 1,
  },
];

export function getBentoItems(): BentoItem[] {
  return bentoItems;
}
