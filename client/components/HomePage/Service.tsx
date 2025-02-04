import React from 'react'
import training from '../public/training.jpg'
import cv from '../public/cv.jpg'
import { Link } from 'react-router-dom'

const Services: React.FC = () => {
  return (
    <section className="relative bg-cyan-600 px-6 py-16 sm:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-100">
          Our Services
        </h2>
        {/* Decorative Divider */}
        <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-indigo-800"></div>
        {/* Section Summary */}
        <p className="mb-12 text-center text-lg leading-relaxed text-gray-100">
          We are committed to empowering migrants by providing tailored job
          solutions. Our approach ensures they can smoothly integrate into the
          workforce, overcome barriers, and find meaningful employment that
          matches their skills and experience.
        </p>

        {/* Two Solution Divs with Fancy Effects (Horizontal Layout) */}
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 ">
          {/* First Solution */}
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg lg:flex-row lg:items-start">
            {/* Image on the Left */}
            <div className="relative w-full overflow-hidden rounded-lg lg:mr-8 lg:w-1/2">
              <img
                src={training}
                alt="Skill Training"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            {/* Text on the Right */}
            <div className="mt-4 flex flex-col lg:mt-0 lg:w-1/2">
              <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
                Skill Training & Development
              </h3>
              <p className="text-gray-700">
                We offer specialized training programs to help migrants improve
                their skill sets and align them with the demands of the local
                job market.
              </p>
            </div>
          </div>

          {/* Second Solution */}
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg lg:flex-row lg:items-start">
            {/* Image on the Left */}
            <div className="relative w-full overflow-hidden rounded-lg lg:mr-8 lg:w-1/2">
              <img
                src={cv}
                alt="Job Matching"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
            </div>
            {/* Text on the Right */}
            <div className="mt-4 flex flex-col lg:mt-0 lg:w-1/2">
              <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
                Job Matching & Placement
              </h3>
              <p className="text-gray-700">
                We connect migrants with job opportunities that best suit their
                qualifications and help them navigate the recruitment process.
              </p>
            </div>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <Link
            to="/job-solution"
            className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-lg transition-colors duration-300 hover:bg-gray-300"
          >
            Explore More Services
          </Link>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute left-0 top-0 h-48 w-48 -translate-x-16 -translate-y-16 transform rounded-full bg-blue-400 opacity-20 blur-xl"></div>
    </section>
  )
}

export default Services
