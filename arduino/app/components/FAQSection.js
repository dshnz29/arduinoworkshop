'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What should I bring?',
      answer:
        "Just bring yourself, a laptop, and your enthusiasm! We'll provide all Arduino hardware, components, and tools needed for the workshop. You may want to bring a notebook and pen for taking notes.",
    },
    {
      question: 'Is prior knowledge required?',
      answer:
        'No prior experience is necessary! Our workshop is designed for all skill levels, from complete beginners to those with some Arduino experience. Our pre-workshop quiz will help us match you with the right team and provide appropriate guidance.',
    },
    {
      question: 'Are teams fixed or flexible?',
      answer:
        'Teams are formed based on your quiz results to ensure a good mix of skills and interests. While we encourage you to stick with your assigned team for the best experience, accommodations can be made in special circumstances.',
    },
    {
      question: "What's in the kit?",
      answer:
        'Each participant receives an Arduino starter kit that includes an Arduino Uno board, breadboard, jumper wires, LEDs, resistors, sensors, motors, and other components needed for the workshop projects. The kit is yours to keep after the event!',
    },
    {
      question: 'How are winners selected?',
      answer:
        "Projects will be judged based on creativity, technical implementation, presentation, and practical application. Our panel of judges will evaluate each team's final project, and prizes will be awarded in several categories including 'Most Innovative' and 'Best Technical Execution'.",
    },
    {
      question: 'Will there be food provided?',
      answer:
        "Yes! We provide lunch, snacks, and beverages throughout the day to keep your energy up while you're creating amazing Arduino projects.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-900 w-full" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have questions about our Arduino workshop? Find answers to common
            inquiries below.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-green-500/30 rounded-lg overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition-colors duration-200 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-400" />
                )}
              </button>
              <div
                className={`bg-gray-800/50 px-6 transition-all duration-300 ${
                  openIndex === index
                    ? 'max-h-96 opacity-100 py-4'
                    : 'max-h-0 opacity-0 overflow-hidden py-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
