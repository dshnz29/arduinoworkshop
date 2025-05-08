import React from 'react';
import {
  PackageIcon,
  UsersIcon,
  BarChart3Icon,
  HelpCircleIcon,
  HeadphonesIcon,
  AwardIcon,
} from 'lucide-react';

const HighlightsSection = () => {
  const highlights = [
    {
      icon: <PackageIcon className="w-8 h-8 text-green-400" />,
      title: 'Hands-on Kits Provided',
      description:
        'Each group will receive a complete Arduino kit to use during the workshop.',
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-green-400" />,
      title: 'Team-Based Challenges',
      description:
        'Collaborate in teams to solve real-world problems and build amazing projects.',
    },
    {
      icon: <BarChart3Icon className="w-8 h-8 text-green-400" />,
      title: 'Live Leaderboard',
      description:
        "Track your team's progress with our real-time leaderboard and competitive scoring system.",
    },
    {
      icon: <HelpCircleIcon className="w-8 h-8 text-green-400" />,
      title: 'Pre-Workshop Quiz',
      description:
        'Test your knowledge and get matched with the perfect team based on your skill level.',
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-green-400" />,
      title: 'Real Mentorship',
      description:
        'Get guidance from experienced Arduino experts who will help you overcome challenges.',
    },
    {
      icon: <AwardIcon className="w-8 h-8 text-green-400" />,
      title: 'Free Digital Certificates',
      description:
        'Earn a verified certificate to showcase your new Arduino skills and accomplishments.',
    },
  ];

  return (
    <section className="py-20 bg-black w-full" id="highlights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Workshop Highlights
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            What makes our Arduino workshop unique and exciting? Check out these
            amazing features!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-green-500/30 flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
            >
              <div className="bg-gray-800 rounded-full p-3 flex-shrink-0">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-300">
                  {highlight.title}
                </h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
