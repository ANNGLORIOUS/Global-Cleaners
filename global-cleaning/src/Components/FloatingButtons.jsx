import React, { useState } from "react";

function FloatingButtons() {
  const [showButtons, setShowButtons] = useState(true);

  const buttonStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "white",
    fontSize: "24px",
    border: "none",
  };

  const containerStyle = {
    position: "fixed",
    top: "30%",
    right: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1000,
  };

  return (
    <div style={containerStyle}>
      {showButtons && (
        <>
          {/* Phone Button */}
          <a href="tel:0716670834" style={{ ...buttonStyle, backgroundColor: "#00c853" }}>
            📞
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254716670834"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...buttonStyle, backgroundColor: "#25D366" }}
          >
            🟢
          </a>

          {/* Email Button */}
          <a href="mailto:maatifelix001@gmail.com" style={{ ...buttonStyle, backgroundColor: "#ff5252" }}>
            📧
          </a>
        </>
      )}

      {/* Close Button */}
      <button
        onClick={() => setShowButtons(!showButtons)}
        style={{ ...buttonStyle, backgroundColor: "#ff5252" }}
      >
        {showButtons ? "❌" : "➕"}
      </button>
    </div>
  );
}

export default FloatingButtons;
