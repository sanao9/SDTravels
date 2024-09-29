import Image from 'next/image';

const galleryImages = [
  { src: '/gallery/Rectangle 15.png', alt: 'Hiking in the jungle' },
  { src: '/gallery/Rectangle 16.png', alt: 'Safari adventure' },
  { src: '/gallery/Rectangle 17.png', alt: 'Nine Arch Bridge' },
  { src: '/gallery/Rectangle 18.png', alt: 'Elephants in the forest' },
  { src: '/gallery/Rectangle 19.png', alt: 'Train in the hills' },
  { src: '/gallery/Rectangle 20.png', alt: 'Sunset by the beach' },
];

const gallery = () => {
  return (
    <section className="my-12">
      <h2 className="text-4xl font-bold text-[#004643] mb-8" style={{ fontFamily: "Playfair Display" }}>
        Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-4">
  {galleryImages.map((image, index) => (
    <div key={index} className="rounded-lg overflow-hidden">
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={300} 
        height={200} 
        layout="responsive" 
        objectFit="cover" 
        className="rounded-lg"
      />
    </div>
  ))}
</div>
    </section>
  );
};

export default gallery;
