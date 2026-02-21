import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today and let's discuss how we can help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2 transition-all duration-200 focus:shadow-lg"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="mt-2 transition-all duration-200 focus:shadow-lg"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="mt-2 transition-all duration-200 focus:shadow-lg"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property needs..."
                    rows={6}
                    className="mt-2 transition-all duration-200 focus:shadow-lg"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" size="lg" className="w-full md:w-auto shadow-lg hover:shadow-xl">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '(555) 123-4567',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@eliteproperties.com',
                    },
                    {
                      icon: MapPin,
                      label: 'Address',
                      value: '123 Luxury Avenue\nNew York, NY 10001',
                    },
                    {
                      icon: Clock,
                      label: 'Hours',
                      value: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: By Appointment',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={item.label}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" 
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Icon className="h-5 w-5 text-blue-600" />
                        </motion.div>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                          <div className="whitespace-pre-line">{item.value}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 bg-blue-50 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl mb-3">Schedule a Consultation</h3>
                <p className="text-gray-700 mb-4">
                  Prefer to meet in person? Schedule a free consultation to discuss your real estate goals.
                </p>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button variant="outline" className="w-full shadow-md hover:shadow-lg">
                    Book Appointment
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}