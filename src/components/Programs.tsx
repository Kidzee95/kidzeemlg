import React from "react";

const Programs = () => {
  const programs = [
    {
      title: "Playgroup",
      icon: "standing" as const, // Fix TypeScript error by explicitly typing as const
      description: "For ages 1.8 - 2.5 years",
      link: "/playgroup"
    },
    {
      title: "Nursery",
      icon: "book" as const,
      description: "For ages 2.5 - 3.5 years",
      link: "/nursery"
    },
    {
      title: "Kindergarten",
      icon: "star" as const,
      description: "For ages 3.5 - 5 years",
      link: "/kindergarten"
    },
    {
      title: "After School Care",
      icon: "home" as const,
      description: "For ages 5 - 12 years",
      link: "/after-school-care"
    },
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div key={program.title} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <span className={`icon-${program.icon} w-8 h-8 text-primary`} />
                <h3 className="text-xl font-semibold ml-4">{program.title}</h3>
              </div>
              <p className="text-gray-600">{program.description}</p>
              <a href={program.link} className="text-primary mt-4 inline-block">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
