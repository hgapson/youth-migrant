export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  hoursPerWeek: number
  workDays: string
  description: string
  datePosted: string
  aboutUs: string
  opportunity: string
  requirements: string[]
  benefits: string[]
  expirationDate: string
  workType: 'onsite' | 'hybrid' | 'remote'
}

export const jobList: Job[] = [
  /*{
    id: '1',
    title: 'Software Developer',
    company: 'TechCorp',
    location: 'New York, NY',
    type: 'Full-time',
    hoursPerWeek: 40,
    workDays: 'Monday to Friday',
    description: 'Develop and maintain software applications.',
    datePosted: '2024-07-22',
    aboutUs: 'TechCorp is a leading software development company.',
    opportunity: 'This is a unique opportunity to grow your career.',
    requirements: [
      '3+ years of experience in software development',
      'Proficiency in JavaScript',
    ],
    benefits: ['Health insurance', '401(k)'],
    expirationDate: '2025-08-22',
    workType: 'onsite',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovate Ltd',
    location: 'San Francisco, CA',
    type: 'Full-Time',
    hoursPerWeek: 40,
    workDays: 'Monday to Friday',
    datePosted: '2024-07-15',
    expirationDate: '2025-04-15',
    description:
      'Lead the product development team in delivering high-quality products.',
    aboutUs: 'Innovate Ltd focuses on product innovation...',
    opportunity: 'Manage a diverse team of professionals...',
    requirements: [
      '5+ years in product management',
      'Excellent leadership skills',
    ],
    benefits: ['Stock options', 'Flexible working hours'],
    workType: 'hybrid',
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'DesignPro',
    location: 'Austin, TX',
    type: 'Part-Time',
    hoursPerWeek: 20,
    workDays: 'Monday, Wednesday, Friday',
    datePosted: '2024-06-20',
    expirationDate: '2025-07-12',
    description: 'Create user-centric designs for various applications.',
    aboutUs: 'DesignPro specializes in user experience design...',
    opportunity: 'Work on exciting new projects with a creative team...',
    requirements: ['Experience with wireframing tools', 'Portfolio required'],
    benefits: ['Remote work options', 'Professional development'],
    workType: 'hybrid',
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    company: 'MarketMasters',
    location: 'Seattle, WA',
    type: 'Contract',
    hoursPerWeek: 30,
    workDays: 'Monday to Thursday',
    datePosted: '2024-08-01',
    expirationDate: '2025-20-02',
    description:
      'Develop and execute marketing campaigns to boost brand awareness.',
    aboutUs: 'MarketMasters is a leader in marketing solutions...',
    opportunity: 'Join a dynamic team and drive marketing success...',
    requirements: [
      'Experience in digital marketing',
      'Strong analytical skills',
    ],
    benefits: ['Health benefits', 'Paid leave'],
    workType: 'remote',
  },*/
  // Add more jobs here...
]
