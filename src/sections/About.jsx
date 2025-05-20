import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import VCELogo from '../assets/vce-logo.png'; // Use your image path
import techs from '../data/technologies';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-4 py-20 text-center flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-5xl font-extrabold text-center mb-12
             text-transparent bg-clip-text 
             animate-gradient bg-gradient-to-r 
             from-pink-500 via-blue-500 to-teal-400 
             bg-[length:300%_300%]"
>
  About Me
</motion.h2>


        {/* Education Section */}
       {/* Education Section */}
{/*<motion.div
  className="mb-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-left text-lg font-semibold mb-3 text-white">My Education</h3>

  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="bg-gradient-to-br from-[#2c0f20] via-[#1a0f1f] to-[#0e0714]
               rounded-3xl p-6 flex justify-between items-center
               shadow-lg backdrop-blur-md
               border-2 border-transparent hover:border-red-500
               hover:animate-pulse transition-all duration-500"
  >
    <div className="flex items-center gap-4">
      <img src={VCELogo} alt="VCE Logo" className="w-14 h-14 rounded-lg" />
      <div>
        <p className="font-semibold text-white text-lg">
          Bachelor of Technology - Computer Science
        </p>
        <p className="text-sm text-gray-300">
          Vardhaman College of Engineering
        </p>
      </div>
    </div>
    <p className="text-white font-medium text-sm sm:text-base">
      2022 Oct – Present
    </p>
  </motion.div>
</motion.div>
*/}

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-left text-lg font-semibold mb-6 text-white">Technologies I Use</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#1b1b2f] to-[#2c2c54] rounded-2xl p-5 flex flex-col items-center justify-center transition transform hover:scale-105 shadow-xl"
                whileHover={{ rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
                <p className="text-sm text-white font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;