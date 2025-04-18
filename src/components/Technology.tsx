import { motion } from 'framer-motion';

const Technology = () => {
  const programs = [
    {
      title: 'Robotics & AI',
      description: 'Learn about robotics, artificial intelligence, and automation through hands-on projects.',
      icon: '🤖',
    },
    {
      title: 'Coding & Programming',
      description: 'Master programming languages and software development fundamentals.',
      icon: '💻',
    },
    {
      title: 'Digital Literacy',
      description: 'Develop essential digital skills and responsible technology use.',
      icon: '📱',
    },
  ];

  const facilities = [
    {
      name: 'Computer Labs',
      description: 'State-of-the-art computer facilities with latest software and hardware',
    },
    {
      name: 'Robotics Lab',
      description: 'Dedicated space for robotics projects and competitions',
    },
    {
      name: '3D Printing Center',
      description: 'Access to 3D printers for prototyping and innovation',
    },
    {
      name: 'Digital Library',
      description: 'Online resources and digital learning materials',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 translate-y-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Technology & Innovation</h1>
        <p className="text-xl text-gray-600">
          Preparing students for the digital future
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            We are committed to preparing our students for the rapidly evolving digital landscape.
            Our technology programs focus on developing critical thinking, problem-solving skills,
            and innovation through hands-on learning experiences.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Industry-standard equipment
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Expert instructors
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Regular workshops and competitions
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technology Facilities</h2>
          <div className="grid grid-cols-1 gap-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
            <p className="text-gray-600">{program.description}</p>
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
          Explore Technology Programs
        </button>
      </motion.div>
    </div>
  );
};

export default Technology; 