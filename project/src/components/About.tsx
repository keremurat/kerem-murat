import React from 'react';
import { Award, GraduationCap, Heart, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate developer with a love for clean code and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl flex items-center justify-center">
              <Code className="w-32 h-32 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-mono text-sm">
              status: online
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <GraduationCap className="w-5 h-5 text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-600">
                Electronic Commerce and Management student at Ankara University, passionate about technology since childhood and constantly learning new technologies.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <Award className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
              </div>
              <p className="text-gray-600">
                Multiple Teknofest participations and MakeX Robotics Competition achievements, 
                showcasing skills in both software development and robotics.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <Heart className="w-5 h-5 text-purple-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Interests</h3>
              </div>
              <p className="text-gray-600">
                Specializing in AI/ML, Frontend & Backend development. Love creating 
                innovative solutions and exploring the latest technologies in software development.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;