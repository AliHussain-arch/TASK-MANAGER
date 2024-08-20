import { useEffect } from "react";
import ProjectItem from '../projectItem/projectItem';
import '../projectList/projectList.css';
import ProjectForm from "../projectForm/projectForm";
import projectService from "../../../services/projectService";

export default function ProjectList({ userId, projectList, setProjectList }) {
  useEffect(() => {
    async function fetchProjectList() {
      try {
        const projectsData = await projectService.listProjects(userId);
        setProjectList(projectsData.projects || []);
      } catch (error) {
        console.log("Error:", error);
      }
    }
    fetchProjectList();
  }, [userId, setProjectList]);

  if (!Array.isArray(projectList) || projectList.length === 0) {
    return <h1>No Projects Found</h1>;
  }

  return (
    <>
      <ProjectForm userId={userId}/>
      <h1>Projects list</h1>
      <ul>
      {projectList.map((project) => (
        <ProjectItem key={project._id} projectId={project._id} projectName={project.name} userId={userId}/>
      ))}
    </ul>
  </>
  );
}
