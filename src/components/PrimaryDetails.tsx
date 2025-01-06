import { motion } from "framer-motion";
import HomeButton from "./HomeButton";
import Mascot from "./Mascot";

const PrimaryDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <HomeButton />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-primary">Grade 1 & 2</h1>
              <Mascot variant="reading" className="w-24 h-24" />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">Age Group</h2>
                <p className="text-gray-600">6 - 8 Years</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">Duration</h2>
                <p className="text-gray-600">6 Hours/Day</p>
                <p className="text-sm text-gray-500 mt-1">*As per RTE- Right to Education and NEP- National Education Policy</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">Program Overview</h2>
                <p className="text-gray-600">
                  Our Grade 1 & 2 program provides a comprehensive educational experience that builds on the foundation established in early years. The curriculum is designed to develop academic excellence while nurturing creativity and critical thinking skills.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">Key Focus Areas</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Core Subjects (English, Mathematics, Science)</li>
                  <li>Language Development and Communication</li>
                  <li>Logical Reasoning and Problem Solving</li>
                  <li>Environmental Studies</li>
                  <li>Creative Arts and Expression</li>
                  <li>Physical Education and Sports</li>
                  <li>Digital Literacy</li>
                  <li>Value Education</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-primary mb-2">Special Programs</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Advanced English Language Program</li>
                  <li>STEM Activities</li>
                  <li>Art Integration</li>
                  <li>Sports and Physical Development</li>
                  <li>Life Skills Education</li>
                  <li>Project-Based Learning</li>
                  <li>Cultural Activities</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrimaryDetails;