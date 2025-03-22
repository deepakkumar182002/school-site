// import React from 'react';
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-500 text-center mb-12">
          Contact Us
        </h2>

        <div className="flex justify-center m-4">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl text-center font-semibold text-red-500 mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4 flex flex-col md:flex-row gap-12">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 63977 65965</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">sangeeta.sharma65965@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                  Sunrise convent School near murliwala kuwa Shamshabad Agra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
