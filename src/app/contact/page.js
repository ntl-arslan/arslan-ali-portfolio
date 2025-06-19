'use client'; // We're using useState for the form

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); // Replace with any API call or email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-light">Thank you, {formData.name}!</h2>
        <p className="text-secondary">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <h2 className="text-center text-light mb-4">Get In Touch</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control bg-secondary bg-opacity-10 text-light"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control bg-secondary bg-opacity-10 text-light"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label text-light">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control bg-secondary bg-opacity-10 text-light"
            rows="5"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </section>
  );
}
