function SecurityAlerts() {
  const logs = JSON.parse(localStorage.getItem("threatLogs")) || [];

  const alertLogs = logs.filter(
    (log) => log.result === "PHISHING" || log.result === "SUSPICIOUS"
  );

  return (
    <div style={{ minHeight: "100vh", background: "#0a192f", color: "white", padding: "40px" }}>
      <h1 style={{ color: "#00bcd4" }}>Security Alerts</h1>

      <div style={{ marginTop: "30px", background: "#112240", padding: "20px", borderRadius: "10px" }}>
        {alertLogs.length === 0 ? (
          <p style={{ color: "#00ff7f" }}>✅ No high-risk alerts found</p>
        ) : (
          alertLogs.map((log, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <p style={{ color: log.result === "PHISHING" ? "#ff4d4d" : "#ffb300" }}>
                🚨 {log.result} detected
              </p>
              <p>URL: {log.url}</p>
              <p>Risk Score: {log.risk_score}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SecurityAlerts;