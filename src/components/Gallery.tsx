import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import HomeButton from "./HomeButton";

const Gallery = () => {
  const featuredImages = [
    "/lovable-uploads/8ff7c785-324d-44f8-a7a8-3bb7051e29a6.png",
    "/lovable-uploads/1ba15ac2-0e6b-4240-b5d2-e9569395888b.png",
    "/lovable-uploads/0b3449ff-f174-4034-8417-2e871f928a6b.png",
    "/lovable-uploads/825a440e-251e-4221-94a5-274c2bf083bd.png",
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

  const handleMorePhotosClick = () => {
    window.open("https://www.google.com/maps/contrib/103138633215258943068/photos/@16.8633642,79.5730289,3a,75y,90t/data=!3m7!1e2!3m5!1sAF1QipMEEJaXZ1-tz49bWOgwUKadT_Vi5w7B-zv0cvjn!2e10!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMEEJaXZ1-tz49bWOgwUKadT_Vi5w7B-zv0cvjn%3Dw462-h260-k-no!7i5456!8i3064!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <div id="gallery-section" className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20 overflow-hidden">
      <HomeButton />
      <div className="container mx-auto px-6 relative">
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-primary">Our Gallery</h1>
            <Button 
              onClick={handleMorePhotosClick}
              variant="outline"
              className="hover:bg-primary hover:text-white transition-colors"
            >
              More Photos
            </Button>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredImages.map((image, index) => (
              <div
                key={index}
                className="transform-gpu"
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
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