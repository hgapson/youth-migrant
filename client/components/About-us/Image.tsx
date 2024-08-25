//import React from 'react'
import about from '../public/about.jpg'

const BackgroundSection = () => {
  return (
    <section className=" px-4 py-12 text-gray-800 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Transparent Cover Image with Title */}
        <div className="relative mb-8  py-8">
          <img
            src={about}
            alt="Cover"
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-semibold text-white">About Us</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BackgroundSection
