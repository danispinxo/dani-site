import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import supabase from "../../lib/supabaseClient";

const IncompleteList = ({
  incompleteTasks,
  handleMarkAsDone,
  handleEditTask,
  fetchTasks,
  createNewList,
}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const { categorizedTasks, uncategorizedTasks } = incompleteTasks;
  const list = Object.keys(categorizedTasks);
  const sortedList = list.sort((a, b) => a.localeCompare(b));

  const shortenText = (text) => {
    if (text.length > 20) return text.substring(0, 30) + "...";

    return text;
  };

  const handleSelectListItem = (task) => () => {
    setSelectedIds((prev) =>
      prev.includes(task.id)
        ? prev.filter((id) => id !== task.id)
        : [...prev, task.id]
    );
  };

  const handleDeleteSelectedTasks = async (ids) => {
    try {
      const { error } = await supabase
        .from("todo_list_item")
        .delete()
        .in("id", ids);
      if (!error) fetchTasks();
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
    setSelectedIds([]);
  };

  const handleTransferToNewList = async (ids) => {
    setSelectedIds([]);
    const newlist = await createNewList(null, ids);

    if (newlist.id) {
      const url = new URL(window.location);
      url.searchParams.set("id", newlist.id);
      window.history.replaceState({}, "", url);
    }
    fetchTasks();
  };

  return (
    <>
      <div>
        {selectedIds.length > 0 && (
          <div className="selected-task-buttons">
            <button onClick={() => handleDeleteSelectedTasks(selectedIds)}>
              Delete Selected
            </button>
            <button onClick={() => handleTransferToNewList(selectedIds)}>
              Transfer to New List
            </button>
          </div>
        )}
      </div>
      <Row>
        {sortedList &&
          sortedList.map((category, index) => (
            <Col key={`category-${index}`}>
              <h5>{category}</h5>
              <ol className="todo-list">
                {categorizedTasks[category].map((t, index) => (
                  <li
                    key={index}
                    className={`todo-list-item ${selectedIds.includes(t.id) ? "selected" : ""}`}
                  >
                    <>
                      <span onClick={handleSelectListItem(t)}>
                        {shortenText(t.text)}
                      </span>

                      {!selectedIds.includes(t.id) && (
                        <>
                          <button
                            className="edit-task-button"
                            onClick={() => handleEditTask(t)}
                          >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                          </button>

                          <button
                            className="finish-task-button"
                            onClick={() => handleMarkAsDone(t)}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                        </>
                      )}
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
                    <span className="incomplete-task">
                      {shortenText(t.text)}
                    </span>
                    <button
                      className="edit-task-button"
                      onClick={() => handleEditTask(t)}
                    >
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                    <button
                      className="finish-task-button"
                      onClick={() => handleMarkAsDone(t)}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </>
                </li>
              ))}
            </ol>
          </Col>
        )}
      </Row>
    </>
  );
};

export default IncompleteList;
