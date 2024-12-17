import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <Hero />
    </motion.div>
  );
};

export default Index;