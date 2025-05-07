import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const IncompleteList = ({ sortedTasks, handleDeleteTask, handleMarkAsDone, handleEditTask }) => {
  const { categorizedTasks, uncategorizedTasks } = sortedTasks;
  const list = Object.keys(categorizedTasks);

  return (
    <div className="d-flex justify-content-around">
      {list &&
        list.map((category, index) => (
          <div key={`category-${index}`}>
            <h5>{category}</h5>
            <ol className="todo-list">
              {categorizedTasks[category].map((t, index) => (
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
          </div>
        ))}
      {uncategorizedTasks.length > 0 && (
        <div>
          <h5>Uncategorized</h5>
          <ol className="todo-list">
            {uncategorizedTasks.map((t, index) => (
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
        </div>
      )}
    </div>
  );
};

export default IncompleteList;
