import { motion } from 'framer-motion';

const StudentDevelopment = () => {
  const programs = [
    {
      title: 'Leadership Training',
      description: 'Develop essential leadership skills through workshops and practical experiences.',
      icon: '👥',
    },
    {
      title: 'Personal Growth',
      description: 'Focus on self-awareness, emotional intelligence, and personal development.',
      icon: '🌱',
    },
    {
      title: 'Career Guidance',
      description: 'Receive expert guidance for career planning and professional development.',
      icon: '🎯',
    },
  ];

  const initiatives = [
    {
      name: 'Student Council',
      description: 'Opportunity to participate in school governance and decision-making',
    },
    {
      name: 'Mentorship Program',
      description: 'Connect with experienced mentors for guidance and support',
    },
    {
      name: 'Leadership Workshops',
      description: 'Regular workshops on communication, decision-making, and team management',
    },
    {
      name: 'Community Projects',
      description: 'Lead and participate in community service initiatives',
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Development & Leadership</h1>
        <p className="text-xl text-gray-600">
          Empowering future leaders
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to nurturing the next generation of leaders by providing
            comprehensive development programs that focus on personal growth, leadership
            skills, and professional readiness.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Holistic development approach
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Experienced mentors and coaches
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              Real-world leadership opportunities
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Initiatives</h2>
          <div className="grid grid-cols-1 gap-4">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">{initiative.name}</h3>
                <p className="text-gray-600">{initiative.description}</p>
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
          Join Leadership Program
        </button>
      </motion.div>
    </div>
  );
};

export default StudentDevelopment; 