import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa'
import { Job, jobList } from './Model'
import ApplicationModal from './ApplicationModal'

const JobDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const job = jobList.find((job: Job) => job.id === id)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  if (!job) {
    return <p>Job not found</p>
  }

  // Check if the job is expired
  const isExpired = new Date() > new Date(job.expirationDate)

  return (
    <div className="mt-4 min-h-screen bg-blue-950 py-12">
      <div className="container mx-auto px-4 text-left">
        <div className="rounded-lg bg-white p-6 text-left shadow-lg">
          <h1 className="mb-2 text-4xl font-bold">{job.title}</h1>
          <h2 className="mb-4 text-2xl text-gray-700">{job.company}</h2>
          <div className="mb-4  items-center justify-between text-gray-600">
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
              Apply Now
            </button>
            <button
              onClick={() => navigate('/vacancies')}
              className="rounded-lg bg-gray-500 px-4 py-2 text-white transition duration-300 hover:bg-gray-600"
            >
              Back to All Vacancies
            </button>
          </div>
          <div className="mt-8 rounded-lg  p-6 text-left shadow-lg">
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

      {isModalOpen && (
        <ApplicationModal
          jobTitle={job.title}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default JobDetail
