import { useState } from "react";

export default function ProjectForm({}) {
  const [formData, setFormData] = useState({
    name: '',
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    // handleAddProject(formData);
  }

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Project Name"
            onChange={handleFormData}
            value={formData.name}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}