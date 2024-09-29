"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react'

interface Review {
  name: string
  date: string
  rating: number
  comment: string
  image: string
}

const reviews: Review[] = [
  {
    name: 'John K',
    date: '2023/06/15',
    rating: 4,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate libero et lectus malesuada, nec ullamcorper nunc pulvinar.',
    image: '/review/Ellipse 1.png'
  },
  {
    name: 'Jane Doe',
    date: '2023/06/18',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate libero et lectus malesuada, nec ullamcorper nunc pulvinar.',
    image: '/review/Ellipse 1 (1).png'
  },
  {
    name: 'Saheli',
    date: '2023/06/18',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate libero et lectus malesuada, nec ullamcorper nunc pulvinar.',
    image: '/review/Ellipse 1 (2).png'
  },
  {
    name: 'Kevin',
    date: '2023/06/20',
    rating: 5,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate libero et lectus malesuada, nec ullamcorper nunc pulvinar.',
    image: '/review/Ellipse 1 (3).png'
  },
  // Add more reviews as needed
]

export default function ReviewSlideshow() {
  const [startIndex, setStartIndex] = useState(0)

  const showPrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const showNext = () => {
    setStartIndex((prevIndex) => Math.min(reviews.length - 4, prevIndex + 1))
  }

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Excellent</h2>
        <p className="text-xl font-semibold text-yellow-400">5.1 Google Review</p>
      </div>
      <div className="relative">
        <div className="flex space-x-6 overflow-hidden">
          {reviews.slice(startIndex, startIndex + 4).map((review, index) => (
            <div key={index} className="flex-shrink-0 w-64 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-skyBlue' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
        <button
          onClick={showPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          disabled={startIndex === 0}
          aria-label="Previous reviews"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={showNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          disabled={startIndex >= reviews.length - 4}
          aria-label="Next reviews"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}