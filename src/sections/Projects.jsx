import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
 
  {
    title: "Price-A-Med(PAM)",
    status: "Completed",
    date: "Jan 2024",
    description: `Price-A-Med (PAM) 💊🔍 is a platform that helps users find and compare medicine prices at nearby pharmacies 🏥.It simplifies access to affordable healthcare by offering local pharmacy options and home delivery services 🚚`,
    techStack: ["React","Vite", "Tailwind CSS", "JavaScript", "Mysql","Spring Boot", "Kafka","Redis","Docker", "Full Stack", "On Render"],
    links: {
      website: "#",
      github: "https://github.com/Ammuleshwari/Price-A-Med-PAM",
    },
  },
  {
    title: "Tunecrate",
    status: "completed",
    date: "Nov 2024",
    description: `Tunecrate is a music streaming platform where users can log in, purchase premium access, and enjoy a curated collection of songs. Admins can manage content by adding new tracks with details like title, artist, and genre via the dashboard.`,
    techStack: ["React", "Vite", "Tailwind", "Mysql","SpringBoot","JWT + Bcrypt","Razorpay Integration","Full stack"],
    links: {
      website: "#",
      github: "https://github.com/Ammuleshwari/TuneCrate",
    },
  },
  
 {
    title: "Restaurant Webpage",
    status: "Completed",
    date: "Jan 2024",
    description: `A restaurant webpage 🍽️🍔 that showcases menus 📋, highlights special dishes 🍝, and allows users to explore the dining experience 🏡 with ease.It offers a smooth and inviting interface for customers to browse, reserve tables 🪑, and enjoy mouth-watering meals. 😋`,
    techStack: ["React.js", "Vite","Tailwind CSS", "JavaScript", "Frontend", "On Render"],
    links: {
      website: "https://ammuleshwari-restaurent-web.netlify.app/",
      github: "https://github.com/Ammuleshwari/Restaurant-web",
    },
  },
  {
    title: "TravelSphere",
    status: "Completed",
    date: "Jun 2024",
    description: `TravelSphere ✈️🌍 is a travel planning platform that helps users discover destinations 🗺️ and organize their journeys with ease.It offers a simple and seamless way to plan memorable trips 🧳✨.`,
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "OpenWeatherMap API", "Frontend"],
    links: {
      website: "#",
      github: "https://github.com/Ammuleshwari/Travelsphere_",
    },
  },
  {
    title: "Note-Making",
    status: "Completed",
    date: "Oct 2023",
    description: `A simple and responsive 📱 note-taking app using HTML, CSS & JavaScript that lets users ➕ create, 💾 save, 🔍 search, 🗑️ delete one, and 🚮 delete all notes with ease.`,
    techStack: ["HTML", "Tailwind CSS", "JavaScript", ],
    links: {
      website: "https://ammuleshwari-note-making-app.netlify.app/",
      github: "https://github.com/Ammuleshwari/Note-Making-App",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white py-20 px-4">
     
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        Let's explore my projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white/5 rounded-xl border border-white/10 overflow-hidden shadow-md hover:shadow-[0_0_20px_#3EFFC0] transition-all duration-300 p-6 flex flex-col justify-between"
          >
          
            <div className="flex items-center gap-2 mb-3">
              {project.status && (
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                  project.status === "Completed" ? "bg-green-600" :
                  project.status === "Maintained" ? "bg-purple-600" :
                  "bg-green-600"
                } text-black`}>
                  {project.status}
                </span>
              )}
              <span className="text-sm text-gray-400">{project.date}</span>
            </div>


            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>

           
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>

          
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 hover:bg-[#3EFFC0]/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

        
            {project.links && (
              <div className="flex gap-4 mt-auto pt-2">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded hover:bg-[#3EFFC0] transition"
                  >
                    <FaExternalLinkAlt /> Website
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded hover:bg-[#3EFFC0] transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
