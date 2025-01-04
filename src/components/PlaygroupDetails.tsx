import { motion } from "framer-motion";
import HomeButton from "./HomeButton";
import Mascot from "./Mascot";

const PlaygroupDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] to-[#D3E4FD] py-20">
      <HomeButton />
      <div className="container mx-auto px-6 relative">
        {/* Decorative Mascots */}
        <div className="absolute -left-4 top-20 opacity-20 scale-75">
          <Mascot variant="standing" />
        </div>
        <div className="absolute -right-4 top-40 opacity-20 scale-75">
          <Mascot variant="reading" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-primary mb-6 text-center">Playgroup Program</h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-6">
            <p className="text-gray-600 italic">
              *As per RTE- Right to Education and NEP- National Education Policy from state to state.
            </p>

            <section className="space-y-4">
              <p className="text-gray-700">
                Children in this age group are identified as Toddlers. Kidzee's playgroup age appropriate curriculum plays an important role in helping children continue their exploration.
              </p>
              <p className="text-gray-700">
                At Kidzee, the Playgroup programme prepares a child for developmental and academic progress.
              </p>
              <p className="text-gray-700">
                Playgroup curriculum provides a safe and stimulating environment for child to learn and improve in all developmental domains.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Key Areas in Playgroup Curriculum</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promoting positive peer social interaction</li>
                <li>Opportunities for basic motor development</li>
                <li>Exploration based learning</li>
                <li>Math Readiness (Number Recognition)</li>
                <li>Language Readiness (Letter Recognition)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Kidzee Sessions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Circle Time</li>
                  <li>Free Play</li>
                  <li>Knowledge Time</li>
                  <li>Language Time</li>
                  <li>Numeracy Time</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Talk Time</li>
                  <li>Outdoor</li>
                  <li>Indoor</li>
                  <li>Celebration of festivals and special days</li>
                  <li>Field Trips</li>
                  <li>Puppet shows and skits</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Kidzee Special</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Artsy",
                  "Personality Development",
                  "Showstopper",
                  "Mental Might",
                  "Eco-conscious",
                  "Tell-a-Tale",
                  "Library",
                  "Sciencify",
                  "Whirl & Twirl",
                  "Sensorium",
                  "Critical Thinking - Problem solving",
                  "Intergrated Sanskar",
                  "Augmented Reality - Fantasy Box"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-primary/5 rounded-lg p-4 text-center text-gray-700 hover:bg-primary/10 transition-colors"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlaygroupDetails;