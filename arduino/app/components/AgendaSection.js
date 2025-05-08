import { ClockIcon } from 'lucide-react';

const agendaItems = [
  {
    time: '8:30 AM',
    title: 'Check-in',
    description: 'Registration and kit collection at the venue entrance.',
  },
  {
    time: '9:00 AM',
    title: 'Welcome',
    description: 'Introduction to the workshop, agenda, and team assignments.',
  },
  {
    time: '9:30 AM',
    title: 'Fundamentals',
    description: 'Learn Arduino basics, components, and circuit design principles.',
  },
  {
    time: '10:30 AM',
    title: 'Project 1',
    description: 'Build your first Arduino project with step-by-step guidance.',
  },
  {
    time: '12:00 PM',
    title: 'Lunch',
    description: 'Enjoy a delightful lunch and connect with fellow attendees.',
  },
  {
    time: '1:00 PM',
    title: 'Skill Tracks',
    description: 'Choose specialized tracks based on your interests and skill level.',
  },
  {
    time: '2:30 PM',
    title: 'Final Challenge',
    description: 'Team competition to build and present innovative Arduino solutions.',
  },
  {
    time: '3:30 PM',
    title: 'Awards',
    description: 'Celebration, certificate distribution, and announcement of winners.',
  },
];

export default function AgendaSection() {
  return (
    <section className="py-20 bg-gray-900 w-full" id="agenda">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Event Agenda
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your day of Arduino learning and excitement, from start to finish.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-500/30"></div>

            {/* Timeline items */}
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center mb-8 relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Time icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 shadow-lg shadow-purple-500/30 z-10">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>

                {/* Content */}
                <div
                  className={`pl-16 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                    <span className="text-sm font-semibold text-purple-300 block mb-1">
                      {item.time}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
