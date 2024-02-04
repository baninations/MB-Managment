// ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Add logic to handle form submission
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
        Name:
        <input
          style={inputStyle}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Email:
        <input
          style={inputStyle}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label style={labelStyle}>
        Message:
        <textarea
          className="h-56"
          style={textareaStyle}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button style={buttonStyle} type="submit">
        Submit
      </button>
    </form>
  );
};

// Inline styles for ContactForm
const formStyle = {
  textAlign: "left",
};

const labelStyle = {
  display: "block",
  margin: "10px 0",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  marginBottom: "10px",
};

const textareaStyle = {
  width: "100%",
  padding: "8px",
  boxSizing: "border-box",
  marginBottom: "10px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ContactForm;
