// src/components/Event.tsx

import { Link } from 'react-router-dom'
import { settings } from '../About-us/models'
import { eventsData } from '../models'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../About-us/about.scss'

const Event = () => {
  return (
    <section className="relative bg-blue-950 px-4 py-12 md:px-8 lg:px-16">
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-4xl font-bold text-white">UPCOMING EVENTS</h2>
        <Slider {...settings}>
          {eventsData.map((event, index) => (
            <div key={index} className="p-4">
              <div className="flex transform flex-col items-center overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
                <img
                  src={event.image}
                  alt={event.subtitle}
                  className="mb-4 h-48 w-full object-cover"
                />
                <h3 className="mb-2 text-xl font-semibold">{event.subtitle}</h3>
              </div>
            </div>
          ))}
        </Slider>
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
