import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Saurabh <span className="text-blue-600">Rana</span>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Data Scientist | Machine Learning Engineer | Web Developer
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/ranasaurabh191" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/-rana-saurabh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ranasaurabh191@gmail.com"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            © {currentYear} saurabhrana. Built with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;