import { motion } from "framer-motion";

interface MascotProps {
  variant: "standing" | "question" | "reading" | "pointing" | "namaste";
  className?: string;
}

const mascotImages = {
  standing: "/lovable-uploads/f1398aef-ef50-46bb-8631-a109eb2829ae.png",
  question: "/lovable-uploads/781f7d2c-04c6-40a2-aab1-74be7ebee86e.png",
  reading: "/lovable-uploads/3273e44d-c936-4671-abbe-ea77f3ddaa4d.png",
  pointing: "/lovable-uploads/8149525c-68fc-4c60-8327-6830c57904a0.png",
  namaste: "/lovable-uploads/7c1ee9b8-94ee-4379-9257-8e4aa67474a7.png",
};

const Mascot = ({ variant, className = "" }: MascotProps) => {
  return (
    <motion.img
      src={mascotImages[variant]}
      alt={`Kidzee mascot ${variant} pose`}
      className={`w-full h-full object-contain ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Mascot;