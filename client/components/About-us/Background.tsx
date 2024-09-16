// components/BackgroundSection.tsx

import React from 'react'
import backgroundImage from '../public/enjoy3.jpg'

const BackgroundSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-extrabold text-white">ABOUT US</h2>
      </div>

      <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-indigo-100"></div>
    </section>
  )
}

export default BackgroundSection
