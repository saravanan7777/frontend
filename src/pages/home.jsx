import React from 'react';
import Navbar from '../componnents/navbar';
import { motion } from 'framer-motion';
import ServicesSection from '../componnents/servicecard';

function HeroContent() {
    return (
    <>
      <div className=" min-h-[330px] md:h-[200px] lg:h-[300px] w-full bg-black py-16 lg:p-28">
        <div className="h-full  ">
          <div className="flex flex-col md:flex-row h-full gap-4">
            {/* Left Section */}
            <motion.div 
              className="flex-1 bg-black  flex items-center px-12 lg:px-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="w-full md:max-w-none">
                <h1 className="text-left text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Open The Door For A
                  <br />
                  Spacious <span className="text-orange-500">Living-</span>
                </h1>
                <p className="text-left text-gray-400 text-base lg:text-lg">
                  Amet minim mollit non deserunt ullamco est sit
                  <br />
                  aliqua dolor do amet sint. Velit officia consequat.
                </p>
              </div>
            </motion.div>
  
            {/* Right Section */}
            <motion.div 
              className="flex-1 bg-black  py-10 lg:py-4 flex flex-col items-center lg:justify-center lg:max-w-[400px] w-full lg:w-auto"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between bg-black py-2  w-full max-w-[280px] lg:max-w-[270px]">
                <span className="text-white text-xs">Book A Hotel Service</span>
                <button className="bg-orange-500 w-5 h-5 flex items-center justify-center rounded-lg text-white text-xs">→</button>
              </div>
              <div className="flex items-center justify-between bg-black py-2 w-full  max-w-[280px] lg:max-w-[270px]">
                <span className="text-white text-xs">Book A Car Service</span>
                <button className="bg-orange-500 w-5 h-5 flex items-center justify-center rounded-lg text-white text-xs">→</button>
              </div>
              <div className="flex items-center justify-between bg-black py-2 w-full  max-w-[280px] lg:max-w-[270px]">
                <span className="text-white text-xs">Book Spa Service</span>
                <button className="bg-orange-500 w-5 h-5 flex items-center justify-center rounded-lg text-white text-xs">→</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <img src="https://frontend-mauve-beta-87.vercel.app/hero.png" alt="Description" className="hidden lg:block lg:h-[350px] w-full "/>
     <ServicesSection/>
    </>
    );
  }
function Home() {

  return (
    <div >
    <Navbar />
    <HeroContent/>
    </div>
  );
}

export default Home;