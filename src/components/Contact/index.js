import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  function handleChange(e) {
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    //validate email
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
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
  }

  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  /*   const { name, email, message } = formState; */

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <h1 data-testid="contact">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={formState.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={formState.email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            onBlur={handleChange}
            defaultValue={formState.message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="submit" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
