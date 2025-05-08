'use client'; // Add only if you use hooks, state, or effects in the future

import { BrainIcon, UsersIcon, TrophyIcon, GraduationCapIcon } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-900 w-full" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            About the Workshop
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our Arduino Mastery Workshop is designed to take you from curious
            beginner to confident creator through hands-on learning and exciting
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Workshop Goals */}
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BrainIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-blue-300">
              Workshop Goals
            </h3>
            <p className="text-gray-400 text-center">
              Learn Arduino programming fundamentals, circuit design, and
              problem-solving skills in an interactive environment.
            </p>
          </div>

          {/* Target Audience */}
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-blue-300">
              Target Audience
            </h3>
            <p className="text-gray-400 text-center">
              Perfect for students, beginners, and tinkerers who want to explore
              the exciting world of electronics and programming.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-blue-300">
              Benefits
            </h3>
            <p className="text-gray-400 text-center">
              Gain practical experience, build your portfolio, network with
              like-minded individuals, and win exciting prizes.
            </p>
          </div>

          {/* Takeaways */}
          <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCapIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-blue-300">
              Takeaways
            </h3>
            <p className="text-gray-400 text-center">
              Walk away with hands-on skills, teamwork experience, digital
              certification, and your own Arduino project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
