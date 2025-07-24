import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add an API call here
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions, feedback, or just want to say hi? We’d love to hear from you!
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>📍 Our Location</h3>
        <p>123 Food Street, Flavor Town, PK</p>
        <h3>📞 Phone</h3>
        <p>+92 300 1234567</p>
        <h3>✉️ Email</h3>
        <p>support@tomatoapp.com</p>
      </div>
    </div>
  );
};

export default Contact;
