import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnnualReportModal from './AnnualReportModal' // Adjust the path as needed
import hms from '../public/hms.png'
import ministry from '../public/ministry of ed.jpg'
import aa from '../public/AA.png'
import ocean from '../public/ocean.jpg'

const partners = [
  {
    name: 'HMS Trust',
    description: 'Description for Partner 1',
    logo: hms,
    website: 'https://www.hmstrust.org.nz/',
  },
  {
    name: 'AA',
    description: 'Description for Partner 2',
    logo: aa,
    website: 'https://www.aa.co.nz/',
  },
  {
    name: 'Migration',
    description: 'Description for Partner 3',
    logo: ministry,
    website: 'https://www.education.govt.nz/',
  },
]

const Partners: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${ocean})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Our Partners</h1>
          <p className="mb-8 text-lg">
            We are proud to collaborate with our amazing partners.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg bg-green-500 px-6 py-3 text-white transition duration-300 hover:bg-green-600"
            >
              Annual Reports
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="mb-2 text-2xl font-bold">{partner.name}</h2>
                  <p className="mb-4 text-gray-700">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="become-a-partner" className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Become a Partner</h2>
          <p className="mb-8 text-lg">
            Join our network of esteemed partners and collaborate with us to
            achieve great things together.
          </p>
          <Link
            to="/Contact"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <AnnualReportModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default Partners
