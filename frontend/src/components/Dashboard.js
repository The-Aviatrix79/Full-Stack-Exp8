import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    }
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.get("/api/protected", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data.message || res.data || "Data fetched successfully");
    } catch (error) {
      console.error("Failed to route", error);
      if (error.response && error.response.status === 401) {
          window.location.href = "/";
      } else {
          setData("Failed to fetch data");
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/?logout=success";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button className="btn btn-success me-2" onClick={getData}>Fetch Data</button>
      <button className="btn btn-danger" onClick={logout}>Logout</button>
      <p className="mt-3">{data && (typeof data === 'string' ? data : JSON.stringify(data))}</p>
    </div>
  );
}

export default Dashboard;
