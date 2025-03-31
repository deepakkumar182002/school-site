import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import homeimg1 from "../img/Home img1.jpeg";
import homeimg2 from "../img/home img2.jpg";
import homeimg3 from "../img/home img3.jpg";
import homeimg4 from "../img/home img4.jpg";
import homeimg5 from "../img/home img5.jpg";
import FeaturesNav from "./FeaturesNav";

const images = [homeimg1, homeimg2, homeimg3, homeimg4, homeimg5];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current!, {
      strings: [
        "Where we nurture minds, build character, and inspire excellence.",
        "Join us in creating a brighter future for your child.",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="pt-20">
      <div className="relative h-[600px]">
        <FeaturesNav />
        <div id="carousel" className="absolute inset-0 overflow-hidden">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full">
          <div className="flex items-center h-full">
            <div className="relative max-w-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Welcome to Sunrise Convent School
              </h1>
              <p className="text-xl mb-8 text-white">
                <span ref={typedRef}></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;