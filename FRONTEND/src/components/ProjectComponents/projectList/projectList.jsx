import { useEffect } from "react";
import ProjectItem from '../projectItem/projectItem';
<<<<<<< HEAD
import '../projectList/projectList.css'
=======
import '../projectList/projectList.css';
import ProjectForm from "../projectForm/projectForm";
import projectService from "../../../services/projectService";
>>>>>>> 005b7dc118ca05913229b097a5cbe1e356088c20

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
