import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about container">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to <strong>Tomato</strong> – your go-to destination for delicious food delivered straight to your door.
      </p>

      <div className="about-section">
        <h2>🍴 Who We Are</h2>
        <p>
          Tomato is a modern food delivery platform committed to connecting people with their favorite meals from local
          restaurants. Whether you’re craving a quick bite or planning a cozy dinner, we’ve got you covered.
        </p>
      </div>

      <div className="about-section">
        <h2>🚀 Our Mission</h2>
        <p>
          To simplify food ordering by offering an intuitive platform, fast deliveries, and unmatched service – all
          while supporting local eateries.
        </p>
      </div>

      <div className="about-section">
        <h2>💡 Why Choose Us?</h2>
        <ul>
          <li>Fresh and hygienic meals from trusted partners</li>
          <li>Real-time tracking and quick delivery</li>
          <li>Exclusive deals and offers</li>
          <li>Secure payments and simple checkout</li>
        </ul>
      </div>

      <div className="about-section contact-note">
        <p>
          Questions or suggestions? <br /> Feel free to <a href="/contact">contact us</a> – we’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
