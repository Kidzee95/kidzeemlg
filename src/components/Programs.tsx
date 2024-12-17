import { motion } from "framer-motion";
import Mascot from "./Mascot";

const programsList = [
  {
    title: "Play Group",
    age: "1.5 - 2.5 years",
    description: "Early development through play-based learning",
    mascotVariant: "pointing" as const,
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 years",
    description: "Foundation building with creative activities",
    mascotVariant: "reading" as const,
  },
  {
    title: "Jr. KG",
    age: "3.5 - 4.5 years",
    description: "Interactive learning and skill development",
    mascotVariant: "question" as const,
  },
  {
    title: "Sr. KG",
    age: "4.5 - 5.5 years",
    description: "Comprehensive pre-primary education",
    mascotVariant: "standing" as const,
  },
  {
    title: "Grade 1",
    age: "5.5 - 6.5 years",
    description: "Structured academic learning begins",
    mascotVariant: "namaste" as const,
  },
  {
    title: "Grade 2",
    age: "6.5 - 7.5 years",
    description: "Advanced primary education",
    mascotVariant: "pointing" as const,
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of educational programs designed to
            nurture young minds at every stage of their early development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsList.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-primary/5 relative">
                <Mascot variant={program.mascotVariant} className="p-4" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-primary/60 mb-3">Age: {program.age}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;