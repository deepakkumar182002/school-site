// import React from 'react';
import image from "../img/Principal.jpeg"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Mission & Vision</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to empower students with knowledge, skills, and values to become
              responsible global citizens. We strive to foster creativity, innovation, and
              leadership in a safe and inclusive environment.
            </p>
            <div className="bg-blue-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Principal's Message</h3>
              <p className="italic">
                "Education is not just about acquiring knowledge; it is about developing the
                ability to think critically, communicate effectively, and act ethically. At
                Sunrise Convent School, we encourage students to dream big and work hard to achieve
                their goals."
              </p>
            </div>
          </div>
          <div >
            <img
            
              src={image}
              width={700}
              height={700}
              alt="Students in classroom"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;