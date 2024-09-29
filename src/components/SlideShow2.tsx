"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from 'lucide-react'

interface Destination {
  name: string
  image: string
  hasMore: boolean
}

const destinations: Destination[] = [
  { name: 'Sigiriya', image: '/Slideshow2/Rectangle 23.png', hasMore: false },
  { name: 'Galle', image: '/Slideshow2/Rectangle 23 (1).png', hasMore: false },
  { name: 'Kandy', image: '/Slideshow2/Rectangle 23 (2).png', hasMore: true },
  { name: 'Polonnaruwa', image: '/Slideshow2/Rectangle 23 (3).png', hasMore: false },
  { name: 'Pinnawala', image: '/Slideshow2/Rectangle 23 (4).png', hasMore: false },
]

export default function DestinationsSlideshow() {
  const [startIndex, setStartIndex] = useState(0)

  const showPrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const showNext = () => {
    setStartIndex((prevIndex) => Math.min(destinations.length - 5, prevIndex + 1))
  }

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold text-[#004643] mb-4">Explore More Destinations</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-hidden">
          {destinations.slice(startIndex, startIndex + 5).map((destination, index) => (
            <div key={index} className="relative flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2">
                <span className="text-white font-semibold">{destination.name}</span>
                {destination.hasMore && (
                  <PlusIcon className="w-5 h-5 text-white ml-auto" />
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={showPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
          disabled={startIndex === 0}
          aria-label="Previous destinations"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={showNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
          disabled={startIndex >= destinations.length - 5}
          aria-label="Next destinations"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}