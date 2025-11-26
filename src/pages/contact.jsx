import React from "react";
import "./productpages.css";

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-box">
        <h1>Contact Us</h1>
        <p>Feel free to reach out. We’d love to hear from you!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Other Ways to Reach Us</h3>
          <p>📞 Phone: +92 320 2053134</p>
          <p>📧 Email: mystore786@gmail.com</p>
          <p>📍 Address: Karachi, Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
