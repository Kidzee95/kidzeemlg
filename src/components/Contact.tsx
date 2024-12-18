import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import HomeButton from "./HomeButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.a
            href="tel:+919876543210"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <span className="text-lg font-medium">Call Us</span>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/kidzee.miryalaguda/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Facebook className="w-8 h-8 text-primary" />
            </div>
            <span className="text-lg font-medium">Facebook</span>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/kidzee.miryalaguda/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <Instagram className="w-8 h-8 text-primary" />
            </div>
            <span className="text-lg font-medium">Instagram</span>
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/ahrLvFuSAQzXfcrm7"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 180,
              transition: { duration: 0.6 }
            }}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transform-gpu perspective-1000"
          >
            <div className="bg-primary/10 p-4 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <span className="text-lg font-medium">Find Us</span>
          </motion.a>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;