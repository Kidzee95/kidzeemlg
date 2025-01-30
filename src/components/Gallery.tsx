import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import HomeButton from "./HomeButton";

const Gallery = () => {
  const featuredImages = [
    "/lovable-uploads/8ff7c785-324d-44f8-a7a8-3bb7051e29a6.png",
    "/lovable-uploads/1ba15ac2-0e6b-4240-b5d2-e9569395888b.png",
    "/lovable-uploads/0b3449ff-f174-4034-8417-2e871f928a6b.png",
  ];

  return (
    <div id="gallery-section" className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20 overflow-hidden">
      <HomeButton />
      <div className="container mx-auto px-6 relative">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-primary">Our Gallery</h1>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <div
                key={index}
                className="transform-gpu"
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <motion.img
                        src={image}
                        alt={`Featured gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;