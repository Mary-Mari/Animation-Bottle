import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wineImage from "../assets/bottle.png";

const Bottle = ({ infoRef, blokRef }) => {
  const [scrollY, setScrollY] = useState(0);
  const [rotation, setRotation] = useState(11);
  const [height, setHeight] = useState(800);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    const infoTop =
      infoRef.current.getBoundingClientRect().top + window.scrollY;
    const blokTop =
      blokRef.current.getBoundingClientRect().top + window.scrollY;

    if (currentScrollY < infoTop) {
      setScrollY(currentScrollY * 0.1);
      setRotation(11);
      setHeight(800);
    } else if (currentScrollY >= infoTop && currentScrollY < blokTop) {
      setScrollY(infoTop * 0.1);
      setRotation(0);
      setHeight(600);
    } else {
      setScrollY(blokTop * 0.1);
      setRotation(0);
      setHeight(600);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          position: "relative",
          top: `${scrollY}px`,
          zIndex: 1,
        }}
        animate={{ top: scrollY, rotate: rotation }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.img
          src={wineImage}
          alt="Wine Bottle"
          style={{ height: `${height}px`, display: "block" }}
          initial={{ height: 800 }}
          animate={{ height: height }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Bottle;
