import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenNib } from "@fortawesome/free-solid-svg-icons";
import supabase from "../../lib/supabaseClient";

const EditTaskModal = ({
  showEditTaskModal,
  setShowEditTaskModal,
  handleCloseEditTaskModal,
  categories,
  editingTask,
  fetchTasks,
}) => {
  const handleEditTask = async (e) => {
    e.preventDefault();

    const text = e.target.elements.taskText.value;
    const category = parseInt(e.target.elements.category.value);
    const priority = e.target.elements.priority.value;

    const params = { text, priority };

    if (!isNaN(category)) params.category = category;

    try {
      const { data: item, error } = await supabase
        .from("todo_list_item")
        .update(params)
        .eq("id", editingTask.id)
        .select()
        .single();

      if (item && !error) fetchTasks();
    } catch (error) {
      console.error("Error editing task:", error);
    }
    setShowEditTaskModal(false);
  };

  const handleDeleteTask = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed || !editingTask) return;

    try {
      const { error } = await supabase
        .from("todo_list_item")
        .delete()
        .eq("id", editingTask.id);

      if (!error) {
        fetchTasks();
      } else {
        console.error("Error deleting task:", error);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Modal
      show={showEditTaskModal}
      onHide={handleCloseEditTaskModal}
      className="edit-task-modal"
    >
      <Modal.Header closeButton className="edit-task-modal-header">
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleEditTask(e)} className="edit-task-form">
          <Form.Group>
            <Form.Label htmlFor="taskText">Name:</Form.Label>
            <Form.Control
              as="textarea"
              id="taskText"
              name="taskText"
              defaultValue={editingTask?.text}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Category:</Form.Label>
            <Form.Select
              name="category"
              defaultValue={editingTask?.category || ""}
              className="category-dropdown"
            >
              <option value="">--- Select a Category ---</option>
              {categories.map((category) => (
                <option key={`category-${category.id}`} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
            <a href="#" className="edit-categories-link">
              Add/Edit Categories
            </a>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="priority">Priority:</Form.Label>
            <Form.Select
              name="priority"
              id="priority"
              defaultValue={editingTask?.priority || "medium"}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Form.Select>
          </Form.Group>
          <button type="submit" className="edit-task-modal-button">
            <FontAwesomeIcon icon={faPenNib} /> Edit Task
          </button>
          <button
            className="delete-task-button"
            onClick={() => handleDeleteTask()}
          >
            <FontAwesomeIcon icon={faTrash} /> Delete Task
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTaskModal;
