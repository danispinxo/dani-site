"use client";

import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetNav from "./BudgetNav";
import JointAccountSummary from "./JointAccountSummary";

const BudgetDetail = ({ user }) => {
  const [activeView, setActiveView] = useState("new-expense");

  const renderContent = () => {
    switch (activeView) {
      case "new-expense":
        return (
          <div className="budget-form">
            <div className="budget-form-card">
              <ExpenseForm user={user} />
            </div>
          </div>
        );
      case "expenses":
        return (
          <div className="budget-list">
            <div className="budget-list-card">
              <ExpenseList user={user} />
            </div>
          </div>
        );
      case "summary":
        return (
          <div className="budget-summary">
            <div className="budget-form-card">
              <h1 className="budget-form-title">Monthly Summary</h1>
              <p className="budget-form-subtitle">Coming soon...</p>
            </div>
          </div>
        );
      case "joint-summary":
        return <JointAccountSummary />;
      case "settings":
        return (
          <div className="budget-settings">
            <div className="budget-form-card">
              <h1 className="budget-form-title">Settings</h1>
              <p className="budget-form-subtitle">Coming soon...</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="budget">
      <div className="budget-container">
        <div className="budget-layout">
          <BudgetNav activeView={activeView} onViewChange={setActiveView} />
          <main className="budget-main">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetail;
