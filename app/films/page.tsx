import { getProjectsByCategory } from "@/content/projects";
import { ProjectFeed } from "@/components/ProjectFeed";

export default function FilmsPage() {
  const projects = getProjectsByCategory("films");
  return <ProjectFeed projects={projects} />;
}
