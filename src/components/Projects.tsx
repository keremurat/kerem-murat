import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A smart task management application using machine learning to prioritize tasks and predict completion times.',
      tech: ['React', 'Python', 'TensorFlow', 'Node.js'],
      github: '#',
      demo: '#',
      featured: true,
      status: 'In Development'
    },
    {
      title: 'Teknofest Robot Controller',
      description: 'Advanced robotics control system developed for Teknofest competition with real-time sensor integration.',
      tech: ['C++', 'Arduino', 'ROS', 'Python'],
      github: '#',
      demo: '#',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'Real-time Chat Application',
      description: 'Full-stack chat application with WebSocket integration, user authentication, and message encryption.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      demo: '#',
      featured: false,
      status: 'Completed'
    },
    {
      title: 'Weather Prediction ML Model',
      description: 'Machine learning model for weather prediction using historical data and neural networks.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      github: '#',
      demo: '#',
      featured: false,
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work in AI, robotics, and web development
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;