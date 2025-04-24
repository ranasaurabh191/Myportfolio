import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-2 border-blue-400">
              <img
                src="/images/projects/mypic.jpg"
                alt="Saurabh Rana"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Analyst | ML Enthusiast | Python & SQL Specialist
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a B.Tech Computer Science and Engineering student passionate about analyzing data, building ML models, and creating dashboards to solve real-world problems. With experience in Python, SQL, Power BI, and Flask, I transform data into impactful business insights.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My journey began with academic projects and real-world datasets, where I built applications like fraud detection systems, recommendation engines, and interactive dashboards. I enjoy challenges that combine technical problem-solving with creative visualization.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Information
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Name:</span> Saurabh Rana
                  </li>
                  <li>
                    <span className="font-medium">Email:</span> ranasaurabh191@gmail.com
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Phagwara, Punjab, India
                  </li>
                  <li>
                    <span className="font-medium">Availability:</span> Open to Internships / Full-time roles
                  </li>
                </ul>
              </div>
              
             
            </div>
            
            <div>
              <a
                href="https://github.com/ranasaurabh191/My-certifications-certificates/blob/main/Saurabh_Rana_Resume.pdf" // Replace with updated link if needed
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
