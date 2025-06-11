import { FaHome, FaUser, FaCode, FaEnvelope,FaGraduationCap, FaLinkedin} from "react-icons/fa";

const navItems = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  { link: "https://www.linkedin.com/in/ammuleshwari-parne", label: "LinkedIn", icon: <FaLinkedin /> },
 // { link: "https://github.com/Ammuleshwari", label: "GitHub", icon: <FaGithub /> },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 flex gap-6 text-white shadow-lg">
      {navItems.map((item, idx) =>
        item.id ? (
          <div key={idx} className="relative group">
            <button
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#3EFFC0] text-xl transition-all"
            >
              {item.icon}
            </button>
            {/* Tooltip for internal links */}
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-white text-black text-xs px-2 py-1 rounded shadow transition-all duration-200 origin-bottom">
              {item.label}
            </span>
          </div>
        ) : (
          <div key={idx} className="relative group">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3EFFC0] text-xl"
            >
              {item.icon}
            </a>
            {/* Tooltip for external links */}
            {item.label && (
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-white text-black text-xs px-2 py-1 rounded shadow transition-all duration-200 origin-bottom">
                {item.label}
              </span>
            )}
          </div>
        )
      )}
    </div>
  );
}
