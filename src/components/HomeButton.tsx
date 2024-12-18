import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => navigate("/")}
                className="relative bg-[#9b87f5] rounded-full p-3 shadow-lg group transform-gpu perspective-1000"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute -top-20 -left-4 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Mascot variant="pointing" />
                </div>

                <Home className="w-6 h-6 text-white" />
                
                {/* 3D effect layers */}
                <motion.div
                  className="absolute -inset-2 bg-[#E5DEFF] rounded-full -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute -inset-1 bg-[#7E69AB]/30 rounded-full -z-20 blur-sm" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Return Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </motion.div>
    </motion.div>
  );
};

export default HomeButton;