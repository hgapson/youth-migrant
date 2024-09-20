import React, { useEffect } from 'react'
import cover from '../public/cover.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../main.scss' // Make sure the path is correct

const Background: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className="mt-16 ">
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      ></section>
    </div>
  )
}

export default Background
