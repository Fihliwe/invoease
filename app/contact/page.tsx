"use client";
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Message sent!');
  };

  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-400 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
