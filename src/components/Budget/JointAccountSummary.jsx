import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import React from "react";
import { Modal, Box } from "@mui/material";

const JESSE_ID = "5ddbfcf2-6e9f-4f5b-913e-d3c98d5d8b53";
const DANI_ID = "957b467c-39d5-4aea-aafa-39cdfb173685";

const CATEGORY_GROUPS = [
  { label: "Housing", categories: ["Mortgage"] },
  { label: "Utilities", categories: ["Utilities"] },
  { label: "Food & Dining", categories: ["Groceries", "Dining"] },
  { label: "Transportation", categories: ["Transportation"] },
  { label: "Animals", categories: ["Animals"] },
  { label: "Entertainment", categories: ["Streaming", "Rogers"] },
  { label: "Other", categories: ["Other"] },
];

const getMonthOptions = () => {
  const options = [];
  const now = new Date();
  for (let i = 0; i < 12; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    options.push({
      value: d.toISOString().slice(0, 7),
      label: d.toLocaleString("default", { month: "long", year: "numeric" }),
    });
  }
  return options;
};

const JointAccountSummary = () => {
  const [month, setMonth] = useState(() =>
    new Date().toISOString().slice(0, 7)
  );
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .in("user_id", [JESSE_ID, DANI_ID]);
      if (error) {
        setExpenses([]);
        setLoading(false);
        return;
      }
      // Filter by selected month
      const filtered = data.filter(
        (exp) => exp.date && exp.date.startsWith(month)
      );
      setExpenses(filtered);
      setLoading(false);
    };
    fetchExpenses();
  }, [month]);

  // Helper to calculate what each person owes for shared expenses (all payment types)
  const sumBySplit = (userId, cats) => {
    // All shared expenses (split 50/50 regardless of payment type)
    const sharedExpenses = expenses
      .filter((e) => e.is_shared && cats.includes(e.category))
      .reduce((sum, e) => sum + Number(e.amount || 0) / 2, 0);

    return sharedExpenses;
  };

  // Joint account expenses (to be split 50/50)
  const jointAccountExpenses = expenses.filter(
    (e) => e.payment_type === "Joint Account"
  );

  const jointAccountTotal = jointAccountExpenses.reduce(
    (sum, e) => sum + Number(e.amount || 0),
    0
  );

  const jointAccountSplit = jointAccountTotal / 2;

  // Personal expenses that need to be balanced (shared expenses paid from personal accounts)
  const jessePersonalExpenses = expenses
    .filter((e) => e.payment_type.startsWith("Jesse") && e.is_shared)
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  const daniPersonalExpenses = expenses
    .filter((e) => e.payment_type.startsWith("Dani") && e.is_shared)
    .reduce((sum, e) => sum + Number(e.amount || 0), 0);

  // Calculate balance adjustments
  const jesseAdjustment = daniPersonalExpenses - jessePersonalExpenses;
  const daniAdjustment = jessePersonalExpenses - daniPersonalExpenses;

  // For totals
  let totalJesse = 0;
  let totalDani = 0;

  // Handle clicking on a category row
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  // Get expenses for the selected category
  const getCategoryExpenses = (category) => {
    return expenses.filter((exp) => exp.category === category && exp.is_shared);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="budget-summary">
      <div className="budget-form-card">
        <h2 className="budget-form-title">Joint Account Summary</h2>
        <div className="budget-month-selector">
          <label htmlFor="month" className="budget-input-label">
            Select Month:
          </label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="budget-input-field"
          >
            {getMonthOptions().map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="budget-summary-container">
            <table className="budget-summary-table">
              <thead>
                <tr>
                  <th className="budget-summary-header" />
                  <th className="budget-summary-header">Jesse</th>
                  <th className="budget-summary-header">Dani</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORY_GROUPS.map((group) => {
                  // Check if any category in this group has non-zero amounts
                  const hasNonZeroCategories = group.categories.some((cat) => {
                    const jesseAmt = sumBySplit(JESSE_ID, [cat]);
                    const daniAmt = sumBySplit(DANI_ID, [cat]);
                    return jesseAmt !== 0 || daniAmt !== 0;
                  });

                  // Skip this entire group if no categories have amounts
                  if (!hasNonZeroCategories) return null;

                  return (
                    <React.Fragment key={group.label}>
                      <tr className="budget-summary-category-row">
                        <td
                          colSpan={3}
                          className="budget-summary-category-group"
                        >
                          {group.label}
                        </td>
                      </tr>
                      {group.categories.map((cat) => {
                        const jesseAmt = sumBySplit(JESSE_ID, [cat]);
                        const daniAmt = sumBySplit(DANI_ID, [cat]);

                        // Skip this category if both amounts are 0
                        if (jesseAmt === 0 && daniAmt === 0) {
                          return null;
                        }

                        totalJesse += jesseAmt;
                        totalDani += daniAmt;
                        return (
                          <tr
                            key={cat}
                            className="budget-summary-row budget-summary-clickable"
                            onClick={() => handleCategoryClick(cat)}
                            style={{ cursor: "pointer" }}
                            title="Click to see individual expenses"
                          >
                            <td className="budget-summary-category">{cat}</td>
                            <td className="budget-summary-amount">
                              ${jesseAmt.toFixed(2)}
                            </td>
                            <td className="budget-summary-amount">
                              ${daniAmt.toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
                <tr className="budget-summary-divider">
                  <td colSpan={3} />
                </tr>
                <tr className="budget-summary-divider">
                  <td colSpan={3} />
                </tr>
                <tr className="budget-summary-row budget-summary-joint-total">
                  <td className="budget-summary-category">
                    <b>Joint Account Expenses Only</b>
                  </td>
                  <td colSpan={2} className="budget-summary-amount">
                    ${jointAccountTotal.toFixed(2)}
                  </td>
                </tr>
                <tr className="budget-summary-row">
                  <td className="budget-summary-category">
                    Split 50/50 each person owes
                  </td>
                  <td className="budget-summary-amount">
                    ${jointAccountSplit.toFixed(2)}
                  </td>
                  <td className="budget-summary-amount">
                    ${jointAccountSplit.toFixed(2)}
                  </td>
                </tr>
                <tr className="budget-summary-row">
                  <td className="budget-summary-category">
                    Personal Shared Expenses
                  </td>
                  <td className="budget-summary-amount">
                    ${jessePersonalExpenses.toFixed(2)}
                  </td>
                  <td className="budget-summary-amount">
                    ${daniPersonalExpenses.toFixed(2)}
                  </td>
                </tr>
                <tr className="budget-summary-divider">
                  <td colSpan={3} />
                </tr>
                <tr className="budget-summary-row budget-summary-total">
                  <td className="budget-summary-category">
                    <b>Total amount each person needs to contribute</b>
                  </td>
                  <td className="budget-summary-amount">
                    <b>${(totalJesse + jesseAdjustment).toFixed(2)}</b>
                  </td>
                  <td className="budget-summary-amount">
                    <b>${(totalDani + daniAdjustment).toFixed(2)}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Expense Details Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="expense-details-modal"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "800px",
            maxHeight: "80vh",
            overflow: "auto",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            p: 3,
          }}
        >
          {selectedCategory && (
            <>
              <h2 style={{ color: "#008080", marginBottom: "1rem" }}>
                {selectedCategory} Expenses -{" "}
                {new Date(`${month}-01T00:00:00`).toLocaleDateString(
                  "default",
                  { month: "long", year: "numeric" }
                )}
              </h2>

              <div className="budget-expense-grid">
                {getCategoryExpenses(selectedCategory).map((expense) => (
                  <div key={expense.id} className="budget-expense-card">
                    <div className="budget-expense-header">
                      <span className="budget-expense-amount">
                        ${expense.amount.toFixed(2)}
                      </span>
                      <span className="budget-expense-type shared">
                        Shared (50% each = ${(expense.amount / 2).toFixed(2)})
                      </span>
                    </div>
                    <div className="budget-expense-details">
                      <h3 className="budget-expense-description">
                        {expense.description}
                      </h3>
                      <p className="budget-expense-date">
                        Date:{" "}
                        {new Date(
                          expense.date + "T00:00:00"
                        ).toLocaleDateString()}
                      </p>
                      <p className="budget-expense-payment">
                        Paid with: {expense.payment_type}
                      </p>
                      <p className="budget-expense-user">
                        Added by:{" "}
                        {expense.user_id === JESSE_ID ? "Jesse" : "Dani"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {getCategoryExpenses(selectedCategory).length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    color: "#666",
                    fontStyle: "italic",
                  }}
                >
                  No shared expenses found for {selectedCategory} this month.
                </p>
              )}

              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <button
                  onClick={handleCloseModal}
                  className="budget-button budget-button-secondary"
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#008080",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default JointAccountSummary;
