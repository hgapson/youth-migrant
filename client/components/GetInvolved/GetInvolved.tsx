import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBookmark } from 'react-icons/fa'
import { jobList } from './Model'
import helping from '../public/helping.jpg'

const GetInvolved: React.FC = () => {
  // Sort jobs by datePosted (most recent first)
  const sortedJobs = jobList.sort(
    (a, b) =>
      new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime(),
  )

  // Get the three most recent jobs
  const latestJobs = sortedJobs.slice(0, 3)

  return (
    <div className="mt-14 min-h-screen bg-gray-100">
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${helping})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Get Involved</h1>
          <p className="mb-8 text-lg">
            Join us in making a difference through various opportunities.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Volunteering</h2>
          <p className="mb-8 text-lg">
            Become a volunteer and help us achieve our mission. Your time and
            skills can make a huge impact.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-4 text-left md:grid-cols-3">
            {latestJobs.map((job) => (
              <div key={job.id} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <FaRegBookmark className="cursor-pointer text-gray-500 hover:text-gray-700" />
                </div>
                <p className="mb-2 text-gray-600">Location: {job.location}</p>
                <p className="mb-4 text-gray-700">{job.description}</p>
                <p className="mb-4 text-sm text-gray-500">
                  Posted on: {new Date(job.datePosted).toLocaleDateString()}
                </p>
                <Link
                  to={`/vacancies/${job.id}`}
                  className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <Link
            to="/vacancies"
            className="rounded-lg bg-blue-500 px-6 py-3 text-white transition duration-300 hover:bg-blue-600"
          >
            View All Vacancies
          </Link>
        </div>
      </section>

      {/* Other sections remain unchanged */}
      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Awareness and Advocacy</h2>
          <p className="mb-8 text-lg">
            Raise awareness about our cause and advocate for change in your
            community.
          </p>
          <p className="mb-8 text-sm">
            Raise awareness about our cause and advocate for change in your
            community.
          </p>
          <Link to="/contact">
            <button className="rounded-lg bg-green-500 px-6 py-3 text-white transition duration-300 hover:bg-green-600">
              Take Action
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Partnership Opportunities</h2>
          <p className="mb-8 text-lg">
            Partner with us and support our initiatives through corporate or
            community partnerships.
          </p>
          <p className="mb-8 text-sm">
            Partner with us and support our initiatives through corporate or
            community partnerships.
          </p>
          <Link to="/contact">
            <button className="rounded-lg bg-purple-500 px-6 py-3 text-white transition duration-300 hover:bg-purple-600">
              Become a Partner
            </button>
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Informed</h2>
          <p className="mb-8 text-lg">
            Sign up for our newsletter to stay updated on our latest news and
            events.
          </p>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Your email"
              className="mb-4 w-1/2 rounded border p-2"
            />
            <button
              type="submit"
              className="rounded-lg bg-yellow-500 px-6 py-3 text-white transition duration-300 hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default GetInvolved
