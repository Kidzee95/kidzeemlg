import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import HomeButton from "./HomeButton";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const Gallery = () => {
  const images = [
    "/lovable-uploads/8ff7c785-324d-44f8-a7a8-3bb7051e29a6.png",
    "/lovable-uploads/1ba15ac2-0e6b-4240-b5d2-e9569395888b.png",
    "/lovable-uploads/0b3449ff-f174-4034-8417-2e871f928a6b.png",
    "/lovable-uploads/290f85e1-9d23-446d-a0f2-0950e14eda93.png",
    "/lovable-uploads/bddb810b-0697-43eb-afd3-a52a373b6542.png",
    "/lovable-uploads/ceafc259-9108-4f5a-a7c4-fe414b9848d8.png",
    "/lovable-uploads/dda4c0e9-3d41-4133-9765-43a419c775d1.png",
    "/lovable-uploads/2d4609b3-9be6-41c9-9316-8f5f2a2e0a53.png",
    "/lovable-uploads/9b0d11bb-2a3b-4665-9377-d0b7e80729e0.png",
    "/lovable-uploads/02f0fda6-76b2-4c50-809b-8e76a6434401.png",
    "/lovable-uploads/d56ce682-f47c-496d-892a-87927f771f82.png",
    "/lovable-uploads/44646cc4-a00d-4c86-aec0-2401567c4621.png",
    "/lovable-uploads/add1c693-59ae-43ac-aa36-cdce0be0303f.png"
  ];

  return (
    <div id="gallery-section" className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <HomeButton />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-primary">Our Gallery</h1>
            <Button 
              style={{ backgroundColor: "#9b87f5" }}
              className="gap-2 text-white hover:bg-opacity-90"
              onClick={() => window.open("https://www.google.com/maps/uv?pb=!1s0x3a35250077828ec9%3A0x8f9a17a74ccae791!3m1!7e115!4s%2Fmaps%2Fplace%2Fkidzee%2Bmiryalaguda%2F%4016.8633039%2C79.5729762%2C3a%2C75y%2C39.92h%2C90t%2Fdata%3D*213m4*211e1*213m2*211sxkXu3fGsj1q-MR6i5zHBGQ*212e0*214m2*213m1*211s0x3a35250077828ec9%3A0x8f9a17a74ccae791%3Fsa%3DX%26ved%3D2ahUKEwjwqqeP1bCKAxUw4jgGHVleLh8Qpx96BAgvEAA!5skidzee%20miryalaguda%20-%20Google%20Search!15sCgIgARICGAI&imagekey=!1e10!2sAF1QipMpmoR6zRmpAYwQk9DaNyJ_zAHcH9dsNJapH08f&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111", "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              More Photos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;