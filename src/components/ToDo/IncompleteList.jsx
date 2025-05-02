import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const IncompleteList = ({ tasks: incompleteTasks, handleDeleteTask, handleMarkAsDone, handleEditTask }) => {
  return (
    <ol className="todo-list">
      {incompleteTasks.map((t, index) => (
        <li key={index} className="todo-list-item">
          <>
            <span>{t.text}</span>

            <button className="edit-task-button" onClick={() => handleEditTask(t)}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
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
