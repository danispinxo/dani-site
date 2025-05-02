import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

const CompleteList = ({ tasks, handleBackToList }) => {
  return (
    <div className="completed-tasks">
      <h2>Completed Tasks ({tasks.length})</h2>
      <ul className="completed-tasks-list">
        {tasks.map((t, index) => (
          <li
            className="completed-task"
            key={index}
            onMouseEnter={(e) => e.target.classList.add('show-button')}
            onMouseLeave={(e) => e.target.classList.remove('show-button')}
          >
            <span>{t.text}</span>
            <button className="back-to-list-button" onClick={() => handleBackToList(t)}>
              <FontAwesomeIcon icon={faTableList} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteList;
