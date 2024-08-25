//import React from 'react'
import { events } from './models'
import backgroundImage from '../public/backgroundImage.jpg' // Update with the correct path

const OurStorySection = () => {
  return (
    <section className="relative bg-gray-100 py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.5 }}
      ></div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
          Our Story
        </h2>
        <div className="relative flex flex-col space-y-8 md:grid md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
          {events.map((event, index) => (
            <div key={index} className="relative flex justify-center">
              <div className="relative w-full max-w-xs rounded-lg bg-white p-6 text-center shadow-lg">
                <div className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white bg-blue-600"></div>
                <h3 className="mb-2 text-xl font-semibold text-blue-600">
                  {event.year}
                </h3>
                <h4 className="mb-2 text-lg font-medium text-gray-800">
                  {event.title}
                </h4>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute inset-0 flex justify-center md:justify-start lg:justify-center">
            <div className="h-full w-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStorySection
