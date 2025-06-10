"useclient";

import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
  faSpinner,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import supabase from "../../lib/supabaseClient";
import CompleteList from "./CompleteList";
import IncompleteList from "./IncompleteList";
import SuccessMessage from "./SuccessMessage";
import EditTaskModal from "./EditTaskModal";
import RandomTask from "./RandomTask";
import debounce from "lodash/debounce";
import Link from "next/link";

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
  const [errorMessage, setErrorMessage] = useState("");

  const allIncompleteTasks = tasks.filter((t) => !t.completed);

  useEffect(() => {
    setIncompleteTasks(sortTasksByCategory(allIncompleteTasks));
    setCompletedTasks(tasks.filter((t) => t.completed));
  }, [tasks, categories]);

  const debouncedFetchTasks = useCallback(
    debounce(async () => {
      try {
        const { data: items, error } = await supabase
          .from("todo_list_item")
          .select()
          .eq("todo_list", toDoList.id)
          .order("created_at", { ascending: false });
        if (!error) {
          setTasks(items);
        } else {
          setErrorMessage("Error fetching tasks: " + error.message);
        }
      } catch (error) {
        setErrorMessage("Error fetching tasks: " + error.message);
      }
    }, 300),
    [toDoList]
  );

  const debouncedFetchCategories = useCallback(
    debounce(async () => {
      try {
        const { data: categories, error } = await supabase
          .from("todo_category")
          .select()
          .eq("user", user.id)
          .order("created_at", { ascending: false });
        if (error) {
          setErrorMessage("Error fetching categories: " + error.message);
        } else {
          setCategories(
            categories.sort((a, b) => a.name.localeCompare(b.name))
          );
        }
      } catch (error) {
        setErrorMessage("Error fetching categories: " + error.message);
      }
    }, 300),
    [user]
  );

  useEffect(() => {
    if (toDoList) {
      debouncedFetchCategories();
      debouncedFetchTasks();
      setRandomTask(null);
      setTimer(0);
      if (timerInterval) clearInterval(timerInterval);
    }
  }, [toDoList, debouncedFetchCategories, debouncedFetchTasks]);

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
      priority: "medium",
    };

    if (!isNaN(category)) params.category = category;

    try {
      const { data: item, error } = await supabase
        .from("todo_list_item")
        .insert(params)
        .select()
        .single();

      if (item && !error) {
        const { data: items, error: fetchError } = await supabase
          .from("todo_list_item")
          .select()
          .eq("todo_list", toDoList.id);

        if (!fetchError) {
          setTasks(items);
        } else {
          setErrorMessage("Error fetching tasks: " + fetchError.message);
        }
      }
    } catch (error) {
      setErrorMessage("Error adding task: " + error.message);
    }
    setAddingTask(false);
    e.target.elements.text.value = "";
  };

  const handlePickRandomTask = () => {
    if (allIncompleteTasks.length > 0) {
      const highPriorityTasks = allIncompleteTasks.filter(
        (t) => t.priority === "high"
      );
      const mediumPriorityTasks = allIncompleteTasks.filter(
        (t) => t.priority === "medium"
      );
      const lowPriorityTasks = allIncompleteTasks.filter(
        (t) => t.priority === "low"
      );
      const pickFrom =
        highPriorityTasks.length > 0
          ? highPriorityTasks
          : mediumPriorityTasks.length > 0
            ? mediumPriorityTasks
            : lowPriorityTasks;
      const randomIndex = Math.floor(Math.random() * pickFrom.length);
      setRandomTask(pickFrom[randomIndex]);
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

  const handleReroll = () => {
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

      const { data: item, error } = await supabase
        .from("todo_list_item")
        .update(updateData)
        .eq("id", task.id)
        .select()
        .single();

      if (item && !error) {
        const { data: items, error: fetchError } = await supabase
          .from("todo_list_item")
          .select()
          .eq("todo_list", toDoList.id);

        if (!fetchError) {
          setTasks(items);
        } else {
          setErrorMessage("Error fetching tasks: " + fetchError.message);
        }
      }
    } catch (error) {
      setErrorMessage("Error completing task: " + error.message);
    }
  };

  const handleDoneFromRandom = async (task) => {
    if (timerInterval) clearInterval(timerInterval);
    await handleMarkAsDone(task, timer);
    setRandomTask(null);
    setTimer(0);
    handlePickRandomTask();
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
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {allIncompleteTasks.length === 0 && completedTasks.length > 0 && (
        <SuccessMessage />
      )}

      {toDoList && (
        <>
          {randomTask && (
            <RandomTask
              rerolls={rerolls}
              handleReroll={handleReroll}
              handleDoneFromRandom={handleDoneFromRandom}
              randomTask={randomTask}
            />
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
                <textarea
                  className="form-text-area"
                  name="text"
                  placeholder="Enter a task"
                  rows={3}
                />
                <div className="category-dropdown">
                  <label htmlFor="category-select">Category:</label>
                  <select id="category-select" name="category" defaultValue="">
                    <option value="">Uncategorized</option>
                    {categories.map((category) => (
                      <option
                        key={`dropdown-${category.id}`}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <p>
                    <small>
                      Add/edit categories{" "}
                      <Link href="/full-list-history">here</Link>.
                    </small>
                  </p>
                </div>
              </div>
              <button type="submit" disabled={addingTask}>
                {addingTask ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Add Task"
                )}
              </button>
            </form>
          ) : (
            <div className="minimized-task-form d-flex justify-content-around align-items-center">
              <button
                className="minimized"
                onClick={() => setShowNewTaskForm(true)}
              >
                <span>Add a Task </span>
                <FontAwesomeIcon
                  className="task-form-open-close-btn"
                  icon={faUpRightAndDownLeftFromCenter}
                />
              </button>
              {allIncompleteTasks.length > 10 && (
                <button className="minimized" onClick={handlePickRandomTask}>
                  <span>Pick a Task </span>
                  <FontAwesomeIcon
                    className="task-form-open-close-btn"
                    icon={faHandPointer}
                  />
                </button>
              )}
            </div>
          )}

          {allIncompleteTasks.length > 0 && (
            <IncompleteList
              fetchTasks={debouncedFetchTasks}
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

          {completedTasks.length > 0 && (
            <CompleteList
              tasks={completedTasks}
              toDoListId={toDoList?.id}
              setTasks={setTasks}
            />
          )}
          <EditTaskModal
            showEditTaskModal={showEditTaskModal}
            setShowEditTaskModal={setShowEditTaskModal}
            handleCloseEditTaskModal={handleCloseEditTaskModal}
            categories={categories}
            editingTask={editingTask}
            fetchTasks={debouncedFetchTasks}
          />
        </>
      )}
    </div>
  );
};

export default ToDoList;
