import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";
import React from "react";

const JESSE_ID = "5ddbfcf2-6e9f-4f5b-913e-d3c98d5d8b53";
const DANI_ID = "957b467c-39d5-4aea-aafa-39cdfb173685";

const CATEGORY_GROUPS = [
  { label: "Housing", categories: ["Mortgage"] },
  { label: "Utilities", categories: ["Utilities"] },
  { label: "Food & Dining", categories: ["Groceries", "Dining"] },
  { label: "Transportation", categories: ["Transportation"] },
  { label: "Animals", categories: ["Animals"] },
  { label: "Entertainment", categories: ["Streaming", "Music"] },
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

  // Helper to calculate what each person owes for joint account expenses
  const sumBySplit = (userId, cats) => {
    // Joint account expenses (split 50/50 regardless of who entered them)
    const jointAccountExpenses = expenses
      .filter(
        (e) => e.payment_type === "Joint Account" && cats.includes(e.category)
      )
      .reduce((sum, e) => sum + Number(e.amount || 0) / 2, 0);

    return jointAccountExpenses;
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
                  if (!hasNonZeroCategories) {
                    return null;
                  }

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
                          <tr key={cat} className="budget-summary-row">
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
                <tr className="budget-summary-row budget-summary-joint-total">
                  <td className="budget-summary-category">
                    <b>Total Joint Account Expenses</b>
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
                  <td className="budget-summary-category">Shared Expenses</td>
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
    </div>
  );
};

export default JointAccountSummary;
