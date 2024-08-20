import { useState } from "react";
import taskService from "../../../services/taskService";

export default function TaskForm({ userId, projectId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      await taskService.createTask(userId, projectId, formData);
      setSuccess("Task created successfully!");
      setFormData({
        title: '',
        description: '',
        status: 'Pending',
      });
      setError(null);
    } catch (err) {
      setError("Failed to create task. Please try again.");
      setSuccess(null);
    }
  }

  return (
    <>
      <h1>TaskForm</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            placeholder="Title"
            onChange={handleFormData}
            value={formData.title}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            onChange={handleFormData}
            value={formData.description}
          />
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </>
  );
}