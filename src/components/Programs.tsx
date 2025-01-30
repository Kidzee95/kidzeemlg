import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "Playgroup",
      icon: "standing" as const,
      description: "For ages 1.8 - 2.5 years",
      link: "/programs/playgroup",
      details: "Our playgroup program focuses on early socialization, sensory play, and basic motor skills development in a nurturing environment."
    },
    {
      title: "Nursery",
      icon: "book" as const,
      description: "For ages 2.5 - 3.5 years",
      link: "/programs/nursery",
      details: "The nursery program introduces structured learning through play, focusing on language development and creative expression."
    },
    {
      title: "Kindergarten",
      icon: "star" as const,
      description: "For ages 3.5 - 5 years",
      link: "/programs/kindergarten",
      details: "Our kindergarten program prepares children for formal schooling with a balanced approach to academic and social development."
    },
    {
      title: "Primary",
      icon: "home" as const,
      description: "For ages 5 - 12 years",
      link: "/programs/primary",
      details: "A supportive environment for school-age children featuring comprehensive education with focus on holistic development."
    },
  ];

  return (
    <section 
      id="programs-section"
      className="py-16 min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/6d518086-c3b3-4dd8-9541-218c2265fb6d.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden"
            >
              <Collapsible>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className={`icon-${program.icon} w-8 h-8 text-primary`} />
                    <h3 className="text-xl font-semibold ml-4">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-center gap-2 hover:bg-accent/50"
                    >
                      Learn More
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="px-6 pb-6 animate-accordion-down">
                  <div className="pt-4 border-t">
                    <p className="text-gray-700">{program.details}</p>
                    <Link
                      to={program.link}
                      className="text-primary hover:underline mt-4 inline-block"
                    >
                      View Full Program Details →
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;