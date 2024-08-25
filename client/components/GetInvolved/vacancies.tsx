import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa'
import { Job, jobList } from './Model'

const ITEMS_PER_PAGE = 9

const Vacancies: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(jobList.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentJobs = jobList.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="mt-10 min-h-screen bg-blue-950 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          All Vacancies
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentJobs.map((job: Job) => {
            const isExpired = new Date() > new Date(job.expirationDate)

            return (
              <div
                key={job.id}
                className={`rounded-lg bg-white p-6 shadow-lg ${
                  isExpired ? 'border-2 ' : ''
                }`}
              >
                <h2 className="mb-2 text-2xl font-bold">{job.title}</h2>
                <h3 className="mb-4 text-xl text-gray-700">{job.company}</h3>
                <div className="mb-4 text-gray-600">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>
                      {job.hoursPerWeek} hours per week ({job.workDays})
                    </span>
                  </div>
                </div>
                {!isExpired && (
                  <p className="mb-4 text-sm text-gray-500">
                    Posted on: {new Date(job.datePosted).toLocaleDateString()}
                  </p>
                )}
                {isExpired && (
                  <p className="mb-4 text-red-500">This job has expired.</p>
                )}
                <Link
                  to={`/vacancies/${job.id}`}
                  className={`mt-4 block rounded-lg text-center ${
                    isExpired ? 'bg-gray-400' : 'bg-blue-500'
                  } px-4 py-2 text-white transition duration-300 hover:bg-blue-600`}
                  aria-disabled={isExpired}
                >
                  {isExpired ? 'View Details' : 'View Details'}
                </Link>
              </div>
            )
          })}
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="mb-4 flex items-center">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
            >
              Previous
            </button>
            <div className="mx-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 rounded px-3 py-1 ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white'
                      : 'border border-blue-500 bg-white text-blue-500'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vacancies
