import React from 'react';

const StudentLife = () => {
  return (
    <section id="student-life" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Student Life</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Students activities"
              className="rounded-lg shadow-lg mb-8"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Sports"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Arts"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-6">Extracurricular Activities</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Arts & Culture</h4>
                <p className="text-gray-700">Music, dance, drama, and visual arts programs that nurture creativity and self-expression.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Sports & Athletics</h4>
                <p className="text-gray-700">Comprehensive sports program including basketball, soccer, swimming, and track & field.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Clubs & Societies</h4>
                <p className="text-gray-700">Science club, debate society, robotics club, and environmental club for diverse interests.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Leadership Programs</h4>
                <p className="text-gray-700">Student council, community service, and leadership workshops for personal growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;