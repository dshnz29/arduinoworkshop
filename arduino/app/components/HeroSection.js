"use client";

import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide data
  const slides = [
    {
      image:
        'https://images.unsplash.com/photo-1553406830-ef2513450d76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Join the Ultimate Arduino Workshop!',
      subtitle: 'Learn, build, and compete with hands-on Arduino projects',
    },
    {
      image:
        'https://images.unsplash.com/photo-1573511860302-28c524319d2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Master Circuit Design',
      subtitle: 'Create amazing LED projects and interactive electronics',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Collaborate and Win',
      subtitle: 'Team up with fellow enthusiasts and solve exciting challenges',
    },
    {
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Earn Recognition',
      subtitle: 'Compete for prizes and showcase your engineering skills',
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={`Arduino Workshop - ${slide.title}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse"
          style={{
            textShadow: '0 0 15px rgba(59, 130, 246, 0.7)',
          }}
        >
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          {slides[currentSlide].subtitle}
        </p>
        <a href='#register'>
        <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full font-bold text-lg hover:from-green-500 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105">
          Register Now
        </button>
        </a>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
