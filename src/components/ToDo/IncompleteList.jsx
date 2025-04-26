import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const IncompleteList = ({ tasks: incompleteTasks, handleDeleteTask, handleMarkAsDone }) => {
  return (
    <ol className="todo-list">
      {incompleteTasks.map((t, index) => (
        <li key={index} className="todo-list-item">
          <>
            <span>{t.text}</span>
            <button className="delete-task-button" onClick={() => handleDeleteTask(t)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="finish-task-button" onClick={() => handleMarkAsDone(t)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </>
        </li>
      ))}
    </ol>
  );
};

export default IncompleteList;
