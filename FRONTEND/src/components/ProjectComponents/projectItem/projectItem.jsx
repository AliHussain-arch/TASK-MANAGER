import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Importing Project Services
import projectService from "../../../services/projectService";

export default function ProjectItem({ userId, projectName, projectId, refetchProjectList }) {
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState({ name: projectName });
  const navigate = useNavigate(); // Initialize useNavigate

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await projectService.updateProject(userId, projectId, formData);
    setUpdate(false);
    refetchProjectList();
  }

  async function handleDeleteProject() {
    await projectService.deleteProject(userId, projectId);
    refetchProjectList();
  }

  function handleProjectClick() {
    navigate(`/${userId}/projects/${projectId}/tasks`);
  }

  return (
    <ul key={projectId}>
      {!update ? (
        <h2 onClick={handleProjectClick} style={{ cursor: 'pointer' }}>{projectName}</h2>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormData}
          />
          
          <button className="but-save" type="submit">Save</button>
        </form>
      )}
      <div>
        <button className="but-delet" style={{width: update ? '100%' : ''}}
          type="button"
          onClick={handleDeleteProject}
        >
          Delete Project
        </button>
        {!update && (
          <button className="but-update" type="button" onClick={() => setUpdate(true)}>
            Update Project
          </button>
        )}
      </div>
    </ul>
  );
}