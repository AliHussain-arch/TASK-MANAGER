const BACKEND_URL = import.meta.env.VITE_BACK_END_SERVER_URL;

const createProject = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/:userId/projects`, {
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

const listProjects = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/:userId/projects`, {
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

const updateProject = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/:userId/projects/:projectId`, {
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

const deleteProject = async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/:userId/projects`, {
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
  createProject,
  listProjects,
  updateProject,
  deleteProject,
};
