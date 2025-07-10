import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";
import {
  Modal,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { useConfirmation } from "./BudgetConfirmationModal";

const ExpenseList = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("date");
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState({});
  const [modalLoading, setModalLoading] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [filters, setFilters] = useState({
    category: "",
    isShared: null,
    paymentType: "",
    month: new Date().toISOString().slice(0, 7), // Format: YYYY-MM
  });

  const { showConfirmation, ConfirmationDialog } = useConfirmation();

  const showToast = (message, severity = "success") => {
    setToast({
      open: true,
      message,
      severity,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    fetchExpenses();
  }, [user]);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .order("date", { ascending: false });

      if (error) throw error;
      setExpenses(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleExpenseClick = (expense) => {
    setSelectedExpense(expense);
    setEditFormData({
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
      date: expense.date,
      is_shared: expense.is_shared,
      payment_type: expense.payment_type,
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedExpense(null);
    setEditFormData({});
  };

  const handleEditFormChange = (field, value) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdateExpense = async () => {
    setModalLoading(true);
    try {
      const { error } = await supabase
        .from("expenses")
        .update({
          amount: parseFloat(editFormData.amount),
          description: editFormData.description,
          category: editFormData.category,
          date: editFormData.date,
          is_shared: editFormData.is_shared,
          payment_type: editFormData.payment_type,
        })
        .eq("id", selectedExpense.id);

      if (error) throw error;

      showToast("Expense updated successfully!", "success");
      handleCloseModal();
      fetchExpenses();
    } catch (error) {
      showToast("Error updating expense: " + error.message, "error");
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteExpense = async () => {
    const confirmed = await showConfirmation(
      "Delete Expense",
      "Are you sure you want to delete this expense? This action cannot be undone.",
      "Delete",
      "Cancel"
    );

    if (!confirmed) return;

    setModalLoading(true);
    try {
      const { error } = await supabase
        .from("expenses")
        .delete()
        .eq("id", selectedExpense.id);

      if (error) throw error;

      showToast("Expense deleted successfully!", "success");
      handleCloseModal();
      fetchExpenses();
    } catch (error) {
      showToast("Error deleting expense: " + error.message, "error");
    } finally {
      setModalLoading(false);
    }
  };

  const handleSort = (field) => {
    setSortBy(field);
    const sorted = [...expenses].sort((a, b) => {
      if (field === "date") {
        return new Date(b.date) - new Date(a.date);
      }
      if (field === "amount") {
        return b.amount - a.amount;
      }
      return 0;
    });
    setExpenses(sorted);
  };

  const handleFilter = (type, value) =>
    setFilters((prev) => ({ ...prev, [type]: value }));

  const getMonthOptions = () => {
    const months = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    for (let i = 0; i < 12; i++) {
      const date = new Date(currentYear, currentMonth - i, 1);
      const monthStr = date.toISOString().slice(0, 7); // Format: YYYY-MM
      const monthLabel = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      months.push({ value: monthStr, label: monthLabel });
    }

    return months;
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filters.category && expense.category !== filters.category) return false;
    if (filters.isShared !== null && expense.is_shared !== filters.isShared)
      return false;
    if (filters.paymentType && expense.payment_type !== filters.paymentType)
      return false;

    const expenseMonth = expense.date.slice(0, 7);

    if (filters.month && expenseMonth !== filters.month) return false;

    return true;
  });

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "90vw",
    bgcolor: "background.paper",
    border: "2px solid #008080",
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
  };

  if (loading) return <div className="budget-loading">Loading expenses...</div>;
  if (error) return <div className="budget-error">Error: {error}</div>;

  return (
    <>
      <div className="budget-expense-list">
        <div className="budget-filters">
          <select
            value={filters.category}
            onChange={(e) => handleFilter("category", e.target.value)}
            className="budget-input-field"
          >
            <option value="">All Categories</option>
            <option value="Mortgage">Mortgage</option>
            <option value="Groceries">Groceries</option>
            <option value="Dining">Dining</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Animals">Animals</option>
            <option value="Streaming">Streaming</option>
            <option value="Rogers">Rogers</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={filters.isShared === null ? "" : filters.isShared}
            onChange={(e) =>
              handleFilter(
                "isShared",
                e.target.value === "" ? null : e.target.value === "true"
              )
            }
            className="budget-input-field"
          >
            <option value="">All Expenses</option>
            <option value="true">Shared</option>
            <option value="false">Personal</option>
          </select>

          <select
            value={filters.paymentType}
            onChange={(e) => handleFilter("paymentType", e.target.value)}
            className="budget-input-field"
          >
            <option value="">All Payment Types</option>
            <option value="Joint Account">Joint Account</option>
            <option value="Dani Visa">Dani Visa</option>
            <option value="Jesse Visa">Jesse Visa</option>
            <option value="Dani Chequing">Dani Chequing</option>
            <option value="Jesse Chequing">Jesse Chequing</option>
            <option value="Other">Other</option>
          </select>

          <select
            value={filters.month}
            onChange={(e) => handleFilter("month", e.target.value)}
            className="budget-input-field"
          >
            {getMonthOptions().map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>

        <div className="budget-sort">
          <button
            onClick={() => handleSort("date")}
            className={`budget-sort-button ${sortBy === "date" ? "active" : ""}`}
          >
            Sort by Date
          </button>
          <button
            onClick={() => handleSort("amount")}
            className={`budget-sort-button ${sortBy === "amount" ? "active" : ""}`}
          >
            Sort by Amount
          </button>
        </div>

        {filteredExpenses.length === 0 ? (
          <div className="budget-empty-state">
            No expenses found for this period. Add your first expense above!
          </div>
        ) : (
          <div className="budget-expense-grid">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="budget-expense-card"
                onClick={() => handleExpenseClick(expense)}
                style={{ cursor: "pointer" }}
              >
                <div className="budget-expense-header">
                  <span className="budget-expense-amount">
                    ${expense.amount.toFixed(2)}
                  </span>
                  <span
                    className={`budget-expense-type ${expense.is_shared ? "shared" : "personal"}`}
                  >
                    {expense.is_shared ? "Shared" : "Personal"}
                  </span>
                </div>
                <div className="budget-expense-details">
                  <h3 className="budget-expense-description">
                    {expense.description}
                  </h3>
                  <p className="budget-expense-category">{expense.category}</p>
                  <p className="budget-expense-date">
                    {new Date(expense.date + "T00:00:00").toLocaleDateString()}
                  </p>
                  <p className="budget-expense-payment">
                    Paid with: {expense.payment_type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit/Delete Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="edit-expense-modal"
      >
        <Box sx={modalStyle}>
          <h2 style={{ color: "#008080", marginBottom: "1rem" }}>
            Edit Expense
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <TextField
              label="Amount"
              type="number"
              value={editFormData.amount || ""}
              onChange={(e) => handleEditFormChange("amount", e.target.value)}
              inputProps={{ step: 0.01 }}
              fullWidth
            />

            <TextField
              label="Description"
              value={editFormData.description || ""}
              onChange={(e) =>
                handleEditFormChange("description", e.target.value)
              }
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={editFormData.category || ""}
                onChange={(e) =>
                  handleEditFormChange("category", e.target.value)
                }
                label="Category"
              >
                <MenuItem value="Mortgage">Mortgage</MenuItem>
                <MenuItem value="Groceries">Groceries</MenuItem>
                <MenuItem value="Dining">Dining</MenuItem>
                <MenuItem value="Transportation">Transportation</MenuItem>
                <MenuItem value="Utilities">Utilities</MenuItem>
                <MenuItem value="Animals">Animals</MenuItem>
                <MenuItem value="Streaming">Streaming</MenuItem>
                <MenuItem value="Rogers">Rogers</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Date"
              type="date"
              value={editFormData.date || ""}
              onChange={(e) => handleEditFormChange("date", e.target.value)}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={editFormData.payment_type || ""}
                onChange={(e) =>
                  handleEditFormChange("payment_type", e.target.value)
                }
                label="Payment Method"
              >
                <MenuItem value="Joint Account">Joint Account</MenuItem>
                <MenuItem value="Dani Visa">Dani Visa</MenuItem>
                <MenuItem value="Jesse Visa">Jesse Visa</MenuItem>
                <MenuItem value="Dani Chequing">Dani Chequing</MenuItem>
                <MenuItem value="Jesse Chequing">Jesse Chequing</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={editFormData.is_shared || false}
                  onChange={(e) =>
                    handleEditFormChange("is_shared", e.target.checked)
                  }
                />
              }
              label="This is a shared expense"
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Button
                variant="contained"
                onClick={handleUpdateExpense}
                disabled={modalLoading}
                sx={{
                  backgroundColor: "#008080",
                  "&:hover": { backgroundColor: "#006666" },
                  flex: 1,
                }}
              >
                {modalLoading ? "Updating..." : "Update"}
              </Button>

              <Button
                variant="outlined"
                onClick={handleDeleteExpense}
                disabled={modalLoading}
                sx={{
                  color: "#dc2626",
                  borderColor: "#dc2626",
                  "&:hover": {
                    borderColor: "#b91c1c",
                    backgroundColor: "#fee2e2",
                  },
                  flex: 1,
                }}
              >
                {modalLoading ? "Deleting..." : "Delete"}
              </Button>
            </div>

            <Button
              variant="text"
              onClick={handleCloseModal}
              sx={{ color: "#008080", marginTop: "0.5rem" }}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>

      <ConfirmationDialog />

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={hideToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={hideToast}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ExpenseList;
