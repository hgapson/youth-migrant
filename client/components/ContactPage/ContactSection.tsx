import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import mapImage from '../public/map-location.png' // Replace with your map image

const ContactSection: React.FC = () => {
  return (
    <section className="mt-16 flex flex-col items-start rounded-lg bg-gray-100 p-6 shadow-lg md:flex-row">
      {/* Text Content */}
      <div className="flex-1 md:pr-8">
        {/* Contact Information */}
        <div className="mb-6 space-y-4">
          <a
            href="https://maps.google.com/?q=46G+Boundary+Road,+Claudelands,+Hamilton+3214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 hover:text-blue-600"
          >
            <FaMapMarkerAlt size={30} className="text-blue-500" />
            <p className="text-lg">
              46G Boundary Road, Claudelands, Hamilton 3214
            </p>
          </a>
          <a
            href="tel:+6471234567"
            className="flex items-center space-x-4 hover:text-green-600"
          >
            <FaPhone size={24} className="text-green-500" />
            <p className="text-lg">+64 7 123 4567</p>
          </a>
          <a
            href="mailto:info@example.com"
            className="flex items-center space-x-4 hover:text-red-600"
          >
            <FaEnvelope size={24} className="text-red-500" />
            <p className="text-lg">info@example.com</p>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="mt-6 flex-1 md:mt-0">
        <img
          src={mapImage}
          alt="Map Location"
          className="h-64 w-full rounded-lg object-cover shadow-md"
        />
      </div>
    </section>
  )
}

export default ContactSection
