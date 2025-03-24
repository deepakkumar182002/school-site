// import React from 'react';
import homeimg from "../img/Home img.jpeg";
const Hero = () => {
  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src={homeimg}
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            {/* <div className="relative max-w-2xl p-8 bg-blue-600/20 backdrop-blur-md rounded-lg"> */}
            <div className="relative max-w-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold  mb-6 text-white">
                Welcome to Sunrise Convent School
              </h1>
              <p className="text-xl mb-8 text-white">
                Where we nurture minds, build character, and inspire excellence.
                Join us in creating a brighter future for your child.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
