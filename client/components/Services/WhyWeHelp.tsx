import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import enjoy from '../public/working.jpg'
import person1 from '../public/pesonInjoying1.jpg'
import person2 from '../public/enjoying2.jpg'
import person3 from '../public/enjoy3.jpg'

const MoreAboutSupport = () => {
  return (
    <section className="mt-8 bg-cyan-600 py-16 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold" data-aos="fade-down">
            Our Impact: Empowering Former Refugees
          </h2>
          <p className="mt-4 text-lg" data-aos="fade-up">
            Discover how we are making a difference in the lives of former
            refugees by providing job opportunities, training, and support for a
            better future.
          </p>
        </div>

        {/* Section with Images and Text */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div data-aos="fade-right">
            <img
              src={enjoy} // Replace with actual image URL
              alt="Empowering Refugees"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left" className="flex flex-col justify-center">
            <h3 className="mb-4 text-3xl font-semibold">
              Building a Brighter Future
            </h3>
            <p className="text-lg">
              Through our tailored job training programs, we help former
              refugees develop the skills needed to thrive in their new
              communities. Our initiatives have successfully placed over 90% of
              participants in meaningful employment, contributing to both their
              personal growth and the economic vitality of their host countries.
            </p>
          </div>
        </div>

        {/* Chart Section */}

        {/* Success Stories Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-3xl font-semibold">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div
              className="rounded-lg bg-white p-6 shadow-lg"
              data-aos="fade-up"
            >
              <img
                src={person1} // Replace with actual image URL
                alt="Success Story 1"
                className="mb-4 h-32 w-full rounded-lg object-cover"
              />
              <h4 className="mb-2 text-xl font-semibold">A New Beginning</h4>
              <p>
                &quot;After joining the program, I found a job that not only
                supports my family but also helps me grow professionally.&quot;
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg"
              data-aos="fade-up"
            >
              <img
                src={person3} // Replace with actual image URL
                alt="Success Story 2"
                className="mb-4 h-32 w-full rounded-lg object-cover"
              />
              <h4 className="mb-2 text-xl font-semibold">A Path to Success</h4>
              <p>
                &quot;The skills I gained through the training program allowed
                me to secure a fulfilling career and integrate into my new
                community.&quot;
              </p>
            </div>
            <div
              className="rounded-lg bg-white p-6 shadow-lg"
              data-aos="fade-up"
            >
              <img
                src={person2} // Replace with actual image URL
                alt="Success Story 3"
                className="mb-4 h-32 w-full rounded-lg object-cover"
              />
              <h4 className="mb-2 text-xl font-semibold">
                From Refugee to Leader
              </h4>
              <p>
                &quot;Thanks to the support and mentorship, I now lead a team
                and am involved in community outreach.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statistics Section */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div
            className="rounded-lg bg-white p-6 text-center shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="mb-2 text-2xl font-bold">500+</h3>
            <p>Job Placements</p>
          </div>
          <div
            className="rounded-lg bg-white p-6 text-center shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="mb-2 text-2xl font-bold">80%</h3>
            <p>Increased Employment Rate</p>
          </div>
          <div
            className="rounded-lg bg-white p-6 text-center shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="mb-2 text-2xl font-bold">200+</h3>
            <p>Training Sessions Held</p>
          </div>
          <div
            className="rounded-lg bg-white p-6 text-center shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="mb-2 text-2xl font-bold">100%</h3>
            <p>Support and Mentorship</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link to="/contact">
            <button
              className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700"
              data-aos="fade-up"
            >
              Contact Us to get Involved
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MoreAboutSupport
