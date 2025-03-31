import React from 'react';
import { BiDrink } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';
import { GiGreekTemple } from 'react-icons/gi';
import { FaWifi } from 'react-icons/fa6';
import { motion } from 'framer-motion';


const services = [
  { icon: BiDrink, title: 'Welcome\nDrinks' },
  { icon: FaCar, title: 'Car\nRent Service' },
  { icon: GiGreekTemple, title: 'Resort\n& Spa' },
  { icon: FaWifi, title: 'Free\nWiFi Service' },
];
const ServiceCard = ({ icon: Icon, title }) => {
    return (
        
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 p-2">
        <div className="text-orange-500">
          <Icon size={24} />
        </div>
        <div className="text-xs text-gray-600 text-center lg:text-left whitespace-pre-wrap">
          {title}
        </div>
      </div>
    );
  };

const ServicesSection = () => {
  return (
    <motion.div 
              className="flex-1  bg-gray-50 flex items-center py-12 px-12 lg:px-0 w-full"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 2,
            }} >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-4 lg:grid-cols-4 lg:h-[74px] justify-items-center items-center gap-6 p-4 lg:p-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;