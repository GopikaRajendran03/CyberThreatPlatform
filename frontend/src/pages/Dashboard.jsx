import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "30px", background: "#0a192f", minHeight: "100vh", color: "white" }}>
      <h1 style={{ color: "white", fontSize: "42px", marginBottom: "30px" }}>
        Cyber Threat Dashboard
      </h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#112240", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3 style={{ color: "white" }}>Threats Detected</h3>
          <h2 style={{ color: "#00bcd4" }}>15</h2>
        </div>

        <div style={{ background: "#112240", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3 style={{ color: "white" }}>URLs Scanned</h3>
          <h2 style={{ color: "#00bcd4" }}>87</h2>
        </div>

        <div style={{ background: "#112240", padding: "20px", borderRadius: "10px", width: "220px" }}>
          <h3 style={{ color: "white" }}>Failed Logins</h3>
          <h2 style={{ color: "#00bcd4" }}>22</h2>
        </div>
      </div>

      {/* Recent Security Alerts */}

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
      <div style={{
  marginTop: "30px",
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
}}>
  <button
    onClick={() => navigate("/scanner")}
    style={{
      padding: "12px 20px",
      background: "#00bcd4",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
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
    cursor: "pointer"
  }}
>
  📊 Threat Logs
</button>

  <button
    style={{
      padding: "12px 20px",
      background: "#112240",
      color: "white",
      border: "1px solid #00bcd4",
      borderRadius: "5px"
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
      cursor: "pointer"
    }}
  >
    🚪 Logout
  </button>
</div>

    </div>
  );
}

export default Dashboard;