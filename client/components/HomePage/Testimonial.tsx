import React from 'react'
import { testimonies } from '../About-us/Model'

const TestimonialsSection: React.FC = () => {
  const selectedTestimonies = testimonies.slice(0, 1) // Get the first 2 testimonies

  return (
    <section className="bg-cyan-600 py-4">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-100">
          What Our Clients Say
        </h2>
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-indigo-100"></div>

        {/* Centered Testimonials */}
        <div className="flex justify-center gap-8">
          {selectedTestimonies.map((testimony, index) => (
            <div key={index} className="rounded-lg bg-gray-100 p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-indigo-600">
                {testimony.name}
              </h3>
              <p className="text-gray-700">“{testimony.testimony}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
