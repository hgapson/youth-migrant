import React from 'react'
import mapImage from '../public/map-location.jpg' // Replace with your map image
import contactImage from '../public/umbrella.jpg' // Replace with your contact image

const MapSection = () => {
  return (
    <section className="mt-16 flex flex-col-reverse items-center justify-between bg-gray-100 p-8 md:flex-row">
      {/* Text Content */}
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 px-20 text-4xl font-bold">Reach To Us </h1>
        <p className="mb-6 text-gray-700">
          We had love to hear from you. Whether you have questions, feedback, or
          need assistance, feel free to reach out.
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Our Office</h3>
          <p className="text-gray-600">
            46G Boundary Road Claudelands Hamilton 3214
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Working Hours</h3>
          <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600">
            Feel free to contact us via email or phone.
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=46G+Boundary road+Claudelands,+Hamilton"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors duration-300 hover:bg-blue-600"
        >
          View on Map
        </a>
      </div>

      {/* Image */}
      <div className="text-center md:w-1/2">
        <img
          src={contactImage}
          alt="Contact"
          className="mx-auto h-64 w-64 rounded-full border-4 border-blue-500 object-cover"
        />
      </div>
    </section>
  )
}

export default MapSection
