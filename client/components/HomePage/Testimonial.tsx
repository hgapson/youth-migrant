// components/TestimonialsSection.tsx

import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../public/enjoy3.jpg'
import { testimonies } from '../About-us/Model'
import { FaStar } from 'react-icons/fa'

const TestimonialsSection: React.FC = () => {
  const selectedTestimonies = testimonies.slice(0, 3) // Get the first 3 testimonies

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-white">
          What Our Clients Say
        </h2>

        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-indigo-100"></div>

        {/* Testimonials Cards */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {selectedTestimonies.map((testimony, index) => (
            <div
              key={index}
              className="rounded-lg bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-lg"
            >
              <img
                src={testimony.image}
                alt={testimony.name}
                className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-indigo-600 object-cover"
              />
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">
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

        {/* Read More Button */}
        <div className="mt-8">
          <Link
            to="/testimonials"
            className="relative z-10 inline-block rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700"
          >
            Read More
          </Link>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
    </section>
  )
}

export default TestimonialsSection
