import React from 'react';
import { MdSchool } from 'react-icons/md';
import { FaUniversity, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-10 bg-black text-white">
      {/* Title */}
      <motion.h2
  className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 
    text-transparent bg-clip-text animate-gradient 
    bg-[length:200%_200%] text-center mb-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Education
  <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-2 rounded-full"></div>
</motion.h2>



      {/* Container */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-stretch">
        {/* DEGREE CARD */}
       <motion.div
  className="w-full lg:w-[38%] bg-[#111111] rounded-xl border border-[#2a2a2a] hover:border-transparent hover:bg-gradient-to-br hover:from-[#3EFFC0] hover:to-[#00f0ff] p-[2px] transition-all duration-500 hover:shadow-[0_0_20px_#3EFFC0]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#111111] p-6 rounded-xl h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-xl text-white text-2xl">
                <MdSchool />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Technology</h3>
                <p className="text-sm text-blue-400">Computer Science</p>
              </div>
            </div>

            {/* University Info */}
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2">
                <FaUniversity className="text-blue-400" />
                Vardhaman College of Engineering
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-400" />
                2022 - 2026
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-400" />
                CGPA: 9.75
              </p>
            </div>

            {/* Courses */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Key Courses</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-blue-800 px-3 py-1 rounded-full text-white">Data Structures</span>
                <span className="bg-purple-800 px-3 py-1 rounded-full text-white">Algorithms</span>
                <span className="bg-green-800 px-3 py-1 rounded-full text-white">Operating Systems</span>
                <span className="bg-pink-800 px-3 py-1 rounded-full text-white">Web Development</span>
                <span className="bg-yellow-700 px-3 py-1 rounded-full text-white">Database Systems</span>
                 <span className="bg-teal-700 px-3 py-1 rounded-full text-white">Computer Networks</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATION CARD */}
       <motion.div
  className="w-full lg:w-[38%] bg-[#111111] rounded-xl border border-[#2a2a2a] hover:border-transparent hover:bg-gradient-to-br hover:from-[#f15bb5] hover:to-[#9b5de5] p-[2px] transition-all duration-500 hover:shadow-[0_0_20px_#c084fc]"

          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#111111] p-6 rounded-xl h-full flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-xl text-white text-2xl">
                <FaCheckCircle />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Certifications</h3>
                <p className="text-sm text-purple-400">Professional Development</p>
              </div>
            </div>

            {/* Certificates */}
            <div className="space-y-4">
              {[
                {
                  title: 'Certified Smart Coder',
                  date: 'Completed Apr 2025',
                },
                {
                  title: 'Frontend Web Developer',
                  date: 'Completed Apr 2025',
                },
                {
                  title: 'AWS Cloud Foundations',
                  date: 'Completed Mar 2025',
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] p-4 rounded-lg hover:scale-[1.02] transition duration-300"
                >
                  <h4 className="font-semibold text-white">{cert.title}</h4>
                  <p className="flex items-center gap-2 text-sm text-purple-300 mt-1">
                    <FaCalendarAlt />
                    {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
