// src/components/types.ts
import youth from '../public/youth.jpg'
import orientation from '../public/orientation.jpg'
import support from '../public/support.jpg'

export interface Program {
  title: string
  description: string
  image: string
  details: string
  additionalInfo: string
}
export const programs = [
  {
    title: 'Youth Trainings',
    description: 'Description for Program 1',
    image: youth,
    details: 'Detailed explanation about Youth Trainings.',
    additionalInfo: 'Additional info about Youth Trainings.',
  },
  {
    title: 'Orientation',
    description: 'Description for Program 2',
    image: orientation,
    details: 'Detailed explanation about Orientation.',
    additionalInfo: 'Additional info about Orientation.',
  },
  {
    title: 'Supporting',
    description: 'Description for Program 3',
    image: support,
    details: 'Detailed explanation about Supporting.',
    additionalInfo: 'Additional info about Supporting.',
  },
]
