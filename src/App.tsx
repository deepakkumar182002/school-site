// import React from 'react';
// import { Menu, X, Phone, Mail, MapPin, ChevronRight, BookOpen, Users, Trophy, Palette } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Academics from "./components/Academics";
import StudentLife from "./components/StudentLife";
import Contact from "./components/Contact";

import PrimaryEducation from './components/academic/PrimaryEducation';
import HighSchool from "./components/academic/HighSchool";
import AcademicExcellence from "./components/AcademicExcellence";
import SportsEducation from "./components/SportsEducation";
import CoCurricular from "./components/CoCurricular";
import Technology from "./components/Technology";
import StudentDevelopment from "./components/StudentDevelopment";
import SafetySecurity from "./components/SafetySecurity";
import CulturalActivities from "./components/CulturalActivities";
import Videogallery from "./components/Videogallery";
// import FeaturesNav from './components/FeaturesNav';

function App() {
  // const navItems = [
  //   { name: "Academic Excellence", path: "/academic" },
  //   { name: "Sports & Physical Education", path: "/sports" },
  //   { name: "Co-Curricular Activities", path: "/cocurricular" },
  //   { name: "Technology & Innovation", path: "/technology" },
  //   { name: "Student Development", path: "/development" },
  //   { name: "Safety & Security", path: "/safety" },
  //   { name: "Cultural Activities", path: "/cultural" },
  // ];
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          {/* <FeaturesNav /> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/academic" element={<AcademicExcellence />} />
              <Route path="/academic/primary" element={<PrimaryEducation />} />
              {/* <Route path="/academic/middle" element={<MiddleSchool />} /> */}
              <Route path="/academic/high" element={<HighSchool />} />
              <Route path="/sports" element={<SportsEducation />} />
              <Route path="/cocurricular" element={<CoCurricular />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/development" element={<StudentDevelopment />} />
              <Route path="/safety" element={<SafetySecurity />} />
              <Route path="/cultural" element={<CulturalActivities />} />
            </Routes>
          </motion.div>

          <Hero />
          <Features />
          <About />
          <Academics />
          <Videogallery />
          <StudentLife />
          <Contact />
        </main>
        <footer className="bg-red-500 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p>© 2025 shodhshala Innotech Pvt Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
