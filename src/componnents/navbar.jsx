import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Room', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  // Animation variants
  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white block">
      <nav className="w-full bg-black h-[80px] flex items-center justify-between pt-4 px-12 lg:px-28">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://frontend-mauve-beta-87.vercel.app/demo.png" alt="Demo Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-orange-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Book Now Button */}
        <button className="hidden lg:block px-6 py-2 border border-white text-white hover:bg-orange-600 hover:border-0 transition-colors">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden fixed inset-x-0 top-[80px] bg-black/95 py-4 z-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <motion.div className="flex flex-col items-center gap-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-white hover:text-orange-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    variants={itemVariants}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button 
                  className="px-6 py-2 border border-white text-white hover:bg-orange-600 hover:border-0 transition-colors"
                  variants={itemVariants}
                >
                  Book Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navbar;