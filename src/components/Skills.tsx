import React from 'react';
import ReactIcon from '../icons/react.svg';
import NextjsIcon from '../icons/nextjs.svg';
import TailwindIcon from '../icons/tailwind-css.svg';
import TypescriptIcon from '../icons/typescript.svg';
import HtmlIcon from '../icons/html.svg';
import RubyIcon from '../icons/ruby.svg';
import LinuxIcon from '../icons/linux.png';

const Skills: React.FC = () => {


  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My expertise across different technologies and frameworks
          </p>
        </div>

        {/* TechStack */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'React', icon: ReactIcon },
              { name: 'Next.js', icon: NextjsIcon },
              { name: 'Tailwind CSS', icon: TailwindIcon },
              { name: 'TypeScript', icon: TypescriptIcon },
              { name: 'HTML/CSS', icon: HtmlIcon },
              { name: 'Ruby', icon: RubyIcon },
              { name: 'Linux', icon: LinuxIcon }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-blue-500 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  <span className="text-gray-300 group-hover:text-blue-400 font-medium text-lg transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;