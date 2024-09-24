import React, { useEffect } from 'react'
import cover from '../public/cover.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../main.scss'

const Background: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className="mt-16">
      <section
        className="h-48 bg-cover bg-center sm:h-60 md:h-72 lg:h-80"
        style={{ backgroundImage: `url(${cover})` }}
      ></section>
    </div>
  )
}

export default Background
