import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold font-mono">kerem.dev</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Kerem Murat</span>
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 All rights reserved.
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="text-gray-400 font-mono text-sm">
            <span className="text-green-400">$</span> while(alive) {'{'} eat(); sleep(); code(); repeat(); {'}'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;