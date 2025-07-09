import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faList,
  faFileInvoiceDollar,
  faCommentsDollar,
  faCalendarAlt,
  faStickyNote,
  faBell,
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
    {
      id: "year-overview",
      label: "Year at a Glance",
      icon: faCalendarAlt,
    },
  ];

  // Sample reminders - in a real app, these would come from a database
  const upcomingReminders = [
    {
      id: 1,
      text: "Rent payment",
      date: "Dec 1",
      type: "deadline",
    },
    {
      id: 2,
      text: "Utilities bill",
      date: "Dec 5",
      type: "reminder",
    },
    {
      id: 3,
      text: "Budget review",
      date: "Dec 15",
      type: "task",
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

      {/* Upcoming Notes/Reminders Section */}
      <div className="budget-nav-reminders">
        <div className="budget-nav-reminders-header">
          <h3 className="budget-nav-reminders-title">
            <FontAwesomeIcon
              icon={faBell}
              className="budget-nav-reminders-icon"
            />
            Upcoming Notes
          </h3>
        </div>
        <ul className="budget-nav-reminders-list">
          {upcomingReminders.map((reminder) => (
            <li key={reminder.id} className="budget-nav-reminder-item">
              <div className="budget-nav-reminder-content">
                <span className="budget-nav-reminder-icon">
                  <FontAwesomeIcon icon={faStickyNote} />
                </span>
                <div className="budget-nav-reminder-text">
                  <p className="budget-nav-reminder-title">{reminder.text}</p>
                  <small className="budget-nav-reminder-date">
                    {reminder.date}
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default BudgetNav;
