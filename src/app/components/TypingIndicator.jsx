import React from 'react';
import { motion } from 'framer-motion';

 const TypingIndicator = () => {
  return (
    <div className="flex items-center gap-4">
      <img src="/client.png" loading="lazy" alt="Client" />
      <div className="bg-white shadow-md shadow-[#7b8a9c3a] px-6 py-4 rounded-xl">
        <div className="flex space-x-2">
          <motion.div
            className="w-2 h-2 bg-[#3BAEEB] rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-2 h-2 bg-[#3BAEEB] rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-[#3BAEEB] rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;