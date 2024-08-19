import { useState } from "react";

export default function taskForm({}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
    
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // addTask(formData);
  }

    return (
      <>
        <h1>TaskForm</h1>
        <form onSubmit={handleFormSubmit} >
          <div>
            <label htmlFor="title">Title:</label>
            <input id="title"
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
      </>
    )
  }

