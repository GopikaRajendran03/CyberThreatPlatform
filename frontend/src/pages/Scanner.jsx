import { useState } from "react";

function Scanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const scanUrl = async () => {
    const response = await fetch("http://127.0.0.1:5000/scan-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a192f", color: "white", padding: "40px" }}>
      <h1 style={{ color: "#00bcd4", fontSize: "50px" }}>
  URL Threat Scanner
</h1>

      <input
        type="text"
        placeholder="Enter suspicious URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "400px", padding: "12px", marginRight: "10px" }}
      />

      <button onClick={scanUrl} style={{ padding: "12px", background: "#00bcd4", border: "none" }}>
        Scan URL
      </button>

      {result && (
        <div style={{ marginTop: "30px", background: "#112240", padding: "20px", borderRadius: "10px" }}>
          <h2
  style={{
    color:
      result.result === "PHISHING"
        ? "#ff4d4d"
        : result.result === "SUSPICIOUS"
        ? "#ffb300"
        : "#00ff7f",
  }}
>
  Result: {result.result}
</h2>
          <h3 style={{ color: "#00bcd4" }}>
  Risk Score: {result.risk_score}
</h3>

          <h3 style={{ color: "#00bcd4" }}>
  Reasons:
</h3>
          {result.reasons.map((reason, index) => (
            <p
  key={index}
  style={{
    color: "#ffffff",
    fontSize: "20px"
  }}
>
  ⚠ {reason}
</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Scanner;