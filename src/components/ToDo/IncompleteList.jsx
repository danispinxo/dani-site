import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IncompleteList = ({ incompleteTasks, handleDeleteTask, handleMarkAsDone, handleEditTask }) => {
  const { categorizedTasks, uncategorizedTasks } = incompleteTasks;
  const list = Object.keys(categorizedTasks);

  const shortenText = (text) => {
    if (text.length > 20) {
      return text.substring(0, 30) + '...';
    }
    return text;
  };

  return (
    <Row>
      {list &&
        list.map((category, index) => (
          <Col key={`category-${index}`}>
            <h5>{category}</h5>
            <ol className="todo-list">
              {categorizedTasks[category].map((t, index) => (
                <li key={index} className="todo-list-item">
                  <>
                    <span className="incomplete-task">{shortenText(t.text)}</span>

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
          </Col>
        ))}
      {uncategorizedTasks.length > 0 && (
        <Col>
          <h5>Uncategorized</h5>
          <ol className="todo-list">
            {uncategorizedTasks.map((t, index) => (
              <li key={index} className="todo-list-item">
                <>
                  <span className="incomplete-task">{shortenText(t.text)}</span>
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
        </Col>
      )}
    </Row>
  );
};

export default IncompleteList;
