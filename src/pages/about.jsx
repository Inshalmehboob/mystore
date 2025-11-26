import React from "react";
import "./productpages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-box">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>My Store</strong> — your trusted place to shop the
          latest fashion for Men, Women, and Kids.
        </p>

        <h3>Who We Are</h3>
        <p>
          We are a passionate team that focuses on high-quality products,
          affordable pricing, and fast delivery. Our goal is to make online
          shopping easy, fast, and enjoyable for everyone.
        </p>

        <h3>Our Vision</h3>
        <p>
          To become one of the top online stores by offering premium customer
          experience and trending fashion items.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>✔ Stylish & affordable clothing</li>
          <li>✔ Fast & secure delivery</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
