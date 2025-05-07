import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const CompleteList = ({ tasks, handleBackToList }) => {
  const toggleButtonVisibility = (e) => {
    e.currentTarget.classList.toggle('show-button');
  };

  return (
    <div className="completed-tasks">
      <h2>Completed Tasks ({tasks.length})</h2>
      <ul className="completed-tasks-list">
        {tasks.map((t, index) => (
          <li className="completed-task" key={index} onClick={toggleButtonVisibility}>
            <span>{t.text}</span>
            <button className="back-to-list-button" onClick={() => handleBackToList(t)}>
              <FontAwesomeIcon icon={faRotateLeft} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteList;
