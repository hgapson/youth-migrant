import React, { useEffect } from 'react'
import { FaBullhorn, FaEye, FaPeopleCarry } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const MissionVisionSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <section className="from-to-cyan-600 bg-gradient-to-br to-gray-300 py-16 text-center">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2
          className="mb-12 text-4xl font-extrabold text-gray-800"
          data-aos="fade-up"
        >
          Our Mission & Vision
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Mission */}
          <div
            className="relative flex flex-col items-center rounded-lg bg-white p-8 text-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
            data-aos="fade-right"
          >
            {/* Icon at the top */}
            <FaBullhorn className="mb-4 text-6xl text-yellow-400" />
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-semibold">Mission</h3>
              <p className="text-base leading-relaxed">
                Our mission is to empower migrants by providing comprehensive
                support and resources to help them integrate and thrive in their
                new communities. Through education, mentorship, and
                opportunities, we ensure their successful transition into
                society.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className="relative flex flex-col items-center rounded-lg bg-white p-8 text-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
            data-aos="fade-left"
          >
            {/* Icon at the top */}
            <FaEye className="mb-4 text-6xl text-pink-400" />
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-semibold">Vision</h3>
              <p className="text-base leading-relaxed">
                We envision a world where every migrant has the opportunity to
                achieve their potential and contribute meaningfully to their new
                society. We strive to create inclusive environments where
                cultural diversity is celebrated.
              </p>
            </div>
          </div>
        </div>

        {/* Centered Approach Section */}
        <div
          className="mx-auto mt-16 flex max-w-md flex-col items-center rounded-lg bg-white p-8 text-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          {/* Icon at the top */}
          <FaPeopleCarry className="mb-4 text-6xl text-teal-400" />
          <div className="text-center">
            <h3 className="mb-3 text-2xl font-semibold">Our Approach</h3>
            <p className="text-base leading-relaxed">
              We use innovative solutions to address the challenges migrants
              face, combining technology, human-centered design, and a network
              of support to ensure sustainable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection
