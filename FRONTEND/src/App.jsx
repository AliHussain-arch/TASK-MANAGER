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
// import projectService from './services/projectService';

// Importing Task Services
// import taskService from './services/taskService';

function App() {
  async function signUp(formData){
    await authService.signup(formData)
  }
  async function signIn(user){
    await authService.signin(user)
  }
  async function signOut(){
    await authService.signout()
  }
  return (
    <>
      <SignUp signUp={signUp}/>
      <SignIn/>
      <ProjectForm/>
      <Footer/>
    
    </>
  );
}

export default App;
