import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DOT_SIZE = 8;
const RING_SIZE = 38;

const CustomCursor = () => {
  const [isReady, setIsReady] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.4 };
  const ringRawX = useSpring(rawX, springConfig);
  const ringRawY = useSpring(rawY, springConfig);

  const dotX = useTransform(rawX, (v) => v - DOT_SIZE / 2);
  const dotY = useTransform(rawY, (v) => v - DOT_SIZE / 2);
  const ringX = useTransform(ringRawX, (v) => v - RING_SIZE / 2);
  const ringY = useTransform(ringRawY, (v) => v - RING_SIZE / 2);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    // Inject cursor:none globally
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "@media (hover: hover) { *, *::before, *::after { cursor: none !important; } }";
    document.head.appendChild(style);

    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isReady) setIsReady(true);
    };

    const onOver = (e) => {
      const interactive = e.target.closest(
        "a, button, [role='button'], input, textarea, select, label, [tabindex]"
      );
      setIsHovering(!!interactive);
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.getElementById("custom-cursor-style")?.remove();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isReady) return null;

  return (
    <>
      {/* Dot — exact cursor position */}
      <Dot
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 1,
        }}
        transition={{ duration: 0.12 }}
      />

      {/* Ring — lags behind */}
      <Ring
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.6 : 1,
          opacity: isHovering ? 0.9 : 0.5,
          borderColor: isHovering ? "#8800ff" : "#0077ff",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

const Dot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: ${DOT_SIZE}px;
  height: ${DOT_SIZE}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0077ff, #8800ff);
  pointer-events: none;
  z-index: 99999;
`;

const Ring = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: ${RING_SIZE}px;
  height: ${RING_SIZE}px;
  border-radius: 50%;
  border: 1.5px solid #0077ff;
  pointer-events: none;
  z-index: 99998;
`;

export default CustomCursor;
