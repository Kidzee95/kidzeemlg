import { motion } from "framer-motion";
import { Instagram, Facebook, Phone } from "lucide-react";
import HomeButton from "./HomeButton";

const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-600">Get in touch with us through any of these platforms</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <motion.a
            href="tel:7989043138"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-8 h-8 text-primary mb-4" />
            <p className="text-lg font-medium text-primary">Call Us</p>
            <p className="text-gray-600">+91 7989043138</p>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/kidzeemiryalaguda?igsh=MWJpNHh5eDB5aThsbQ=="
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <Instagram className="w-8 h-8 text-primary mb-4" />
            <p className="text-lg font-medium text-primary">Instagram</p>
            <p className="text-gray-600">Follow Us</p>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/share/14puJkLBFer/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
          >
            <Facebook className="w-8 h-8 text-primary mb-4" />
            <p className="text-lg font-medium text-primary">Facebook</p>
            <p className="text-gray-600">Like Us</p>
          </motion.a>
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;