import { useEffect, useState } from "react";
import supabase from "../../lib/supabaseClient";

const JESSE_ID = process.env.NEXT_PUBLIC_JESSE_ID;
const DANI_ID = process.env.NEXT_PUBLIC_DANI_ID;

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
                  <th className="budget-summary-header">Expense</th>
                  <th className="budget-summary-header">Jesse</th>
                  <th className="budget-summary-header">Dani</th>
                </tr>
              </thead>
              <tbody>
                {expenses
                  .filter((expense) => expense.is_shared)
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((expense) => {
                    const jesseShare = expense.amount / 2;
                    const daniShare = expense.amount / 2;

                    totalJesse += jesseShare;
                    totalDani += daniShare;

                    return (
                      <tr key={expense.id} className="budget-summary-row">
                        <td className="budget-summary-category">
                          <div>
                            <strong>{expense.description}</strong>
                            <div
                              style={{
                                fontSize: "0.875rem",
                                color: "#666",
                                marginTop: "0.25rem",
                              }}
                            >
                              {expense.category} •{" "}
                              {new Date(
                                expense.date + "T00:00:00"
                              ).toLocaleDateString()}{" "}
                              • {expense.payment_type}
                            </div>
                          </div>
                        </td>
                        <td className="budget-summary-amount">
                          ${jesseShare.toFixed(2)}
                        </td>
                        <td className="budget-summary-amount">
                          ${daniShare.toFixed(2)}
                        </td>
                      </tr>
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
    </div>
  );
};

export default JointAccountSummary;
