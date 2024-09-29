"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Destination } from "../Data";
import { useRouter } from "next/navigation";

type DestinationCardProps = {
  destination: Destination;
};

const Card: React.FC<DestinationCardProps> = ({ destination }) => {
  const router = useRouter();

  return (
    <div 
      className="relative w-64 h-80 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => router.push(`/DestinationData/${destination.id}`)}
    >
      <Image
        src={destination.image}
        alt={destination.name}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded-md">
        <span className="text-sm font-semibold">{destination.name}</span>
        <span className="ml-1">↗</span>
      </div>
    </div>
  );
};

type DestinationCarouselProps = {
  destinations: Destination[];
};

const DestinationCarousel: React.FC<DestinationCarouselProps> = ({
  destinations,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (destinations.length - 3));
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + destinations.length - 3) % (destinations.length - 3)
    );
  };

  return (
    <div className="container mx-auto px-4">
      <h2
        className="text-4xl font-bold leading-[63.98px] text-left text-[#004643] mb-4 font-playfair ml-20"
        style={{ fontFamily: "Playfair Display" }}
      >
        Top Destinations in Sri Lanka
      </h2>

      <div className="relative">
        <div className="flex space-x-[4%] justify-center">
          {destinations
            .slice(startIndex, startIndex + 4)
            .map((destination, index) => (
              <Card key={destination.id} destination={destination} />
            ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeftIcon size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRightIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default DestinationCarousel;