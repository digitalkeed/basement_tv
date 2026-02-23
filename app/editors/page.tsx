import { getProjectsByCategory } from "@/content/projects";
import { ProjectFeed } from "@/components/ProjectFeed";

export default function EditorsPage() {
  const projects = getProjectsByCategory("editors");
  return <ProjectFeed projects={projects} />;
}
