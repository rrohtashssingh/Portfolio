import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            I'm Rohtash Singh, a passionate MERN stack developer with two years of experience. Specializing in Next.js, React.js, Node.js, and TypeScript, I design and build creative and responsive web applications. Check out my portfolio to explore some of my recent projects. Currently, I'm working on an exciting new project called "Rapido." Let's connect for discussions on web development or potential collaborations!


          </p>
          <p className="about-grid-info-text">
            Keen on continuous learning, I strive to stay updated with the latest technologies in the ever-evolving web development landscape. My goal is to blend innovation with functionality in every project, ensuring a seamless user experience.
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my YouTube channel, where I demonstrate how to build
            full-stack applications.
          </p>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/rohtash.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
