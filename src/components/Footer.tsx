import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Building2 className="h-8 w-8 text-blue-500" />
              </motion.div>
              <span className="text-xl text-white">
                Elite Properties
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in finding exceptional properties. We specialize in luxury homes
              and premium real estate investments.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <motion.button 
                  key={index}
                  className="hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Contact</h3>
            <div className="space-y-3">
              {[
                { icon: Phone, text: '(555) 123-4567' },
                { icon: Mail, text: 'info@eliteproperties.com' },
                { icon: MapPin, text: '123 Luxury Avenue\nNew York, NY 10001' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="whitespace-pre-line">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Careers', 'FAQ'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.button 
                    className="hover:text-blue-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Elite Properties. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}