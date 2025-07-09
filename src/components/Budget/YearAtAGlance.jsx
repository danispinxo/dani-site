import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import supabase from "../../lib/supabaseClient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const JESSE_ID = process.env.NEXT_PUBLIC_JESSE_ID;
const DANI_ID = process.env.NEXT_PUBLIC_DANI_ID;

const YearAtAGlance = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .in("user_id", [JESSE_ID, DANI_ID])
        .gte("date", `${selectedYear}-01-01`)
        .lte("date", `${selectedYear}-12-31`);

      if (error) {
        console.error("Error fetching expenses:", error);
        setExpenses([]);
      } else {
        setExpenses(data || []);
      }
      setLoading(false);
    };

    fetchExpenses();
  }, [selectedYear]);

  // Generate month labels
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Process data by month
  const processMonthlyData = () => {
    const monthlyData = Array(12)
      .fill(0)
      .map(() => ({
        total: 0,
        shared: 0,
        personal: 0,
        jointAccount: 0,
      }));

    expenses.forEach((expense) => {
      const month = new Date(expense.date + "T00:00:00").getMonth();
      const amount = Number(expense.amount || 0);

      monthlyData[month].total += amount;

      if (expense.is_shared) {
        monthlyData[month].shared += amount;
      } else {
        monthlyData[month].personal += amount;
      }

      if (expense.payment_type === "Joint Account") {
        monthlyData[month].jointAccount += amount;
      }
    });

    return monthlyData;
  };

  const monthlyData = processMonthlyData();

  // Chart configurations
  const totalExpensesChart = {
    labels: monthLabels,
    datasets: [
      {
        label: "Total Expenses",
        data: monthlyData.map((month) => month.total),
        backgroundColor: "rgba(0, 128, 128, 0.6)",
        borderColor: "rgba(0, 128, 128, 1)",
        borderWidth: 1,
      },
    ],
  };

  const sharedVsPersonalChart = {
    labels: monthLabels,
    datasets: [
      {
        label: "Shared Expenses",
        data: monthlyData.map((month) => month.shared),
        backgroundColor: "rgba(0, 128, 128, 0.6)",
        borderColor: "rgba(0, 128, 128, 1)",
        borderWidth: 1,
      },
      {
        label: "Personal Expenses",
        data: monthlyData.map((month) => month.personal),
        backgroundColor: "rgba(64, 224, 208, 0.6)",
        borderColor: "rgba(64, 224, 208, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString();
          },
        },
      },
    },
  };

  // Year options (current year and 2 years back)
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return [currentYear, currentYear - 1, currentYear - 2];
  };

  // Calculate totals
  const yearTotal = monthlyData.reduce((sum, month) => sum + month.total, 0);
  const yearShared = monthlyData.reduce((sum, month) => sum + month.shared, 0);
  const yearPersonal = monthlyData.reduce(
    (sum, month) => sum + month.personal,
    0
  );

  return (
    <div className="budget-year-overview">
      <div className="budget-form-card">
        <div className="budget-year-header">
          <h2 className="budget-form-title">Year at a Glance</h2>
          <div className="budget-year-selector">
            <label htmlFor="year" className="budget-input-label">
              Year:
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
              className="budget-input-field"
            >
              {getYearOptions().map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="budget-loading">Loading chart data...</div>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="budget-year-summary">
              <div className="budget-summary-card">
                <h3>Total Expenses</h3>
                <p className="budget-summary-amount">${yearTotal.toFixed(2)}</p>
              </div>
              <div className="budget-summary-card">
                <h3>Shared Expenses</h3>
                <p className="budget-summary-amount">
                  ${yearShared.toFixed(2)}
                </p>
              </div>
              <div className="budget-summary-card">
                <h3>Personal Expenses</h3>
                <p className="budget-summary-amount">
                  ${yearPersonal.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Charts */}
            <div className="budget-charts-container">
              <div className="budget-chart-section">
                <h3 className="budget-chart-title">Total Monthly Expenses</h3>
                <div className="budget-chart-wrapper">
                  <Bar data={totalExpensesChart} options={chartOptions} />
                </div>
              </div>

              <div className="budget-chart-section">
                <h3 className="budget-chart-title">
                  Shared vs Personal Expenses
                </h3>
                <div className="budget-chart-wrapper">
                  <Bar data={sharedVsPersonalChart} options={chartOptions} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default YearAtAGlance;
