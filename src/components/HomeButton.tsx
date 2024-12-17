import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Mascot from "./Mascot";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="relative bg-primary rounded-full p-4 shadow-lg group"
        >
          <div className="absolute -top-24 -left-4 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity">
            <Mascot variant="pointing" />
          </div>
          <Home className="w-8 h-8 text-white" />
          <motion.div
            className="absolute -inset-2 bg-secondary rounded-full -z-10"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HomeButton;