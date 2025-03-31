import React from "react";

const features = [
  "Academic Excellence",
  "Sports & Physical Education",
  "Co-Curricular & Extracurricular Activities",
  "Technology & Innovation",
  "Student Development & Leadership",
  "Safety & Security",
  "Cultural & Social Activities",
];

const FeaturesNav: React.FC = () => {
  return (
    <nav className="w-full relative backdrop-blur-md bg-blue-900/30 py-4 z-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full overflow-hidden">
        <a href="#student-life">
          <ul className="flex w-full justify-between animate-slide text-white text-lg font-semibold">
           
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex-1 cursor-pointer text-nowrap gap-8 mx-8 text-center hover:text-blue-300 transition-colors duration-300"
              >
                {feature}
              </li>
            ))}
          </ul>
            </a>
        </div>
      </div>
    </nav>
  );
};

export default FeaturesNav;


