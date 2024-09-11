//import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaBriefcase,
  FaHandshake,
  FaChartLine,
  FaPeopleCarry,
} from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Reason = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 to-cyan-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        {/* Main Title */}
        <h2 className="mb-8 text-4xl font-extrabold" data-aos="fade-down">
          Why We Support Migrants
        </h2>

        {/* Main Content with Cards */}
        <div
          className="mx-auto mb-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          data-aos="fade-up"
        >
          <div className="flex transform flex-col items-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-500 hover:scale-105">
            <FaBriefcase size={48} className="mb-4 text-yellow-500" />
            <h3 className="mb-2 text-xl font-semibold">Career Opportunities</h3>
            <p className="text-center text-base">
              Providing former refugees with access to meaningful employment
              that matches their skills and aspirations.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-500 hover:scale-105">
            <FaHandshake size={48} className="mb-4 text-green-500" />
            <h3 className="mb-2 text-xl font-semibold">Building Connections</h3>
            <p className="text-center text-base">
              Connecting refugees with employers who value diversity and
              inclusion in the workplace.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-500 hover:scale-105">
            <FaChartLine size={48} className="mb-4 text-blue-500" />
            <h3 className="mb-2 text-xl font-semibold">Economic Growth</h3>
            <p className="text-center text-base">
              Supporting refugees as they contribute to the economy and build a
              better future for themselves and their communities.
            </p>
          </div>
          <div className="flex transform flex-col items-center rounded-lg bg-white p-6 text-black shadow-lg transition duration-500 hover:scale-105">
            <FaPeopleCarry size={48} className="mb-4 text-pink-500" />
            <h3 className="mb-2 text-xl font-semibold">Community Support</h3>
            <p className="text-center text-base">
              Empowering refugees through community-driven initiatives and
              mentorship programs.
            </p>
          </div>
        </div>

        {/* Highlighted Facts Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            className="relative flex flex-col items-center rounded-lg bg-cyan-500 p-8 text-black shadow-lg"
            data-aos="fade-right"
          >
            <div className="mb-4 text-blue-600">
              <FaBriefcase size={64} />
            </div>
            <h3 className="mb-4 text-4xl font-bold">70%</h3>
            <p className="text-center text-lg">
              of migrants we support have secured long-term employment within a
              year.
            </p>
          </div>
          <div
            className="relative flex flex-col items-center rounded-lg bg-cyan-500 p-8 text-black shadow-lg"
            data-aos="fade-left"
          >
            <div className="mb-4 text-blue-600">
              <FaHandshake size={64} />
            </div>
            <h3 className="mb-4 text-4xl font-bold">85%</h3>
            <p className="text-center text-lg">
              of employers report high satisfaction with the skills and work
              ethic of the migrants they hire.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Link to="/why-we-help">
            <button
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-colors duration-300 hover:bg-gray-300"
              data-aos="fade-up"
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Reason
