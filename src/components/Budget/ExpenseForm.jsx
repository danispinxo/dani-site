"use client";

import { useState } from "react";
import supabase from "../../lib/supabaseClient";

const ExpenseForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    is_shared: true,
    payment_type: "Joint Account",
  });

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

      alert("Expense added successfully!");
    } catch (error) {
      alert("Error adding expense: " + error.message);
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

  return (
    <div className="budget-form">
      <div className="budget-form-card">
        <h2 className="budget-form-title">Add New Expense</h2>
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
                <option value="Music">Music</option>
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

          <button type="submit" disabled={loading} className="budget-button">
            {loading ? "Adding..." : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
