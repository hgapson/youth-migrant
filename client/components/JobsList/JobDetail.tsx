import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa'
import { Job, jobList } from './Models'
import Lottie from 'lottie-react'
import noJobsAnimation from './animation.json' // Add a suitable Lottie animation

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const job = jobList.find((job: Job) => job.id === id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  // If no job is found, show the "No Jobs Available" message
  if (!job) {
    return (
      <div className="mt-12 flex min-h-screen flex-col items-center justify-center text-center">
        <Lottie animationData={noJobsAnimation} className="h-48 w-48" />
        <h3 className="mt-6 animate-pulse text-2xl font-bold text-white">
          No Job Found
        </h3>
        <p className="mt-2 text-lg text-gray-200">
          We currently do not have this job listed. But you can still reach out
          to discuss potential opportunities.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 text-white transition duration-300 hover:bg-indigo-700"
        >
          Contact Us
        </a>
      </div>
    )
  }

  // Check if the job is expired
  const isExpired = new Date() > new Date(job.expirationDate)

  return (
    <div className="mt-4 min-h-screen bg-blue-950 py-12">
      <div className="container mx-auto px-4 text-left">
        <div className="rounded-lg bg-white p-6 text-left shadow-lg">
          <h1 className="mb-2 text-4xl font-bold">{job.title}</h1>
          <h2 className="mb-4 text-2xl text-gray-700">{job.company}</h2>
          <div className="mb-4 items-center justify-between text-gray-600">
            <div className="flex items-center py-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center py-2">
              <FaBriefcase className="mr-2" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center py-2">
              <FaClock className="mr-2" />
              <span>
                {job.hoursPerWeek} hours per week ({job.workDays})
              </span>
            </div>
          </div>
          {!isExpired && (
            <p className="mb-2 text-sm text-gray-500">
              Posted on: {new Date(job.datePosted).toLocaleDateString()}
            </p>
          )}
          {isExpired && (
            <p className="mb-4 text-red-500">This job has expired.</p>
          )}
          <div className="flex space-x-4">
            <button
              onClick={() => {
                if (!isExpired) setIsModalOpen(true)
              }}
              className={`rounded-lg px-4 py-2 transition duration-300 ${
                isExpired
                  ? 'cursor-not-allowed bg-gray-400 text-gray-700'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              disabled={isExpired} // Disable the button if the job is expired
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/vacancies')}
              className="rounded-lg bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600"
            >
              Back to All Vacancies
            </button>
          </div>
          <div className="mt-8 rounded-lg p-6 text-left shadow-lg">
            <h3 className="mb-4 text-xl font-bold">About Us</h3>
            <p className="mb-4 text-gray-700">{job.aboutUs}</p>

            <h3 className="mb-4 text-xl font-bold">Opportunity</h3>
            <p className="mb-4 text-gray-700">{job.opportunity}</p>

            <h3 className="mb-4 text-xl font-bold">
              What You Will Bring to the Role
            </h3>
            <ul className="mb-4 list-inside list-decimal text-gray-700">
              {job.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>

            <h3 className="mb-4 text-xl font-bold">What We Offer</h3>
            <ul className="mb-4 list-inside list-decimal text-gray-700">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
