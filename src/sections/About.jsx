import React, { useEffect, useRef, useState } from 'react';
import techs from '../data/technologies';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import flower from '../assets/flower.png';

const About = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ rotate: 360 });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <section id="about" className="relative bg-black text-white py-24 overflow-hidden">
      <motion.img
        src={flower}
        alt="Rotating Flower"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        className="absolute top-90% left-1/2 -translate-x-1/2 -translate-y-1/2  w-[250px] md:w-[300px] opacity-70 z-0 pointer-events-none"
      />

      <div ref={ref} className="relative z-10 text-center mb-16 px-4">
        <p className="text-lg text-gray-400">I CONSTANTLY TRY TO IMPROVE</p>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 inline-block text-transparent bg-clip-text">
          My Tech Stack
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-center gap-4 px-4">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredTech(tech.name)}
            onHoverEnd={() => setHoveredTech(null)}
            whileHover={{
              scale: 1.05,
              rotateZ: -15,
              transition: { type: 'spring', stiffness: 300, damping: 10 },
            }}
            className={`relative group cursor-pointer rounded-full px-5 py-2 flex items-center gap-2 bg-[#111] border border-gray-700 transition-all duration-300 
              ${hoveredTech === tech.name ? 'shadow-[0_0_20px_#a1a1aa]' : ''}
            `}
          >
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span
              className={`text-sm font-semibold ${
                hoveredTech === tech.name
                  ? 'bg-gradient-to-r from-[#3EFFC0] to-[#00f0ff] bg-clip-text text-transparent'
                  : 'text-white'
              }`}
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
