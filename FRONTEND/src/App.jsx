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

function App() {
  return (
    <>
      <SignIn />
      <SignUp />
      <ProjectForm />
      <ProjectItem />
      <ProjectList />
      <TaskForm />
      <TaskItem />
      <TaskList />
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
