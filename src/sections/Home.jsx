import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center overflow-hidden"
    >
      {/* Animated name top-left corner */}
      <motion.div
        className="absolute top-4 left-4 z-50 text-2xl sm:text-3xl md:text-4xl font-cursive bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] bg-clip-text text-transparent animate-text"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Ammuleshwari
      </motion.div>

      {/* Animated top badge */}
      <motion.div
        className="mt-20 sm:mt-16 mb-2 sm:mb-4 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative inline-block px-5 py-1 text-white rounded-full text-sm border border-white/30 overflow-hidden shimmer-effect">
          Available for new projects
        </span>
      </motion.div>

      {/* Animated headline */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] bg-clip-text text-transparent animate-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <br /> Impactful Digital Experiences
      </motion.h1>

      {/* Animated paragraph */}
      <motion.p
        className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Hey, I'm Ammuleshwari, a Full Stack Developer passionate about building
        performant, user-friendly, and scalable applications.
      </motion.p>

      {/* Animated buttons */}
      <motion.div
        className="mt-6 sm:mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Let's Connect Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="rounded-full p-[2px] bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] shadow-[0_0_12px_#00f0ff]"
        >
          <a
            href="#contact"
            className="group bg-black rounded-full px-3 py-3 text-white flex items-center gap-2 transition duration-300"
          >
            <motion.span
              className="inline-block"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{ duration: 0.8 }}
            >
              👋
            </motion.span>
            Let’s Connect
          </a>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="rounded-full p-[2px] bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] shadow-[0_0_12px_#00f0ff]"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="group bg-black rounded-full px-6 py-3 text-white flex items-center gap-2 transition duration-300"
          >
            My Resume
            <motion.span
              className="inline-block"
              initial={{ y: 0 }}
              whileHover={{ y: [0, 4, 0, 4, 0] }}
              transition={{ duration: 0.8 }}
            >
              ⬇
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Wave Light Effect at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient id="lightGlow" cx="50%" cy="0%" r="80%">
              <stop offset="0%" stopColor="#a3c9f8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <path
            fill="url(#lightGlow)"
            d="M0,320 Q720,200 1440,320 L1440,320 L0,320 Z"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,320 Q720,200 1440,320 L1440,320 L0,320 Z;
                M0,320 Q720,180 1440,320 L1440,320 L0,320 Z;
                M0,320 Q720,220 1440,320 L1440,320 L0,320 Z;
                M0,320 Q720,200 1440,320 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
