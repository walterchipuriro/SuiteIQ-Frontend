import React from "react";

export default function Topbar() {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#f0e6d2",
        display: "flex",
        alignItems: "flex-start",
        padding: "0 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontWeight: "500",
        fontSize: "18px",
        letterSpacing: "1.5px",
        boxShadow: "0 1px 10px rgba(0,0,0,0.5)",
      }}
    >
      <div>DASHBOARD</div>
    </div>
  );
}
