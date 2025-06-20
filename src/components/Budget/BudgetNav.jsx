import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faFileInvoiceDollar,
  faCommentsDollar,
} from "@fortawesome/free-solid-svg-icons";

const BudgetNav = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: "new-expense", label: "New Expense", icon: faPlus },
    { id: "expenses", label: "All Expenses", icon: faList },
    {
      id: "joint-summary",
      label: "Joint Account Summary",
      icon: faFileInvoiceDollar,
    },
    {
      id: "reports",
      label: "Expense Reports",
      icon: faCommentsDollar,
    },
  ];

  return (
    <nav className="budget-nav">
      <div className="budget-nav-header">
        <h2 className="budget-nav-title">Budget</h2>
      </div>
      <ul className="budget-nav-list">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`budget-nav-item ${activeView === item.id ? "active" : ""}`}
              onClick={() => onViewChange(item.id)}
            >
              <span className="budget-nav-icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="budget-nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BudgetNav;
