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
    age: "2.5 - 3.5 years",
    description: "Foundation building with creative activities",
    details: "The Nursery program introduces structured learning through play, including basic language skills, number concepts, and creative expression. Children develop independence and social skills in a nurturing environment.",
    mascotVariant: "reading" as const,
  },
  {
    title: "Jr. KG",
    age: "3.5 - 4.5 years",
    description: "Interactive learning and skill development",
    details: "Junior Kindergarten builds on early literacy and numeracy skills through interactive activities. The program includes phonics, basic writing, counting, and themed projects that encourage critical thinking and creativity.",
    mascotVariant: "question" as const,
  },
  {
    title: "Sr. KG",
    age: "4.5 - 5.5 years",
    description: "Comprehensive pre-primary education",
    details: "Senior Kindergarten prepares children for primary school with advanced literacy and numeracy activities. The program includes reading comprehension, writing practice, mathematical concepts, and science exploration.",
    mascotVariant: "standing" as const,
  },
  {
    title: "Grade 1",
    age: "5.5 - 6.5 years",
    description: "Structured academic learning begins",
    details: "Grade 1 introduces formal academic subjects including Language Arts, Mathematics, Science, and Social Studies. Students develop strong foundational skills through engaging lessons and hands-on activities.",
    mascotVariant: "namaste" as const,
  },
  {
    title: "Grade 2",
    age: "6.5 - 7.5 years",
    description: "Advanced primary education",
    details: "Grade 2 builds on previous learning with more complex academic concepts. Students engage in advanced reading and writing, mathematical operations, scientific investigations, and social studies projects.",
    mascotVariant: "pointing" as const,
  },
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
