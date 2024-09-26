import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactUsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    })
  }, [])

  return (
    <section className="relative bg-cyan-600 px-6 py-16 sm:px-12 lg:px-24">
      <div className="relative z-10 mx-auto max-w-3xl rounded-lg bg-white bg-opacity-20 p-10 text-center shadow-lg backdrop-blur-md">
        <h2
          className="mb-6 text-4xl font-extrabold leading-tight text-white"
          data-aos="fade-up"
        >
          Get in Touch with Us
        </h2>
        <p
          className="mb-8 text-lg leading-relaxed text-gray-100"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have any questions or want to learn more about our services? We are
          here to help. Reach out to us and let’s connect.
        </p>

        <Link
          to="/contact"
          className="relative z-10 inline-block rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 hover:bg-indigo-700"
        >
          Contact Us
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 transform rounded-full bg-indigo-200 opacity-50 blur-xl"></div>
    </section>
  )
}

export default ContactUsSection
