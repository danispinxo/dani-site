'useclient';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass, faSquareCheck, faTableList, faPlus } from '@fortawesome/free-solid-svg-icons';
import supabase from '../../lib/supabaseClient';
import ToDoList from './ToDoList';
import CompleteList from './CompleteList';
import IncompleteList from './IncompleteList';
import SuccessMessage from './SuccessMessage';

const ToDoIndex = (user) => {
  const [allToDoLists, setAllToDoLists] = useState([]);
  const [toDoList, setToDoList] = useState(null);
  const userMetadata = user.user.user_metadata;
  const fullName = userMetadata.full_name;
  const userId = user.user.id;
  const title = fullName ? `To-Do List for ${fullName}` : 'To-Do List';

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

  const handleCloseList = () => {
    const confirmReset = window.confirm('Are you sure you want to reset the list? This action cannot be undone.');

    if (confirmReset) {
      setToDoList(null);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">
        {title}: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </h1>

      {toDoList && <ToDoList toDoList={toDoList} user={user} />}

      {toDoList && (
        <button className="bottom-button close-button" onClick={handleCloseList}>
          Close List
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
    </div>
  );
};

export default ToDoIndex;
