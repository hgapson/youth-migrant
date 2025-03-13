// src/models.ts

import { FaFlag, FaHandshake, FaBuilding } from 'react-icons/fa'
import wrf from '../public/image.jpg'
import migration from '../public/migration.png'
import winz from '../public/winz.jpg'
import team1 from '../public/team1.jpg'
import team2 from '../public/team2.jpg'
export interface TeamMember {
  name: string
  position: string
  description: string
  image: string
}

export interface TeamData {
  boardMembers: TeamMember[]
  leadershipTeam: TeamMember[]
}

// Example data
export const teamData: TeamData = {
  boardMembers: [
    {
      name: 'John Doe',
      position: 'Chairman',
      description: 'John has over 20 years of experience in the industry.',
      image: team1,
    },
    {
      name: 'Jane Smith',
      position: 'Vice Chairman',
      description: 'Jane specializes in strategic planning and management.',
      image: team2,
    },
    // Add more board members as needed
  ],
  leadershipTeam: [
    {
      name: 'Emily Johnson',
      position: 'CEO',
      description:
        'Emily is responsible for the overall operations of the company.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Michael Brown',
      position: 'CTO',
      description: 'Michael leads the technology and innovation strategies.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    // Add more leadership team members as needed
  ],
}
export interface Milestone {
  year: string
  title: string
  description: string
}

// Model.ts

export const milestones = [
  {
    year: '2004',
    title: 'Foundation',
    description:
      'Our organization was founded with a mission to support former refugees and migrants to get jobs.',
    icon: FaFlag,
  },
  {
    year: '2015',
    title: 'Expansion',
    description:
      'We expanded our services from two clients to multiple clients and started new programs.',
    icon: FaHandshake,
  },
  {
    year: '2020',
    title: 'Recognition',
    description:
      'Received recognition and awards for our impactful work in the community.',
    icon: FaBuilding,
  },
  {
    year: 'Present',
    title: 'Partnership',
    description:
      'Now we are looking new partners to strength the organization to make impact on many communities.',
    icon: FaBuilding,
  },
]

// Testimonies
export const testimonies = [
  {
    name: 'John Doe',
    testimony: `I came to New Zealand after learning English and working seasonal jobs,
when I met Mohamed at the mosque and mentioned I was looking for work, he immediately offered to help me, he recalls.
The very next day, I went to the Job Link office where the staff assisted me with my CV and enrolled me in truck driving training, and they even paid for my forklift training, he explained.
I managed to secure a job in Te Puke, but an urgent family matter forced me to leave.
Mohamed encouraged me to never give up, and despite being currently unemployed, I remain optimistic thanks to the continuous support from Job Link, including help with job applications and mentoring.`,
  },
  {
    name: 'Jane Smith',
    testimony:
      `I lost my husband while I was on my way to New Zealand, and in Hamilton I felt completely alone.
I never learned to read or write in English, and with my children depending on me, I couldn’t work and was left isolated.
When I heard about Mohamed from someone in the community, I visited his office and he began supporting me with food, rides to the mosque and supermarket, clothes, and moral support.
Now, thanks to his ongoing help, I feel confident enough to learn how to drive and improve my English so I can eventually work to support my family.`,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
  },
  {
    name: 'Michael Johnson',
    testimony:
      `I arrived in New Zealand in February 2023 and am actively seeking part-time work opportunities, my spoken English is excellent because I learned the language before moving here,
Job Link offered me a volunteer role in translation and interpretation, which has helped me build valuable customer service, listening, and relationship-building skills.
They matched my international qualifications to NZQA standards to prepare my CV, and I can always count on immediate help from their employment support person.`,
  },
  {
    name: 'Emma Wilson',
    testimony:
      `Job Link has helped me look for part-time work by advising me on options that fit my schedule as both a student and a primary language assistant for my family.
They've also evaluated my soft skills and offered guidance on my future career interests.
I regularly visit Job Link to discuss my career aspirations and make decisions that will set me on the right path and 
I'm extremely grateful for the support from Job Link’s employment support person, who is always easy to talk to and provides valuable advice.`,
  },
  {
    name: 'Emma Wilson',
    testimony:
      `I'm an elderly lady and a mother of four almost-grown children, thanks to Job Link, my eldest son and daughter have both found work.
Mohamed has been a tremendous help, serving as a role model for my boys and assisting with groceries and driving,
he has also helped us settle in Hamilton and organizes family trips for our community, which means a lot to us.
Without this support, our resettlement experience would have been much more difficult, but now we've found happiness and stability.`,
  },
  {
    name: 'Emma Wilson',
    testimony:
      `Job Link helped me secure a machine operator job, just like I had back home, my English was very basic, but I'm grateful they found me a job where language wasn’t a barrier. I'm happy at work and feel lucky, knowing many young men are still searching for jobs.
My dream was to finishing my Computing Science degree and contributing to New Zealand’s economy.`,
  },
]

// Partners

export const partners = [
  {
    name: 'Partner 1',
    logo: winz,
    website: 'https://www.partner1.com',
  },
  {
    name: 'Partner 2',
    logo: wrf,
    website: 'https://www.partner2.com',
  },
  {
    name: 'Partner 3',
    logo: migration,
    website: 'https://www.workandincome.govt.nz/',
  },
]
