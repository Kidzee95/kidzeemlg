import { motion } from "framer-motion";
import { Home, Phone, MessageSquare } from "lucide-react";
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

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: <MessageSquare className="w-4 h-4" />, text: "Message us", href: "https://www.facebook.com/kidzee.miryalaguda/" },
  ];

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
                className="relative bg-primary rounded-full p-4 shadow-lg group transform-gpu perspective-1000"
                style={{
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute -top-24 -left-4 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Mascot variant="pointing" />
                </div>
                
                {/* Contact info popups */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                    >
                      {info.icon}
                      <span className="text-sm text-gray-700">{info.text}</span>
                    </a>
                  ))}
                </div>

                <Home className="w-8 h-8 text-white" />
                
                {/* 3D effect layers */}
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
                <div className="absolute -inset-1 bg-primary/30 rounded-full -z-20 blur-sm" />
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