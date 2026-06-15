function App() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0a192f"
    }}>
      <div style={{
        backgroundColor: "#112240",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
        color: "white"
      }}>
        <h2>Cyber Threat Platform</h2>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#00bcd4",
            border: "none",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default App;