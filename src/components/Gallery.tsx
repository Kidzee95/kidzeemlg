import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import HomeButton from "./HomeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const featuredImages = [
    "/lovable-uploads/8ff7c785-324d-44f8-a7a8-3bb7051e29a6.png",
    "/lovable-uploads/1ba15ac2-0e6b-4240-b5d2-e9569395888b.png",
    "/lovable-uploads/0b3449ff-f174-4034-8417-2e871f928a6b.png",
  ];

  const additionalImages = [
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

  const [emblaRef] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    speed: 10 // Slower transition speed for smoother movement
  }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);

  return (
    <div id="gallery-section" className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
      <HomeButton />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-primary">Our Gallery</h1>
          </div>

          {/* Featured Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={image}
                        alt={`Featured gallery image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Images Carousel */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-primary mb-6">More Photos</h2>
            <div className="overflow-hidden" ref={emblaRef}>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {additionalImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-0">
                            <div className="relative aspect-square">
                              <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;