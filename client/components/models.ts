import wrd from './public/wrd.jpg'
import volunteering from './public/volunteering.jpg'
import workshop from './public/workshop.jpg'

export interface Fruit {
  id: number
  name: string
  email: string
  phone: string
}

export interface FruitData {
  name: string
  email: string
  phone: string
}
// Define the Job type

export const sections = [
  {
    title: 'Our Work',
    links: [
      { href: '/job-training', label: 'Who we serve' },
      { href: '/placement-services', label: 'Our approach' },
      { href: '/community-events', label: 'Partners' },
      { href: '/cultural-exchange', label: 'Stories' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { href: '/educational-resources', label: 'Mission and vision' },
      { href: '/support-programs', label: 'Contact & FAQs' },
      { href: '/quality-education', label: 'Team' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/medical-services', label: 'News & Media' },
      { href: '/mental-health-support', label: 'Publications' },
      { href: '/quality-education', label: 'Programs' },
    ],
  },
]

// Add more testimonies objects as needed
export const testimonialsData = [
  {
    name: 'John Doe',
    message:
      'This organization has changed my life. Their support has been invaluable.',
  },
  {
    name: 'Jane Smith',
    message:
      'I am so grateful for the assistance I received. They truly care about people.',
  },
  {
    name: 'Samuel Green',
    message:
      'Thanks to their programs, I was able to start a new chapter in my life.',
  },
]

// Add more events objects as needed
export const eventsData = [
  {
    title: 'UPCOMING EVENTS',
    subtitle: "WORLD'S REFUGEE DAY",
    image: wrd,
    description: 'Celebrating World Refugee Day with former refugee 2024.',
    link: '#',
  },
  {
    title: 'UPCOMING EVENTS',
    subtitle: 'VOLUNTEERING',
    image: volunteering,
    description:
      'Honoring our volunteers for their incredible work in our organization.',
    link: '#',
  },
  {
    title: 'UPCOMING EVENTS',
    subtitle: 'WORKSHOP',
    image: workshop,
    description:
      'Giving former refugees opportunity to showcase their traditional cultural treasures.',
    link: '#',
  },
]

// Team
