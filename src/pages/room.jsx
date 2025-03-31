import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const rooms = [
  {
    id: 1,
    title: 'Room with View',
    guests: 3,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Apartment',
    guests: 5,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Luxury Room',
    guests: 6,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    
  },
  {
    id: 4,
    title: 'Small Room',
    guests: 1,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Medium Room',
    guests: 4,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsAutoplay(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % rooms.length);
      }, 6500);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-10 lg:py-20 px-2 lg:px-4 w-full bg-gray-50"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl text-gray-500 font-bold mb-2">Our Room</h2>
        <h3 className="text-4xl font-bold mb-4">A World Of <span className="text-orange-500">Choice</span></h3>
        <p className="text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
        </p>
      </div>

      {/* Mobile and Tablet Slider */}
      <div className="lg:hidden relative overflow-hidden">
        <div className="relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 80, damping: 45 },
                opacity: { duration: 1 }
              }}
              className="absolute w-full h-full"
            >
              <img
                src={rooms[currentIndex].image}
                alt={rooms[currentIndex].title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 rounded-b-lg">
                <p className="text-white font-semibold">{rooms[currentIndex].guests} GUESTS</p>
                <h3 className="text-white text-xl font-bold">{rooms[currentIndex].title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <FaChevronLeft className="text-gray-800 text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10"
        >
          <FaChevronRight className="text-gray-800 text-xl" />
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="grid gap-6">
          {rooms.slice(0, 2).map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.08 ,transition: { duration: 0.15, ease: "easeOut" }}}
              className="relative overflow-hidden rounded-lg h-[250px]"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                <p className="text-white font-semibold">{room.guests} GUESTS</p>
                <h3 className="text-white text-xl font-bold">{room.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08 ,transition: { duration: 0.15, ease: "easeOut" }}}
          className="relative overflow-hidden rounded-lg h-[520px]"
        >
          <img
            src={rooms[2].image}
            alt={rooms[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
            <p className="text-white font-semibold">{rooms[2].guests} GUESTS</p>
            <h3 className="text-white text-xl font-bold">{rooms[2].title}</h3>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {rooms.slice(3, 5).map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.08 ,transition: { duration: 0.15, ease: "easeOut" }}}
              className="relative overflow-hidden rounded-lg h-[250px]"
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4">
                <p className="text-white font-semibold">{room.guests} GUESTS</p>
                <h3 className="text-white text-xl font-bold">{room.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}