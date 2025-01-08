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
          {[
            { icon: <Phone className="w-8 h-8 text-primary" />, text: "Call Us", href: "tel:+917989043138" },
            { icon: <Facebook className="w-8 h-8 text-primary" />, text: "Facebook", href: "https://www.facebook.com/share/14puJkLBFer/" },
            { icon: <Instagram className="w-8 h-8 text-primary" />, text: "Instagram", href: "https://www.instagram.com/kidzeemiryalaguda?igsh=MWJpNHh5eDB5aThsbQ==" },
            { icon: <MapPin className="w-8 h-8 text-primary" />, text: "Find Us", href: "https://maps.app.goo.gl/ahrLvFuSAQzXfcrm7" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                rotateY: 180,
                transition: { duration: 0.6 }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transform-gpu perspective-1000"
            >
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
              <div
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <div className="bg-secondary/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
              <div className="invisible">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      <HomeButton />
    </div>
  );
};

export default Contact;