import React, { useState } from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import { teamData, TeamMember } from './Model'

const Team: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    'boardMembers' | 'leadershipTeam'
  >('boardMembers')

  const handleClick = (section: 'boardMembers' | 'leadershipTeam') => {
    setActiveSection(section)
  }

  const generateUsername = (name: string) => {
    return name.toLowerCase().replace(/ /g, '-')
  }

  const getSocialMediaUrls = (name: string) => {
    const username = generateUsername(name)
    return {
      facebook: `https://facebook.com/${username}`,
      twitter: `https://twitter.com/${username}`,
      instagram: `https://instagram.com/${username}`,
      linkedin: `https://linkedin.com/in/${username}`,
    }
  }

  return (
    <section className="bg-cyan-600 px-4 py-12 md:px-8 lg:px-16">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Meet Our Team</h1>
        <div className="mb-6 flex justify-center gap-6">
          <button
            onClick={() => handleClick('leadershipTeam')}
            className={`text-lg font-semibold transition-all duration-300 ${activeSection === 'leadershipTeam' ? 'text-blue-600 underline' : 'text-gray-800'}`}
          >
            Leadership Team
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {teamData[activeSection].map((member: TeamMember, index: number) => {
          const socialUrls = getSocialMediaUrls(member.name)
          return (
            <div
              key={index}
              className="w-full max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative flex items-center justify-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-24 w-24 rounded-full border-4 border-gray-200 object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  {member.name}
                </h2>
                <h3 className="mb-2 text-base font-medium text-gray-600">
                  {member.position}
                </h3>
                <p className="mb-4 text-sm text-gray-700">
                  {member.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Team
