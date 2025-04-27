import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Something on Your Mind?</h1>
      <h1 className="primary-heading">Drop us a Mail — we’ll get back to you in on time!</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Mailus@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
