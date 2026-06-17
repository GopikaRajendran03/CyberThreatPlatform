function ThreatLogs() {
  const logs = JSON.parse(localStorage.getItem("threatLogs")) || [];

  return (
    <div style={{ minHeight: "100vh", background: "#0a192f", color: "white", padding: "40px" }}>
      <h1 style={{ color: "#00bcd4" }}>Threat Logs</h1>

      <table style={{ width: "100%", marginTop: "30px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#112240" }}>
            <th style={{ padding: "15px", border: "1px solid #00bcd4" }}>URL</th>
            <th style={{ padding: "15px", border: "1px solid #00bcd4" }}>Result</th>
            <th style={{ padding: "15px", border: "1px solid #00bcd4" }}>Risk Score</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>{log.url}</td>
              <td style={{ padding: "15px", border: "1px solid #00bcd4", color: log.result === "PHISHING" ? "#ff4d4d" : "#00ff7f" }}>
                {log.result}
              </td>
              <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>{log.risk_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThreatLogs;