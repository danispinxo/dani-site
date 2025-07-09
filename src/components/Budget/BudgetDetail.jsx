"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import BudgetNav from "./BudgetNav";
import JointAccountSummary from "./JointAccountSummary";
import ExpenseReport from "./ExpenseReport";
import YearAtAGlance from "./YearAtAGlance";

const BudgetDetail = ({ user }) => {
  const router = useRouter();
  const [activeView, setActiveView] = useState("new-expense");

  // Read initial view from URL params on mount
  useEffect(() => {
    const { tab } = router.query;
    if (
      tab &&
      [
        "new-expense",
        "expenses",
        "joint-summary",
        "reports",
        "year-overview",
      ].includes(tab)
    ) {
      setActiveView(tab);
    }
  }, [router.query]);

  // Function to handle view changes and update URL
  const handleViewChange = (newView) => {
    setActiveView(newView);

    // Update URL with new tab parameter
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab: newView },
      },
      undefined,
      { shallow: true } // Don't trigger a full page reload
    );
  };

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
      case "joint-summary":
        return <JointAccountSummary />;
      case "reports":
        return <ExpenseReport />;
      case "year-overview":
        return <YearAtAGlance />;
      default:
        return null;
    }
  };

  return (
    <div className="budget">
      <div className="budget-container">
        <div className="budget-layout">
          <BudgetNav activeView={activeView} onViewChange={handleViewChange} />
          <main className="budget-main">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetail;
