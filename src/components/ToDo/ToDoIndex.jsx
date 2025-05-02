'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faSquareCheck, faTableList, faPlus } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';
import Modal from 'react-bootstrap/Modal';
import ToDoList from './ToDoList';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';

const ToDoIndex = (user) => {
  const [allToDoLists, setAllToDoLists] = useState([]);
  const [toDoList, setToDoList] = useState(null);
  const [showModal, setShowModal] = useState(false);
  let params = new URLSearchParams(document.location.search);
  let id = params.get('id');

  const userMetadata = user.user.user_metadata;
  const fullName = userMetadata.full_name;
  const userId = user.user.id;
  const title = fullName ? `To-Do List for ${fullName}` : 'To-Do List';
  const listName = toDoList?.name || `List created on ${new Date(toDoList?.created_at).toLocaleDateString()}`;

  useEffect(() => {
    if (id) {
      const fetchListById = async () => {
        try {
          const { data: list, error } = await supabase.from('todo_list').select().eq('id', id).single();
          if (error) {
            console.error('Error fetching to-do list by ID:', error);
          } else {
            setToDoList(list);
          }
        } catch (error) {
          console.error('Error fetching to-do list by ID:', error);
        }
      };
      fetchListById();
    }
  }, [id]);

  useEffect(() => {
    fetchAllToDoLists();
  }, []);

  const fetchAllToDoLists = async () => {
    try {
      const { data: lists, error } = await supabase
        .from('todo_list')
        .select()
        .eq('user', userId)
        .order('created_at', { ascending: false })
        .limit(10);
      if (error) {
        console.error('Error fetching all to-do lists:', error);
      } else {
        setAllToDoLists(lists);
      }
    } catch (error) {
      console.error('Error fetching all to-do lists:', error);
    }
  };

  const handleSelectList = (event) => {
    const listId = event.target.value;
    const selected = allToDoLists.find((list) => list.id === Number(listId));
    setToDoList(selected);
  };

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

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleEditList = async (e) => {
    e.preventDefault();
    const newName = e.target.elements.listName.value;
    try {
      const { error } = await supabase.from('todo_list').update({ name: newName }).eq('id', toDoList.id);
      if (error) {
        console.error('Error updating list name:', error);
      } else {
        setToDoList({ ...toDoList, name: newName });
        setAllToDoLists(allToDoLists.map((list) => (list.id === toDoList.id ? { ...list, name: newName } : list)));
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error updating list name:', error);
    }
  };

  const handleClearList = () => {
    setToDoList(null);
    const params = new URLSearchParams(window.location.search);
    params.delete('id');
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">{title}</h1>
      {toDoList && (
        <div className="edit-list-container">
          <h4>
            {listName}
            <button className="edit-list-button" onClick={handleShowModal}>
              <FontAwesomeIcon icon={faTableList} />{' '}
            </button>
          </h4>
        </div>
      )}
      {toDoList && <ToDoList toDoList={toDoList} user={user} />}

      {toDoList && (
        <button className="bottom-button close-button" onClick={handleClearList}>
          Clear List
        </button>
      )}

      <select id="list-select" className="list-select" onChange={handleSelectList} value={toDoList?.id?.toString() || ''}>
        <option value="" disabled>
          Select an existing list
        </option>
        {allToDoLists.map((list) => (
          <option key={list.id} value={list.id.toString()}>
            {list.name || `List created on ${new Date(list.created_at).toLocaleDateString()}`}
          </option>
        ))}
      </select>

      <button className="bottom-button new-list-button" onClick={handleCreateToDoList}>
        <FontAwesomeIcon icon={faPlus} /> New List
      </button>

      {/* Modal for editing the list */}
      <Modal show={showModal} onHide={handleCloseModal} className="edit-list-modal">
        <Modal.Header closeButton className="edit-list-modal-header">
          <Modal.Title>Change the name of your list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => handleEditList(e)} className="edit-list-form">
            <div className="form-group">
              <label htmlFor="listName">List Name</label>
              <input type="text" id="listName" name="listName" className="form-control" defaultValue={toDoList?.name || ''} required />
            </div>
            <button type="submit" className="edit-list-modal-button">
              Save Changes
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ToDoIndex;
