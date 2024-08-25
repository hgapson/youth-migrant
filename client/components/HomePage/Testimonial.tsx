// src/components/TestimonialsSection.tsx

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaQuoteLeft } from 'react-icons/fa'
import testimonial from '../public/testimonial.jpg'
import { testimonialsData } from '../models'
import '../main.scss'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(Math.floor(Math.random() * testimonialsData.length))
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const { name, message } = testimonialsData[currentTestimonial]

  const handleMoreStoriesClick = () => {
    navigate('/about-us#testimonies')
  }

  return (
    <section className="bg-blue-950 px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold text-white md:w-full">
        Testimonials
      </h2>

      <div className="container mx-auto flex flex-col items-center justify-center md:flex-row">
        {/* Fixed Image */}
        <div className="relative mb-8 h-full w-full md:mb-0 md:w-1/2">
          <div className="parallelogram-container transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={testimonial}
              alt="Testimonial"
              className="parallelogram h-full w-full"
            />
          </div>
        </div>

        {/* Testimonial Message */}
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="testimonial-message relative bg-white p-6 text-gray-700 shadow-lg">
            <FaQuoteLeft className="absolute left-0 top-0 ml-2 mt-2 text-4xl text-gray-300" />
            <p className="mb-4 mt-8 italic ">{message}</p>
            <h3 className="text-lg font-medium">{name}</h3>
            <button
              onClick={handleMoreStoriesClick}
              className="btn mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
            >
              More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
