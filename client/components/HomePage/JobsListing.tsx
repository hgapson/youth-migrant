import React from 'react'
import { jobListings } from '../JobsPage/Model'

const JobBoardSection: React.FC = () => {
  // Function to sort jobs by date and get the latest three
  const getLatestJobs = (jobs: typeof jobListings, count: number) => {
    return jobs
      .sort(
        (a, b) =>
          new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
      )
      .slice(0, count)
  }

  const latestJobs = getLatestJobs(jobListings, 3)

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
              href="/more-jobs"
              className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white transition duration-300 hover:bg-blue-700"
            >
              View More Jobs
            </a>
          </div>

          {/* Second Div: Job Listings */}
          <div className="flex flex-col lg:w-2/3 lg:flex-row lg:space-x-8">
            {latestJobs.map((job) => (
              <div
                key={job.id}
                className="mb-8 flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl lg:mb-0 lg:w-1/3"
              >
                <div className="mb-4 flex flex-col items-center">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="mb-4 h-20 w-20 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-md font-semibold text-indigo-600">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Posted: {job.datePosted}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Third Div: Contact Us */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-lg text-gray-100">
            Interested in any of these jobs? Contact us today to find out how we
            can help you secure your next opportunity.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-white transition duration-300 hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-blue-200 opacity-50 blur-xl"></div>
    </section>
  )
}

export default JobBoardSection
