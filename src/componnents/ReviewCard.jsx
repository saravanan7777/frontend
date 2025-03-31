import { motion } from 'framer-motion';

const ReviewCard = ({ name, rating, image }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg py-2 px-4 shadow-lg flex items-center gap-3 w-fit z-10"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.2,
        type: "spring",
        bounce: 0.3
      }}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="flex items-center">
          <span className="text-gray-600 text-sm">Give Rating</span>
          <span className="ml-2 text-orange-500 font-semibold">{rating}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;