import { motion } from "framer-motion";
import HomeButton from "./HomeButton";
import Mascot from "./Mascot";

const KindergartenDetails = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#AC99D0" }}>
      <div className="fixed top-4 left-4 z-50">
        <img 
          src="/lovable-uploads/1432ee48-d9cb-4571-94ca-87f65eb91f70.png" 
          alt="Kidzee Logo" 
          className="w-32 md:w-40"
        />
      </div>
      
      <HomeButton />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="absolute -left-4 top-20 opacity-20 scale-75">
          <Mascot variant="standing" />
        </div>
        <div className="absolute -right-4 top-40 opacity-20 scale-75">
          <Mascot variant="reading" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Kindergarten Program (Jr. KG & Sr. KG)</h1>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Age Group</h2>
                <p className="text-lg text-gray-700">Jr. KG: 4 - 5 Years</p>
                <p className="text-lg text-gray-700">Sr. KG: 5 - 6 Years</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-2">Duration</h2>
                <p className="text-lg text-gray-700">4 Hours per Day</p>
              </div>
            </div>

            <p className="text-gray-600 italic">
              *As per RTE- Right to Education and NEP- National Education Policy from state to state.
            </p>

            <section className="space-y-4">
              <p className="text-gray-700">
                This is in progression to the Kidzee Nursery Curriculum. At Kidzee, the Kindergarten (KG) curriculum ensures a smooth transition to formal schooling.
              </p>
              <p className="text-gray-700">
                Age-appropriate activities in various areas like language, numeracy, concept, music, and art are conducted in a planned manner throughout the program.
              </p>
              <p className="text-gray-700">
                Proprietary programs for Phonics and English Readiness makes us one of the best preschools in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">Key Areas in Kindergarten Curriculum</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Developing oral and written communication skills</li>
                <li>English Readiness Programme</li>
                <li>Math Operations</li>
                <li>Personal, Social, and Emotional Growth</li>
                <li>Promoting cognitive development (Sorts using multiple attributes)</li>
                <li>Visual & Performance Art</li>
                <li>'Panchkosha' integrated</li>
              </ul>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-primary/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Kidzee Sessions</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Circle Time</li>
                  <li>Free Play</li>
                  <li>Knowledge Time</li>
                  <li>Language Time</li>
                  <li>Numeracy Time</li>
                  <li>Talk Time</li>
                  <li>Outdoor</li>
                  <li>Indoor</li>
                  <li>Celebration of festivals and special days</li>
                  <li>Field Trips</li>
                  <li>Puppet shows and skits</li>
                  <li>Phonics</li>
                  <li>Hindi*</li>
                </ul>
              </section>

              <section className="bg-primary/5 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Kidzee Special</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>English Readiness Programme</li>
                  <li>Artsy</li>
                  <li>Personality Development</li>
                  <li>Showstopper</li>
                  <li>Mental Might</li>
                  <li>Eco-conscious</li>
                  <li>Tell-a-Tale</li>
                  <li>Library</li>
                  <li>Sciencify</li>
                  <li>Whirl & Twirl</li>
                  <li>Sensorium</li>
                  <li>Critical Thinking - Problem solving</li>
                  <li>Integrated Sanskar</li>
                  <li>Augmented Reality - Fantasy Box</li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KindergartenDetails;