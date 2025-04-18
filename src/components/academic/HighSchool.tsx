import { motion } from "framer-motion";

const HighSchool = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-8 "
    >
      <div className="translate-y-14">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 ">
          High School Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Curriculum Overview</h2>
            <p className="text-gray-600">
              Comprehensive high school curriculum preparing students for higher
              education and future careers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">College Preparation</h2>
            <p className="text-gray-600">
              Specialized programs and guidance for college admissions and
              career planning.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HighSchool;
