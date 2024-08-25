import React from 'react'
import { Link } from 'react-router-dom'
import cover from '../public/about-cover.jpg'
import ambrella from '../public/umbrella.jpg'
import smile1 from '../public/smilling 1.jpg'
import artist from '../public/artist.jpg'
import hard from '../public/hard.jpg'
import how1 from '../public/working-hard.jpg'
import classes from '../public/classes.jpg'
import legal from '../public/legal.jpg'
import sport from '../public/sport.jpg'
import stat from '../public/statistic.jpg'

const WhyWeHelp = () => {
  return (
    <section className="mt-4 px-4 py-14 text-gray-800 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Transparent Cover Image with Title */}
        <div className="relative mb-12">
          <img
            src={cover}
            alt="Cover"
            className="h-64 w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-semibold text-white">
              Why We Help Refugees
            </h1>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Our Mission and Vision
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={ambrella}
              alt="Mission and Vision"
              className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-4 md:w-1/2"
            />
            <p>
              Our mission is to provide lasting solutions for at-risk refugees,
              empowering them to use their talents and skills to contribute to
              their host countries and the world. Our vision is a world where
              every refugee has the opportunity to thrive and reach their full
              potential.
            </p>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img
                src={smile1}
                alt="Success Story 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Sarah, a talented engineer, found a new home and a promising
                career through our programs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={artist}
                alt="Success Story 2"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Rwema, a gifted artist, now shares her art with the world,
                thanks to the support she received.
              </p>
            </div>
          </div>
        </div>

        {/* Challenges Faced by Refugees */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Challenges Faced by Refugees
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={hard}
              alt={'Challenges Faced by Refugees'}
              className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-4 md:w-1/2"
            />
            <p>
              Refugees face numerous challenges, including cultural adaptation,
              language barriers, and finding employment. We aim to address these
              challenges through our comprehensive support programs.
            </p>
          </div>
        </div>

        {/* How We Help */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            How We Help
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img
                src={how1}
                alt="Program 1"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Orientation and integration programs help refugees adapt to
                their new environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={classes}
                alt="Program 2"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Language and vocational training provide essential skills for
                employment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={legal}
                alt="Program 3"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Legal assistance ensures that refugees have the support they
                need to navigate complex legal systems.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={sport}
                alt="Program 4"
                className="mb-4 w-full rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Health and wellness programs promote physical and mental
                well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Our Impact
          </h2>
          <div className="flex flex-col items-center md:flex-row">
            <img
              src={stat}
              alt="Impact Statistics"
              className="mb-4 w-full rounded-lg shadow-lg md:mb-0 md:mr-4 md:w-1/2"
            />
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-500">500+</h3>
                <p>refugees integrated into new communities</p>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-500">300+</h3>
                <p>job placements secured</p>
              </div>
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-blue-500">200+</h3>
                <p>legal cases resolved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Get Involved
          </h2>
          <p>
            There are many ways you can support our cause. Whether through
            volunteering, donations, or advocacy, your involvement makes a
            difference.
          </p>
          <Link to="/get-involved">
            <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
              Get Involved
            </button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p>
            For more information or assistance, please contact us at [email
            address] or fill out the contact form below.
          </p>
          <form className="mx-auto mt-4 max-w-lg">
            <div className="mb-4 flex items-center">
              <label className="w-24 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-24 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4 flex items-center">
              <label className="w-24 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea className="mt-1 block w-full flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">FAQ</h2>
          <p>
            Have questions? Check out our FAQ section for answers to common
            questions about our organization and how we help refugees.
          </p>
          {/* Add FAQ content here */}
        </div>
      </div>
    </section>
  )
}

export default WhyWeHelp
