export default function taskForm() {
    return (
      <>
        <h1>TaskForm</h1>
        <form>
          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" name="title" placeholder="Title" />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" placeholder="Description" />
          </div>
          <div>
            <button type="submit">Add Task</button>
          </div>
        </form>
      </>
    )
  }

