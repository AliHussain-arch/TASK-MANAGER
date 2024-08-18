export default function taskForm() {
    return (
      <form>
      <div>
        <h1>TaskForm</h1>
        <input type="text" value={title}  />
      </div>

      <div>
        <label htmlFor="title">Title:</label>
      </div>

      <div>
        <label htmlFor="description">Description:</label>
      </div>

       <div>
        <button type="submit">Add Task</button>

      </div>
      </form>
    )
  }

