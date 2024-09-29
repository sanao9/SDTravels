import Image from 'next/image';
import React from 'react';

interface PackageCardProps {
  imageSrc: string;
  title: string;
  duration: string;
  price: string;
  rating: number;
}

const PackageCard: React.FC<PackageCardProps> = ({
  imageSrc,
  title,
  duration,
  price,
  rating,
}) => {
  return (
    <div className=" rounded-lg shadow-md overflow-hidden">
      <div className="relative h-52 w-full">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <span key={i} className="text-gray-300">★</span>
          ))}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500">{duration}</p>
        <p className="mt-2 font-bold">From: {price}</p>
      </div>
    </div>
  );
};

export default PackageCard;
