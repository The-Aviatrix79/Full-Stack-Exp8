import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("logout") === "success") {
      setMessage("Successfully logged out");
      // Remove the query param from URL so it doesn't linger on refresh
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const login = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        username,
        password
      });

      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5">
      {message && <div className="alert alert-success">{message}</div>}
      <h2>Login</h2>
      <input className="form-control" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" /><br/>
      <input className="form-control" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" /><br/>
      <button className="btn btn-primary" onClick={login}>Login</button>
    </div>
  );
}

export default Login;
