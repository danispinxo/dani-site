'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faSquareCheck, faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import supabase from '../../lib/supabaseClient';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';

const ToDoList = ({ toDoList, user }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [sortedTasks, setSortedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [randomTask, setRandomTask] = useState(null);

  useEffect(() => {
    setIncompleteTasks(tasks.filter((t) => !t.completed));
    setCompletedTasks(tasks.filter((t) => t.completed));
  }, [tasks]);

  useEffect(() => {
    setSortedTasks(sortTasksByCategory(incompleteTasks));
  }, [incompleteTasks]);

  const fetchTasks = async () => {
    try {
      const { data: items, error } = await supabase
        .from('todo_list_item')
        .select()
        .eq('todo_list', toDoList.id)
        .order('created_at', { ascending: false });
      if (!error) {
        console.log({ items });
        setTasks(items);
      } else {
        console.error('Error fetching tasks:', error);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data: categories, error } = await supabase
        .from('todo_category')
        .select()
        .eq('user', user.user.id)
        .order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching categories:', error);
      } else {
        setCategories(categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    if (toDoList) {
      fetchCategories();
      fetchTasks();
    }
  }, [toDoList]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (task.trim() && toDoList) {
      try {
        const { data: item, error } = await supabase
          .from('todo_list_item')
          .insert({ text: task.trim(), todo_list: toDoList.id, completed: false })
          .select()
          .single();

        if (!error) {
          const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList.id);

          if (!fetchError) {
            setTask('');
            setTasks(items);
          } else {
            console.error('Error fetching tasks:', fetchError);
          }
        }
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handlePickRandomTask = () => {
    if (incompleteTasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * incompleteTasks.length);
      setRandomTask(incompleteTasks[randomIndex]);
    } else {
      setRandomTask(null);
    }
  };

  const handleSaveForLater = (task) => {
    setRandomTask(null);
    handlePickRandomTask();
  };

  const handleMarkAsDone = async (task) => {
    try {
      const { data: item, error } = await supabase.from('todo_list_item').update({ completed: true }).eq('id', task.id).select().single();

      if (!error) {
        const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList.id);

        if (!fetchError) {
          setTask('');
          setTasks(items);
        } else {
          console.error('Error fetching tasks:', fetchError);
        }
      }
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleDoneFromRandom = async (task) => {
    await handleMarkAsDone(task);
    setRandomTask(null);
    handlePickRandomTask();
  };

  const handleDeleteTask = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (!confirmed || !editingTask) {
      return;
    }

    try {
      const { error } = await supabase.from('todo_list_item').delete().eq('id', editingTask.id);

      if (!error) {
        const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList?.id);

        if (!fetchError) {
          setTasks(items);
        } else {
          console.error('Error fetching tasks:', fetchError);
        }
      } else {
        console.error('Error deleting task:', error);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleBackToList = async (task) => {
    try {
      const { data: item, error } = await supabase.from('todo_list_item').update({ completed: false }).eq('id', task.id).select().single();

      if (!error) {
        const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList.id);

        if (!fetchError) {
          setTask('');
          setTasks(items);
        } else {
          console.error('Error fetching tasks:', fetchError);
        }
      }
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();

    const text = e.target.elements.taskText.value;
    const category = parseInt(e.target.elements.category.value);

    const params = { text };

    if (!isNaN(category)) {
      params.category = category;
    }

    try {
      const { data: item, error } = await supabase.from('todo_list_item').update(params).eq('id', editingTask.id).select().single();

      console.log({ item });
      if (!error) {
        fetchTasks();
      }
    } catch (error) {
      console.error('Error editing task:', error);
    }
    setShowEditTaskModal(false);
  };

  const handleCloseEditTaskModal = () => {
    setShowEditTaskModal(false);
    setEditingTask(null);
  };

  const sortTasksByCategory = () => {
    const categorizedTasks = {};
    const uncategorizedTasks = [];

    incompleteTasks.forEach((task) => {
      const category = categories.find((c) => c.id === task.category);
      if (category) {
        if (!categorizedTasks[category.name]) {
          categorizedTasks[category.name] = [];
        }
        categorizedTasks[category.name].push(task);
      } else {
        uncategorizedTasks.push(task);
      }
    });

    return { categorizedTasks, uncategorizedTasks };
  };

  return (
    <div>
      {incompleteTasks.length === 0 && completedTasks.length > 0 && <SuccessMessage />}

      {toDoList && (
        <>
          {randomTask && (
            <div className="random-task">
              <h2>Currently Working On...</h2>
              <p className="current-task">{randomTask.text}</p>
              <button className="save-button" onClick={() => handleSaveForLater(randomTask)}>
                <FontAwesomeIcon icon={faHourglass} />
              </button>
              <button className="done-button" onClick={() => handleDoneFromRandom(randomTask)}>
                <FontAwesomeIcon icon={faSquareCheck} />
              </button>
            </div>
          )}

          <form className="todo-form" onSubmit={handleAddTask}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter a task" />
            <button type="submit">Add Task</button>
          </form>

          {incompleteTasks.length > 10 && (
            <button className="random-task-button" onClick={handlePickRandomTask}>
              Pick a Random Task
            </button>
          )}

          {incompleteTasks.length > 0 && (
            <IncompleteList
              sortedTasks={sortedTasks}
              handleDeleteTask={handleDeleteTask}
              handleMarkAsDone={handleMarkAsDone}
              handleEditTask={(task) => {
                setEditingTask(task);
                setShowEditTaskModal(true);
              }}
            />
          )}

          <button className="random-task-button" onClick={handlePickRandomTask}>
            Pick a Random Task
          </button>

          {completedTasks.length > 0 && <CompleteList tasks={completedTasks} handleBackToList={handleBackToList} />}
        </>
      )}

      {/* Modal for editing the list */}
      <Modal show={showEditTaskModal} onHide={handleCloseEditTaskModal} className="edit-task-modal">
        <Modal.Header closeButton className="edit-task-modal-header">
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEditTask(e)} className="edit-task-form">
            <Form.Group>
              <Form.Label htmlFor="taskText">Name:</Form.Label>
              <Form.Control type="text" id="taskText" name="taskText" defaultValue={editingTask?.text} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="category">Category:</Form.Label>
              <Form.Select name="category" defaultValue={editingTask?.category || ''}>
                <option value="">--- Select a Category ---</option>
                {categories.map((category) => (
                  <option key={`category-${category.id}`} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <button type="submit" className="edit-task-modal-button">
              <FontAwesomeIcon icon={faPenNib} /> Edit Task
            </button>
            <button className="delete-task-button" onClick={() => handleDeleteTask()}>
              <FontAwesomeIcon icon={faTrash} /> Delete Task
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ToDoList;
