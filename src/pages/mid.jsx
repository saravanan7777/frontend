import { motion } from 'framer-motion';
import ReviewCard from '../componnents/ReviewCard';

function Mid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            when: "beforeChildren"
          }
        }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 }
        }
      };
    
  const features = [
    {
      number: "1",
      title: "Provide the best choice of Room",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
    },
    {
      number: "2",
      title: "Low price with Best Quality",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
    },
    {
      number: "3",
      title: "Restaurant Service",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat."
    }
  ];

  const reviews = [
    {
      name: "Albert Flores",
      rating: "4.2",
      image: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Cody Fisher",
      rating: "4.9",
      image: "https://i.pravatar.cc/150?img=4"
    },
    {
      name: "Devon Lane",
      rating: "4.8",
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" id="features-section">
      {/* Header with scroll-triggered animation */}
      <motion.div 
        className="text-center p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-2xl font-bold text-gray-900">
          Why You Should <span className="text-orange-500">Stay Here</span>
        </h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
        </p>
      </motion.div>

      <div className="w-full overflow-x-hidden">
        <div className="flex flex-col lg:flex-row pt-4 lg:pt-10">
          {/* Left column */}
          <motion.div 
            className="lg:w-[45%] lg:px-28 p-8 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 2,
            }}
          >
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4 md:justify-center lg:block lg:py-2"
                  variants={itemVariants}
                >
                  <div className="">
                    <span className="w-8 block h-8 bg-orange-500 text-white rounded-full flex items-center justify-center">
                      {feature.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold lg:py-2 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div 
            className="lg:w-[55%] lg:pr-0"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 3,
              type: "spring",
              bounce: 0.2
            }}
          >
            {/* Mobile view */}
            <div className="block lg:hidden">
              <div className="relative p-4">
                <motion.div 
                  className="relative w-full h-[500px] rounded-lg overflow-hidden"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 3, type: "spring", bounce: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Hotel bedroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                  
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 3, type: "spring", bounce: 0.2 }}
                    >
                      <ReviewCard {...reviews[0]} />
                    </motion.div>
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 3, type: "spring", bounce: 0.2}}
                      className="self-end"
                    >
                      <ReviewCard {...reviews[1]} />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7, duration: 2.6, type: "spring", bounce: 0.2 }}
                    >
                      <ReviewCard {...reviews[2]} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Desktop view */}
            <div className="hidden lg:block relative h-[500px]">
              <motion.div 
                className="absolute right-0 top-0 w-2/3 h-full"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.6, type: "spring", bounce: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Hotel bedroom"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>

              <motion.div 
                className="absolute left-0 top-1/4 w-1/2 h-72"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 2.6, type: "spring", bounce: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Hotel lobby"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </motion.div>

              {/* Review cards */}
              <motion.div 
                className="absolute left-40 top-12"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 2.6, type: "spring", bounce: 0.2 }}
              >
                <ReviewCard {...reviews[0]} />
              </motion.div>
              <motion.div 
                className="absolute left-[55%] -top-8"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 2.6, type: "spring", bounce: 0.2 }}
              >
                <ReviewCard {...reviews[1]} />
              </motion.div>
              <motion.div 
                className="absolute left-[55%] bottom-[-6%]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 2.6, type: "spring", bounce: 0.2 }}
              >
                <ReviewCard {...reviews[2]} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Mid;