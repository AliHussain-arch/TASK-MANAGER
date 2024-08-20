import { useState } from "react";
import "./App.css";
// Importing the Authentication Components
import SignIn from "./components/Authentication/signIn/signIn";
import SignUp from "./components/Authentication/signUp/signUp";

// Importing the Project Components
import ProjectList from "./components/ProjectComponents/projectList/projectList";

// Importing the Task Components
import TaskForm from "./components/TaskComponents/taskForm/taskForm";
import TaskItem from "./components/TaskComponents/taskItem/taskItem";
import TaskList from "./components/TaskComponents/taskList/taskList";

// Importing the Semantic Components
import Footer from "./components/SemanticComponents/footer/footer";
import Navbar from "./components/SemanticComponents/navbar/navbar";

// Importing Authentication Services
import authService from "./services/authService";

// Importing Task Services
import taskService from "./services/taskService";
import { Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(authService.getUser());
  const [projectList, setProjectList] = useState([]);

  // Authentication functions

  async function signUp(formData) {
    await authService.signup(formData);
  }
  async function getUser() {
    await authService.getUser();
  }

  // Task functions

  async function createTask(userId, projectId) {}

  async function listTasks(userId, projectId) {}

  async function updateTask(userId, projectId, taskId) {}

  async function deleteTask(userId, projectId, taskId) {}

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      {!user ? (
        <>
          <Routes>
            <Route
              path="/signin"
              element={
                <SignIn
                  signIn={authService.signin}
                  getUser={authService.getUser}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/signup"
              element={<SignUp signUp={authService.signup} />}
            />
          </Routes>
        </>
      ) : (
        <>
          <p>Welcome {user.username}</p>
          <ProjectList
            projectList={projectList}
            setProjectList={setProjectList}
            userId={user.id}
          />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
