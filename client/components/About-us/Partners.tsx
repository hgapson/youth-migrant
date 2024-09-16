// components/OurPartnersSection.tsx

import React from 'react'
import { FaHandshake } from 'react-icons/fa'

const OurPartnersSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Our Partners</h2>
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <FaHandshake className="mb-6 text-6xl text-blue-600" />
          <h3 className="mb-2 text-xl font-semibold">Partner with Us</h3>
          <p>
            We work with a range of partners to enhance our services and support
            for migrants. Join us in making a difference.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurPartnersSection
