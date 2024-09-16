// components/OrganizationStoriesSection.tsx

import React from 'react'
import { MdStore } from 'react-icons/md'

const OrganizationStoriesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Organization Stories</h2>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center rounded-lg bg-gray-100 p-8 shadow-lg">
          <MdStore className="mr-4 text-4xl text-red-600" />
          <div>
            <h3 className="mb-2 text-xl font-semibold">Our Journey</h3>
            <p>
              From our humble beginnings to becoming a leading organization in
              migrant support, our journey is filled with impactful stories and
              milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrganizationStoriesSection
