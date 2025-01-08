import { motion } from "framer-motion";

export const FormHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-primary mb-4">
        Student Enquiry
      </h2>
      <p className="text-gray-600">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you shortly.
      </p>
    </motion.div>
  );
};