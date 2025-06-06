import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import supabase from "../../lib/supabaseClient";

const CompleteList = ({ tasks, toDoListId, setTasks }) => {
  const alphabetizedTasks = tasks.sort((a, b) => a.text.localeCompare(b.text));

  const handleBackToList = async (task) => {
    try {
      const { data: item, error } = await supabase
        .from("todo_list_item")
        .update({ completed: false })
        .eq("id", task.id)
        .select()
        .single();

      if (item && !error) {
        const { data: items, error: fetchError } = await supabase
          .from("todo_list_item")
          .select()
          .eq("todo_list", toDoListId);
        if (!fetchError) setTasks(items);
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const toggleButtonVisibility = (e) =>
    e.currentTarget.classList.toggle("show-button");

  return (
    <div className="completed-tasks">
      <h2>Completed Tasks ({tasks.length})</h2>
      <ul className="completed-tasks-list">
        {alphabetizedTasks.map((t, index) => {
          let timeDisplay = null;
          if (t.time_to_complete) {
            const totalMinutes = Math.ceil(t.time_to_complete / 60);
            if (totalMinutes >= 60) {
              const hours = Math.floor(totalMinutes / 60);
              const minutes = totalMinutes % 60;
              timeDisplay = ` (${hours}h${minutes > 0 ? ` ${minutes}m` : ""})`;
            } else {
              timeDisplay = ` (${totalMinutes} min)`;
            }
          }
          return (
            <li
              className="completed-task"
              key={index}
              onClick={toggleButtonVisibility}
            >
              <span>{t.text}</span>
              {timeDisplay && (
                <span className="time-to-complete">{timeDisplay}</span>
              )}
              <button
                className="back-to-list-button"
                onClick={() => handleBackToList(t)}
              >
                <FontAwesomeIcon icon={faRotateLeft} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteList;
