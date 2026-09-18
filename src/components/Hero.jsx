import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      <motion.div
        className="hero-background-shape shape-one"
        animate={{ y: [0, -15, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-background-shape shape-two"
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Our Journey
          <br />
          <span>& Events</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A glimpse of the moments, ideas, and people that make our community
          stronger.
        </motion.p>

        <motion.button
          className="hero-button"
          onClick={scrollToTimeline}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          Explore Timeline
          <ArrowDown size={18} />
        </motion.button>
      </motion.div>

      <div className="hero-dots" />
    </section>
  );
}