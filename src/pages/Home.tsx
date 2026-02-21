import { Search, TrendingUp, Shield, Award, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PropertyCard, Property } from '../components/PropertyCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (page: string, propertyId?: number) => void;
  featuredProperties: Property[];
}

export function Home({ onNavigate, featuredProperties }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTY1MjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <motion.h1 
            className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover Your Dream Property
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Premium real estate solutions with exceptional service and expertise
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 shadow-2xl"
                onClick={() => onNavigate('listings')}
              >
                View Listings
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-gray-900 shadow-2xl"
                onClick={() => onNavigate('contact')}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mb-4">Why Choose Elite Properties</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service backed by years of industry expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Expert Guidance',
                description: 'Over 15 years of experience in luxury real estate market with proven track record',
              },
              {
                icon: Shield,
                title: 'Trusted Service',
                description: 'Transparent processes and dedicated support throughout your property journey',
              },
              {
                icon: TrendingUp,
                title: 'Market Insights',
                description: 'Access to exclusive listings and comprehensive market analysis',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={feature.title}
                  className="text-center p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 shadow-lg"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" 
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <Icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-2xl mb-4">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex justify-between items-end mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-4xl mb-4">Featured Properties</h2>
              <p className="text-xl text-gray-600">
                Handpicked selection of our finest listings
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => onNavigate('listings')}
              className="hidden sm:flex hover:shadow-lg transition-shadow"
            >
              View All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 3).map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <PropertyCard
                  property={property}
                  onClick={() => onNavigate('property', property.id)}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" onClick={() => onNavigate('listings')}>
              View All Properties
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1647197420063-c6cf46a62275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NjE2MjAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="City Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80" />
        </div>

        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss your real estate goals and find the ideal match for your needs
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl"
              onClick={() => onNavigate('contact')}
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}