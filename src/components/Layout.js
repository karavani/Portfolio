// src/components/Layout.js
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const Layout = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
