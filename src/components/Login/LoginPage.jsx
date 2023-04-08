import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email and password values, like sending them to a server
  };

  return (
    <div
      className="container mt-10"
      style={{ backgroundColor: "#f1f1f1", padding: "20px" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: "100%",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
