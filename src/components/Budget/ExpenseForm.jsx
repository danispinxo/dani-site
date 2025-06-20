"use client";

import { useState } from "react";
import supabase from "../../lib/supabaseClient";
import { Snackbar, Alert } from "@mui/material";

const ExpenseForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [selectedMonthYear, setSelectedMonthYear] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  });
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    is_shared: true,
    payment_type: "Joint Account",
  });

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

  const getMonthYearOptions = () => {
    const options = [];
    const now = new Date();
    // Show current month plus next 11 months
    for (let i = 0; i < 12; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() + i, 1);
      const value = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      const label = date.toLocaleDateString("default", {
        month: "long",
        year: "numeric",
      });
      options.push({ value, label });
    }
    return options;
  };

  const addPresetExpense = async (preset) => {
    setLoading(true);
    try {
      const [year, month] = selectedMonthYear.split("-");
      const date = `${year}-${month}-${String(preset.day).padStart(2, "0")}`;

      // Check if this preset expense already exists for this month
      if (preset.label === "+ Mortgage") {
        const { data: existingExpenses, error: checkError } = await supabase
          .from("expenses")
          .select("*")
          .eq("category", "Mortgage")
          .eq("description", "Mortgage Payment")
          .gte("date", `${year}-${month}-01`)
          .lt(
            "date",
            `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-01`
          );

        if (checkError) throw checkError;

        if (existingExpenses && existingExpenses.length > 0) {
          showToast(
            `Mortgage payment already exists for ${new Date(`${year}-${month}-01T00:00:00`).toLocaleDateString("default", { month: "long", year: "numeric" })}`,
            "warning"
          );
          setLoading(false);
          return;
        }
      }

      if (preset.label === "+ Phone/Internet") {
        const { data: existingExpenses, error: checkError } = await supabase
          .from("expenses")
          .select("*")
          .eq("category", "Rogers")
          .eq("description", "Phone/Internet Bill")
          .gte("date", `${year}-${month}-01`)
          .lt(
            "date",
            `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-01`
          );

        if (checkError) throw checkError;

        if (existingExpenses && existingExpenses.length > 0) {
          showToast(
            `Phone/Internet bill already exists for ${new Date(`${year}-${month}-01T00:00:00`).toLocaleDateString("default", { month: "long", year: "numeric" })}`,
            "warning"
          );
          setLoading(false);
          return;
        }
      }

      if (preset.label === "+ Reliance") {
        const { data: existingExpenses, error: checkError } = await supabase
          .from("expenses")
          .select("*")
          .eq("category", "Utilities")
          .eq("description", "Reliance")
          .gte("date", `${year}-${month}-01`)
          .lt(
            "date",
            `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-01`
          );

        if (checkError) throw checkError;

        if (existingExpenses && existingExpenses.length > 0) {
          showToast(
            `Reliance bill already exists for ${new Date(`${year}-${month}-01T00:00:00`).toLocaleDateString("default", { month: "long", year: "numeric" })}`,
            "warning"
          );
          setLoading(false);
          return;
        }
      }

      if (preset.label === "+ Netflix") {
        const { data: existingExpenses, error: checkError } = await supabase
          .from("expenses")
          .select("*")
          .eq("category", "Streaming")
          .eq("description", "Netflix")
          .gte("date", `${year}-${month}-01`)
          .lt(
            "date",
            `${year}-${String(parseInt(month) + 1).padStart(2, "0")}-01`
          );

        if (checkError) throw checkError;

        if (existingExpenses && existingExpenses.length > 0) {
          showToast(
            `Netflix subscription already exists for ${new Date(`${year}-${month}-01T00:00:00`).toLocaleDateString("default", { month: "long", year: "numeric" })}`,
            "warning"
          );
          setLoading(false);
          return;
        }
      }

      const { error } = await supabase.from("expenses").insert([
        {
          amount: preset.amount,
          description: preset.description,
          category: preset.category,
          date: date,
          is_shared: preset.is_shared,
          payment_type: preset.payment_type,
          user_id: user.id,
        },
      ]);

      if (error) throw error;
      showToast(
        `${preset.description} added successfully for ${new Date(date).toLocaleDateString()}!`,
        "success"
      );
    } catch (error) {
      showToast("Error adding expense: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("expenses").insert([
        {
          ...formData,
          user_id: user.id,
          amount: parseFloat(formData.amount),
        },
      ]);

      if (error) throw error;

      // Reset form
      setFormData({
        amount: "",
        description: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
        is_shared: true,
        payment_type: "Joint Account",
      });

      showToast("Expense added successfully!", "success");
      setShowCustomForm(false);
    } catch (error) {
      showToast("Error adding expense: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const presetExpenses = [
    {
      label: "+ Mortgage",
      amount: 2814.44,
      description: "Mortgage Payment",
      category: "Mortgage",
      day: 28,
      is_shared: true,
      payment_type: "Joint Account",
    },
    {
      label: "+ Phone/Internet",
      amount: 204.52,
      description: "Phone/Internet Bill",
      category: "Rogers",
      day: 13,
      is_shared: true,
      payment_type: "Jesse Visa",
    },
    {
      label: "+ Reliance",
      amount: 43.16,
      description: "Reliance",
      category: "Utilities",
      day: 1,
      is_shared: true,
      payment_type: "Jesse Visa",
    },
    {
      label: "+ Netflix",
      amount: 9.03,
      description: "Netflix",
      category: "Streaming",
      day: 25,
      is_shared: true,
      payment_type: "Jesse Visa",
    },
  ];

  if (showCustomForm) {
    return (
      <>
        <div className="budget-form">
          <div className="budget-form-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <h2 className="budget-form-title">Add Custom Expense</h2>
              <button
                type="button"
                onClick={() => setShowCustomForm(false)}
                className="budget-button"
                style={{ width: "auto", padding: "0.5rem 1rem" }}
              >
                Back to Presets
              </button>
            </div>
            <p className="budget-form-subtitle">Track your spending</p>

            <form onSubmit={handleSubmit}>
              <div className="budget-grid">
                <div className="budget-input-group">
                  <label className="budget-input-label">Amount</label>
                  <div className="budget-input-amount">
                    <input
                      type="number"
                      step="0.01"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      className="budget-input-field"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div className="budget-input-group">
                  <label className="budget-input-label">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="budget-input-field"
                  />
                </div>
              </div>

              <div className="budget-input-group">
                <label className="budget-input-label">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="budget-input-field"
                  placeholder="What was this expense for?"
                />
              </div>

              <div className="budget-grid">
                <div className="budget-input-group">
                  <label className="budget-input-label">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="budget-input-field"
                  >
                    <option value="">Select a category</option>
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
                </div>

                <div className="budget-input-group">
                  <label className="budget-input-label">Payment Method</label>
                  <select
                    name="payment_type"
                    value={formData.payment_type}
                    onChange={handleChange}
                    required
                    className="budget-input-field"
                  >
                    <option value="Joint Account">Joint Account</option>
                    <option value="Dani Visa">Dani Visa</option>
                    <option value="Jesse Visa">Jesse Visa</option>
                    <option value="Dani Chequing">Dani Chequing</option>
                    <option value="Jesse Chequing">Jesse Chequing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="budget-checkbox">
                <input
                  type="checkbox"
                  name="is_shared"
                  checked={formData.is_shared}
                  onChange={handleChange}
                />
                <label>This is a shared expense</label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="budget-button"
              >
                {loading ? "Adding..." : "Add Expense"}
              </button>
            </form>
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
  }

  return (
    <>
      <div className="budget-form">
        <div className="budget-form-card">
          <h2 className="budget-form-title">Add Expense</h2>
          <p className="budget-form-subtitle">
            Choose a preset or add custom expense
          </p>

          <div className="budget-input-group">
            <label className="budget-input-label">Month/Year</label>
            <select
              value={selectedMonthYear}
              onChange={(e) => setSelectedMonthYear(e.target.value)}
              className="budget-input-field"
            >
              {getMonthYearOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {presetExpenses.map((preset, index) => (
              <button
                key={index}
                type="button"
                onClick={() => addPresetExpense(preset)}
                disabled={loading}
                className="budget-button"
                style={{
                  backgroundColor: "#008080",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{preset.label}</span>
                <span>${preset.amount.toFixed(2)}</span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => setShowCustomForm(true)}
              className="budget-button"
              style={{
                backgroundColor: "#ffffff",
                color: "#008080",
                border: "2px solid #008080",
              }}
            >
              + Custom Expense
            </button>
          </div>
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

export default ExpenseForm;
