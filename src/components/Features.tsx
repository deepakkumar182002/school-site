// import React from 'react';
import { BookOpen, Users, Trophy, Palette } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum focused on holistic development"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Faculty",
      description: "Dedicated teachers committed to student success"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Leadership Development",
      description: "Programs that foster leadership skills and confidence"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Expression",
      description: "Rich opportunities in arts, music, and performing arts"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" >
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center" data-aos="zoom-in">
              <div className="text-red-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;