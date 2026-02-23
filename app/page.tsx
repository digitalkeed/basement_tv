import { getProjects } from "@/content/projects";
import { ProjectFeed } from "@/components/ProjectFeed";

export default function HomePage() {
  const projects = getProjects();
  return <ProjectFeed projects={projects} />;
}
