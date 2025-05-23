import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenNib } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';

const EditTaskModal = ({
  showEditTaskModal,
  setShowEditTaskModal,
  handleCloseEditTaskModal,
  categories,
  editingTask,
  handleDeleteTask,
  fetchTasks,
}) => {
  const handleEditTask = async (e) => {
    e.preventDefault();

    const text = e.target.elements.taskText.value;
    const category = parseInt(e.target.elements.category.value);

    const params = { text };

    if (!isNaN(category)) params.category = category;

    try {
      const { data: item, error } = await supabase.from('todo_list_item').update(params).eq('id', editingTask.id).select().single();

      if (!error) fetchTasks();
    } catch (error) {
      console.error('Error editing task:', error);
    }
    setShowEditTaskModal(false);
  };
  return (
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
  );
};

export default EditTaskModal;
