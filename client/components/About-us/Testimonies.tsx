// components/MoreTestimoniesSection.tsx

import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const MoreTestimoniesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 text-center">
      <h2 className="mb-8 text-3xl font-extrabold">More Testimonies</h2>
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center">
            <FaQuoteLeft className="mr-4 text-4xl text-blue-600" />
            <div>
              <p className="mb-2 text-lg font-semibold">John Doe</p>
              <p>
                The support I received from this organization was phenomenal.
                They helped me every step of the way.
              </p>
            </div>
          </div>
          <div className="mb-6 flex items-center">
            <FaQuoteLeft className="mr-4 text-4xl text-blue-600" />
            <div>
              <p className="mb-2 text-lg font-semibold">Jane Smith</p>
              <p>
                Thanks to their guidance and resources, I was able to find a job
                that perfectly matches my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreTestimoniesSection
