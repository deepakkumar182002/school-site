import { motion } from 'framer-motion';

const CoCurricular = () => {
  const activities = [
    {
      title: 'Arts & Culture',
      description: 'Music, Dance, Drama, and Fine Arts programs for creative expression.',
      icon: '🎨',
    },
    {
      title: 'Science & Technology',
      description: 'Robotics, Coding, and Science clubs for innovation and discovery.',
      icon: '🔬',
    },
    {
      title: 'Community Service',
      description: 'Social initiatives and volunteer programs for community engagement.',
      icon: '🤝',
    },
  ];

  const clubs = [
    {
      name: 'Debate Club',
      description: 'Enhance public speaking and critical thinking skills',
    },
    {
      name: 'Environmental Club',
      description: 'Promote sustainability and environmental awareness',
    },
    {
      name: 'Literary Club',
      description: 'Explore creative writing and literature appreciation',
    },
    {
      name: 'Photography Club',
      description: 'Learn photography techniques and visual storytelling',
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Co-Curricular & Extracurricular Activities</h1>
        <p className="text-xl text-gray-600">
          Nurturing talents beyond the classroom
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-gray-600 mb-6">
            We believe that learning extends far beyond the classroom walls. Our co-curricular
            and extracurricular activities are designed to help students discover their passions,
            develop new skills, and build lasting friendships.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Diverse range of activities
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Expert guidance and mentorship
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Regular performances and exhibitions
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Student Clubs</h2>
          <div className="grid grid-cols-1 gap-4">
            {clubs.map((club, index) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{club.name}</h3>
                <p className="text-gray-600">{club.description}</p>
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
          Join Our Activities
        </button>
      </motion.div>
    </div>
  );
};

export default CoCurricular; 