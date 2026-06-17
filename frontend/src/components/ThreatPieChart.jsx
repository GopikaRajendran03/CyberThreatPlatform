import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ThreatPieChart({ safeCount, phishingCount, suspiciousCount }) {
  const data = {
    labels: ["Safe", "Phishing", "Suspicious"],
    datasets: [
      {
        data: [safeCount, phishingCount, suspiciousCount],
        backgroundColor: [
          "#00ff7f", // Green
          "#ff4d4d", // Red
          "#ffb300", // Yellow
        ],
        borderColor: "#112240",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "#112240",
        padding: "20px",
        borderRadius: "10px",
        width: "500px",
        marginTop: "20px",
      }}
    >
      <h2
        style={{
          color: "#00bcd4",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Threat Distribution
      </h2>

      <Pie data={data} options={options} />
    </div>
  );
}

export default ThreatPieChart;