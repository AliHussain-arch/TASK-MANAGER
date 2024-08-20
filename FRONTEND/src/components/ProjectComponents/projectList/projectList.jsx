import { useEffect } from "react";
import ProjectItem from '../projectItem/projectItem';
import '../projectList/projectList.css'

export default function ProjectList({ listProjects, userId, projectList, setProjectList }) {
  useEffect(() => {
    async function fetchProjectList() {
      try {
        const projectsData = await listProjects(userId);
        setProjectList(projectsData.projects || []);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchProjectList();
  }, [listProjects, userId, setProjectList]);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return <h1>No Projects Found</h1>;
  }

  return (
    <>
      <h1>Projects list</h1>
      <ul>
      <div className="Projects-list-cards-contener">
      {projectList.map((project) => (
        <div className="Projects-list-cards">
        <ProjectItem key={project._id} projectId={project._id} projectName={project.name} userId={userId}/>
        </div>
      ))}
    </div></ul>
  </>
  );
}
