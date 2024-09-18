import React from 'react'
import { GiTrophy } from 'react-icons/gi'

const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-cyan-600 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-800">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <GiTrophy className="mb-4 text-4xl text-yellow-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-yellow-500" />
            <h3 className="mb-2 text-xl font-semibold text-gray-800 group-hover:text-yellow-600">
              Excellence
            </h3>
            <p className="text-gray-700 group-hover:text-gray-900">
              We strive for excellence in everything we do, setting high
              standards and achieving outstanding results.
            </p>
          </div>

          <div className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <GiTrophy className="mb-4 text-4xl text-green-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-green-500" />
            <h3 className="mb-2 text-xl font-semibold text-gray-800 group-hover:text-green-600">
              Integrity
            </h3>
            <p className="text-gray-700 group-hover:text-gray-900">
              We uphold the highest standards of integrity, being honest,
              transparent, and ethical in all our interactions.
            </p>
          </div>

          <div className="group flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <GiTrophy className="mb-4 text-4xl text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-blue-500" />
            <h3 className="mb-2 text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              Empowerment
            </h3>
            <p className="text-gray-700 group-hover:text-gray-900">
              We empower individuals by providing them with the tools,
              resources, and support they need to succeed and grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreValuesSection
