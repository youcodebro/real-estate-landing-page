import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  status: 'For Sale' | 'For Rent' | 'Sold';
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        onClick={onClick}
        className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <ImageWithFallback
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge
                className={`${
                  property.status === 'For Sale'
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : property.status === 'For Rent'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-600 hover:bg-gray-700'
                } shadow-lg`}
              >
                {property.status}
              </Badge>
            </motion.div>
            {property.featured && (
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Badge className="bg-amber-500 hover:bg-amber-600 shadow-lg">Featured</Badge>
              </motion.div>
            )}
          </div>
        </div>

        <div className="p-6">
          <motion.div 
            className="mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-blue-600">{property.price}</span>
          </motion.div>
          <h3 className="mb-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            <motion.div 
              className="flex items-center gap-1 text-gray-600"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Bed className="h-4 w-4" />
              <span className="text-sm">{property.beds}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 text-gray-600"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Bath className="h-4 w-4" />
              <span className="text-sm">{property.baths}</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 text-gray-600"
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Maximize className="h-4 w-4" />
              <span className="text-sm">{property.sqft}</span>
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}