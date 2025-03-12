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
    year: '2010',
    title: 'Foundation',
    description:
      'Our organization was founded with a mission to support migrants.',
    icon: FaFlag,
  },
  {
    year: '2015',
    title: 'Expansion',
    description:
      'We expanded our services to multiple cities and started new programs.',
    icon: FaHandshake,
  },
  {
    year: '2020',
    title: 'Recognition',
    description:
      'Received recognition and awards for our impactful work in the community.',
    icon: FaBuilding,
  },
]

// Testimonies
export const testimonies = [
  {
    name: 'John Doe',
    testimony: `I came to New Zealand after learning English and working seasonal jobs, said Client 1, a refugee from Somalia who grew up in Ethiopia.
When I met Mohamed at the mosque and mentioned I was looking for work, he immediately offered to help me, he recalls.
The very next day, I went to the MYWTSL office where the staff assisted me with my CV and enrolled me in truck driving training, and they even paid for my forklift training, he explained.
I managed to secure a job in Te Puke, but an urgent family matter forced me to leave, so now I am actively knocking on doors to find new opportunities, he added.
Mohamed encouraged me to never give up, and despite being currently unemployed, I remain optimistic thanks to the continuous support from MYWTSL, including help with job applications and mentoring, he stated.`,
  },
  {
    name: 'Jane Smith',
    testimony:
      'Thanks to their guidance and resources, I was able to find a job that perfectly matches my skills.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 4,
  },
  {
    name: 'Michael Johnson',
    testimony:
      'This organization gave me the confidence and tools I needed to succeed in a new country.',
    image: 'https://randomuser.me/api/portraits/men/58.jpg',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    testimony:
      'Their team is dedicated, and I felt truly supported during my journey. I’m forever grateful!',
    image: 'https://randomuser.me/api/portraits/women/60.jpg',
    rating: 4,
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
