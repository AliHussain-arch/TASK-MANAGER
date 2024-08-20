import { useParams } from "react-router-dom";
import taskService from "../../../services/taskService";

export default function TaskItem({ task, fetchTaskList }) {
  const { userId, projectId } = useParams();

  const handleDelete = async () => {
    try {
      await taskService.deleteTask(userId, projectId, task._id);
      await fetchTaskList(); 
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  const handleUpdate = async (updatedStatus) => {
    try {
      const formData = {
        title: task.title,
        description: task.description,
        status: updatedStatus || task.status
      };
      await taskService.updateTask(userId, projectId, task._id, formData);
      await fetchTaskList(); 
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleUpdate()}>Edit</button>
      <button onClick={() => handleUpdate('complete')}>🟢</button>
      <button onClick={() => handleUpdate('inprogress')}>🟡</button>
      <button onClick={() => handleUpdate('pending')}>🔴</button>
    </div>
  );
}