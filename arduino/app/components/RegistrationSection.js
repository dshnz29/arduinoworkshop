"use client";

import React, { useState } from 'react';
import { UserIcon, MailIcon, PhoneIcon, BuildingIcon, BrainIcon } from 'lucide-react';
import emailjs from 'emailjs-com'; // add at the top

const RegistrationSection = ({ onRegistrationComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institute: '',
    experienceLevel: 'beginner'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
  
    if (!formData.name || !formData.email || !formData.phone || !formData.institute) {
      setErrorMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
  
    try {
      const res = await fetch('arduinoworkshop-i14h.vercel.app/api/register', { // replace with your API URL directly
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      console.log('Response status:', res.status); // Add this
      const data = await res.json();
      console.log('Response data:', data); // Add this
      if (!res.ok) {
        throw new Error(data.message || 'Registration failed');
      }
  
      // EmailJS send
      await emailjs.send(
        'service_a3kkjls', // replace with your EmailJS Service ID
        'template_7w777f3', // replace with your EmailJS Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_phone: formData.phone,
          user_institute: formData.institute,
          user_experience: formData.experienceLevel,
        },
        'OZLrbOS3fqEP5ZRzy' // replace with your EmailJS Public Key (User ID)
      );
  
      // UI success
      setSuccessMessage('Registration successful!');
      setShowConfetti(true);
      onRegistrationComplete?.(formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        institute: '',
        experienceLevel: 'beginner'
      });
  
      setTimeout(() => {
        setShowConfetti(false);
        setSuccessMessage('');
      }, 5000);
  
    } catch (error) {
      console.error('Registration or email error:', error);
      setErrorMessage(error.message || 'An error occurred during registration. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 w-full" id="registration">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Register Now
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Secure your spot in our exclusive Arduino workshop and start your journey to become an electronics master!
          </p>
        </div>
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg border border-orange-500/30 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="flex items-center mb-2 text-gray-300">
                <UserIcon className="w-5 h-5 mr-2 text-orange-400" />
                <span>Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center mb-2 text-gray-300">
                <MailIcon className="w-5 h-5 mr-2 text-orange-400" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center mb-2 text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-2 text-orange-400" />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="flex items-center mb-2 text-gray-300">
                <BuildingIcon className="w-5 h-5 mr-2 text-orange-400" />
                <span>Institute/Organization</span>
              </label>
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your institute or organization"
              />
            </div>
            <div className="mb-6">
              <label className="flex items-center mb-2 text-gray-300">
                <BrainIcon className="w-5 h-5 mr-2 text-orange-400" />
                <span>Experience Level</span>
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
              >
                <option value="beginner">Beginner - No prior experience</option>
                <option value="intermediate">Intermediate - Some experience</option>
                <option value="advanced">Advanced - Experienced with Arduino</option>
              </select>
            </div>
            
            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}
            
            {successMessage && (
              <div className="text-green-500 text-center mb-4">
                {successMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-semibold transition-all duration-300 ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/50'}`}
            >
              {isSubmitting ? 'Processing...' : 'Register'}
            </button>
          </form>
        </div>
        
        {showConfetti && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-5%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  borderRadius: Math.random() > 0.5 ? '50%' : '0',
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RegistrationSection;
