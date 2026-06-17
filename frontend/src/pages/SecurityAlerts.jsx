function SecurityAlerts() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a192f",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "#00bcd4" }}>
        Security Alerts
      </h1>

      <div
        style={{
          marginTop: "30px",
          background: "#112240",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <p style={{ color: "#ff4d4d" }}>
          🚨 High Risk Phishing URL detected
        </p>

        <p style={{ color: "#ffb300" }}>
          ⚠ Multiple failed login attempts
        </p>

        <p style={{ color: "#ffb300" }}>
          ⚠ Suspicious IP activity detected
        </p>

        <p style={{ color: "#00ff7f" }}>
          ℹ Safe URL scan completed
        </p>
      </div>
    </div>
  );
}

export default SecurityAlerts;