import React, { useEffect } from 'react'
import cover from '../public/cover.jpg'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../main.scss' // Make sure the path is correct

const Background: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="main-content flex min-h-screen items-center justify-center ">
      <section className="home section w-full  px-4">
        <div className="container mx-auto ">
          <div className="row flex flex-col-reverse items-center justify-between lg:flex-row">
            <div className="home-info flex-1 p-4 text-center lg:order-1 lg:mr-8 lg:text-left">
              <h3 className="hello text-xl font-bold  lg:text-2xl xl:text-3xl">
                Welcome to{' '}
                <span data-aos="fade-up" className="name ">
                  WRF
                </span>
              </h3>
              <h3 className="my-profession text-lg lg:text-xl xl:text-2xl">
                <span data-aos="fade-up" className="typing">
                  Waikato Refugee Forum
                </span>
              </h3>
              <p
                data-aos="fade-up"
                className="mt-4 font-serif text-sm text-white lg:text-base xl:text-lg"
              >
                Bring together the voice of all refugee communities settled in
                the Waikato Region
              </p>
              <Link
                to="/contact"
                className="btn hire-me mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
              >
                Contact Us
              </Link>
            </div>
            <div
              data-aos="fade-up"
              className="home-image flex flex-1 justify-center p-4 lg:justify-end"
            >
              <img
                src={cover}
                alt="background"
                className="w-full max-w-lg object-cover lg:max-w-xl xl:max-w-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Background
