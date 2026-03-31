import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return <Bar style={{ scaleX }} />;
};

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0077ff, #8800ff, #0077ff);
  background-size: 200%;
  transform-origin: 0%;
  z-index: 9999;
`;

export default ScrollProgress;
