import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <div className="container contact my-1">
      <Link to="/">←Back to Home</Link>
      <h2 data-testid="h1tag">Contact Us!</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="name">Name:</label>
          <input
            placeholder="First and Last Name"
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="message">Message:</label>
          <textarea
            placeholder="Reason for contacting..."
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div className="flex-row flex-end">
          <button className="submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default ContactForm;
