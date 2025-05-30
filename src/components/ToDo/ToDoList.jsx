'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter, faSpinner } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';
import EditTaskModal from './EditTaskModal';
import RandomTask from './RandomTask';

const ToDoList = ({ toDoList, user, createNewList }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [showEditTaskModal, setShowEditTaskModal] = useState(false);
  const [showNewTaskForm, setShowNewTaskForm] = useState(true);
  const [randomTask, setRandomTask] = useState(null);
  const [rerolls, setRerolls] = useState(toDoList.max_rerolls || 20);
  const [addingTask, setAddingTask] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

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
        setCategories(categories.sort((a, b) => a.name.localeCompare(b.name)));
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    if (toDoList) {
      fetchCategories();
      fetchTasks();
      setRandomTask(null);
      setTimer(0);
      if (timerInterval) clearInterval(timerInterval);
    }
  }, [toDoList]);

  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!toDoList) return;
    setAddingTask(true);

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
    setAddingTask(false);
    e.target.elements.text.value = '';
  };

  const handlePickRandomTask = () => {
    if (allIncompleteTasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * allIncompleteTasks.length);
      setRandomTask(allIncompleteTasks[randomIndex]);
      setTimer(0);
      if (timerInterval) clearInterval(timerInterval);
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setTimerInterval(interval);
    } else {
      setRandomTask(null);
      setTimer(0);
      if (timerInterval) clearInterval(timerInterval);
    }
  };

  const handleReroll = (task) => {
    setRerolls(rerolls - 1);
    setRandomTask(null);
    setTimer(0);
    if (timerInterval) clearInterval(timerInterval);
    handlePickRandomTask();
  };

  const handleMarkAsDone = async (task, timeToComplete = null) => {
    try {
      const updateData = { completed: true };
      if (timeToComplete !== null) updateData.time_to_complete = timeToComplete;

      const { data: item, error } = await supabase.from('todo_list_item').update(updateData).eq('id', task.id).select().single();

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
    if (timerInterval) clearInterval(timerInterval);
    await handleMarkAsDone(task, timer);
    setRandomTask(null);
    setTimer(0);
    handlePickRandomTask();
  };

  const handleDeleteTask = async () => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (!confirmed || !editingTask) return;

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

  return (
    <div>
      {allIncompleteTasks.length === 0 && completedTasks.length > 0 && <SuccessMessage />}

      {toDoList && (
        <>
          {randomTask && (
            <RandomTask rerolls={rerolls} handleReroll={handleReroll} handleDoneFromRandom={handleDoneFromRandom} randomTask={randomTask} />
          )}

          {showNewTaskForm ? (
            <form className="todo-form" onSubmit={handleAddTask}>
              <div className="d-flex justify-content-end task-form-open-close-btn">
                <FontAwesomeIcon
                  className="task-form-open-close-btn"
                  icon={faDownLeftAndUpRightToCenter}
                  onClick={() => setShowNewTaskForm(false)}
                />
              </div>
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
              <button type="submit" disabled={addingTask}>
                {addingTask ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Add Task'}
              </button>
            </form>
          ) : (
            <div className="minimized-task-form d-flex justify-content-between align-items-center">
              <button
                className="todo-form minimized d-flex justify-content-around align-items-center"
                onClick={() => setShowNewTaskForm(true)}
              >
                Add a Task
                <FontAwesomeIcon className="task-form-open-close-btn" icon={faUpRightAndDownLeftFromCenter} />
              </button>
              {allIncompleteTasks.length > 10 && (
                <button className="random-task-button" onClick={handlePickRandomTask}>
                  Pick a Random Task
                </button>
              )}
            </div>
          )}

          {allIncompleteTasks.length > 0 && (
            <IncompleteList
              fetchTasks={fetchTasks}
              incompleteTasks={incompleteTasks}
              handleMarkAsDone={handleMarkAsDone}
              handleEditTask={(task) => {
                setEditingTask(task);
                setShowEditTaskModal(true);
              }}
              createNewList={createNewList}
            />
          )}

          <button className="random-task-button" onClick={handlePickRandomTask}>
            Pick a Random Task
          </button>

          {completedTasks.length > 0 && <CompleteList tasks={completedTasks} toDoListId={toDoList?.id} setTasks={setTasks} />}
          <EditTaskModal
            showEditTaskModal={showEditTaskModal}
            setShowEditTaskModal={setShowEditTaskModal}
            handleCloseEditTaskModal={handleCloseEditTaskModal}
            categories={categories}
            editingTask={editingTask}
            fetchTasks={fetchTasks}
          />
        </>
      )}
    </div>
  );
};

export default ToDoList;
