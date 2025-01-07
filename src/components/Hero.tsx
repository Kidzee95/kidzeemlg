import { motion, useScroll, useTransform } from "framer-motion";
import Mascot from "./Mascot";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-50">
        <div className="absolute top-20 left-10 w-16 h-16 text-yellow-400 opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L14.39 8.25L20 9.27L16 13.14L16.94 18.73L12 16.09L7.06 18.73L8 13.14L4 9.27L9.61 8.25L12 3Z" />
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 text-red-300 opacity-20">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
          </svg>
        </div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "url('/lovable-uploads/67345861-cfc2-4416-9612-f25af70782da.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-white/80 text-primary text-sm font-medium mb-6 shadow-sm"
            >
              Welcome to Kidzee Miryalaguda
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Nurturing Young Minds for a{" "}
              <motion.span
                style={{ scale }}
                className="text-primary inline-block origin-left"
              >
                Brighter Future
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 text-lg mb-8 max-w-xl"
            >
              Experience excellence in early childhood education with our
              comprehensive programs designed to inspire creativity and foster
              growth.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/programs")}
              className="bg-primary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Explore Programs
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 to-yellow-200/50 rounded-3xl transform rotate-6"></div>
              <div className="relative rounded-3xl shadow-xl overflow-hidden w-full h-full bg-white/90 backdrop-blur-sm">
                <Mascot variant="namaste" className="p-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rainbow decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20">
        <img 
          src="/lovable-uploads/349d9471-c932-4162-af6f-23242311d960.png" 
          alt="Rainbow decoration" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;