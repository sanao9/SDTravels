import React from 'react';
import Image from 'next/image';
import BGImg from '../../public/herobg.jpg'; // Your background image
import { PlayCircle, ArrowLeft, ArrowRight } from 'lucide-react'; // Importing the icons
import Link from 'next/link';
import Form from "@/components/Form";

const SlideShow: React.FC = () => {
  return (
    <div>
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <Image
        src={BGImg}
        alt="herobg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute"
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-white">
        <p className="text-lg md:text-xl">we are waiting for you</p>
        <h1 className="text-4xl md:text-6xl font-bold">Welcome To Sri Lanka</h1>

        <div className="flex flex-col mt-6">
          <Link
            href="/visit-sri-lanka"
            className="group flex items-center text-white text-lg font-medium space-x-4"
          >
            <PlayCircle className="w-8 h-8 group-hover:scale-105 transition-transform duration-300" />
            <span className="group-hover:underline">  Visit Sri Lanka</span>
          </Link>
          {/* Underline animation */}
          <span className="relative block w-[4%] h-0.5 bg-white mt-1 group-hover:w-full transition-all duration-300"></span>
        </div>
      </div>

      {/* Arrows for navigation */}
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button className="bg-teal-700 p-3 rounded-full text-white hover:bg-teal-600">
          <ArrowLeft className="w-5 h-5" /> {/* Left Arrow Icon */}
        </button>
        <button className="bg-teal-700 p-3 rounded-full text-white hover:bg-teal-600">
          <ArrowRight className="w-5 h-5" /> {/* Right Arrow Icon */}
        </button>
        
   
      
      </div>
      
    </div>
    <div className=' z-20 mt-[-15px]'>
    <Form/>
    </div>
    </div>
  );
};

export default SlideShow;
