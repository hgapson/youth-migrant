// components/MissionVisionSection.tsx

import React from 'react'
import { FaBullhorn, FaEye } from 'react-icons/fa'

const MissionVisionSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Our Mission & Vision</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
        <div className="flex items-center rounded-lg bg-white p-6 shadow-lg">
          <FaBullhorn className="mr-4 text-4xl text-blue-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Mission</h3>
            <p>
              Our mission is to empower migrants by providing comprehensive
              support and resources to help them integrate and thrive in their
              new communities.
            </p>
          </div>
        </div>
        <div className="flex items-center rounded-lg bg-white p-6 shadow-lg">
          <FaEye className="mr-4 text-4xl text-green-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Vision</h3>
            <p>
              We envision a world where every migrant has the opportunity to
              achieve their potential and contribute meaningfully to their new
              society.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection
