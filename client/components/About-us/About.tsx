// src/components/About-us/About.tsx

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BackgroundSection from './Background'
import MissionVisionSection from './Vision'
import OrganizationStoriesSection from './History'
import CoreValuesSection from './Values'
import MoreTestimoniesSection from './Testimonies'
import OrganizationAwardsSection from './Awards'
import OurPartnersSection from './Partners'
import OurTeamSection from './Team'
import ContactFormSection from './Contact'

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
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className="main-container bg-gray-100">
      <div>
        <BackgroundSection />
        <MissionVisionSection />
        <OrganizationStoriesSection />
        <CoreValuesSection />
        <MoreTestimoniesSection />
        <OrganizationAwardsSection />
        <OurPartnersSection />
        <OurTeamSection />
        <ContactFormSection />
      </div>
    </main>
  )
}

export default About
