import { IProjectType } from "@/lib/types";
import { ApplyLayout, ChangeLayoutForm } from "../layouts/Layouts";


import ProjectCard from "../cards/ProjectCard";


function ProjectSection({ projects }: { projects: IProjectType[] }) {


  return (
    <>
      <ChangeLayoutForm sectionName="projectsLayout" />

      {projects.length > 0 ? (
        <ApplyLayout type="parent" sectionName={"projectsLayout"}>
          {projects.map((project: IProjectType) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </ApplyLayout>
      ) : (
        <div className="w-full flex items-center  justify-center">
          <p>No items Available yet!!</p>
        </div>
      )}
    </>
  );
}

export default ProjectSection;
