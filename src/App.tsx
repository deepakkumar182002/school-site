import React from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Trophy, Palette } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Academics from './components/Academics';
import StudentLife from './components/StudentLife';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Academics />
        <StudentLife />
        <Contact />
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2024 Excellence Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;