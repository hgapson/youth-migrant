import React from 'react'
import { MdStore, MdEvent, MdTrendingUp, MdPeople } from 'react-icons/md'

const OrganizationStoriesSection: React.FC = () => {
  const milestones = [
    {
      year: '2005',
      title: 'The Beginning',
      icon: <MdStore className="text-4xl text-red-600" />,
      description:
        'In 2005, a group of passionate individuals came together to address the challenges faced by migrants. The organization was founded with a single office and a big mission to provide support and resources to those in need.',
    },
    {
      year: '2010',
      title: 'First Major Milestone',
      icon: <MdEvent className="text-4xl text-blue-600" />,
      description:
        'By 2010, the organization had grown significantly, launching several successful initiatives and expanding to serve migrants across the country.',
    },
    {
      year: '2015',
      title: 'Rapid Expansion',
      icon: <MdTrendingUp className="text-4xl text-green-600" />,
      description:
        'In 2015, we opened new branches in multiple regions, creating more opportunities for migrants to access essential services. This period marked a time of growth and partnerships with key stakeholders.',
    },
    {
      year: '2020',
      title: 'Community Impact',
      icon: <MdPeople className="text-4xl text-purple-600" />,
      description:
        'By 2020, our organization had touched thousands of lives, with a strong community presence. We continue to build programs that empower migrants and support their integration into society.',
    },
  ]

  return (
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="mb-8 text-4xl font-extrabold text-gray-800">
        Our Story: Age by Age
      </h2>
      <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-700">
        Discover how we evolved from a small group with a vision into a leading
        organization in migrant support. Here is a timeline of our journey and
        achievements over the years.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className={`flex flex-col items-center rounded-lg p-6 shadow-lg ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            }`}
          >
            <div className="mb-4">{milestone.icon}</div>
            <h3 className="mb-2 text-2xl font-semibold text-gray-800">
              {milestone.year}
            </h3>
            <h4 className="mb-2 text-xl font-medium text-gray-600">
              {milestone.title}
            </h4>
            <p className="text-gray-700">{milestone.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OrganizationStoriesSection
