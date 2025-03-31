import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Space as Spa, BedDouble, Wine } from 'lucide-react';

function Review() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center"
      >
        {/* Top section */}
        <div className="w-full  bg-black relative" style={{ height: '591px' }}>
          <div className="h-full">
            <div className="flex flex-col lg:flex-row text-center lg:text-left justify-center items-center  h-full">
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 p-4 lg:p-16 relative  "
              >
                <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6">
                  About Us
                  <div className="h-1 w-[90px] w-[150px] mx-auto lg:ml-0 bg-orange-500 mt-2"></div>
                </h1>
                
                <p className="text-gray-300 mb-8 text-lg">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sit.
                  Velit officia consequatuis enim. Amet minim mollit non deserunt ullamco
                  est sit aliqua dolor do amet sit. Velit officia consequatuis enim.
                </p>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-8 py-3 rounded-sm hover:bg-orange-600 transition-colors"
                >
                  Explore
                </motion.button>
              </motion.div>

              {/* Image Section - Only visible on large screens */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block w-1/2 h-full relative"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
                  }}
                ></div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* White section with cards */}
        <div className="w-full bg-white py-16 lg:h=[549px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Classic Room Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:w-1/2 mb-8 lg:mb-0 lg:flex lg:flex-col gap-5 lg:px-24 justify-center lg:gap-10"
              >
                <div className='flex-col text-center lg:text-left '>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Classic Room and <br/>Interior</h2>
                <div className="flex items-center justify-center lg:justify-start pt-2 lg:pt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  
                </div>
                <p className=" text-gray-600 pt-2 lg:pt-4">Excellent 5000+ reviews</p>
                </div>
                {/* User Reviews */}

                <div className="flex-col pt-8 lg:pt-4 lg:justify-left text-center lg:text-left ">
                  <div className="flex justify-center lg:justify-start ">
                    {[1, 2, 3, 4, 5].map((user) => (
                      <img
                        key={user}
                        className="w-8 h-8 rounded-full border-2 border-white"
                        src={`https://i.pravatar.cc/150?img=${user}`}
                        alt={`User ${user}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm pt-2 lg:pt-4 text-gray-600">People successfully got this dream place</p>
                </div>
              </motion.div>

              {/* Right side - Service Cards Grid */}
              <div className="lg:w-1/2 grid grid-cols-2 gap-4  lg:pr-10">
                {[
                  { title: 'Restaurant Service', icon: Utensils, description: 'Experience fine dining with our world-class chefs' },
                  { title: 'SPA & Wellness', icon: Spa, description: 'Relax and rejuvenate with our premium spa treatments' },
                  { title: 'Luxury Rooms', icon: BedDouble, description: 'Unwind in our meticulously designed rooms' },
                  { title: 'Lounge Bar', icon: Wine, description: 'Enjoy handcrafted cocktails in our sophisticated lounge' }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.2 + index * 0.1
                      }
                    } : {}}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 300
                      }
                    }}
                    className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Review;