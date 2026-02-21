import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl mb-6">About Elite Properties</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            With over 15 years of experience in luxury real estate, we've built our reputation 
            on integrity, expertise, and exceptional client service.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div 
          className="mb-16 rounded-2xl overflow-hidden aspect-[21/9] shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1741764014072-68953e93cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1OTU3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Elite Properties Office"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: '500+', label: 'Properties Sold' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '$500M+', label: 'Total Sales Volume' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <motion.div 
                  className="text-4xl text-blue-600 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Elite Properties was founded with a simple mission: to provide unparalleled service 
              in the luxury real estate market. What started as a small boutique agency has grown 
              into one of the most trusted names in premium property sales and acquisitions.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our success is built on deep market knowledge, innovative marketing strategies, and 
              an unwavering commitment to our clients' goals. We understand that buying or selling 
              a property is more than a transaction—it's a major life decision that deserves 
              expert guidance and personalized attention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we continue to set the standard for excellence in real estate, combining 
              traditional values with modern technology to deliver exceptional results for our clients.
            </p>
          </motion.div>
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.03, rotateZ: 1 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1656646425022-3b4cff0bc8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwb2ZmaWNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNTAwMTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Team"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.h2 
            className="text-3xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service, from first contact to closing day.',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'Honesty and transparency guide every decision we make and every relationship we build.',
              },
              {
                icon: Users,
                title: 'Client Focus',
                description: 'Your goals are our priority, and we\'re dedicated to exceeding your expectations.',
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'We leverage cutting-edge technology and marketing to achieve outstanding results.',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={value.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 shadow-lg"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 5,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <motion.h2 
            className="text-3xl mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Senior Broker & Founder',
                image: 'https://images.unsplash.com/photo-1770199105692-9e52ff137cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcmVhbHRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUwMDE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
              {
                name: 'Michael Chen',
                role: 'Luxury Property Specialist',
                image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcmVhbHRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTUwMDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Senior Sales Agent',
                image: 'https://images.unsplash.com/photo-1750175473842-353543b839db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwaGlzcGFuaWMlMjByZWFsdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxNTAwMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.15 }}
                whileHover={{ y: -15 }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 group">
                  <div className="aspect-square relative overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />
                  </div>
                  <motion.div 
                    className="p-6 text-center bg-white"
                    whileHover={{ backgroundColor: "#f8fafc" }}
                  >
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}