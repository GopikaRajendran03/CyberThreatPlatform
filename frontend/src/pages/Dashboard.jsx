import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThreatPieChart from "../components/ThreatPieChart";

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
  total_scans: 0,
  phishing: 0,
  safe: 0,
  suspicious: 0,
});

useEffect(() => {
  fetch("http://127.0.0.1:5000/dashboard-stats")
    .then((response) => response.json())
    .then((data) => setStats(data))
    .catch((error) => console.error("Error fetching stats:", error));
}, []);



  return (
    <div
      style={{
        padding: "30px",
        background: "#0a192f",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1
        style={{
          color: "#00bcd4",
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Cyber Threat Dashboard
      </h1>

      {/* Main Stats */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Threats Detected</h3>
          <h2 style={{ color: "#ff4d4d" }}>{stats.phishing}</h2>
        </div>

        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>URLs Scanned</h3>
          <h2 style={{ color: "#00bcd4" }}>{stats.total_scans}</h2>
        </div>

        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Safe URLs</h3>
          <h2 style={{ color: "#00ff7f" }}>{stats.safe}</h2>
        </div>
      </div>

      {/* Recent Alerts */}

      <div
        style={{
          marginTop: "40px",
          background: "#112240",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2 style={{ color: "white" }}>Recent Security Alerts</h2>

        <p style={{ color: "#ff5252" }}>
          ⚠ Phishing URL detected from unknown domain
        </p>

        <p style={{ color: "#ffb300" }}>
          ⚠ Multiple failed login attempts detected
        </p>

        <p style={{ color: "#00bcd4" }}>
          ℹ Suspicious IP activity monitored
        </p>
      </div>

      {/* Analytics */}

      <h2
        style={{
          color: "#00bcd4",
          marginTop: "40px",
        }}
      >
        Threat Analytics
      </h2>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Total Scans</h3>
          <h2 style={{ color: "#00bcd4" }}>{stats.total_scans}</h2>
        </div>

        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Phishing URLs</h3>
          <h2 style={{ color: "#ff4d4d" }}>{stats.phishing}</h2>
        </div>

        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Safe URLs</h3>
          <h2 style={{ color: "#00ff7f" }}>{stats.safe}</h2>
        </div>

        <div
          style={{
            background: "#112240",
            padding: "20px",
            borderRadius: "10px",
            width: "220px",
          }}
        >
          <h3>Suspicious URLs</h3>
          <h2 style={{ color: "#ffb300" }}>{stats.suspicious}</h2>
        </div>
      </div>
      {/* Pie Chart */}

<div style={{ marginTop: "40px" }}>
  <ThreatPieChart
  safeCount={stats.safe}
  phishingCount={stats.phishing}
  suspiciousCount={stats.suspicious}
/>
</div>

{/* Navigation Buttons */}

      {/* Navigation Buttons */}

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => navigate("/scanner")}
          style={{
            padding: "12px 20px",
            background: "#00bcd4",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🔍 Scan URL
        </button>

        <button
          onClick={() => navigate("/threat-logs")}
          style={{
            padding: "12px 20px",
            background: "#112240",
            color: "white",
            border: "1px solid #00bcd4",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          📊 Threat Logs
        </button>

        <button
  onClick={() => navigate("/alerts")}
  style={{
    padding: "12px 20px",
    background: "#112240",
    color: "white",
    border: "1px solid #00bcd4",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  🚨 Security Alerts
</button>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 20px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;