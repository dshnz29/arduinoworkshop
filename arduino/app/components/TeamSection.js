import React from 'react';
import Image from 'next/image'; // Use Next.js optimized image component

const TeamSection = () => {
  const mentors = [
    {
      name: 'Ms. Jeewanthi Marasinghe',
      role: 'Assistant General Manager',    
      // expertise: 'Robotics & IoT',
      bio: 'PhD in Electrical Engineering with 10+ years of experience in Arduino-based robotics.',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Viraj Thilakarathne',
      role: 'Center Manager',
      expertise: 'Circuit Design',
      bio: 'Hardware engineer specialized in embedded systems and sensor integration.',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Lasitha Ranawaka',
      role: 'Head of Academic Affairs & Compliance',
      expertise: 'Programming',
      bio: 'Software developer with expertise in C/C++ and creative Arduino applications.',
      image: '/viraj.jpg'
    },
    // {
    //   name: 'David Kim',
    //   role: 'Workshop Coordinator',
    //   expertise: 'Education',
    //   bio: 'STEM educator specialized in creating engaging hands-on learning experiences.'
    // }
  ];

  const teamMembers = [
    {
      name: 'Mr. Charith Pemasiri',
      role: 'Event Organizer',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Ravidu Geethanjana',
      role: 'Event Organizer',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Mahesh Rathnamalala',
      role: 'Event Organizer',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Dishan Bashitha',
      role: 'Speaker',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Denuwan Wijesinghe',
      role: 'Speaker',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Chaniru Dewnitha',
      role: 'Speaker',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Kalana Manupiya',
      role: 'Speaker',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Sahan Lakmal',
      role: 'Media Creator',
      image: '/viraj.jpg'
    },
    {
      name: 'Mr. Supun Akalanaka',
      role: 'Technical Support',
      image: '/viraj.jpg'
    },
  ];

  return (
    <section className="py-20 bg-black w-full" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our experienced mentors and dedicated team members are here to guide you through your Arduino journey.
          </p>
        </div>

        {/* Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-300">Workshop Facilitators</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden border border-cyan-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="relative group">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{mentor.bio}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1 text-white">{mentor.name}</h4>
                  <p className="text-cyan-400 mb-2">{mentor.role}</p>
                  {/* <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                    {mentor.expertise}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-cyan-300">Workshop Mentors</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-500/50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 px-3 py-1 rounded-full border border-cyan-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium">{member.name}</p>
                  <p className="text-cyan-400 text-xs text-center">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
