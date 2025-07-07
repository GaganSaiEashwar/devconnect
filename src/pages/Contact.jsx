
import React from 'react';

const Contact = () => {
  return (
    <section className="p-10 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Gagan Sai Eashwar" className="w-full p-2 border rounded" required />
        <input type="email" placeholder="gagansaieashwar" className="w-full p-2 border rounded" required />
        <textarea placeholder="Let's connect" className="w-full p-2 border rounded" rows="4" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
