import React from 'react'
import { Link } from 'react-router-dom'
import { eventsData } from './Model'

const EventsPage: React.FC = () => {
  return (
    <section className="mt-10 bg-cyan-600  px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto pt-[64px]">
        <h2 className="mb-6 text-center text-3xl font-bold">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold italic">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toDateString()}
                </p>
                <p className="mb-4 text-gray-700">{event.description}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    to={`/events/${event.id}`}
                    className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsPage
