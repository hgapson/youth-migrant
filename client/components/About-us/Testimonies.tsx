import React, { useState, useEffect } from 'react'
import { testimonies } from './Model'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'

const MoreTestimoniesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationClass, setAnimationClass] = useState('fade-in') // Add state for animation
  const testimoniesPerSlide = 2
  const totalSlides = Math.ceil(testimonies.length / testimoniesPerSlide)

  const prevTestimony = () => {
    setAnimationClass('fade-out')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
      )
    }, 300) // Matches the duration of the fade-out animation
  }

  const nextTestimony = () => {
    setAnimationClass('fade-in')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
      )
    }, 300) // Matches the duration of the fade-out animation
  }

  useEffect(() => {
    setAnimationClass('fade-in')
  }, [currentIndex])

  const start = currentIndex * testimoniesPerSlide
  const end = start + testimoniesPerSlide
  const currentTestimonies = testimonies.slice(start, end)

  return (
    <section className="bg-cyan-600 py-16 text-center">
      <h2 className="mb-8 text-4xl font-extrabold text-gray-800">
        More Testimonies
      </h2>
      <div className="relative mx-auto max-w-4xl px-6">
        <div
          className={`relative rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 ${animationClass}`}
        >
          {/* Quote Icon Positioned Inside the Card */}
          <FaQuoteLeft className="absolute left-4 top-4 z-0 text-6xl text-blue-600 opacity-10" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-8">
              {currentTestimonies.map((testimony, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-lg bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-lg"
                >
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="mb-4 h-24 w-24 rounded-full border-4 border-blue-600 object-cover"
                  />
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {testimony.name}
                  </h3>
                  <div className="mb-4 flex justify-center">
                    {Array(testimony.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                      ))}
                  </div>
                  <p className="text-gray-700">“{testimony.testimony}”</p>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="mt-4 flex w-full max-w-xs justify-between">
              <button
                onClick={prevTestimony}
                className="text-blue-600 transition-transform duration-300 hover:text-blue-800"
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                onClick={nextTestimony}
                className="text-blue-600 transition-transform duration-300 hover:text-blue-800"
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreTestimoniesSection
