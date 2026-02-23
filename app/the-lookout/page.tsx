import { getProjectsByCategory } from "@/content/projects";
import { ProjectFeed } from "@/components/ProjectFeed";

export default function TheLookoutPage() {
  const projects = getProjectsByCategory("the-lookout");
  return <ProjectFeed projects={projects} />;
}
