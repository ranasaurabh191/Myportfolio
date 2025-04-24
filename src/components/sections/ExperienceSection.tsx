import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    title: "Data Science Intern",
    company: "IBM",
    startDate: "June 2024",
    endDate: "July 2024",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", // IBM logo from Wikimedia
    description:
      "During my internship with IBM, I worked on a real-world data science project involving the analysis of Zomato's restaurant and review data. This internship provided a strong foundation in practical machine learning and data-driven decision making.",
    achievements: [
      "Cleaned and preprocessed over 50,000 rows of raw Zomato data for modeling and insights.",
      "Explored patterns in user ratings, cuisines, cost brackets, and delivery behaviors using Python and Pandas.",
      "Developed ML models including Decision Trees, Random Forest, and K-Nearest Neighbors to predict user preferences.",
      "Created visual dashboards to communicate insights using Matplotlib and Seaborn.",
      "Improved model performance by fine-tuning hyperparameters and applying feature selection techniques."
    ],
    technologies: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    projectImage: "/certificates/ibm2.png" // Placeholder project completion image
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience <span className="text-blue-600">( Internship & work )</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to collaborate with.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>

          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-16 md:mb-0 relative md:flex md:flex-row`}
            >
              <div className="hidden md:block absolute z-10 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

              <div className="md:w-1/2 md:pr-16">
                <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 rounded-full text-sm font-medium mb-4">
                    {experience.startDate} - {experience.endDate}
                  </div>

                  <div className="flex items-center mb-4">
                    {experience.logo && (
                      <div className="w-12 h-12 mr-4 rounded-full bg-white flex items-center justify-center p-2 shadow-sm">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="max-w-full max-h-full"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {experience.description}
                  </p>

                  {experience.achievements && (
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                  {experience.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right side: Project completion image */}
              {experience.projectImage && (
                <div className="md:w-1/2 md:pl-16 mt-6 md:mt-0">
                  <img
                    src={experience.projectImage}
                    alt="Project Completion"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
