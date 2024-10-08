import React from 'react'
import { jobSolutions } from './Model'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobSolutionsPage: React.FC = () => {
  return (
    <section className="mt-10 bg-cyan-600 px-6 py-16">
      {/* Job Solutions Overview */}
      <h2 className="mb-8 text-center text-4xl font-extrabold">
        Why Choose Our Solutions
      </h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {jobSolutions.whyChoose.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Job Solutions List */}
      <h2 className="my-12 text-center text-4xl font-extrabold">
        Our Solutions
      </h2>
      <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
        {jobSolutions.solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-transform duration-500 hover:scale-105 lg:flex-row lg:items-start"
          >
            <div className="relative w-full overflow-hidden rounded-lg lg:mr-8 lg:w-1/2">
              <img
                src={solution.image}
                alt={solution.title}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="mt-4 flex flex-col lg:mt-0 lg:w-1/2">
              <h3 className="mb-2 text-2xl font-semibold text-indigo-600">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <h2 className="my-12 text-center text-4xl font-extrabold">
        Additional Services We Offer
      </h2>
      <ul className="flex flex-col items-center text-center">
        {jobSolutions.additionalServices.map((service, index) => (
          <li
            key={index}
            className="mb-4 flex items-center text-lg text-gray-200"
          >
            <FaCheckCircle className="mr-3 text-2xl text-green-200" />{' '}
            {/* Fancy icon added */}
            {service}
          </li>
        ))}
      </ul>
      <div className="mt-12 rounded-lg bg-blue-100 py-10 text-center">
        <p className="mb-6 text-lg text-gray-700">
          Need more information or personalized support? Get in touch with our
          team today.
        </p>
        <Link
          to="/contact"
          className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-indigo-700"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default JobSolutionsPage
