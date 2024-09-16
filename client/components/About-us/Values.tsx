// components/CoreValuesSection.tsx

import React from 'react'
import { GiTrophy } from 'react-icons/gi'

const CoreValuesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Our Core Values</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        <div className="flex items-center rounded-lg bg-white p-6 shadow-lg">
          <GiTrophy className="mr-4 text-4xl text-yellow-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
            <p>
              We strive for excellence in everything we do, setting high
              standards and achieving outstanding results.
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-white p-6 shadow-lg">
          <GiTrophy className="mr-4 text-4xl text-green-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
            <p>
              We uphold the highest standards of integrity, being honest,
              transparent, and ethical in all our interactions.
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-white p-6 shadow-lg">
          <GiTrophy className="mr-4 text-4xl text-blue-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Empowerment</h3>
            <p>
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
