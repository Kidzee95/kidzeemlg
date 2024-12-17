import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <Hero />
      <Contact />
    </motion.div>
  );
};

export default Index;