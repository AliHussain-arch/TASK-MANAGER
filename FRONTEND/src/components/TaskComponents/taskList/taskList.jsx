import TaskForm from '../taskForm/taskForm';
import { useParams } from 'react-router-dom';

export default function TaskList({ userId }) {
  const params = useParams();

  return (
    <>
      <TaskForm userId={userId} projectId={params.projectId} />
      <h1>{userId}</h1>
      <div>
        <h1>TaskList</h1>
      </div>
    </>
  );
}