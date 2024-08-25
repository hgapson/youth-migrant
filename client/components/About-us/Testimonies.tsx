// src/components/Testimonies.tsx

import React from 'react'
import { testimonials, settings } from './models'
import Slider from 'react-slick'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import testi from '../public/testi.jpg'
import './about.scss'

const Testimonies = () => {
  return (
    <section
      className="relative bg-gray-100 px-4 py-12 md:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${testi})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-4xl font-bold text-white">
          What People Are Saying
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="flex transform flex-col items-center overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover"
                />
                <h3 className="mb-2 text-xl font-semibold">
                  {testimonial.name}
                </h3>
                <h4 className="mb-4 text-gray-600">{testimonial.position}</h4>
                <p className="relative italic text-gray-700">
                  <FaQuoteLeft className="absolute -left-6 top-0 text-gray-400" />
                  {testimonial.text}
                  <FaQuoteRight className="absolute -right-4 bottom-0 text-gray-400" />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonies
