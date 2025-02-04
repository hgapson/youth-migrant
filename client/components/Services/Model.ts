import training from '../public/training-image.jpg'
import cv from '../public/writting cv.jpg'
import mentorship from '../public/mentorship.jpg'
import support from '../public/supporting.jpg'

export const jobSolutions = {
  whyChoose: [
    {
      title: 'Tailored Job Search',
      description:
        'We customize job searches based on your qualifications and skill set.',
    },
    {
      title: 'Professional Development',
      description:
        'Offering workshops, courses, and one-on-one sessions to boost your employability.',
    },
    {
      title: 'Network of Employers',
      description:
        'Our vast employer network allows us to match you with the right job openings.',
    },
  ],
  solutions: [
    {
      title: 'Skill Training & Development',
      description:
        'Specialized training to improve your skill set and align with the local job market.',
      image: training,
    },
    {
      title: 'Job Matching & Placement',
      description:
        'Connecting you with job opportunities that fit your qualifications.',
      image: cv,
    },
    {
      title: 'Tailored Support',
      description:
        'We personalize our job solutions based on your individual needs.',
      image: support,
    },
    {
      title: 'Cultural Integration',
      description:
        'Helping migrants integrate into the local culture for a smoother transition.',
      image: mentorship,
    },
  ],
  additionalServices: [
    'Resume and CV building',
    'Interview preparation',
    'Workplace culture workshops',
    'Networking opportunities with employers',
  ],
}
