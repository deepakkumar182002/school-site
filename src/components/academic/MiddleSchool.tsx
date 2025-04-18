import { motion } from 'framer-motion';

const MiddleSchool = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Middle School Education</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Core Subjects</h2>
          <p className="text-gray-600">Comprehensive middle school curriculum focusing on core academic subjects and personal development.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Student Support</h2>
          <p className="text-gray-600">Dedicated support systems for academic and social-emotional development during these crucial years.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MiddleSchool; 