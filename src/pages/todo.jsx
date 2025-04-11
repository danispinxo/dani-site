'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFloppyDisk,
  faRotateLeft,
  faTrash,
  faCheck,
  faHourglass,
  faSquareCheck,
  faChampagneGlasses,
} from '@fortawesome/free-solid-svg-icons';
import TopNavbar from '../components/Navbar';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [randomTask, setRandomTask] = useState(() => (typeof window !== 'undefined' ? sessionStorage.getItem('randomTask') || null : null));
  const [completedTasks, setCompletedTasks] = useState(() =>
    typeof window !== 'undefined' ? JSON.parse(sessionStorage.getItem('completedTasks')) || [] : [],
  );
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [cat, setCat] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0 && completedTasks.length > 0) {
      setRandomTask('');
      getCongratsCat();
    }
  }, [tasks, completedTasks]);

  useEffect(() => {
    sessionStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    sessionStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  useEffect(() => {
    if (randomTask) {
      sessionStorage.setItem('randomTask', randomTask);
    } else {
      sessionStorage.removeItem('randomTask');
    }
  }, [randomTask]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handlePickRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      setRandomTask(tasks[randomIndex]);
    } else {
      setRandomTask(null);
    }
  };

  const handleSaveForLater = (task) => {
    setRandomTask(null);
    handlePickRandomTask();
  };

  const handleMarkAsDone = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
    setRandomTask(null);
    handlePickRandomTask();
  };

  const handleDoneFromList = (task) => {
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setEditedTask(task);
  };

  const handleSaveEdit = () => {
    setTasks(tasks.map((t) => (t === editingTask ? editedTask : t)));
    setEditingTask(null);
    setEditedTask('');
  };

  const handleDeleteTask = (task) => setTasks(tasks.filter((t) => t !== task));

  const handleResetList = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the list? This action cannot be undone.');

    if (confirmReset) {
      setTasks([]);
      setCompletedTasks([]);
      setRandomTask(null);
      sessionStorage.clear();
    }
  };

  const getCongratsCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();

      if (data && data[0] && data[0].url) {
        setCat(data[0].url);
      } else {
        setCat(null);
      }
    } catch (error) {
      setCat(null);
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="todo-container">
        <h1 className="todo-title">
          To-Do List: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </h1>

        {tasks.length === 0 && completedTasks.length > 0 && (
          <div className="completed-list-success-message">
            <h2>
              <FontAwesomeIcon icon={faChampagneGlasses} className="fa" />
              Congratulations
              <FontAwesomeIcon icon={faChampagneGlasses} className="fa" />
            </h2>
            <p>You have completed all your tasks for the day. Here's a kitty.</p>
            {cat && <img src={cat} alt="Congratulations Cat" className="congrats-cat" />}
          </div>
        )}
        {randomTask && (
          <div className="random-task">
            <h2>Currently Working On...</h2>
            <p className="current-task">{randomTask}</p>
            <button className="save-button" onClick={() => handleSaveForLater(randomTask)}>
              <FontAwesomeIcon icon={faHourglass} />
            </button>
            <button className="done-button" onClick={() => handleMarkAsDone(randomTask)}>
              <FontAwesomeIcon icon={faSquareCheck} />
            </button>
          </div>
        )}

        <form className="todo-form" onSubmit={handleAddTask}>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
          <button type="submit">Add Task</button>
        </form>

        <ol className="todo-list">
          {tasks.map((t, index) => (
            <li key={index} className="todo-list-item">
              {editingTask === t ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveEdit();
                    }}
                  />
                  <button className="save-edit-task-button" onClick={handleSaveEdit}>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                  </button>
                  <button className="cancel-edit-task-button" onClick={() => setEditingTask(null)}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                  </button>
                </>
              ) : (
                <>
                  <span onClick={() => handleEditTask(t)}>{t}</span>
                  <button className="delete-task-button" onClick={() => handleDeleteTask(t)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button className="finish-task-button" onClick={() => handleDoneFromList(t)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>

        <button className="random-task-button" onClick={handlePickRandomTask}>
          Pick a Random Task
        </button>

        {completedTasks.length > 0 && (
          <div className="completed-tasks">
            <h2>Completed Tasks</h2>
            <ul className="completed-tasks-list">
              {completedTasks.map((t, index) => (
                <li className="completed-task" key={index}>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="reset-button" onClick={handleResetList}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ToDoList;
