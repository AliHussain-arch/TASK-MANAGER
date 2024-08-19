const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;
const createTask = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/:userId/projects/:projectId/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Something went wrong");
    }
    return json;
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};
const listTasks = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/:userId/projects/:projectId/tasks`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Something went wrong");
      }
      return json;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };
  const updateTask = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/:userId/projects/:projectId/tasks/:taskId`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Something went wrong");
      }
      return json;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };
  const deleteTask = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/:userId/projects/:projectId/tasks/:taskId`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Something went wrong");
      }
      return json;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  };
export default {
  createTask,
  listTasks,
  updateTask,
  deleteTask
};