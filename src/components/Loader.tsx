import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 24.300781 25.355469 L 19.851562 16.890625 C 22.324219 15.730469 23.835938 13.28125 23.835938 10.359375 C 23.835938 5.832031 20.496094 2.902344 15.324219 2.902344 L 6.019531 2.902344 C 5.730469 2.902344 5.492188 3.140625 5.492188 3.429688 L 5.492188 25.601562 C 5.492188 25.890625 5.730469 26.128906 6.019531 26.128906 L 9.6875 26.128906 C 9.976562 26.128906 10.210938 25.890625 10.210938 25.601562 L 10.210938 17.683594 L 14.929688 17.683594 L 19.222656 25.847656 C 19.3125 26.019531 19.492188 26.128906 19.683594 26.128906 L 23.835938 26.128906 C 24.019531 26.128906 24.191406 26.03125 24.285156 25.875 C 24.378906 25.714844 24.386719 25.519531 24.300781 25.355469 Z M 14.941406 13.988281 L 10.210938 13.988281 L 10.210938 6.597656 L 14.84375 6.597656 C 17.5 6.597656 19.121094 8.007812 19.121094 10.300781 C 19.121094 12.640625 17.597656 13.988281 14.941406 13.988281 Z M 14.941406 13.988281 "
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
