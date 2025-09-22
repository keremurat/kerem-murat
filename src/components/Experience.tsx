import React from 'react';
import { Calendar, Award, GraduationCap, Code } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Electronic Commerce and Management',
      organization: 'Ankara University',
      type: 'education',
      description: 'Pursuing Bachelor\'s degree in Electronic Commerce and Management with focus on AI and software development.',
      icon: GraduationCap
    },

    {
      year: '2023',
      title: 'MakeX Robotics Competition',
      organization: 'MakeX Turkey',
      type: 'achievement',
      description: 'Achieved significant results in robotics competition with innovative solutions.',
      icon: Award
    },
    {
      year: 'June 2025',
      title: 'Software Development Intern',
      organization: 'e-istatistik',
      type: 'milestone',
      description: 'Started software development under the e-istatistik and istabot framework.',
      icon: Code
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'achievement':
        return 'from-green-500 to-emerald-500';
      case 'milestone':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBorder = (type: string) => {
    switch (type) {
      case 'education':
        return 'border-blue-500';
      case 'achievement':
        return 'border-green-500';
      case 'milestone':
        return 'border-purple-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in technology, education, and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Node */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${getTypeColor(experience.type)} border-2 border-gray-900`}></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(experience.type)}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {experience.title}
                          </h3>
                          <p className="text-blue-400 font-medium">
                            {experience.organization}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono">{experience.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className={`mt-4 inline-flex items-center px-3 py-1 rounded-full border ${getTypeBorder(experience.type)} text-sm`}>
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTypeColor(experience.type)} mr-2`}></span>
                      <span className="text-gray-300 capitalize">{experience.type}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 font-mono mb-2">2+</div>
            <div className="text-gray-400">Years Coding</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-green-400 font-mono mb-2">10+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 font-mono mb-2">5+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-3xl font-bold text-yellow-400 font-mono mb-2">3</div>
            <div className="text-gray-400">Competitions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;