// src/components/Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Get in touch with us for any inquiries or bookings.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
