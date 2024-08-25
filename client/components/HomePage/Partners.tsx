import React from 'react'
import { Link } from 'react-router-dom'
import police from '../public/Police.png'
import winz from '../public/winz.png'
import sms from '../public/hms.png'
import '../main.scss'

const cardsData = [
  {
    title: 'National Police',
    image: police,
    description:
      'Brief description of the Police project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Ministry of Social Development',
    image: winz,
    description:
      'Brief description of the Ministry of Social Development project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'HMS Trust',
    image: sms,
    description:
      'Brief description of the Settlement project. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const ImageCardSection = () => {
  return (
    <section className="bg-blue-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        {/* Title and Subtitle */}
        <h2 className="mb-4 text-3xl font-bold text-white">Our Partners</h2>
        <h3 className="mb-6 text-lg italic text-white">
          Thank you for your contribution to former refugee awareness.
        </h3>

        {/* Image Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="card mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg"
              style={{
                width: '300px', // Increased width for larger cards
                backgroundColor: '#f3f4f6', // Gray background color
              }}
            >
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-center text-xl font-medium">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex justify-center space-x-4">
          <Link to="/our-partners">
            <button
              className="btn rounded-lg bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600"
              //onClick={() => (window.location.href = '/readMore')}
            >
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ImageCardSection
