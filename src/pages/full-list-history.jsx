import { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import TopNavbar from '../components/Navbar';
import supabase from '../lib/supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEye, faBack, faAngleDown, faAngleUp, faPlus, faPenNib } from '@fortawesome/free-solid-svg-icons';

const ListHistory = () => {
  const [session, setSession] = useState(null);
  const [allToDoLists, setAllToDoLists] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [listsOpen, setListsOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [showEditModal, setShowEditModal] = useState(null);
  const [selectedLists, setSelectedLists] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const user = session?.user;
  const userId = user?.id;
  const listsOpenIcon = listsOpen ? faAngleUp : faAngleDown;
  const categoriesOpenIcon = categoriesOpen ? faAngleUp : faAngleDown;

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

  const handleEditCategory = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;

    try {
      const { data: item, error } = await supabase.from('todo_category').update({ name }).eq('id', editingCategory.id).select().single();

      if (!error) {
        fetchAllCategories();
      }
    } catch (error) {
      console.error('Error editing category:', error);
    }
    setShowEditModal(false);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditingCategory(null);
  };

  const handleSelectList = (id) => {
    setSelectedLists((prev) => (prev.includes(id) ? prev.filter((listId) => listId !== id) : [...prev, id]));
  };

  const handleSelectAllLists = () => {
    if (selectedLists.length === allToDoLists.length) {
      setSelectedLists([]);
    } else {
      setSelectedLists(allToDoLists.map((list) => list.id));
    }
  };

  const handleDeleteSelectedLists = async () => {
    if (selectedLists.length === 0) return;
    const confirmDelete = window.confirm(`Are you sure you want to delete ${selectedLists.length} selected list(s)?`);
    if (confirmDelete) {
      try {
        const { error } = await supabase.from('todo_list').delete().in('id', selectedLists);
        if (error) {
          console.error('Error deleting selected lists:', error);
        } else {
          setAllToDoLists(allToDoLists.filter((list) => !selectedLists.includes(list.id)));
          setSelectedLists([]);
        }
      } catch (error) {
        console.error('Error deleting selected lists:', error);
      }
    }
  };

  const handleSelectCategory = (id) => {
    setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((catId) => catId !== id) : [...prev, id]));
  };

  const handleSelectAllCategories = () => {
    if (selectedCategories.length === allCategories.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(allCategories.map((cat) => cat.id));
    }
  };

  const handleDeleteSelectedCategories = async () => {
    if (selectedCategories.length === 0) return;
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedCategories.length} selected categor${selectedCategories.length === 1 ? 'y' : 'ies'}?`,
    );
    if (confirmDelete) {
      try {
        const { error } = await supabase.from('todo_category').delete().in('id', selectedCategories);
        if (error) {
          console.error('Error deleting selected categories:', error);
        } else {
          setAllCategories(allCategories.filter((cat) => !selectedCategories.includes(cat.id)));
          setSelectedCategories([]);
        }
      } catch (error) {
        console.error('Error deleting selected categories:', error);
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
            <div>
              {selectedCategories.length > 0 && (
                <button
                  onClick={handleDeleteSelectedCategories}
                  disabled={selectedCategories.length === 0}
                  className="delete-selected-button"
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete Selected
                </button>
              )}
            </div>
            <table className="categories-table">
              <thead>
                <tr onClick={() => setCategoriesOpen(!categoriesOpen)}>
                  <th>
                    <FontAwesomeIcon icon={categoriesOpenIcon} />
                  </th>
                  <th>
                    {categoriesOpen && (
                      <>
                        <input
                          type="checkbox"
                          checked={selectedCategories.length === allCategories.length && allCategories.length > 0}
                          onChange={handleSelectAllCategories}
                          onClick={(e) => e.stopPropagation()}
                          className="custom-checkbox"
                        />{' '}
                        Select All
                      </>
                    )}
                  </th>
                  <th>Name</th>
                  <th>Date Created</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <Collapse in={categoriesOpen}>
                <tbody>
                  {allCategories.map((category, index) => (
                    <tr key={category.id} className={`${selectedCategories.includes(category.id) ? 'selected' : ''}`}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => handleSelectCategory(category.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="custom-checkbox"
                        />
                      </td>
                      <td>{category.name}</td>
                      <td>{new Date(category.created_at).toLocaleString()}</td>
                      <td>
                        <button
                          onClick={() => {
                            setEditingCategory(category);
                            setShowEditModal(true);
                          }}
                          className="edit-button"
                        >
                          <FontAwesomeIcon icon={faPenNib} />
                        </button>
                      </td>
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
            <div>
              {selectedLists.length > 0 && (
                <button onClick={handleDeleteSelectedLists} disabled={selectedLists.length === 0} className="delete-selected-button">
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete Selected
                </button>
              )}
            </div>
            <table className="list-history-table">
              <thead>
                <tr onClick={() => setListsOpen(!listsOpen)} style={{ cursor: 'pointer' }}>
                  <th>
                    <FontAwesomeIcon icon={listsOpenIcon} />
                  </th>
                  <th>
                    {listsOpen && (
                      <>
                        <input
                          type="checkbox"
                          checked={selectedLists.length === allToDoLists.length && allToDoLists.length > 0}
                          onChange={handleSelectAllLists}
                          onClick={(e) => e.stopPropagation()}
                          className="custom-checkbox"
                        />{' '}
                        Select All
                      </>
                    )}
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
                    <tr key={list.id} className={`${selectedLists.includes(list.id) ? 'selected' : ''}`}>
                      <td>{index + 1}</td>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedLists.includes(list.id)}
                          onChange={() => handleSelectList(list.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="custom-checkbox"
                        />
                      </td>
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
      <Modal show={showEditModal} onHide={handleCloseEditModal} className="edit-category-modal">
        <Modal.Header closeButton className="edit-category-modal-header">
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEditCategory(e)} className="edit-category-form">
            <Form.Group>
              <Form.Label htmlFor="name">Name:</Form.Label>
              <Form.Control type="text" id="name" name="name" defaultValue={editingCategory?.name} />
            </Form.Group>
            <button type="submit" className="edit-category-modal-button">
              <FontAwesomeIcon icon={faPenNib} /> Edit Category
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ListHistory;
