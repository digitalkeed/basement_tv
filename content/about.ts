export type About = {
  tagline: string;
  paragraph: string;
  capabilities: string[];
  valueCards: { title: string; copy: string }[];
};

export const about: About = {
  tagline: "Editing and post-production. Work that moves.",
  paragraph:
    "We are Basement. A boutique studio specializing in moving pictures. We tailor each production to its scale and make sure the right key creatives are on board to consistently deliver the best outcome.",
  capabilities: ["Editing", "Post-production", "Color", "Sound design", "Motion graphics"],
  valueCards: [
    { title: "Boutique by design", copy: "Small enough to stay nimble and focused; experienced enough to deliver at the highest level." },
    { title: "Right key creatives", copy: "We match the project with the right editors, colorists, and sound designers—no bench warmers." },
    { title: "Scale-appropriate crews", copy: "From solo edits to full post crews, we scale to fit the job and the budget." },
  ],
};
