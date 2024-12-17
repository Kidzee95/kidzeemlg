import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import HomeButton from "./HomeButton";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import { useToast } from "./ui/use-toast";

const Gallery = () => {
  const { toast } = useToast();

  const images = [
    "/lovable-uploads/8ff7c785-324d-44f8-a7a8-3bb7051e29a6.png",
    "/lovable-uploads/1ba15ac2-0e6b-4240-b5d2-e9569395888b.png",
    "/lovable-uploads/0b3449ff-f174-4034-8417-2e871f928a6b.png",
    "/lovable-uploads/290f85e1-9d23-446d-a0f2-0950e14eda93.png",
    "/lovable-uploads/bddb810b-0697-43eb-afd3-a52a373b6542.png",
  ];

  const handleUpload = () => {
    toast({
      title: "Coming Soon",
      description: "Image upload feature will be available soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <HomeButton />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-primary">Our Gallery</h1>
            <Button onClick={handleUpload} className="gap-2">
              <Upload className="w-4 h-4" />
              Upload Image
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
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