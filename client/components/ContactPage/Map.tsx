import React from 'react'
import mapImage from '../public/map-location.jpg' // Replace with your map image
// import contactImage from '../public/umbrella.jpg' // Replace with your contact image

const MapSection = () => {
  return (
    <section className="mt-16 flex flex-col-reverse items-center justify-between bg-gray-100 p-8 md:flex-row">
      {/* Text Content */}
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 px-20 text-4xl font-bold">Contact Us </h1>
        <p className="mb-6 italic text-gray-700">
          We had love to hear from you. Whether you have questions, feedback, or
          need assistance, feel free to reach out.
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p className="italic text-gray-600">
            46G Boundary Road Claudelands Hamilton 3214
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Working Hours</h3>
          <p className="italic text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
        </div>
      </div>

      {/* Image */}
    </section>
  )
}

export default MapSection
