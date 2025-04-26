'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faSquareCheck, faTableList, faPlus } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';

const ToDoList = (user) => {
  const [toDoList, setToDoList] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [task, setTask] = useState('');
  const [randomTask, setRandomTask] = useState(null);

  const userMetadata = user.user.user_metadata;
  const fullName = userMetadata.full_name;
  const userId = user.user.id;
  const title = fullName ? `To-Do List for ${fullName}` : 'To-Do List';

  useEffect(() => {
    setIncompleteTasks(tasks.filter((t) => !t.completed));
    setCompletedTasks(tasks.filter((t) => t.completed));
  }, [tasks]);

  const fetchMostRecentList = async () => {
    try {
      const { data: list, error } = await supabase
        .from('todo_list')
        .select()
        .eq('user', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      if (error) {
        console.error('Error fetching to-do list:', error);
      } else {
        setToDoList(list);
        const { data: items, error: fetchError } = await supabase
          .from('todo_list_item')
          .select()
          .eq('todo_list', list.id)
          .order('created_at', { ascending: false });
        if (fetchError) {
          console.error('Error fetching tasks:', fetchError);
        } else {
          setTasks(items);
          setIncompleteTasks(items.filter((item) => !item.completed));
          setCompletedTasks(items.filter((item) => item.completed));
        }
      }
    } catch (error) {
      console.error('Error fetching to-do list:', error);
    }
  };

  const handleCreateToDoList = async () => {
    try {
      const { data: list, error } = await supabase.from('todo_list').insert({ user: userId }).select().single();
      setToDoList(list);
      return list;
    } catch (error) {
      console.error('Error creating to-do list:', error);
      return error;
    }
  };

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

  const handleDeleteTask = async (task) => {
    try {
      const { error } = await supabase.from('todo_list_item').delete().eq('id', task.id);

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

  const handleCloseList = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the list? This action cannot be undone.');

    if (confirmReset) {
      setToDoList(null);
      setTasks([]);
      setRandomTask(null);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">
        {title}: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </h1>
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
            <IncompleteList tasks={incompleteTasks} handleDeleteTask={handleDeleteTask} handleMarkAsDone={handleMarkAsDone} />
          )}

          <button className="random-task-button" onClick={handlePickRandomTask}>
            Pick a Random Task
          </button>

          {completedTasks.length > 0 && <CompleteList tasks={completedTasks} handleBackToList={handleBackToList} />}
        </>
      )}

      {toDoList ? (
        <button className="bottom-button close-button" onClick={handleCloseList}>
          Close List
        </button>
      ) : (
        <button className="bottom-button most-recent-list-button" onClick={fetchMostRecentList}>
          Get Last List
        </button>
      )}

      <button className="bottom-button new-list-button" onClick={handleCreateToDoList}>
        <FontAwesomeIcon icon={faPlus} /> New List
      </button>
    </div>
  );
};

export default ToDoList;
