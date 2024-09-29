import React from 'react';
import PackageCard from './PackageCard';

const packages = [
  {
    imageSrc: '/PackageCard/perahera.png',
    title: 'Cultural Heritage Tour',
    duration: '7 Days / 7 Nights',
    price: '$900',
    rating: 5,
  },
  {
    imageSrc: '/PackageCard/beachside.png',
    title: 'Beach Bliss Vacation',
    duration: '7 Days / 7 Nights',
    price: '$850',
    rating: 4,
  },
  {
    imageSrc: '/PackageCard/tiger.png',
    title: 'Wildlife and Nature Adventure',
    duration: '9 Days / 8 Nights',
    price: '$1000',
    rating: 5,
  },
  {
    imageSrc: '/PackageCard/luxury-retreat.png',
    title: 'Luxury Wellness Retreat',
    duration: '6 Days / 5 Nights',
    price: '$1310',
    rating: 4,
  },
  {
    imageSrc: '/PackageCard/mountain.png',
    title: 'Hill Country Exploration',
    duration: '7 Days / 7 Nights',
    price: '$950',
    rating: 5,
  },
  {
    imageSrc: '/PackageCard/god.png',
    title: 'Eastern Coast Adventure',
    duration: '8 Days / 7 Nights',
    price: '$1000',
    rating: 4,
  },
  {
    imageSrc: '/PackageCard/wildlife.png',
    title: 'Northern Sri Lanka Discovery',
    duration: '6 Days / 7 Nights',
    price: '$950',
    rating: 5,
  },
  {
    imageSrc: '/PackageCard/Galle.png',
    title: 'Southern Coastline Tour',
    duration: '6 Days / 5 Nights',
    price: '$900',
    rating: 4,
  },
];

const PackagesGrid: React.FC = () => {
  return (
    <div className="container mx-auto my-12">
      <h2 className="text-5xl font-bold text-[#004643] mb-6" style={{fontFamily:"Playfair Display"}}>Best Package For 2024</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            imageSrc={pkg.imageSrc}
            title={pkg.title}
            duration={pkg.duration}
            price={pkg.price}
            rating={pkg.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default PackagesGrid;
