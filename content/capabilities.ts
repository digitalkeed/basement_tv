export interface Capability {
  id: string;
  title: string;
  description: string;
  /** Short outcome bullets or deliverable chips */
  chips: string[];
  /** Grid span on 12-col (7 or 5) */
  span: 7 | 5;
}

export const capabilities: Capability[] = [
  {
    id: "editing",
    title: "Editing",
    description: "Story-first cutting that keeps pace and clarity. We shape narrative and rhythm so the final cut lands.",
    chips: ["Offline & online", "Broadcast delivery"],
    span: 7,
  },
  {
    id: "color",
    title: "Color",
    description: "Look development and final grade. From dailies to HDR, we match and elevate the image.",
    chips: ["DaVinci", "4K / HDR"],
    span: 5,
  },
  {
    id: "sound",
    title: "Sound Design",
    description: "Dialogue, music, and design. Mix and master for spot, film, and broadcast.",
    chips: ["Dialogue edit", "Final mix"],
    span: 5,
  },
  {
    id: "motion",
    title: "Motion Graphics",
    description: "Titles, GFX, and animated elements. Clean, on-brand motion that supports the story.",
    chips: ["Titles & lower thirds", "Animated GFX"],
    span: 7,
  },
];
