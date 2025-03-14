import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">Welcome to Excellence Academy</h1>
              <p className="text-xl mb-8">
                Where we nurture minds, build character, and inspire excellence. Join us in creating
                a brighter future for your child.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                  Enroll Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;