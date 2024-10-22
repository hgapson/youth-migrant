// src/components/About-us/About.tsx

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation } from 'react-router-dom'
import MissionVisionSection from './Vision'
import OrganizationStoriesSection from './History'
import CoreValuesSection from './Values'
import MoreTestimoniesSection from './Testimonies'
import OrganizationAwardsSection from './Awards'
import OurPartnersSection from './Partners'
import OurTeamSection from './Team'

const About = () => {
  const location = useLocation()

  useEffect(() => {
    const handleHashScroll = () => {
      const hash = location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1)) // Remove # to get element ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }) // Smooth scroll to the section
        }
      }
    }

    handleHashScroll()
  }, [location.hash])

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className="main-container bg-cyan-600">
      <div>
        <div className="py-16">
          <MissionVisionSection />
        </div>

        <OrganizationStoriesSection />
        <CoreValuesSection />
        <MoreTestimoniesSection />
        <OrganizationAwardsSection />
        <OurPartnersSection />
        <OurTeamSection />
      </div>
    </main>
  )
}

export default About
