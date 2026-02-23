import { getProjectsByCategory } from "@/content/projects";
import { ProjectFeed } from "@/components/ProjectFeed";

export default function MusicVideosPage() {
  const projects = getProjectsByCategory("music-videos");
  return <ProjectFeed projects={projects} />;
}
