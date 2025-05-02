import { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import TopNavbar from '../components/Navbar';
import supabase from '../lib/supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye, faBack, faAngleDown, faAngleUp, faPlus } from '@fortawesome/free-solid-svg-icons';

const ListHistory = () => {
  const [session, setSession] = useState(null);
  const [allToDoLists, setAllToDoLists] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [listsOpen, setListsOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

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
    if (session) {
      fetchAllToDoLists();
      fetchAllCategories();
    }
  }, [session]);

  const user = session?.user;
  const userId = user?.id;
  const listsOpenIcon = listsOpen ? faAngleUp : faAngleDown;
  const categoriesOpenIcon = categoriesOpen ? faAngleUp : faAngleDown;

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

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');

    try {
      const { error } = await supabase.from('todo_category').insert([{ name, user: userId }]);
      if (error) {
        console.error('Error creating new category:', error);
      } else {
        fetchAllCategories();
        e.target.reset();
      }
    } catch (error) {
      console.error('Error creating new category:', error);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const { data: categories, error } = await supabase
        .from('todo_category')
        .select()
        .eq('user', userId)
        .order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching all categories:', error);
      } else {
        setAllCategories(categories);
      }
    } catch (error) {
      console.error('Error fetching all categories:', error);
    }
  };

  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this category?');
    if (confirmDelete) {
      try {
        const { error } = await supabase.from('todo_category').delete().eq('id', id);
        if (error) {
          console.error('Error deleting category:', error);
        } else {
          setAllCategories(allCategories.filter((category) => category.id !== id));
        }
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="list-history-container">
        <h1>My Lists</h1>

        <a href="/todo">Back to the list</a>

        {showCategoryForm && (
          <form onSubmit={handleAddCategory} className="add-category-form">
            <h3>Add a new category</h3>
            <div className="form-group">
              <label htmlFor="categoryName">Category Name</label>
              <input
                type="text"
                id="categoryName"
                name="name"
                className="form-control"
                placeholder="Enter a name for your category"
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <button onClick={() => setShowCategoryForm(false)} className="add-category-modal-button cancel-button">
                Cancel
              </button>
              <button type="submit" className="add-category-modal-button">
                Create
              </button>
            </div>
          </form>
        )}

        {allCategories.length > 0 ? (
          <>
            <h3>
              Your Categories <FontAwesomeIcon icon={faPlus} onClick={() => setShowCategoryForm(!showCategoryForm)} />
            </h3>
            <table className="categories-table">
              <thead>
                <tr onClick={() => setCategoriesOpen(!categoriesOpen)} style={{ cursor: 'pointer' }}>
                  <th>
                    <FontAwesomeIcon icon={categoriesOpenIcon} />
                  </th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Collapse in={categoriesOpen}>
                <tbody>
                  {allCategories.map((category, index) => (
                    <tr key={category.id}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td>{new Date(category.created_at).toLocaleString()}</td>
                      <td>
                        <button onClick={() => handleDeleteCategory(category.id)} className="delete-button">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Collapse>
            </table>
          </>
        ) : (
          <p>No categories found.</p>
        )}

        {allToDoLists.length > 0 ? (
          <>
            <h3>Your Lists</h3>
            <table className="list-history-table">
              <thead>
                <tr onClick={() => setListsOpen(!listsOpen)} style={{ cursor: 'pointer' }}>
                  <th>
                    <FontAwesomeIcon icon={listsOpenIcon} />
                  </th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>View</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Collapse in={listsOpen}>
                <tbody>
                  {allToDoLists.map((list, index) => (
                    <tr key={list.id}>
                      <td>{index + 1}</td>
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
          </>
        ) : (
          <p>No to-do lists found.</p>
        )}
      </div>
    </>
  );
};

export default ListHistory;
