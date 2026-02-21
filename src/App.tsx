import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { PropertyDetail } from './pages/PropertyDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Property } from './components/PropertyCard';
import { Toaster } from './components/ui/sonner';

// Mock property data
const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    location: 'Beverly Hills, CA',
    price: '$4,850,000',
    beds: 5,
    baths: 4,
    sqft: '4,200 sq ft',
    image: 'https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTY1MjgwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
    featured: true,
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    location: 'Manhattan, NY',
    price: '$6,200,000',
    beds: 3,
    baths: 3,
    sqft: '3,100 sq ft',
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjB2aWV3fGVufDF8fHx8MTc2MTU5ODIwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
    featured: true,
  },
  {
    id: 3,
    title: 'Waterfront Estate',
    location: 'Miami Beach, FL',
    price: '$8,500,000',
    beds: 6,
    baths: 5,
    sqft: '6,800 sq ft',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHBvb2x8ZW58MXx8fHwxNzYxNjg5MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
    featured: true,
  },
  {
    id: 4,
    title: 'Contemporary Condo',
    location: 'San Francisco, CA',
    price: '$3,200/month',
    beds: 2,
    baths: 2,
    sqft: '1,800 sq ft',
    image: 'https://images.unsplash.com/photo-1720247520862-7e4b14176fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjg5MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Rent',
  },
  {
    id: 5,
    title: 'Luxury Apartment',
    location: 'Chicago, IL',
    price: '$2,850,000',
    beds: 3,
    baths: 2,
    sqft: '2,400 sq ft',
    image: 'https://images.unsplash.com/photo-1741764014072-68953e93cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1OTU3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
  },
  {
    id: 6,
    title: 'Garden View Home',
    location: 'Portland, OR',
    price: '$1,950,000',
    beds: 4,
    baths: 3,
    sqft: '3,200 sq ft',
    image: 'https://images.unsplash.com/photo-1712254293792-1013ae15fafd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGdhcmRlbiUyMGJhY2t5YXJkfGVufDF8fHx8MTc2MTY4OTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
  },
  {
    id: 7,
    title: 'Executive Rental',
    location: 'Boston, MA',
    price: '$4,500/month',
    beds: 3,
    baths: 2,
    sqft: '2,200 sq ft',
    image: 'https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MTY1MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Rent',
  },
  {
    id: 8,
    title: 'Suburban Mansion',
    location: 'Austin, TX',
    price: '$3,750,000',
    beds: 5,
    baths: 4,
    sqft: '5,500 sq ft',
    image: 'https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNjQ4MDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
  },
  {
    id: 9,
    title: 'Urban Loft',
    location: 'Seattle, WA',
    price: '$2,400,000',
    beds: 2,
    baths: 2,
    sqft: '1,650 sq ft',
    image: 'https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2MTY3Mzg3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    status: 'For Sale',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);

  const handleNavigate = (page: string, propertyId?: number) => {
    setCurrentPage(page);
    if (propertyId !== undefined) {
      setSelectedPropertyId(propertyId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedProperty = mockProperties.find(p => p.id === selectedPropertyId);

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && (
          <Home onNavigate={handleNavigate} featuredProperties={mockProperties.filter(p => p.featured)} />
        )}
        {currentPage === 'listings' && (
          <Listings properties={mockProperties} onNavigate={handleNavigate} />
        )}
        {currentPage === 'property' && selectedProperty && (
          <PropertyDetail property={selectedProperty} onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}
