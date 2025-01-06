import { motion } from "framer-motion";
import Mascot from "./Mascot";
import HomeButton from "./HomeButton";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useNavigate } from "react-router-dom";

const programsList = [
  {
    title: "Play Group",
    age: "1.5 - 2.5 years",
    description: "Early development through play-based learning",
    details: "Our Play Group program focuses on sensory development, basic motor skills, and social interaction. Children engage in creative play, music, and movement activities designed to stimulate their natural curiosity and learning abilities.",
    mascotVariant: "pointing" as const,
    path: "/programs/playgroup"
  },
  {
    title: "Nursery",
    age: "2.6 - 3.5 years",
    description: "Foundation building with creative activities",
    details: "The Nursery program introduces structured learning through play, including basic language skills, number concepts, and creative expression. Children develop independence and social skills in a nurturing environment.",
    mascotVariant: "reading" as const,
    path: "/programs/nursery"
  },
  {
    title: "Jr. KG & Sr. KG",
    age: "4 - 6 years",
    description: "Interactive learning and skill development",
    details: "Kindergarten curriculum ensures a smooth transition to formal schooling with age-appropriate activities in language, numeracy, concept, music, and art conducted in a planned manner throughout the program.",
    mascotVariant: "question" as const,
    path: "/programs/kindergarten"
  }
];

const ProgramCard = ({ program }: { program: typeof programsList[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (program.path) {
      navigate(program.path);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
    >
      <div className="h-48 bg-primary/5 relative">
        <Mascot variant={program.mascotVariant} className="p-4" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
        <p className="text-sm text-primary/60 mb-3">Age: {program.age}</p>
        <p className="text-gray-600 mb-4">{program.description}</p>
        
        <div className="space-y-2">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                {isOpen ? "Show Less" : "Quick View"}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <p className="text-gray-600">{program.details}</p>
            </CollapsibleContent>
          </Collapsible>
          
          {program.path && (
            <Button 
              variant="default" 
              size="sm" 
              className="w-full"
              onClick={handleReadMore}
            >
              Read More
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <HomeButton />
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
          {programsList.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
