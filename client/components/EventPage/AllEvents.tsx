// src/components/EventPage/EventsPage.tsx

import React, { useState } from 'react'
import Modal from '../Our-Partners/Modal'
import RegisterForm from './RegisterForm'

const eventsData = [
  {
    title: 'Youth competition',
    image: 'path_to_image_or_video_1',
    date: '2023-08-01',
    description: 'This is a brief description of Event 1.',
    link: '/event1',
    registerLink: '/register1',
  },
  {
    title: 'World Refugee Day',
    image: 'path_to_image_or_video_2',
    date: '2023-09-15',
    description: 'This is a brief description of Event 2.',
    link: '/event2',
    registerLink: '/register2',
  },
  {
    title: 'WRF Workshop',
    image: 'path_to_image_or_video_1',
    date: '2023-08-01',
    description: 'This is a brief description of Event 1.',
    link: '/event1',
    registerLink: '/register1',
  },

  // Add more events as needed
]

const EventsPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const handleOpenModal = (event: any) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedEvent(null)
  }

  return (
    <section className="mt-10 bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto  pt-[64px]">
        {' '}
        {/* Add padding-top here */}
        <h2 className="mb-6 text-center text-3xl font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
            >
              {event.image.includes('video') ? (
                <video controls className="h-48 w-full object-cover">
                  <source src={event.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="mb-4 text-gray-700">{event.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={event.link}
                    className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                  >
                    Read More
                  </a>
                  <button
                    onClick={() => handleOpenModal(event)}
                    className="rounded bg-green-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-green-600"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal showModal={showModal} handleClose={handleCloseModal}>
        {selectedEvent && <RegisterForm event={selectedEvent} />}
      </Modal>
    </section>
  )
}

export default EventsPage
