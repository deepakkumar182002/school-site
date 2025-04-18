import { motion } from 'framer-motion';

const PrimaryEducation = () => {
  const features = [
    {
      title: 'Holistic Learning',
      description: 'Our primary education program focuses on developing cognitive, social, and emotional skills through interactive learning experiences.',
      icon: '🎯',
    },
    {
      title: 'Innovative Teaching',
      description: 'We employ modern teaching methodologies including project-based learning, hands-on activities, and digital integration.',
      icon: '💡',
    },
    {
      title: 'Personal Growth',
      description: 'Students are encouraged to explore their interests and develop critical thinking skills from an early age.',
      icon: '🌱',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 translate-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Primary Education</h1>
        <p className="text-xl text-gray-600">
          Building strong foundations for lifelong learning
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
            At our primary school, we believe in creating an engaging and nurturing environment
            where young minds can flourish. Our curriculum is designed to balance academic
            excellence with creative expression and physical development.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Age-appropriate learning activities
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Small class sizes for personalized attention
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Regular progress assessments
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Curriculum Highlights</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Core Subjects</h3>
              <p className="text-gray-600">
                Mathematics, English, Science, and Social Studies form the foundation
                of our academic program.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Enrichment Activities</h3>
              <p className="text-gray-600">
                Art, Music, Physical Education, and Computer Studies complement
                our core curriculum.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Special Programs</h3>
              <p className="text-gray-600">
                Reading clubs, Science fairs, and Cultural events provide additional
                learning opportunities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="bg-white rounded-lg shadow-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Schedule a Visit
        </button>
      </motion.div>
    </div>
  );
};

export default PrimaryEducation; 