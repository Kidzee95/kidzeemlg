import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.querySelector("#gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img 
              src="/lovable-uploads/b9e8e32e-d85b-4c4b-a609-3c1620e94542.png" 
              alt="Kidzee Pre-school" 
              className="h-12 md:h-16 w-auto"
            />
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Programs", path: "/programs" },
              { name: "Gallery", action: scrollToGallery },
            ].map((item) => (
              <motion.a
                key={item.name}
                onClick={item.action || (() => navigate(item.path))}
                whileHover={{ scale: 1.05 }}
                className="text-gray-800 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;