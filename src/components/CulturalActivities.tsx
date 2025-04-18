import { motion } from 'framer-motion';

const CulturalActivities = () => {
  const activities = [
    {
      title: 'Cultural Festivals',
      description: 'Celebrate diverse cultural traditions through festivals and events.',
      icon: '🎉',
    },
    {
      title: 'Art & Music',
      description: 'Express creativity through various art forms and musical performances.',
      icon: '🎨',
    },
    {
      title: 'Social Events',
      description: 'Build lasting friendships through social gatherings and events.',
      icon: '🤝',
    },
  ];

  const programs = [
    {
      name: 'Annual Cultural Day',
      description: 'Showcase of diverse cultural performances and traditions',
    },
    {
      name: 'Art Exhibition',
      description: 'Display of student artwork and creative projects',
    },
    {
      name: 'Music Concerts',
      description: 'Regular musical performances and recitals',
    },
    {
      name: 'Dance Workshops',
      description: 'Learn various dance forms from expert instructors',
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cultural & Social Activities</h1>
        <p className="text-xl text-gray-600">
          Celebrating diversity and fostering social connections
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Cultural Vision</h2>
          <p className="text-gray-600 mb-6">
            We believe in celebrating diversity and promoting cultural understanding
            through various activities and events. Our cultural programs help students
            develop appreciation for different traditions and build strong social bonds.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Diverse cultural exposure
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Creative expression opportunities
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Social interaction platforms
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cultural Programs</h2>
          <div className="grid grid-cols-1 gap-4">
            {programs.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
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
          Join Cultural Activities
        </button>
      </motion.div>
    </div>
  );
};

export default CulturalActivities; 