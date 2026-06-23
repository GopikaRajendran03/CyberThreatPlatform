import { useEffect, useState } from "react";

function ThreatLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/threat-logs")
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error("Error fetching logs:", error));
  }, []);

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
          {logs.map((log) => (
            <tr key={log.id}>
              <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>{log.url}</td>

              <td
                style={{
                  padding: "15px",
                  border: "1px solid #00bcd4",
                  color:
                    log.result === "PHISHING"
                      ? "#ff4d4d"
                      : log.result === "SUSPICIOUS"
                      ? "#ffb300"
                      : "#00ff7f",
                }}
              >
                {log.result}
              </td>

              <td style={{ padding: "15px", border: "1px solid #00bcd4" }}>
                {log.risk_score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ThreatLogs;