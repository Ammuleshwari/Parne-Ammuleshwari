import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length === 0) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(validation);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-4 py-20 text-center flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <p className="text-gray-300 text-sm tracking-widest mb-2 uppercase">GET IN TOUCH</p>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
          Contact Me
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-6">
          Let’s Chat! Whether you have a question, a project idea, or just want to connect, I’m always happy to hear from you. Drop me a message, and I’ll be in touch soon!
        </p>

        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xl mx-auto space-y-5 text-left">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 rounded-md bg-white text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded-md bg-white text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#3EFFC0] via-purple-400 to-[#3EFFC0] text-black font-semibold py-2 px-6 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 flex justify-center gap-6 text-2xl text-white">
          <a href="mailto:reddyammuleshwari@gmail.com" className="hover:text-[#cd4dad] transition"><FaEnvelope /></a>
          <a href="https://github.com/Ammuleshwari" target="_blank" rel="noopener noreferrer" className="hover:text-[#3EFFC0] transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/ammuleshwari-parne" target="_blank" rel="noopener noreferrer" className="hover:text-[#535ae1] transition"><FaLinkedin /></a>
        </div>

        <div className="mt-10">
          <a href="#home" className="inline-block bg-gray-500 hover:bg-gray-400 text-white p-3 rounded-full transition-all">
            <FaArrowUp />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
