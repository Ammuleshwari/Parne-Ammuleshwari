import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChangingWords = () => {
  const words = ['Full Stack Developer', 'Tech Enthusiast','Problem Solver',];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] font-semibold"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center overflow-hidden"
    >
    
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

   
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi{' '}
        <motion.span
          className="inline-block"
          animate={{
            rotate: [0, 20, -10, 20, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          👋
        </motion.span>{' '}
        I'm{' '}
        <span className="bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] bg-clip-text text-transparent">
          Ammuleshwari
        </span>
      </motion.h1>

     
      <motion.p
        className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        I’m a <ChangingWords /> passionate about building sleek, scalable, and high-performing web applications with intuitive user experiences.
      </motion.p>

     
      <motion.div
        className="mt-6 sm:mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
      
       <motion.div
  whileHover={{ scale: 1.05 }}
  className="rounded-full p-[2px] bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] shadow-[0_0_12px_#00f0ff]"
>
  <a
    href="#contact"
    className="bg-black rounded-full px-2 py-3 text-white flex items-center gap-2 transition duration-300 group"
  >
   
    <motion.span
      className="inline-block"
      whileHover={{ rotate: [0, 20, -10, 20, -5, 0] }}
      transition={{ duration: 0.8 }}
    >
      👋
    </motion.span>
    Let’s Connect
  </a>
</motion.div>


       
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-full p-[2px] bg-gradient-to-r from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] shadow-[0_0_12px_#00f0ff]"
        >
          <a
           // href="/resume.pdf"
            href="https://vardhamancoe-my.sharepoint.com/:b:/g/personal/parneammuleshwari22cs_student_vardhaman_org/EYsVp4ezbI9JjIa_Ki4jZvUBzb0UavPkun2YHB4HtwpRZA?email=parneammuleshwari22cs%40student.vardhaman.org&e=NXEtgp"
            target="_blank"
            className="bg-black rounded-full px-6 py-3 text-white flex items-center gap-2 transition duration-300"
          >
            My Resume <span className="animate-bounce">⬇</span>
          </a>
        </motion.div>
      </motion.div>

      
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
