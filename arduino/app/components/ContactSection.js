'use client'; // Optional if used in App Router with client-side state

import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MessageSquareIcon, SendIcon } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-black w-full" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mb-6" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions or need more information? Reach out to our team and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-pink-500/20 p-3 rounded-full">
                <MailIcon className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-pink-300 mb-1">Email</h4>
                <p className="text-gray-300">bandaramahesh908@gmail.com</p>
                <p className="text-gray-400 text-sm mt-1">We will respond within 24 hours</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-pink-500/20 p-3 rounded-full">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-pink-300 mb-1">Phone</h4>
                <p className="text-gray-300">+94 76 123 4131</p>
                <p className="text-gray-400 text-sm mt-1">Mon-Sun, 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex items-start space-x-4">
              <div className="bg-pink-500/20 p-3 rounded-full">
                <MessageSquareIcon className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-pink-300 mb-1">Live Chat</h4>
                <p className="text-gray-300">Chat with our support team</p>
                <button className="text-pink-400 text-sm mt-1 hover:underline">Start Chat</button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg border border-pink-500/30">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>

            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                <h4 className="text-green-300 font-medium mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for your message. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-white resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/50'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <span>Send Message</span>
                      <SendIcon className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
