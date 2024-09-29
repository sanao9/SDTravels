import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Image
        src="/Rectangle 21.png"
        alt="Blue train crossing a stone bridge in Sri Lanka"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <p className="text-yellow-300 text-xl mb-2">Are You Ready?</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            All Set to Explore Sri Lanka with<br />
            Memorable Tours and Experiences
          </h1>
          <div className="flex flex-wrap gap-4">
            <Link href="/plan-trip" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
              Plan Trip
            </Link>
            <Link href="/contact-us" className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full border-2 border-white transition duration-300 ease-in-out">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}