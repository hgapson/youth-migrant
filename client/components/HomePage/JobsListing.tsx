import React from 'react'
import { jobList } from '../JobsList/Models'
import Lottie from 'lottie-react'
import noJobsAnimation from '../JobsList/animation.json' // Ensure this JSON file is present

const JobBoardSection: React.FC = () => {
  const currentDate = new Date()

  // Filter and sort jobs
  const latestJobs = jobList
    .filter((job) => new Date(job.expirationDate) > currentDate) // Filter out expired jobs
    .sort(
      (a, b) =>
        new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
    )
    .slice(0, 3)

  return (
    <section className="relative bg-cyan-600 px-6 py-16 sm:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          {/* First Div: Title, Paragraph, More Jobs Button */}
          <div className="mb-12 lg:mb-0 lg:w-1/3">
            <h2 className="mb-4 text-3xl font-extrabold text-blue-100">
              Job Board
            </h2>
            <p className="mb-8 text-lg text-gray-100">
              Explore the latest job opportunities available for migrants. We
              partner with trusted companies to bring you the best opportunities
              to advance your career.
            </p>
            <a
              href={latestJobs.length > 0 ? '/vacancies' : '#'}
              className={`inline-block rounded-full px-8 py-3 transition duration-300 ${
                latestJobs.length > 0
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'cursor-not-allowed bg-gray-400 text-gray-700'
              }`}
            >
              View More Jobs
            </a>
          </div>

          {/* Second Div: Job Listings or No Jobs Message */}
          <div className="flex flex-col items-center justify-center lg:w-2/3">
            {latestJobs.length > 0 ? (
              <div className="flex w-full flex-col lg:flex-row lg:space-x-8">
                {latestJobs.map((job) => {
                  const expirationDate = new Date(job.expirationDate)
                  const isExpired = expirationDate < currentDate

                  return (
                    <div
                      key={job.id}
                      className="mb-8 flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl lg:mb-0 lg:w-1/3"
                    >
                      <div className="mb-4 flex flex-col items-center">
                        <div className="text-center">
                          <h3 className="text-md font-semibold text-indigo-600">
                            {job.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            Posted:{' '}
                            {new Date(job.datePosted).toLocaleDateString()}
                          </p>
                          <p
                            className={`text-sm ${isExpired ? 'text-red-500' : 'text-green-500'}`}
                          >
                            {isExpired
                              ? 'Expired'
                              : `Expires: ${expirationDate.toLocaleDateString()}`}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center py-12">
                <Lottie animationData={noJobsAnimation} className="h-48 w-48" />
                <h3 className="mt-6 animate-pulse text-2xl font-bold text-white">
                  No Jobs Available Right Now
                </h3>
                <p className="mt-2 text-center text-lg text-gray-200">
                  Check back later or contact us to get updates on avalable
                  openings opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-blue-200 opacity-50 blur-xl"></div>
    </section>
  )
}

export default JobBoardSection
