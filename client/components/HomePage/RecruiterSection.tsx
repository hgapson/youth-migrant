import React from 'react'

const RecruiterSection: React.FC = () => {
  return (
    <section className="bg-cyan-600  py-10 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-100">
          Recruiters, Have Jobs to Offer?
        </h2>
        <p className="mb-6 text-center text-lg">
          Connect with us and provide your details below to help us match
          candidates with your job openings.
        </p>

        <div className="flex justify-center bg-gray-200 py-8">
          <form className="w-full max-w-xl rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-center text-2xl font-semibold">
              Submit Your Job Listings
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 rounded-md border p-2 text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="organization"
                  className="text-sm font-medium text-gray-700"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  className="mt-1 rounded-md border p-2 text-sm"
                  placeholder="Organization"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 rounded-md border p-2 text-sm"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 rounded-md border p-2 text-sm"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-blue-500 py-2 text-sm text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RecruiterSection
