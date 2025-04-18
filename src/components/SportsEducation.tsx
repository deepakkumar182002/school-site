import { motion } from 'framer-motion';

const SportsEducation = () => {
  const sports = [
    {
      title: 'Team Sports',
      description: 'Basketball, Football, Cricket, and Volleyball teams compete at various levels.',
      icon: '🏀',
    },
    {
      title: 'Individual Sports',
      description: 'Swimming, Athletics, Tennis, and Badminton for personal excellence.',
      icon: '🏊',
    },
    {
      title: 'Fitness Programs',
      description: 'Regular fitness sessions, yoga, and wellness activities for all students.',
      icon: '💪',
    },
  ];

  const facilities = [
    'Olympic-size swimming pool',
    'Indoor sports complex',
    'Football field',
    'Basketball courts',
    'Tennis courts',
    'Athletics track',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 translate-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sports & Physical Education</h1>
        <p className="text-xl text-gray-600">
          Building champions through sports excellence
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Sports Philosophy</h2>
          <p className="text-gray-600 mb-6">
            We believe in the power of sports to develop character, leadership, and teamwork.
            Our comprehensive sports program is designed to cater to both competitive athletes
            and recreational participants.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Professional coaching staff
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Regular inter-school competitions
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              State-of-the-art facilities
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sports Facilities</h2>
          <div className="grid grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <span className="text-blue-600">•</span>
                <span className="text-gray-600">{facility}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {sports.map((sport, index) => (
          <motion.div
            key={sport.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{sport.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{sport.title}</h3>
            <p className="text-gray-600">{sport.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Join Our Sports Program
        </button>
      </motion.div>
    </div>
  );
};

export default SportsEducation; 