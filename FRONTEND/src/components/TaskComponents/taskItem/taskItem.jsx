import { useParams } from "react-router-dom";
import taskService from "../../../services/taskService";
import './taskItem.css';

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
    <div className="Task-list-cards-contener">
    <div className="Task-list-cards">
        <div className="status-buttons">
      <button onClick={() => handleUpdate('complete')}>🟢</button>
      <button onClick={() => handleUpdate('inprogress')}>🟡</button>
      <button onClick={() => handleUpdate('pending')}>🔴</button>
      </div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <div className="class-but-delet-update">

      <button className="but-delet" onClick={handleDelete}><img className="delet-img" src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" alt="delet-alt" srcset="" /></button>
      <button className="but-update" onClick={() => handleUpdate()}> <img className="img-edit" src="https://margin.finideas.com/img/edit.png" alt="edit-alt" srcset="" /></button>
      </div>
    </div>
    </div>
  );
}