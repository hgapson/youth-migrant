// components/OrganizationAwardsSection.tsx

import React from 'react'
import { FaAward } from 'react-icons/fa'

const OrganizationAwardsSection: React.FC = () => {
  return (
    <section className="bg-cyan-600 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">Organization Awards</h2>
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-8 shadow-lg">
          <FaAward className="mb-6 text-6xl text-yellow-600" />
          <h3 className="mb-2 text-xl font-semibold">Best Community Support</h3>
          <p>
            We are honored to be recognized for our outstanding community
            support and impact on migrant integration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OrganizationAwardsSection
