// src/components/About-us/About.tsx

import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BackgroundSection from './Image'
import Paragraphs from './Paragraphs'
import Testimonies from './Testimonies'
import VisionMissionValues from './Vision'
import Team from './Team'
import Values from './Values'
import OurStorySection from './History'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash === '#testimonies') {
        //  setTimeout to ensure the page has rendered
        setTimeout(() => {
          const element = document.getElementById('testimonies')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100) // Adjust delay as needed
      }

      if (location.hash === '#team') {
        setTimeout(() => {
          const element = document.getElementById('team')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }

      if (location.hash === '#vision') {
        setTimeout(() => {
          const element = document.getElementById('vision')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }

    handleHashScroll()
  }, [location.hash])

  return (
    <main className="main-container bg-gray-100">
      <div className="about-image">
        <BackgroundSection />
      </div>
      <div className="paragraph">
        <Paragraphs />
      </div>
      <div id="vision">
        <VisionMissionValues />
      </div>
      <div className="test">
        <Values />
      </div>

      <div className="story">
        <OurStorySection />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="testimonies">
        <Testimonies />
      </div>

      <div className="getinvolved p-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Get Involved
          </h2>
          <p>
            There are many ways you can support our cause. Whether through
            volunteering, donations, or advocacy, your involvement makes a
            difference.
          </p>
          <Link to="/get-involved">
            <button className="btn mt-4 rounded-lg bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default About
