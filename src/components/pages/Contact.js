// Currently non-functional as there is no backend
import React, { useState } from 'react';
import '../../../src/components/style.css';

import { validateEmail } from '../utils/helpers';

const style = {
  contactFormat: {
    justifyContent: "center",
    textAlign: "center",
    lineHeight: "170%",
    marginTop: "10%",
    marginBottom: "10%",
  },
  footer: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "2em",
  },
}


function Contact(props) {
  const [input, setInput] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <section style={style.contactFormat}>
      <h1 className="section-title">Contact Me</h1>
      <div className="form-container">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              defaultValue={form.name}
              name="name"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              defaultValue={form.email}
              name="email"
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              name="message"
              defaultValue={form.message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          <button type="submit" className="contact-button">
            Add message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;