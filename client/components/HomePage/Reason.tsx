//import React from 'react'
import { Link } from 'react-router-dom'
import { FaTint, FaUsers } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Reason = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-white ">
        <div className="grid gap-8 md:grid-cols-3">
          {/* First Card */}
          <div className="rounded-lg p-6">
            <h2 className="mb-4 text-4xl font-semibold text-white">
              Why refugees
            </h2>
            <p className="text-white">
              We focus on finding lasting solutions for at-risk refugees. We
              believe that everyone benefits when refugees are given a chance to
              use their talents and skills to contribute to their host countries
              and to the world.
            </p>
            <Link to="/why-we-help">
              <div className="mt-4 flex justify-center">
                <button className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
                  Learn More
                </button>
              </div>
            </Link>
          </div>

          {/* Second Card */}
          <div className="flex items-center rounded-lg bg-red-700 p-6 shadow-md">
            <div className="relative mr-4 flex w-3/5 items-center justify-center">
              <FaTint
                className="text-9xl text-gray-900 opacity-50"
                style={{ width: '200px', height: '200px' }}
              />
              <h2
                data-aos="fade-up"
                className="absolute text-6xl font-semibold text-white"
              >
                80%
              </h2>
            </div>
            <p data-aos="fade-up" className="w-2/5 text-white">
              of them need orientation in new country and advocacy.
            </p>
          </div>

          {/* Third Card */}
          <div className="flex items-center rounded-lg bg-red-700 p-6 shadow-md">
            <div className="relative mr-4 flex w-3/5 items-center justify-center">
              <FaUsers
                className="text-9xl text-gray-900 opacity-50"
                style={{ width: '200px', height: '200px' }}
              />
              <h2
                data-aos="fade-up"
                className="absolute text-6xl font-semibold text-white"
              >
                92%
              </h2>
            </div>
            <p data-aos="fade-up" className="w-2/5 text-white">
              of refugees need good life and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reason
