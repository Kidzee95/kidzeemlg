import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import HomeButton from "../components/HomeButton";
import EnquiryForm from "../components/EnquiryForm";
import Programs from "../components/Programs";
import Gallery from "../components/Gallery";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]"
    >
      <Navigation />
      <Hero />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 -mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-2xl shadow-xl">
          <EnquiryForm />
        </div>
      </motion.div>
      <Programs />
      <Gallery />
      <Contact />
      <HomeButton />
    </motion.div>
  );
};

export default Index;