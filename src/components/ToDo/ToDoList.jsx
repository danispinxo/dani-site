'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDice,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';
import EditTaskModal from './EditTaskModal';

const ToDoList = ({ toDoList, user }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [randomTask, setRandomTask] = useState(null);
  const [rerolls, setRerolls] = useState(toDoList.max_rerolls || 20);

  const allIncompleteTasks = tasks.filter((t) => !t.completed);

  useEffect(() => {
    setIncompleteTasks(sortTasksByCategory(allIncompleteTasks));
    setCompletedTasks(tasks.filter((t) => t.completed));
  }, [tasks, categories]);

  const fetchTasks = async () => {
    try {
      const { data: items, error } = await supabase
        .from('todo_list_item')
        .select()
        .eq('todo_list', toDoList.id)
        .order('created_at', { ascending: false });
      if (!error) {
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

    if (!toDoList) return;

    const text = e.target.elements.text.value;
    const category = parseInt(e.target.elements.category.value);

    const params = {
      text,
      todo_list: toDoList.id,
      completed: false,
    };

    if (!isNaN(category)) params.category = category;

    try {
      const { data: item, error } = await supabase.from('todo_list_item').insert(params).select().single();

      if (!error) {
        const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList.id);

        if (!fetchError) {
          setTasks(items);
        } else {
          console.error('Error fetching tasks:', fetchError);
        }
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handlePickRandomTask = () => {
    if (allIncompleteTasks.length > 0) {
      console.log('Incomplete tasks:', allIncompleteTasks);
      const randomIndex = Math.floor(Math.random() * allIncompleteTasks.length);
      setRandomTask(allIncompleteTasks[randomIndex]);
    } else {
      setRandomTask(null);
    }
  };

  const handleReroll = (task) => {
    setRerolls(rerolls - 1);
    setRandomTask(null);
    handlePickRandomTask();
  };

  const handleMarkAsDone = async (task) => {
    try {
      const { data: item, error } = await supabase.from('todo_list_item').update({ completed: true }).eq('id', task.id).select().single();

      if (!error) {
        const { data: items, error: fetchError } = await supabase.from('todo_list_item').select().eq('todo_list', toDoList.id);

        if (!fetchError) {
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

    if (!isNaN(category)) params.category = category;

    try {
      const { data: item, error } = await supabase.from('todo_list_item').update(params).eq('id', editingTask.id).select().single();

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

  const sortTasksByCategory = (tasks) => {
    const categorizedTasks = {};
    const uncategorizedTasks = [];

    tasks.forEach((task) => {
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

  const getDiceIcon = (rerolls) => {
    if (rerolls > 6) {
      return faDice;
    } else if (rerolls === 6) {
      return faDiceSix;
    } else if (rerolls === 5) {
      return faDiceFive;
    } else if (rerolls === 4) {
      return faDiceFour;
    } else if (rerolls === 3) {
      return faDiceThree;
    } else if (rerolls === 2) {
      return faDiceTwo;
    } else if (rerolls === 1) {
      return faDiceOne;
    }
  };
  return (
    <div>
      {allIncompleteTasks.length === 0 && completedTasks.length > 0 && <SuccessMessage />}

      {toDoList && (
        <>
          {randomTask && (
            <div className="random-task">
              <h2>Currently Working On...</h2>
              <p className="current-task">
                {rerolls > 0 ? (
                  <button className="save-button" onClick={() => handleReroll(randomTask)}>
                    <FontAwesomeIcon icon={getDiceIcon(rerolls)} />
                  </button>
                ) : (
                  <button className="save-button" disabled>
                    <FontAwesomeIcon icon={faDiceOne} />
                  </button>
                )}
                <button className="done-button" onClick={() => handleDoneFromRandom(randomTask)}>
                  <FontAwesomeIcon icon={faSquareCheck} />
                </button>
                {randomTask.text}
              </p>
            </div>
          )}

          <form className="todo-form" onSubmit={handleAddTask}>
            <div className="d-flex justify-content-between align-items-center">
              <input type="text" name="text" placeholder="Enter a task" />
              <div className="category-dropdown">
                <label htmlFor="category-select">Category:</label>
                <select id="category-select" name="category" defaultValue="">
                  <option value="">Uncategorized</option>
                  {categories.map((category) => (
                    <option key={`dropdown-${category.id}`} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit">Add Task</button>
          </form>

          {allIncompleteTasks.length > 10 && (
            <button className="random-task-button" onClick={handlePickRandomTask}>
              Pick a Random Task
            </button>
          )}

          {allIncompleteTasks.length > 0 && (
            <IncompleteList
              incompleteTasks={incompleteTasks}
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
          <EditTaskModal
            showEditTaskModal={showEditTaskModal}
            handleCloseEditTaskModal={handleCloseEditTaskModal}
            categories={categories}
            editingTask={editingTask}
          />
        </>
      )}
    </div>
  );
};

export default ToDoList;
