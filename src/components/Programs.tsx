import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Mascot from "./Mascot";

const programs = [
  {
    title: "Preschool",
    age: "3 - 5 Years",
    description: "A nurturing environment for early learners to explore and grow.",
    details: "Focus on social skills, basic literacy, and creativity.",
    path: "/programs/preschool",
    mascotVariant: "playing",
  },
  {
    title: "Kindergarten",
    age: "5 - 6 Years",
    description: "Building a strong foundation for lifelong learning.",
    details: "Emphasis on literacy, numeracy, and emotional development.",
    path: "/programs/kindergarten",
    mascotVariant: "reading",
  },
  {
    title: "Grade 1 & 2",
    age: "6 - 8 Years",
    description: "Comprehensive educational experience that builds on early years.",
    details: "Core subjects, language development, and creative arts.",
    path: "/programs/grade1-2",
    mascotVariant: "namaste",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of educational programs designed to nurture young minds and foster holistic development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onClick={() => navigate(program.path)}
            >
              <div className="absolute inset-0 bg-white rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
                <div className="h-48 mb-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                  <Mascot variant={program.mascotVariant} className="w-32 h-32" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{program.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{program.age}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm text-gray-500">{program.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
