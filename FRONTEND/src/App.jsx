import { useState } from 'react';
import './App.css';
// Importing the Authentication Components
import SignIn from './components/Authentication/signIn/signIn';
import SignUp from './components/Authentication/signUp/signUp';

// Importing the Project Components
import ProjectForm from './components/ProjectComponents/projectForm/projectForm';
import ProjectItem from './components/ProjectComponents/projectItem/projectItem';
import ProjectList from './components/ProjectComponents/projectList/projectList';

// Importing the Task Components
import TaskForm from './components/TaskComponents/taskForm/taskForm';
import TaskItem from './components/TaskComponents/taskItem/taskItem';
import TaskList from './components/TaskComponents/taskList/taskList';

// Importing the Semantic Components
import Footer from './components/SemanticComponents/footer/footer';
import Navbar from './components/SemanticComponents/navbar/navbar';

// Importing Authentication Services
import authService from './services/authService';

// Importing Project Services
import projectService from './services/projectService';

// Importing Task Services
import taskService from './services/taskService';

// import taskService from './services/taskService';

function App() {

  // Authentication functions

  async function signUp(formData){
    await authService.signup(formData)
  }
  async function signIn(formData){
    await authService.signin(formData)
  }
  async function signOut(){
    await authService.signout();
  }
  async function getUser(){
    await authService.getUser();
  }
  
  // Project functions

  async function createProject(userId, formData) {
    await projectService.createProject(userId, formData);
  }

  async function listProjects(userId, formData) {
    await projectService.listProjects(userId, formData);
  }

  async function updateProject(userId, projectId, formData) {
    await projectService.updateProject(userId, projectId, formData);
  }

  async function deleteProject(userId, projectId, formData) {
    await projectService.deleteProject(userId, projectId, formData);
  }

  // Task functions

  async function createTask(userId, projectId) {
    
  }

  async function listTasks(userId, projectId) {
    
  }

  async function updateTask(userId, projectId, taskId){

  }

  async function deleteTask(userId, projectId, taskId) {
    
  }

  return (
    <>
      <SignUp signUp={signUp}/>
    </>
  );
}

export default App;
