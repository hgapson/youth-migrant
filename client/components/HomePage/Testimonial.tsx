import React from 'react'
import backgroundImage from '../public/enjoy3.jpg' // Replace with your image path
import user1 from '../public/pesonInjoying1.jpg'
import user2 from '../public/impact.jpg'
import user3 from '../public/training.jpg'

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-white">
          What Our Clients Say
        </h2>

        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-indigo-800"></div>

        {/* Testimonials Cards */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-lg">
            <img
              src={user1}
              alt="Client 1"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
            />
            <h3 className="mb-2 text-xl font-semibold text-indigo-600">
              Jane Doe
            </h3>
            <p className="text-gray-700">
              “This organization helped me find a job within weeks! The support
              and training were incredible.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-lg">
            <img
              src={user2}
              alt="Client 2"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
            />
            <h3 className="mb-2 text-xl font-semibold text-indigo-600">
              John Smith
            </h3>
            <p className="text-gray-700">
              “I was able to upskill and land a job that matches my experience.
              The team was very supportive.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg bg-white bg-opacity-80 p-6 shadow-lg backdrop-blur-lg">
            <img
              src={user3}
              alt="Client 3"
              className="mx-auto mb-4 h-24 w-24 rounded-full object-cover shadow-lg"
            />
            <h3 className="mb-2 text-xl font-semibold text-indigo-600">
              Emily Johnson
            </h3>
            <p className="text-gray-700">
              “Thanks to their training programs, I transitioned into a new
              career with confidence.”
            </p>
          </div>
        </div>

        {/* Read More Button */}
        <div className="mt-8">
          <a
            href="/testimonials"
            className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-indigo-700"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>
    </section>
  )
}

export default TestimonialsSection
