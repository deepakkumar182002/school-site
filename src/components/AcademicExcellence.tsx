import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AcademicExcellence = () => {
  const [activeTab, setActiveTab] = useState('primary');

  const tabs = [
    { id: 'primary', name: 'Primary Education', path: '/academic/primary' },
    { id: 'middle', name: 'Middle School', path: '/academic/middle' },
    { id: 'high', name: 'High School', path: '/academic/high' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 translate-y-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Excellence</h1>
        <p className="text-xl text-gray-600">
          Nurturing minds, shaping futures through quality education
        </p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{tab.name}</h3>
              <p className="text-gray-600 mb-4">
                Discover our comprehensive {tab.name.toLowerCase()} program designed to
                foster academic growth and personal development.
              </p>
              <Link
                to={tab.path}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicExcellence; 