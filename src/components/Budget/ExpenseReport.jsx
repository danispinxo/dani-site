import { useState, useEffect } from "react";
import supabase from "../../lib/supabaseClient";
import { Snackbar, Alert } from "@mui/material";

const ExpenseReport = ({ user }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState("");
  const [monthlyData, setMonthlyData] = useState([]);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const CATEGORY_GROUPS = [
    { label: "Housing", categories: ["Mortgage"] },
    { label: "Utilities", categories: ["Utilities"] },
    { label: "Food & Dining", categories: ["Groceries", "Dining"] },
    { label: "Transportation", categories: ["Transportation"] },
    { label: "Animals", categories: ["Animals"] },
    { label: "Entertainment", categories: ["Streaming", "Rogers"] },
    { label: "Other", categories: ["Other"] },
  ];

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
    if (selectedCategoryGroup) {
      fetchCategoryExpenses();
    }
  }, [selectedCategoryGroup]);

  const fetchCategoryExpenses = async () => {
    setLoading(true);
    try {
      const selectedGroup = CATEGORY_GROUPS.find(
        (group) => group.label === selectedCategoryGroup
      );
      if (!selectedGroup) return;

      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .in("category", selectedGroup.categories)
        .order("date", { ascending: false });

      if (error) throw error;

      setExpenses(data);
      processMonthlyData(data);
    } catch (error) {
      showToast("Error fetching expenses: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const processMonthlyData = (expenseData) => {
    const monthlyGroups = {};
    const selectedGroup = CATEGORY_GROUPS.find(
      (group) => group.label === selectedCategoryGroup
    );

    expenseData.forEach((expense) => {
      const monthKey = expense.date.slice(0, 7); // YYYY-MM format
      const monthLabel = new Date(
        expense.date + "T00:00:00"
      ).toLocaleDateString("default", {
        month: "long",
        year: "numeric",
      });

      if (!monthlyGroups[monthKey]) {
        monthlyGroups[monthKey] = {
          monthKey,
          monthLabel,
          expenses: [],
          total: 0,
          sharedTotal: 0,
          personalTotal: 0,
          jointAccountTotal: 0,
          personalCardTotal: 0,
          categoryBreakdown: {},
        };

        // Initialize category breakdown for this group
        selectedGroup?.categories.forEach((cat) => {
          monthlyGroups[monthKey].categoryBreakdown[cat] = 0;
        });
      }

      monthlyGroups[monthKey].expenses.push(expense);
      monthlyGroups[monthKey].total += Number(expense.amount);

      // Add to category breakdown
      if (
        monthlyGroups[monthKey].categoryBreakdown[expense.category] !==
        undefined
      ) {
        monthlyGroups[monthKey].categoryBreakdown[expense.category] += Number(
          expense.amount
        );
      }

      if (expense.is_shared) {
        monthlyGroups[monthKey].sharedTotal += Number(expense.amount);
      } else {
        monthlyGroups[monthKey].personalTotal += Number(expense.amount);
      }

      if (expense.payment_type === "Joint Account") {
        monthlyGroups[monthKey].jointAccountTotal += Number(expense.amount);
      } else {
        monthlyGroups[monthKey].personalCardTotal += Number(expense.amount);
      }
    });

    // Convert to array and sort by month (newest first)
    const sortedData = Object.values(monthlyGroups).sort((a, b) =>
      b.monthKey.localeCompare(a.monthKey)
    );

    setMonthlyData(sortedData);
  };

  const calculateGrandTotals = () => {
    return monthlyData.reduce(
      (totals, month) => ({
        total: totals.total + month.total,
        sharedTotal: totals.sharedTotal + month.sharedTotal,
        personalTotal: totals.personalTotal + month.personalTotal,
        jointAccountTotal: totals.jointAccountTotal + month.jointAccountTotal,
        personalCardTotal: totals.personalCardTotal + month.personalCardTotal,
      }),
      {
        total: 0,
        sharedTotal: 0,
        personalTotal: 0,
        jointAccountTotal: 0,
        personalCardTotal: 0,
      }
    );
  };

  const grandTotals = calculateGrandTotals();
  const averageMonthly =
    monthlyData.length > 0 ? grandTotals.total / monthlyData.length : 0;

  return (
    <>
      <div className="budget-form">
        <div className="budget-form-card">
          <h2 className="budget-form-title">
            Expense Report by Category Group
          </h2>
          <p className="budget-form-subtitle">
            View monthly breakdown for any category group
          </p>

          <div className="budget-input-group">
            <label className="budget-input-label">Select Category Group</label>
            <select
              value={selectedCategoryGroup}
              onChange={(e) => setSelectedCategoryGroup(e.target.value)}
              className="budget-input-field"
            >
              <option value="">Choose a category group...</option>
              {CATEGORY_GROUPS.map((group) => (
                <option key={group.label} value={group.label}>
                  {group.label}
                </option>
              ))}
            </select>
          </div>

          {loading && <div className="budget-loading">Loading expenses...</div>}

          {selectedCategoryGroup && !loading && monthlyData.length === 0 && (
            <div className="budget-empty-state">
              No expenses found for {selectedCategoryGroup} category group.
            </div>
          )}

          {selectedCategoryGroup && !loading && monthlyData.length > 0 && (
            <div className="budget-summary-container">
              {/* Summary Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0.5rem",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ color: "#008080", margin: "0 0 0.5rem 0" }}>
                    Total Spent
                  </h4>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    ${grandTotals.total.toFixed(2)}
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ color: "#008080", margin: "0 0 0.5rem 0" }}>
                    Monthly Average
                  </h4>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    ${averageMonthly.toFixed(2)}
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h4 style={{ color: "#008080", margin: "0 0 0.5rem 0" }}>
                    Months Tracked
                  </h4>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {monthlyData.length}
                  </p>
                </div>
              </div>

              {/* Monthly Breakdown Table */}
              <table className="budget-summary-table">
                <thead>
                  <tr>
                    <th className="budget-summary-header">Month</th>
                    <th className="budget-summary-header">Total</th>
                    <th className="budget-summary-header">Shared</th>
                    <th className="budget-summary-header">Personal</th>
                    <th className="budget-summary-header">Joint Account</th>
                    <th className="budget-summary-header">Personal Cards</th>
                    <th className="budget-summary-header">Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyData.map((month) => (
                    <tr key={month.monthKey} className="budget-summary-row">
                      <td
                        className="budget-summary-category"
                        style={{ fontWeight: "500" }}
                      >
                        {month.monthLabel}
                      </td>
                      <td
                        className="budget-summary-amount"
                        style={{ fontWeight: "bold" }}
                      >
                        ${month.total.toFixed(2)}
                      </td>
                      <td className="budget-summary-amount">
                        ${month.sharedTotal.toFixed(2)}
                      </td>
                      <td className="budget-summary-amount">
                        ${month.personalTotal.toFixed(2)}
                      </td>
                      <td className="budget-summary-amount">
                        ${month.jointAccountTotal.toFixed(2)}
                      </td>
                      <td className="budget-summary-amount">
                        ${month.personalCardTotal.toFixed(2)}
                      </td>
                      <td className="budget-summary-amount">
                        {month.expenses.length}
                      </td>
                    </tr>
                  ))}

                  {/* Totals Row */}
                  <tr className="budget-summary-row budget-summary-total">
                    <td className="budget-summary-category">
                      <b>Totals</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>${grandTotals.total.toFixed(2)}</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>${grandTotals.sharedTotal.toFixed(2)}</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>${grandTotals.personalTotal.toFixed(2)}</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>${grandTotals.jointAccountTotal.toFixed(2)}</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>${grandTotals.personalCardTotal.toFixed(2)}</b>
                    </td>
                    <td className="budget-summary-amount">
                      <b>{expenses.length}</b>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Category Breakdown Table */}
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ color: "#008080", marginBottom: "1rem" }}>
                  Category Breakdown within {selectedCategoryGroup}
                </h3>
                <table className="budget-summary-table">
                  <thead>
                    <tr>
                      <th className="budget-summary-header">Month</th>
                      {CATEGORY_GROUPS.find(
                        (group) => group.label === selectedCategoryGroup
                      )?.categories.map((category) => (
                        <th key={category} className="budget-summary-header">
                          {category}
                        </th>
                      ))}
                      <th className="budget-summary-header">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyData.map((month) => (
                      <tr
                        key={`breakdown-${month.monthKey}`}
                        className="budget-summary-row"
                      >
                        <td
                          className="budget-summary-category"
                          style={{ fontWeight: "500" }}
                        >
                          {month.monthLabel}
                        </td>
                        {CATEGORY_GROUPS.find(
                          (group) => group.label === selectedCategoryGroup
                        )?.categories.map((category) => (
                          <td key={category} className="budget-summary-amount">
                            $
                            {(month.categoryBreakdown[category] || 0).toFixed(
                              2
                            )}
                          </td>
                        ))}
                        <td
                          className="budget-summary-amount"
                          style={{ fontWeight: "bold" }}
                        >
                          ${month.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}

                    {/* Category Totals Row */}
                    <tr className="budget-summary-row budget-summary-total">
                      <td className="budget-summary-category">
                        <b>Totals</b>
                      </td>
                      {CATEGORY_GROUPS.find(
                        (group) => group.label === selectedCategoryGroup
                      )?.categories.map((category) => {
                        const categoryTotal = monthlyData.reduce(
                          (sum, month) =>
                            sum + (month.categoryBreakdown[category] || 0),
                          0
                        );
                        return (
                          <td key={category} className="budget-summary-amount">
                            <b>${categoryTotal.toFixed(2)}</b>
                          </td>
                        );
                      })}
                      <td className="budget-summary-amount">
                        <b>${grandTotals.total.toFixed(2)}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed Transactions for Latest Month */}
              {monthlyData.length > 0 && (
                <div style={{ marginTop: "2rem" }}>
                  <h3 style={{ color: "#008080", marginBottom: "1rem" }}>
                    Latest Month Details: {monthlyData[0].monthLabel}
                  </h3>
                  <div className="budget-expense-grid">
                    {monthlyData[0].expenses.map((expense) => (
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
                          <p className="budget-expense-date">
                            {new Date(
                              expense.date + "T00:00:00"
                            ).toLocaleDateString()}
                          </p>
                          <p className="budget-expense-payment">
                            Paid with: {expense.payment_type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

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

export default ExpenseReport;
