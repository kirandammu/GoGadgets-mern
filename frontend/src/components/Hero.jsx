import React, {useState, useEffect} from 'react'
import { images } from '../assets/assets'

const Hero = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval for auto-sliding
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect if images array changes

  return (
    <div className="relative w-full h-28 md:h-96 overflow-hidden">
      {/* Slides container */}
      <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-1 h-1 md:w-3 md:h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`} aria-label={`Go to slide ${index + 1}`}/>
        ))}
      </div>
    </div>
  );
};


export default Hero
