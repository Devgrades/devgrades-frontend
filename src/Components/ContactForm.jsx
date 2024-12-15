import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    alert(result.message);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2>Let’s Work Together</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          onChange={handleChange} 
          value={formData.name} 
          required />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          onChange={handleChange} 
          value={formData.email} 
          required />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          onChange={handleChange} 
          value={formData.message} 
          required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;