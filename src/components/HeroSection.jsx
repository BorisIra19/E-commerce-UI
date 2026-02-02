import { useState, useEffect } from 'react'
import blouse from '../assets/blouse.jpg'
import dress from '../assets/dress.jpg'
import skirt from '../assets/skirt.jpg'
import striped from '../assets/striped-shirt.jpg'
import shoes from '../assets/shoes.jpg'

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [blouse, dress, skirt, striped, shoes]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 px-4 md:px-8 lg:px-12 py-12 md:py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 min-h-screen">
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl">
        <div className="mb-6">
          <span className="inline-block bg-yellow-300 text-gray-800 px-4 py-2 rounded-full text-sm font-bold mb-4">YOUR FAVORITE OUTFIT ARE ALL HERE!</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 leading-tight">MEN AND WOMEN CLOTHING</h2>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-black mb-6 leading-tight drop-shadow-sm">UP TO 50% Off</h1>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl">Discover amazing products at great prices with our latest collection of men and women fashion. Premium quality, affordable prices.</p>
        <button className="bg-black text-white px-10 md:px-14 py-4 md:py-5 font-bold rounded-lg hover:bg-gray-800 w-fit transition text-lg md:text-xl shadow-lg">
          SHOP NOW
        </button>
      </div>

      {/* Hero Image - Sliding Photos */}
      <div className="flex-1 flex items-center justify-center w-full lg:flex-shrink-0">
        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
          {/* Yellow Background Shape - Larger and Enhanced */}
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50 rounded-full opacity-90 shadow-2xl"></div>
          
          {/* Image Carousel Container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
            <div className="relative w-full h-full">
              {/* Current Image */}
              <img
                src={images[currentImageIndex]}
                alt="Product showcase"
                className="w-full h-full object-cover rounded-full transition-opacity duration-500"
              />
              
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition text-gray-800 z-10 font-bold text-xl shadow-lg"
              >
                ←
              </button>
              
              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition text-gray-800 z-10 font-bold text-xl shadow-lg"
              >
                →
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}