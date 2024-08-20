import { useState } from "react";

// Importing Project Services
import projectService from "../../../services/projectService";
import '../projectItem/projectItem.css'
export default function ProjectItem({ userId, projectName, projectId }) {
  const [update, setUpdate] = useState(false);
  const [formData, setFormData] = useState({ name: projectName });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await projectService.updateProject(userId, projectId, formData);
    setUpdate(false);
  }
  return (
    <ul key={projectId}>
      {!update ? (
        <h2>{projectName}</h2>
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
        <button  className="but-delet" style={{width: update ? '100%' : ''}}
          type="button"
          onClick={() => projectService.deleteProject(userId, projectId)}
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
