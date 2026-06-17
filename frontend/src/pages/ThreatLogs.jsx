function ThreatLogs() {
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
          <tr>
            <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>
              http://paypal-login-secure-update.com
            </td>
            <td style={{ padding: "15px", border: "1px solid #00bcd4", color: "#ff4d4d" }}>
              PHISHING
            </td>
            <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>60</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThreatLogs;