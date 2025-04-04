// import React from 'react';

const Academics = () => {
  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">Academic Programs</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Primary Education</h3>
            <p className="text-gray-700 mb-4">Grades: Pre-Nursery to 5</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Foundation in literacy and numeracy</li>
              <li>• Creative expression and discovery</li>
              <li>• Physical education and sports</li>
              <li>• Basic computer skills</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">Middle School</h3>
            <p className="text-gray-700 mb-4">Grades: 6 to 8</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Advanced mathematics and science</li>
              <li>• Literature and language arts</li>
              <li>• Social studies and history</li>
              <li>• Technology integration</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="zoom-in">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">High School</h3>
            <p className="text-gray-700 mb-4">Grades: 9 to 10</p>
            <ul className="space-y-2 text-gray-600">
              <li>• College preparatory curriculum</li>
              <li>• Advanced placement courses</li>
              <li>• Career guidance</li>
              <li>• Leadership development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;