import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";

const ExpenseList = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("date");
  const [filters, setFilters] = useState({
    category: "",
    isShared: null,
    paymentType: "",
    month: new Date().toISOString().slice(0, 7), // Format: YYYY-MM
  });

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

  const handleFilter = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const getMonthOptions = () => {
    const months = [];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get last 12 months
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

    // Filter by month
    const expenseMonth = expense.date.slice(0, 7); // Get YYYY-MM from date
    if (filters.month && expenseMonth !== filters.month) return false;

    return true;
  });

  if (loading) return <div className="budget-loading">Loading expenses...</div>;
  if (error) return <div className="budget-error">Error: {error}</div>;

  return (
    <div className="budget-expense-list">
      <div className="budget-filters">
        <select
          value={filters.category}
          onChange={(e) => handleFilter("category", e.target.value)}
          className="budget-input-field"
        >
          <option value="">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="mortgage">Mortgage</option>
          <option value="dining">Dining</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="other">Other</option>
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
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
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
            <div key={expense.id} className="budget-expense-card">
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
                  {new Date(expense.date).toLocaleDateString()}
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
  );
};

export default ExpenseList;
