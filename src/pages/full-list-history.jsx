import { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import TopNavbar from '../components/Navbar';
import supabase from '../lib/supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye, faBack } from '@fortawesome/free-solid-svg-icons';

const ListHistory = () => {
  const [session, setSession] = useState(null);
  const [allToDoLists, setAllToDoLists] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) fetchAllToDoLists();
  }, [session]);

  const user = session?.user;
  const userId = user?.id;

  const fetchAllToDoLists = async () => {
    try {
      const { data: lists, error } = await supabase.from('todo_list').select().eq('user', userId).order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching all to-do lists:', error);
      } else {
        setAllToDoLists(lists);
      }
    } catch (error) {
      console.error('Error fetching all to-do lists:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this list?');
    if (confirmDelete) {
      try {
        const { error } = await supabase.from('todo_list').delete().eq('id', id);
        if (error) {
          console.error('Error deleting list:', error);
        } else {
          setAllToDoLists(allToDoLists.filter((list) => list.id !== id));
        }
      } catch (error) {
        console.error('Error deleting list:', error);
      }
    }
  };
  return (
    <>
      <TopNavbar />
      <div className="list-history-container">
        <h1>Full List History</h1>

        <a href="/todo">Back to the list</a>
        {allToDoLists.length > 0 ? (
          <table className="list-history-table">
            <thead>
              <tr onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
                <th>Name</th>
                <th>Date Created</th>
                <th>View</th>
                <th>Delete</th>
              </tr>
            </thead>
            <Collapse in={open}>
              <tbody>
                {allToDoLists.map((list) => (
                  <tr key={list.id}>
                    <td>{list.name}</td>
                    <td>{new Date(list.created_at).toLocaleString()}</td>
                    <td>
                      <a href={`/todo?id=${list.id}`}>
                        <button>
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                      </a>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(list.id)} className="delete-button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Collapse>
          </table>
        ) : (
          <p>No to-do lists found.</p>
        )}
      </div>
    </>
  );
};

export default ListHistory;
