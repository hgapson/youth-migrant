// src/components/Event.tsx

import { Link } from 'react-router-dom'
import { eventsData } from '../models'
import '../About-us/about.scss'

const Event = () => {
  const sortedEvents = eventsData.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
  )

  const latestEvent = sortedEvents.slice(0, 1)

  return (
    <section className="relative  bg-sky-300 px-4 py-12 md:px-8 lg:px-16">
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-4xl font-bold text-black">UPCOMING EVENTS</h2>
        <div>
          {latestEvent.map((event) => (
            <div key={event.id} className="p-4">
              <div className="relative flex flex-col items-center overflow-hidden rounded-lg  shadow-lg transition-transform hover:scale-105">
                <h3 className="mb-6 text-2xl font-semibold">
                  {event.subtitle}
                </h3>
                <div className="relative h-64 w-full">
                  {event.videoUrl ? (
                    <video
                      src={event.videoUrl}
                      autoPlay
                      loop
                      muted
                      className="h-full w-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={event.image}
                      alt={event.subtitle}
                      className="h-full w-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-25 p-4 text-white">
                    <p className="mb-2 text-xl font-semibold">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Button for all events */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/Events"
            className="btn rounded-lg bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Event
