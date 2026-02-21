import { useState } from 'react';
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Calendar, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

interface PropertyDetailProps {
  property: Property;
  onNavigate: (page: string) => void;
}

export function PropertyDetail({ property, onNavigate }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock additional images for the gallery
  const images = [
    property.image,
    'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjg5MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MTY1MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjQ4MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1688786219616-598ed96aa19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NjE2NTAzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHBvb2x8ZW58MXx8fHwxNzYxNjg5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              onClick={() => onNavigate('listings')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
          <ImageWithFallback
            src={images[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Image Counter */}
          <motion.div 
            className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {currentImageIndex + 1} / {images.length}
          </motion.div>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-6 gap-2 mt-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`aspect-video rounded-lg overflow-hidden ${
                currentImageIndex === index ? 'ring-4 ring-blue-600' : ''
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              <ImageWithFallback
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-80 transition-opacity"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 mb-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex flex-wrap gap-2 mb-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Badge
                    className={`${
                      property.status === 'For Sale'
                        ? 'bg-blue-600'
                        : property.status === 'For Rent'
                        ? 'bg-green-600'
                        : 'bg-gray-600'
                    }`}
                  >
                    {property.status}
                  </Badge>
                </motion.div>
                {property.featured && (
                  <motion.div whileHover={{ scale: 1.05, rotate: 5 }}>
                    <Badge className="bg-amber-500">Featured</Badge>
                  </motion.div>
                )}
              </div>

              <h1 className="text-4xl mb-2">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>

              <motion.div 
                className="text-3xl text-blue-600 mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {property.price}
              </motion.div>

              <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200 mb-8">
                {[
                  { icon: Bed, value: property.beds, label: 'Bedrooms' },
                  { icon: Bath, value: property.baths, label: 'Bathrooms' },
                  { icon: Maximize, value: property.sqft, label: 'Square Feet' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={item.label}
                      className="text-center"
                      whileHover={{ y: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="flex justify-center mb-2">
                        <Icon className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="text-2xl mb-1">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mb-8">
                <h2 className="text-2xl mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This stunning property offers an exceptional living experience with modern design and premium finishes throughout. 
                  Located in one of the most desirable neighborhoods, this home combines luxury, comfort, and convenience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The spacious floor plan features high ceilings, abundant natural light, and top-of-the-line appliances. 
                  The property includes a beautifully landscaped outdoor space perfect for entertaining, along with premium 
                  amenities and finishes that set this home apart.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Hardwood Flooring',
                    'Central Air Conditioning',
                    'Modern Kitchen',
                    'Walk-in Closets',
                    'Private Parking',
                    'Security System',
                    'Smart Home Features',
                    'Energy Efficient',
                  ].map((feature, index) => (
                    <motion.div 
                      key={feature} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-600 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-6 sticky top-24 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl mb-6">Contact Agent</h3>
              
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE1MDA1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sarah Johnson"
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-lg"
                  />
                </motion.div>
                <div>
                  <div className="mb-1">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Senior Broker</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full mb-3 shadow-lg hover:shadow-xl"
                  onClick={() => onNavigate('contact')}
                >
                  Schedule Viewing
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button variant="outline" className="w-full mb-6 shadow-md hover:shadow-lg">
                  Request Info
                </Button>
              </motion.div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                {[
                  { icon: Calendar, label: 'Listed Date', value: 'October 15, 2025' },
                  { icon: Home, label: 'Property Type', value: 'Single Family Home' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={item.label}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                      <div>
                        <div className="text-sm">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}