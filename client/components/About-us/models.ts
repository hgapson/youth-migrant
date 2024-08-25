import gapson1 from '../public/swas160 gapson-NZ Passport-35x45 mm.jpg'
import gapson2 from '../public/pppp.jpg'
import rock from '../public/the rock.jpg'
import member3 from '../public/member3.jpg'
import member4 from '../public/member4.jpg'
import member5 from '../public/member5.jpg'
import testi1 from '../public/testi1.jpg'
import testi2 from '../public/testi2.jpg'
import testi3 from '../public/testi3.jpeg'

// modelsfor social media links
export interface TeamMember {
  image: string
  name: string
  position: string
  description: string
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

// Team model
export interface TeamData {
  boardMembers: TeamMember[]
  leadershipTeam: TeamMember[]
}
export const teamData: TeamData = {
  boardMembers: [
    {
      image: gapson1,
      name: 'Credu Gapson',
      position: 'Chairman',
      description:
        'John has over 20 years of experience in leadership and governance.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: gapson2,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: rock,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
  ],
  leadershipTeam: [
    {
      image: member3,
      name: 'Alice Johnson',
      position: 'Executive Director',
      description:
        'Alice leads the team with a vision for impactful change and strategic planning.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: member4,
      name: 'Bob Brown',
      position: 'Program Manager',
      description:
        'Bob manages various programs and ensures their successful execution.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
    {
      image: member5,
      name: 'Jane Smith',
      position: 'Treasurer',
      description:
        'Jane is an expert in financial management with a background in nonprofit organizations.',
      social: {
        facebook: undefined,
        twitter: undefined,
        instagram: undefined,
        linkedin: undefined,
      },
    },
  ],
}

// testimonies models
export const testimonials = [
  {
    image: testi1,
    name: 'John Doe',
    position: 'CEO at Company',
    text: 'This organization has changed my life. The support and guidance I received were beyond my expectations.',
  },
  {
    image: testi2,
    name: 'Jane Smith',
    position: 'Marketing Manager',
    text: 'The team is professional and dedicated. They truly care about making a positive impact.',
  },
  {
    image: testi3,
    name: 'Alice Johnson',
    position: 'Software Engineer',
    text: 'I am grateful for the opportunities this organization has provided me. It has been a life-changing experience.',
  },
]

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

// models for organization history

export const events = [
  {
    year: '2000',
    title: 'Founded',
    description:
      'Our organization was founded with the mission to support refugees.',
  },
  {
    year: '2005',
    title: 'First Program Launched',
    description:
      'We launched our first integration program to help refugees settle into their new communities.',
  },
  {
    year: '2010',
    title: 'Expansion',
    description:
      'We expanded our services to include legal aid and job placement assistance.',
  },
  {
    year: '2015',
    title: 'Recognition',
    description:
      'Our organization received national recognition for our impactful work.',
  },
  {
    year: '2020',
    title: 'Global Outreach',
    description:
      'We expanded our operations to provide support to refugees worldwide.',
  },
  {
    year: '2023',
    title: 'Continued Growth',
    description:
      'Our team continues to grow and innovate in supporting refugee communities.',
  },
]

// values models
export const values = [
  {
    title: 'Compassion',
    description:
      'We believe in acting with empathy and kindness in all our interactions and decisions.',
    icon: '❤️',
  },
  {
    title: 'Integrity',
    description:
      'Our commitment to honesty and transparency guides everything we do.',
    icon: '🔒',
  },
  {
    title: 'Collaboration',
    description:
      'We work together with partners and communities to achieve common goals.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description:
      'We embrace new ideas and approaches to better serve our community.',
    icon: '💡',
  },
]
