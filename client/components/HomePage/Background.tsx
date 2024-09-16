import React, { useEffect } from 'react'
import cover from '../public/helping-hand.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../main.scss' // Make sure the path is correct

const Background: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="mt-16  bg-gray-100">
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="flex h-full flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="mb-4 text-5xl font-bold">Get Involved</h1>
          <p className="mb-8 text-lg">
            Join us in making a difference through various opportunities.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Background
