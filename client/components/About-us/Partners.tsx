import React from 'react'
import { partners } from './Model'
import { FaHandshake } from 'react-icons/fa'

const OurPartnersSection: React.FC = () => {
  return (
    <section className="bg-cyan-600 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Our Partners</h2>

      {/* Icon on top of the paragraph */}
      <div className="mb-8 flex justify-center">
        <FaHandshake className="text-6xl text-yellow-600" />
      </div>

      <div className="mx-auto mb-8 max-w-3xl">
        <p className="text-lg">
          We work with a range of partners to enhance our services and support
          for migrants. Join us in making a difference.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-10">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-300 hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-24 object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default OurPartnersSection
