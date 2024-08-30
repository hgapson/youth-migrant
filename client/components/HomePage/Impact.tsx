import React from 'react'
import impact from '../public/impact.jpg'

const FancySection: React.FC = () => {
  return (
    <section className="bg-cyan-600 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-white drop-shadow-lg">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Image Div */}
          <div className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <img
              src={impact}
              alt="Fancy Feature"
              className="h-80 w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 transition-opacity duration-500 hover:opacity-100">
              <span className="text-xl font-bold text-white">
                Click the button for more information
              </span>
            </div>
          </div>

          {/* Text Div */}
          <div className="text-white">
            <p className="mb-6 text-lg">
              We focus on finding lasting solutions for at-risk refugees. We
              believe that everyone benefits when refugees are given a chance to
              use their talents and skills to contribute to their host countries
              and to the world.
            </p>
            <a
              href="https://wrf-wine.vercel.app/"
              className="inline-block rounded bg-white px-6 py-3 font-semibold text-blue-500 shadow-md transition-colors duration-300 hover:bg-gray-100"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FancySection
