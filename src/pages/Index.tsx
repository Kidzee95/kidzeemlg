import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import HomeButton from "../components/HomeButton";
import EnquiryForm from "../components/EnquiryForm";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Navigation />
      <Hero />
      <EnquiryForm />
      <Contact />
      <HomeButton />
    </motion.div>
  );
};

export default Index;