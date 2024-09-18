import React from 'react'
import { milestones } from './Model'

const OrganizationStoriesSection: React.FC = () => {
  return (
    <section className="bg-cyan-600 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-extrabold text-gray-100">
          Our Story
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-200">
          Discover how we evolved from a small group with a vision into a
          leading organization in migrant support. Here is a timeline of our
          journey and achievements over the years.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                className={`flex flex-col items-center rounded-lg p-6 shadow-lg ${
                  isEven ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                <div className="mb-4">
                  <IconComponent
                    className={`text-4xl ${isEven ? 'text-red-600' : 'text-blue-600'}`}
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                  {milestone.year}
                </h3>
                <h4 className="mb-2 text-xl font-medium text-gray-600">
                  {milestone.title}
                </h4>
                <p className="text-gray-700">{milestone.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OrganizationStoriesSection
