import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">Sunrise Convent School</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-blue-900 hover:text-blue-700">Home</a>
              <a href="#about" className="text-blue-900 hover:text-blue-700">About</a>
              <a href="#academics" className="text-blue-900 hover:text-blue-700">Academics</a>
              <a href="#student-life" className="text-blue-900 hover:text-blue-700">Student Life</a>
              <a href="#contact" className="text-blue-900 hover:text-blue-700">Contact</a>
              {/* <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Enroll Now
              </button> */}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-900 hover:text-blue-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-blue-900 hover:bg-blue-100 rounded">Home</a>
              <a href="#about" className="block px-3 py-2 text-blue-900 hover:bg-blue-100 rounded">About</a>
              <a href="#academics" className="block px-3 py-2 text-blue-900 hover:bg-blue-100 rounded">Academics</a>
              <a href="#student-life" className="block px-3 py-2 text-blue-900 hover:bg-blue-100 rounded">Student Life</a>
              <a href="#contact" className="block px-3 py-2 text-blue-900 hover:bg-blue-100 rounded">Contact</a>
              {/* <button className="w-full mt-2 bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
                Enroll Now
              </button> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;